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
function inputs(b){return flat(b.el('prMultiNumeric')).filter(e=>e.id&&e.id.startsWith('prSubInput'));}
function fill(b,i,text){const input=inputs(b)[i];input.value=text;input.events.input({target:input});}
function start(b){b.ctx.__fpPracticalTest.openPractical();b.el('prSelectLevel2').click();const card=flat(b.el('prTracks')).find(e=>e.className==='pr-track'&&e.children.some(c=>c.textContent==='資産設計提案業務'));card.children.find(e=>e.textContent==='この科目を練習する').click();b.el('prNav').children[4].click();}
let b=boot();start(b);let d=JSON.parse(b.storage.get(pd));assert.equal(d.questions[4].kind,'multi_numeric');assert.deepEqual(d.answers[4],[null,null]);assert.equal(inputs(b).length,2);
fill(b,0,'38.1');assert.equal(b.el('prAnswered').textContent,'0/40問 回答済');fill(b,1,'1,6');assert.ok(flat(b.el('prMultiNumeric')).some(e=>e.textContent.includes('3桁')));fill(b,1,'1.64');
b.el('prSaveExit').click();b=boot(b.storage);b.el('prResume').click();assert.deepEqual(inputs(b).map(e=>e.value),['38.1','1.64']);fill(b,1,'１．６４');assert.equal(b.el('prAnswered').textContent,'1/40問 回答済');b.el('prSubmit').click();
let result=JSON.parse(b.storage.get(ph)).attempts[0];assert.equal(result.correct,1);assert.deepEqual(result.answers[4],['38.1','１．６４']);
b.el('prAll').click();assert.ok(flat(b.el('prReviews')).some(e=>e.textContent==='（ア）配当性向：正解（あなたの回答：38.1 ％／正解：38.1 ％）'));
b=boot(b.storage);b.ctx.__fpPracticalTest.openPractical();flat(b.el('prHistoryList')).find(e=>e.textContent==='答え合わせ').click();assert.match(b.el('prSummary').textContent,/40問中1問正解/);b.el('prRetry').click();b.el('prNav').children[4].click();assert.deepEqual(inputs(b).map(e=>e.value),['','']);fill(b,0,'38.1');fill(b,1,'16');b.el('prSubmit').click();result=JSON.parse(b.storage.get(ph)).attempts[0];assert.equal(result.correct,0);assert.ok(flat(b.el('prReviews')).some(e=>e.textContent.includes('（イ）PBR：不正解')));
// Partially answered item must remain incomplete and prompt before submission.
let partial=boot();start(partial);fill(partial,0,'38.1');let prompt='';partial.ctx.confirm=text=>{prompt=text;return true;};partial.el('prSubmit').click();assert.match(prompt,/未回答が40問/);assert.equal(JSON.parse(partial.storage.get(ph)).attempts[0].correct,0);assert.ok(flat(partial.el('prReviews')).some(e=>e.textContent.includes('（イ）PBR：未回答')));
// Strict shape validation for corrupt multi-answer snapshots preserves raw storage.
const multi=result.questions[4];
for(const changes of [{answers:['38.1']},{parts:[]},{parts:[null,null]},{parts:[{...multi.subAnswers[0],answer:null},multi.subAnswers[1]]}]){
 const q=JSON.parse(JSON.stringify(multi));if(changes.parts)q.subAnswers=changes.parts;
 const raw=JSON.stringify({version:20,attemptId:'pr-corrupt-'+changes.parts?.length,track:'jafp2',questions:[q],answers:[changes.answers||['38.1','1.64']],pos:0});const c=boot(new Map([[pd,raw]]));c.el('prResume').click();assert.equal(c.storage.get(pd),raw);assert.ok(c.alerts.length);
}
// Fault and stale-writer paths operate on the whole answer array without discarding old state.
b=boot();start(b);fill(b,0,'38.1');const before=b.storage.get(pd);b.fault.key=pd;fill(b,1,'1.6');assert.equal(b.storage.get(pd),before);assert.ok(b.alerts.length);b.fault.key=null;b.el('prSaveExit').click();b=boot(b.storage);b.el('prResume').click();assert.deepEqual(inputs(b).map(e=>e.value),['38.1','']);
const external=b.storage.get(pd)+' ';b.storage.set(pd,external);fill(b,0,'39.1');assert.equal(b.storage.get(pd),external);assert.ok(b.alerts.length);
console.log(JSON.stringify({result:'PASS',scope:'two independent numeric inputs; partial/invalid/complete answers; save/reload/history/retry; corrupt arrays; quota/stale writer; current multi-field snapshot; all-or-nothing question score',limit:'VM/DOM only; official weights and partial points not implemented'}));
