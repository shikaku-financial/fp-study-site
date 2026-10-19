// Fresh VM and DOM per reload; persistent storage survives. Not a real browser.
const vm=require('node:vm'),fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=process.argv[2]?path.resolve(process.argv[2]):path.resolve(__dirname,'..');
class Element{
 constructor(){this.children=[];this.events={};this.value='';this.style={};this.textContent='';this.classList={add(){},remove(){},toggle(){}};}
 append(...x){this.children.push(...x)} appendChild(x){this.append(x);return x} replaceChildren(...x){this.children=x} setAttribute(k,v){this.attrs??={};this.attrs[k]=v} addEventListener(n,f){this.events[n]=f} click(){if(!this.disabled)this.events.click?.({preventDefault(){},target:this})}get options(){return this.children}querySelectorAll(){return []}remove(){}
}
function boot(storage=new Map()){
 const elements=new Map(),fault={key:null},alerts=[],timers=new Set();let tick=0;
 const el=id=>{if(!elements.has(id))elements.set(id,new Element());return elements.get(id)};
 const ctx=vm.createContext({console,Date,Math,Number,JSON,Map,Set,Array,String,Object,Boolean,parseInt,parseFloat,isNaN,document:{getElementById:el,createElement:tag=>{const e=new Element();e.tagName=tag;return e;},addEventListener(){},hidden:false,querySelectorAll(){return []}},localStorage:{getItem:k=>storage.get(k)??null,setItem:(k,v)=>{if(fault.key===k||fault.key==='*')throw Error('quota');storage.set(k,v)},removeItem:k=>storage.delete(k)},alert:s=>alerts.push(s),confirm:()=>true,setInterval:()=>{timers.add(++tick);return tick},clearInterval:i=>timers.delete(i),setTimeout:()=>1});ctx.window=ctx;ctx.scrollTo=()=>{};
 for(const n of ['questions.js','app.js','practical-questions.js','practical-materials.js','practical.js'])vm.runInContext(fs.readFileSync(path.join(root,n),'utf8'),ctx,{filename:n});
 return {ctx,el,storage,fault,alerts,timers,run:s=>vm.runInContext(s,ctx)};
}




const flat=e=>[e,...e.children.flatMap(flat)],pd='fp-training-practical-v12-draft',ph='fp-training-practical-v12-results';















const current=JSON.parse(boot().run('JSON.stringify(PRACTICAL_QUESTIONS)'));
const ids=['pr-jafp2-008','pr-jafp2-009','pr-jafp2-010'];
const qs=ids.map(id=>current.find(q=>q.id===id));
const normalized=q=>({...q,choices:q.choices||[]});
const fields=b=>b.el('prMultiNumeric').children.filter(g=>g.children[0]?.children?.length===3).map(g=>g.children[0]);
const seed=()=>new Map([[pd,JSON.stringify({track:'jafp2',questions:qs,answers:[null,null,null],pos:0})]]);
let b=boot(seed());b.el('prResume').click();
b.el('prNumberInput').value='４２０';b.el('prNumberInput').events.input({target:b.el('prNumberInput')});
b.el('prNext').click();assert.equal(b.el('prChoices').children.length,4);b.el('prChoices').children[1].click();assert.equal(b.el('prChoices').children[1].attrs['aria-pressed'],'true');
b.el('prNext').click();assert.equal(fields(b).length,4);
for(let i=0;i<4;i++)assert.equal(fields(b)[i].children[0].textContent,qs[2].subAnswers[i].label);
fields(b)[0].children[2].click();assert.equal(fields(b)[0].children[2].attrs['aria-pressed'],'true');assert.equal(fields(b)[0].children[2].attrs['aria-label'],qs[2].subAnswers[0].label+'：'+qs[2].subAnswers[0].choices[1]);
b.el('prSaveExit').click();let saved=JSON.parse(b.storage.get(pd));assert.deepEqual(saved.answers,['４２０',1,[1,null,null,null]]);
b=boot(b.storage);b.el('prResume').click();assert.equal(fields(b)[0].children[2].attrs['aria-pressed'],'true');
for(const [i,a]of [[1,1],[2,0],[3,0]])fields(b)[i].children[a+1].click();
b.el('prPrev').click();assert.equal(b.el('prChoices').children[1].attrs['aria-pressed'],'true');b.el('prPrev').click();assert.equal(b.el('prNumberInput').value,'４２０');b.el('prSaveExit').click();
b=boot(b.storage);b.el('prResume').click();b.el('prSubmit').click();
let history=JSON.parse(b.storage.get(ph));assert.equal(history.attempts[0].correct,3);assert.equal(b.storage.has(pd),false);assert.deepEqual(history.attempts[0].answers,['４２０',1,[1,1,0,0]]);
assert.deepEqual(history.attempts[0].questions.map(normalized),qs.map(normalized));
b=boot(b.storage);b.ctx.__fpPracticalTest.openPractical();flat(b.el('prHistoryList')).find(e=>e.textContent==='答え合わせ').click();b.el('prAll').click();
for(const q of qs)assert.ok(flat(b.el('prReviews')).some(e=>e.textContent==='解説：'+q.explanation));
for(const part of qs[2].subAnswers)assert.ok(flat(b.el('prReviews')).some(e=>e.textContent.startsWith(part.label+'：正解')));
b.el('prRetry').click();saved=JSON.parse(b.storage.get(pd));assert.deepEqual(saved.questions.map(normalized),qs.map(normalized));assert.deepEqual(saved.answers,[null,null,[null,null,null,null]]);
// New production start selects current objects rather than fixture snapshots.
b=boot();b.ctx.__fpPracticalTest.openPractical();b.el('prSelectLevel2').click();
const card=flat(b.el('prTracks')).find(e=>e.className==='pr-track'&&e.children.some(c=>c.textContent==='資産設計提案業務'));card.children.find(e=>e.textContent==='この科目を練習する').click();
// New set creation deliberately freezes the strict numeric parser; resumed legacy
// fixtures above retain their absent parser attribute. Assert only this documented delta.
const started=JSON.parse(b.storage.get(pd));assert.equal(started.questions.length,40);for(const q of qs)assert.deepEqual(normalized(started.questions.find(x=>x.id===q.id)),normalized(q.kind==='numeric'?{...q,numericInputFormat:'grouped-decimal-v1'}:q));
const fresh8=started.questions.find(q=>q.id===ids[0]);assert.equal(b.ctx.__fpPracticalTest.grade(fresh8,'４２０'),true);assert.equal(b.ctx.__fpPracticalTest.grade(fresh8,'4,20'),false);
// Failing a result save keeps draft and the pre-existing history intact.
const priorHistory=JSON.stringify(history);const storage=seed();storage.set(ph,priorHistory);b=boot(storage);b.el('prResume').click();const draftBefore=b.storage.get(pd);b.fault.key=ph;b.el('prSubmit').click();assert.equal(b.storage.get(ph),priorHistory);assert.equal(b.storage.get(pd),draftBefore);assert.ok(b.alerts.some(t=>t.includes('保存できません')));
// A draft edited in another tab cannot be overwritten by this tab's numeric answer.
b=boot(seed());b.el('prResume').click();const newer=JSON.stringify({...JSON.parse(b.storage.get(pd)),pos:1,answers:['336',0,null]});b.storage.set(pd,newer);b.el('prNumberInput').value='420';b.el('prNumberInput').events.input({target:b.el('prNumberInput')});assert.equal(b.storage.get(pd),newer);assert.ok(b.alerts.some(t=>t.includes('上書きを止めました')));
console.log('PASS: current3 question UI flow/6 fields;fullwidth numeric,choice and4 binary controls;partial save/fresh VM reload/resume/navigation/grade3of3;history/all explanations/4 field results/retry;fresh40-question production start;history-save failure preservation;stale-tab protection. VM/DOM simulation only.');
