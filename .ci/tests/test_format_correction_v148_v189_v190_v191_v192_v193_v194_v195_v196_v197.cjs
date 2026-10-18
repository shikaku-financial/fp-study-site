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
const fields=b=>b.el('prMultiNumeric').children.filter(g=>g.children[0]?.children?.length===3).map(g=>g.children[0]);
function start(b,pos){b.ctx.__fpPracticalTest.openPractical();b.el('prSelectLevel2').click();const card=flat(b.el('prTracks')).find(e=>e.className==='pr-track'&&e.children.some(c=>c.textContent==='資産設計提案業務'));card.children.find(e=>e.textContent==='この科目を練習する').click();b.el('prNav').children[pos].click();}
let b=boot();start(b,37);assert.equal(b.el('prChoices').children.length,4);b.el('prChoices').children[1].click();b.el('prSaveExit').click();b=boot(b.storage);b.el('prResume').click();assert.equal(JSON.parse(b.storage.get(pd)).answers[37],1);b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,1);
b=boot();start(b,39);assert.equal(fields(b).length,3);fields(b)[0].children[1].click();fields(b)[1].children[1].click();b.el('prSaveExit').click();b=boot(b.storage);b.el('prResume').click();assert.deepEqual(JSON.parse(b.storage.get(pd)).answers[39],[0,0,null]);fields(b)[2].children[2].click();assert.equal(b.el('prAnswered').textContent,'1/40問 回答済');b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,1);b.el('prAll').click();assert.ok(flat(b.el('prReviews')).some(e=>e.textContent.includes('施行済みである。：正解')));
b=boot(b.storage);b.ctx.__fpPracticalTest.openPractical();flat(b.el('prHistoryList')).find(e=>e.textContent==='答え合わせ').click();assert.match(b.el('prSummary').textContent,/40問中1問正解/);b.el('prRetry').click();b.el('prNav').children[39].click();assert.deepEqual(JSON.parse(b.storage.get(pd)).answers[39],[null,null,null]);
const q=JSON.parse(b.storage.get(pd)).questions[39];for(let mask=0;mask<8;mask++){let a=[mask&1,(mask>>1)&1,(mask>>2)&1];assert.equal(b.ctx.__fpPracticalTest.grade(q,a),mask===4);}
// Previously completed V147 numeric-format attempts are immutable even after correcting the current format.
const old=JSON.parse(fs.readFileSync(path.join(root,'development-notes/SUPERSEDED_PRACTICAL_V147_TO_V148.json'),'utf8'));assert.equal(old.length,2);
for(const q of old){const answers=q.subAnswers.map(p=>String(p.answer));b=boot(new Map([[pd,JSON.stringify({track:q.track,questions:[q],answers:[answers],pos:0})]]));b.el('prResume').click();let inputs=flat(b.el('prMultiNumeric')).filter(e=>e.id&&e.id.startsWith('prSubInput'));assert.equal(inputs.length,2);assert.deepEqual(inputs.map(e=>e.value),answers);b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,1);b.el('prRetry').click();assert.equal(JSON.parse(b.storage.get(pd)).questions[0].kind,'multi_numeric');}
console.log(JSON.stringify({result:'PASS',scope:'official-form correction; q38 combination choice; q40 per-field true/false all8 patterns; save/reload/history/retry; both actual V147 numeric snapshots preserved',limit:'VM/DOM only; official partial scoring not implemented'}));
