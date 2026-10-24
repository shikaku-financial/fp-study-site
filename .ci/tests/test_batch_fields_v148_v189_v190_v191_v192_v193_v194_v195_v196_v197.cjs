// Insurance draft: current admission benefit is 9; actual old 10 snapshot remains in OLD_INSURANCE.json and the dedicated workflow suite.
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



const flat=e=>[e,...e.children.flatMap(flat)];const pd='fp-training-practical-v12-draft',ph='fp-training-practical-v12-results';
const inputs=b=>flat(b.el('prMultiNumeric')).filter(e=>e.id&&e.id.startsWith('prSubInput'));
function start(b,pos){b.ctx.__fpPracticalTest.openPractical();b.el('prSelectLevel2').click();const card=flat(b.el('prTracks')).find(e=>e.className==='pr-track'&&e.children.some(c=>c.textContent==='資産設計提案業務'));card.children.find(e=>e.textContent==='この科目を練習する').click();b.el('prNav').children[pos].click();}
const cases=[{id:'pr-jafp2-013',pos:12,a:['1,700','２，２００','9']}];let fields=0;
for(const c of cases){
 let b=boot();start(b,c.pos);assert.equal(inputs(b).length,c.a.length);
 for(let i=0;i<c.a.length;i++){const input=inputs(b)[i];input.value=c.a[i];input.events.input({target:input});fields++;}
 assert.equal(b.el('prAnswered').textContent,'1/40問 回答済');b.el('prSaveExit').click();b=boot(b.storage);b.el('prResume').click();assert.deepEqual(inputs(b).map(e=>e.value),c.a);b.el('prSubmit').click();let result=JSON.parse(b.storage.get(ph)).attempts[0];assert.equal(result.correct,1);assert.equal(result.questions[c.pos].id,c.id);b.el('prAll').click();assert.ok(flat(b.el('prReviews')).some(e=>e.textContent.includes('あなたの回答：')));
 b=boot(b.storage);b.ctx.__fpPracticalTest.openPractical();flat(b.el('prHistoryList')).find(e=>e.textContent==='答え合わせ').click();assert.match(b.el('prSummary').textContent,/40問中1問正解/);b.el('prRetry').click();b.el('prNav').children[c.pos].click();assert.deepEqual(inputs(b).map(e=>e.value),c.a.map(()=>''));
 for(let i=0;i<c.a.length;i++){const input=inputs(b)[i];input.value=i===0?'999999':c.a[i];input.events.input({target:input});}
 b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,0);b.el('prRetryMistakes').click();assert.ok(JSON.parse(b.storage.get(pd)).questions.some(q=>q.id===c.id));
}
assert.equal(fields,3);
console.log(JSON.stringify({result:'PASS',questions:1,fields,scope:'independent units; per-field production input; save/reload/history/retry/mistakes; current three-field practice',limit:'VM/DOM only; official partial scoring not implemented'}));
