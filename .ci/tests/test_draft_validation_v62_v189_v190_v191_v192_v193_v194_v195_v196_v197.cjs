// Fresh VM and DOM per reload; persistent storage survives. Not a real browser.
const vm=require('node:vm'),fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=process.argv[2]?path.resolve(process.argv[2]):path.resolve(__dirname,'..');
class Element{
 constructor(){this.children=[];this.events={};this.value='';this.style={};this.textContent='';this.classes=new Set();this.classList={add:n=>this.classes.add(n),remove:n=>this.classes.delete(n),toggle:(n,on)=>{if(on)this.classes.add(n);else this.classes.delete(n)}};}
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
function startPr(b){b.ctx.__fpPracticalTest.openPractical();flat(b.el('prTracks')).find(e=>e.textContent==='この科目を練習する'&&!e.disabled).click()}
const pd='fp-training-practical-v12-draft',ph='fp-training-practical-v12-results';let checks=0;

const ad='fp-training-exam-draft-v12';
let initial=boot();initial.run("createExam('mini')");const academic=JSON.parse(initial.storage.get(ad));
initial=boot();startPr(initial);const practical=JSON.parse(initial.storage.get(pd));
const clone=x=>JSON.parse(JSON.stringify(x));
const academicBad=[d=>{d.ids=[];d.answers=[];d.snapshots=[]},d=>d.level='9',d=>d.kind='other',d=>d.ids[0]=d.ids[1],d=>d.snapshots[0]=null,d=>d.snapshots[0].choices=null,d=>d.snapshots[0].answer=99,d=>d.answers[0]=99,d=>d.snapshots=null,d=>d.snapshots.pop(),d=>d.deadline='tomorrow',d=>d.snapshots[0].id='other',d=>d.snapshots[0].question={},d=>d.answers.pop(),d=>{delete d.snapshots}];
const practicalBad=[d=>{d.questions=[];d.answers=[]},d=>d.track='other',d=>d.questions[0]=null,d=>d.questions[0].choices=null,d=>d.questions[0].answer=99,d=>d.answers[0]={},d=>d.questions[1]=d.questions[0],d=>d.questions[0].track='other',d=>d.questions[0].kind='other',d=>d.questions[0].question={},d=>d.answers.pop()];
for(const [key,base,cases] of [[ad,academic,academicBad],[pd,practical,practicalBad]]){
 for(const mutate of cases){const d=clone(base);mutate(d);const raw=JSON.stringify(d);const b=boot(new Map([[key,raw]]));
  if(key===ad){b.run('updateHome();resumeExam()');assert.equal(b.run('exam'),null);assert.ok(b.el('resumeExam').classes.has('hidden'));}
  else{b.ctx.__fpPracticalTest.openPractical();b.el('prResume').click();assert.ok(b.el('prResumeBox').classes.has('hidden'));assert.equal(b.el('prQuestion').textContent,'');}
  assert.ok(b.alerts.length);assert.equal(b.storage.get(key),raw);checks++;
 }
 for(const raw of ['{broken','null','[]']){const b=boot(new Map([[key,raw]]));if(key===ad)b.run('resumeExam()');else b.el('prResume').click();assert.ok(b.alerts.length);assert.equal(b.storage.get(key),raw);checks++;}
}
// Missing legacy snapshots supported; damaged present snapshots rejected above.
let d=clone(academic);delete d.flags;d.pos=-1;
let b=boot(new Map([[ad,JSON.stringify(d)]]));b.run('resumeExam()');assert.equal(b.run('exam.pos'),0);assert.equal(b.run('getExamQuestions().length'),6);checks++;
// Frozen old content remains frozen; correct current data is never substituted.
d=clone(academic);d.snapshots[0].question='保存時の旧本文';b=boot(new Map([[ad,JSON.stringify(d)]]));b.run('resumeExam()');assert.equal(b.el('examQuestion').textContent,'保存時の旧本文');checks++;
d=clone(practical);d.questions=d.questions.slice(0,1);d.answers=[null];d.mode='mistakes';d.pos=99;b=boot(new Map([[pd,JSON.stringify(d)]]));b.el('prResume').click();assert.equal(b.el('prProgress').textContent,'1/1問');checks++;
// Numeric input in progress is allowed even before becoming a valid number.
const nq=initial.run("PRACTICAL_QUESTIONS.find(q=>q.kind==='numeric')");
for(const answer of ['－','１２３．４',null,12]){d={track:nq.track,questions:[nq],answers:[answer],pos:0};b=boot(new Map([[pd,JSON.stringify(d)]]));b.el('prResume').click();assert.equal(b.alerts.length,0);assert.equal(b.el('prProgress').textContent,'1/1問');checks++;}
for(const mutation of [q=>q.answer='12',q=>q.tolerance=-1]){const q=clone(nq);mutation(q);d={track:q.track,questions:[q],answers:[null],pos:0};b=boot(new Map([[pd,JSON.stringify(d)]]));b.el('prResume').click();assert.ok(b.alerts.length);checks++;}
console.log(JSON.stringify({result:'PASS',scenarios:checks,scope:'破損・空・型不正・選択範囲外・ID重複と不一致を拒否しデータ保持。保存本文あり旧版・旧本文・1問復習・数値入力途中を再開。',limit:'VM/DOM模擬。端末ブラウザ未検証。'},null,2));
