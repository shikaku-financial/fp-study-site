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



const flat=e=>[e,...e.children.flatMap(flat)];
const pd='fp-training-practical-v12-draft',ph='fp-training-practical-v12-results';
let b=boot(),p=b.ctx.__fpPracticalTest;
const good=[['12',12],['１２',12],['1,234.5',1234.5],['１，２３４．５',1234.5],['-1,234',-1234],['+12',12],['.5',.5],['12.',12],[' 12 ',12],['1,234,567',1234567],['0',0]];
const bad=['1,2','12,34','1,,234',',123','123,','1,234.5,6','1e3','0x10','12万円','NaN','Infinity','', '  ', '--12', '1 234', '1234,567'];
for(const [s,n] of good)assert.equal(p.parseStrictNumber(s),n,s);
for(const s of bad)assert.equal(Number.isNaN(p.parseStrictNumber(s)),true,s);
assert.equal(p.parseNumber('1,2'),12); // Prior behavior frozen for old snapshots.
const all=b.run('PRACTICAL_QUESTIONS');let numeric=0;
for(const q of all){
 if(q.kind!=='numeric')continue;
 const current={...q,numericInputFormat:'grouped-decimal-v1'};
 assert.equal(p.grade(current,String(q.answer)),true,q.id);
 assert.equal(p.grade(current,Number(q.answer).toLocaleString('en-US',{useGrouping:true,maximumFractionDigits:15})),true,q.id);
 assert.equal(p.grade(current,'1,,2'),false,q.id);numeric++;
}
// New production start stamps the parser policy into numeric snapshots only.
p.openPractical();b.el('prSelectLevel2').click();
const tr=b.run("PRACTICAL_TRACKS.find(t=>t.id==='jafp2')");
const card=flat(b.el('prTracks')).find(e=>e.className==='pr-track'&&e.children.some(c=>c.textContent===tr.name));
card.children.find(e=>e.textContent==='この科目を練習する').click();
let draft=JSON.parse(b.storage.get(pd));
assert.equal(draft.version,20);
assert.ok(draft.questions.filter(q=>q.kind==='numeric').every(q=>q.numericInputFormat==='grouped-decimal-v1'));
assert.ok(draft.questions.filter(q=>q.kind==='choice').every(q=>q.numericInputFormat===undefined));
const pos=draft.questions.findIndex(q=>q.kind==='numeric');assert.ok(pos>=0);
b.el('prNav').children[pos].click();
function input(b,s){b.el('prNumberInput').value=s;b.el('prNumberInput').events.input({target:b.el('prNumberInput')});}
input(b,'1,2');assert.match(b.el('prNumberFeedback').textContent,/3桁/);
assert.equal(JSON.parse(b.storage.get(pd)).answers[pos],'1,2');
b=boot(b.storage);b.el('prResume').click();assert.match(b.el('prNumberFeedback').textContent,/3桁/);
input(b,'1,234');assert.equal(b.el('prNumberFeedback').textContent,'');
input(b,'');assert.equal(b.el('prNumberFeedback').textContent,'');
input(b,'1,2');b.el('prSubmit').click();
let result=JSON.parse(b.storage.get(ph)).attempts[0];assert.equal(result.questions[pos].numericInputFormat,'grouped-decimal-v1');
b.el('prRetry').click();assert.equal(JSON.parse(b.storage.get(pd)).questions[pos].numericInputFormat,'grouped-decimal-v1');
// Old saved draft/history/retry preserve legacy grading, including malformed grouping.
const q={...Array.from(all).find(q=>q.kind==='numeric'),answer:12,tolerance:0};delete q.numericInputFormat;
const legacy={track:q.track,mode:'legacy',questions:[q],answers:['1,2'],pos:0,startedAt:Date.now()};
b=boot(new Map([[pd,JSON.stringify(legacy)]]));b.el('prResume').click();assert.equal(b.el('prNumberFeedback').textContent,'');b.el('prSubmit').click();
result=JSON.parse(b.storage.get(ph)).attempts[0];assert.equal(result.correct,1);assert.equal(result.questions[0].numericInputFormat,undefined);
b=boot(b.storage);b.ctx.__fpPracticalTest.openPractical();
flat(b.el('prHistoryList')).find(e=>e.textContent==='結果・解説を見る')?.click();
// Result can be reopened through the actual history button (label is asserted below).
const labels=flat(b.el('prHistoryList')).filter(e=>e.events.click).map(e=>e.textContent);
if(!labels.length)throw Error('history controls missing');
const open=flat(b.el('prHistoryList')).find(e=>e.textContent==='答え合わせ');
assert.ok(open,JSON.stringify(labels));open.click();
assert.match(b.el('prSummary').textContent,/1/);
b.el('prRetry').click();draft=JSON.parse(b.storage.get(pd));assert.equal(draft.questions[0].numericInputFormat,undefined);
input(b,'1,2');b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,1);
console.log(JSON.stringify({result:'PASS',validFormats:good.length,invalidFormats:bad.length,numericQuestions:numeric,scope:'Strict new set; all numeric answers; input feedback; reload; old/new snapshot grading and retry; legacy saved history',limit:'VM/DOM only'}));
