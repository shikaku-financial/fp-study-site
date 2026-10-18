// Fresh VM and DOM per reload; persistent storage survives. Not a real browser.
const vm=require('node:vm'),fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=process.argv[2]?path.resolve(process.argv[2]):path.resolve(__dirname,'..');
class Element{
 constructor(){this.children=[];this.events={};this.value='';this.style={};this.textContent='';this.classList={add(){},remove(){},toggle(){}};}
 append(...x){this.children.push(...x)} appendChild(x){this.append(x);return x} replaceChildren(...x){this.children=x} setAttribute(){} addEventListener(n,f){this.events[n]=f} click(){if(!this.disabled)this.events.click?.({preventDefault(){},target:this})}get options(){return this.children}querySelectorAll(){return []}remove(){}
}
function boot(storage=new Map()){
 const elements=new Map(),fault={key:null},alerts=[],timers=new Set();let tick=0;
 const el=id=>{if(!elements.has(id))elements.set(id,new Element());return elements.get(id)};
 const ctx=vm.createContext({console,Date,Math,Number,JSON,Map,Set,Array,String,Object,Boolean,parseInt,parseFloat,isNaN,document:{getElementById:el,createElement:()=>new Element(),addEventListener(){},hidden:false,querySelectorAll(){return []}},localStorage:{getItem:k=>storage.get(k)??null,setItem:(k,v)=>{if(fault.key===k||fault.key==='*')throw Error('quota');storage.set(k,v)},removeItem:k=>storage.delete(k)},alert:s=>alerts.push(s),confirm:()=>true,setInterval:()=>{timers.add(++tick);return tick},clearInterval:i=>timers.delete(i),setTimeout:()=>1});ctx.window=ctx;ctx.scrollTo=()=>{};
 for(const n of ['questions.js','app.js','practical-questions.js','practical.js'])vm.runInContext(fs.readFileSync(path.join(root,n),'utf8'),ctx,{filename:n});
 return {ctx,el,storage,fault,alerts,timers,run:s=>vm.runInContext(s,ctx)};
}


const flat=e=>[e,...e.children.flatMap(flat)];const b=boot();
const questions=JSON.parse(b.run('JSON.stringify(QUESTIONS)'));
const exam=/^https:\/\/(?:www\.)?(?:jafp\.or\.jp\/exam\/mohan(?:\/|$)|kinzai\.or\.jp\/(?:uploads\/lib\/question\/|ginou\/fp\/test-fp(?:[/?#]|$)))/i;
let themes=0,legacySources=0,kept=0;
for(const q of questions){
 const parent=new Element();b.ctx.testParent=parent;b.ctx.testQuestion=q;b.run('appendQuestionSource(testParent,testQuestion)');
 const nodes=flat(parent),links=nodes.filter(e=>e.href);assert.ok(nodes.some(e=>e.textContent.includes('全問専門家監修は未完了')));
 assert.ok(nodes.some(e=>e.textContent.includes(q.lawReferenceDate||'登録されていません')));
 assert.equal(links.some(e=>exam.test(e.href)),false,q.id);
 assert.equal(nodes.some(e=>e.textContent.includes('出題テーマの参考：')),false,q.id);
 if(q.themeReferenceUrl)themes++;
 if(exam.test(q.sourceUrl||''))legacySources++;
 else if(typeof q.sourceUrl==='string'&&q.sourceUrl.startsWith('https://')){assert.ok(links.some(e=>e.href===q.sourceUrl),q.id);kept++;}
 assert.ok(links.some(e=>e.href==='https://www.kinzai.or.jp/ginou/fp/law.html'));
}
// Saved historical questions can still carry either reference field; test both organizers and both source forms.
for(const url of ['https://www.jafp.or.jp/exam/mohan/files/g3_202505_qa.pdf','https://www.kinzai.or.jp/uploads/lib/question/202505/cbt_fp03_g.pdf','https://www.jafp.or.jp/exam/mohan/','https://www.kinzai.or.jp/ginou/fp/test-fp']){
 b.ctx.testQuestion={themeReferenceUrl:url,sourceUrl:url,lawReferenceDate:'2025-04-01'};b.ctx.testParent=new Element();b.run('appendQuestionSource(testParent,testQuestion)');assert.equal(flat(b.ctx.testParent).some(e=>e.href===url),false);
}
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');assert.equal(/href="https:\/\/www\.(?:jafp\.or\.jp\/exam\/mohan\/"|kinzai\.or\.jp\/ginou\/fp\/test-fp")/.test(html),false);
assert.ok(html.includes('https://www.jafp.or.jp/exam/outline/'));assert.ok(html.includes('https://www.kinzai.or.jp/ginou/fp/law.html'));
console.log(JSON.stringify({result:'PASS',questions:questions.length,themes,legacySources,retainedInstitutionalSources:kept,scope:'360 academic disclosures and historical references, homepage public question links absent; legal sources/date/status retained',limit:'VM/DOM only'}));
