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


const ah='fp-training-exam-history-v12',det='fp-training-exam-details-v12';
const clone=x=>JSON.parse(JSON.stringify(x));
let b=boot();b.run("createExam('mini');finishExam()");
const summary=JSON.parse(b.storage.get(ah)).attempts[0],detail=JSON.parse(b.storage.get(det)).attempts[0];
b=boot();startPr(b);b.el('prSubmit').click();const practical=JSON.parse(b.storage.get(ph)).attempts[0];
const badAcademic=[null,{},42,{...summary,correct:99},{...summary,total:0},{...summary,level:'9'}];
for(const bad of badAcademic){
 const raw=JSON.stringify({attempts:[bad,summary]});b=boot(new Map([[ah,raw],[det,JSON.stringify({attempts:[null,detail]})]]));
 assert.equal(b.el('examHistoryList').children.length,1);flat(b.el('examHistoryList')).find(e=>e.textContent==='答え合わせを開く').click();assert.match(b.el('examSummary').textContent,/6問中 0問/);assert.equal(b.storage.get(ah),raw);checks++;
}
const badDetails=[d=>d.questions[0]=null,d=>d.questions[0].choices={},d=>d.answers[0]=99,d=>d.questions=[],d=>d.questions[0].explanation={},d=>d.questions[1]=d.questions[0]];
for(const mutate of badDetails){const d=clone(detail);mutate(d);const raw=JSON.stringify({attempts:[d]});b=boot(new Map([[ah,JSON.stringify({attempts:[summary]})],[det,raw]]));assert.equal(flat(b.el('examHistoryList')).some(e=>e.textContent==='答え合わせを開く'),false);b.ctx.testId=d.id;b.run('openSavedExam(testId)');assert.ok(b.alerts.length);assert.equal(b.storage.get(det),raw);checks++;}
// Ambiguous detail identifiers must not pick an arbitrary snapshot.
b=boot(new Map([[ah,JSON.stringify({attempts:[summary]})],[det,JSON.stringify({attempts:[detail,detail]})]]));b.ctx.testId=detail.id;b.run('openSavedExam(testId)');assert.ok(b.alerts.length);checks++;
// A corrupt row must not prevent a new exam from being graded.
b=boot(new Map([[ah,JSON.stringify({attempts:[null]})],[det,JSON.stringify({attempts:[null]})]]));b.run("createExam('mini');finishExam()");assert.equal(JSON.parse(b.storage.get(ah)).attempts.length,2);assert.equal(JSON.parse(b.storage.get(ah)).attempts[1],null);checks++;
const badPractical=[null,{},42,{...practical,questions:[]},{...practical,answers:[]},{...practical,track:'other'},{...practical,questions:[null]}];
for(const bad of badPractical){const raw=JSON.stringify({attempts:[bad,practical]});b=boot(new Map([[ph,raw]]));b.ctx.__fpPracticalTest.openPractical();assert.equal(b.el('prHistoryList').children.length,1);assert.match(b.el('prHistoryValidation').textContent,/1件/);flat(b.el('prHistoryList')).find(e=>e.textContent==='答え合わせ').click();assert.match(b.el('prSummary').textContent,/20問中0問正解/);assert.equal(b.storage.get(ph),raw);checks++;}
// Recompute stale correct counts only in memory, using frozen answers.
const stale={...practical,correct:100};const raw=JSON.stringify({attempts:[stale]});b=boot(new Map([[ph,raw]]));b.ctx.__fpPracticalTest.openPractical();flat(b.el('prHistoryList')).find(e=>e.textContent==='答え合わせ').click();assert.match(b.el('prSummary').textContent,/20問中0問/);assert.equal(b.storage.get(ph),raw);checks++;
// Delete exactly the selected occurrence, preserving corrupt/duplicate-ID neighbours.
for(const fail of [false,true]){
 const rows=[null,practical,{...practical,finishedAt:practical.finishedAt+1},{}];b=boot(new Map([[ph,JSON.stringify({attempts:rows})],[pd,'draft-preserved']]));b.ctx.__fpPracticalTest.openPractical();b.fault.key=fail?ph:null;
 flat(b.el('prHistoryList')).filter(e=>e.textContent==='削除')[1].click();const after=JSON.parse(b.storage.get(ph)).attempts;assert.deepEqual(after,fail?rows:[null,practical,{}]);assert.equal(b.storage.get(pd),'draft-preserved');checks++;
}
// Stale UI after another writer changed the list must refuse deletion.
b=boot(new Map([[ph,JSON.stringify({attempts:[practical]})]]));b.ctx.__fpPracticalTest.openPractical();const changed=JSON.stringify({attempts:[null,practical]});b.storage.set(ph,changed);flat(b.el('prHistoryList')).find(e=>e.textContent==='削除').click();assert.equal(b.storage.get(ph),changed);assert.match(b.el('prHistoryNotice').textContent,/更新/);checks++;
// Explicit clear-all also handles wholly invalid rows; preserve drafts and academic keys.
for(const cancel of [true,false]){b=boot(new Map([[ph,JSON.stringify({attempts:[null,{}]})],[pd,'draft-preserved'],[ah,JSON.stringify({attempts:[summary]})]]));b.ctx.__fpPracticalTest.openPractical();b.ctx.confirm=()=>!cancel;b.el('prClearHistory').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts.length,cancel?2:0);assert.equal(b.storage.get(pd),'draft-preserved');assert.equal(JSON.parse(b.storage.get(ah)).attempts.length,1);checks++;}
for(const key of [ah,det,ph])for(const raw of ['{broken','null','[]','{"attempts":null}']){b=boot(new Map([[key,raw]]));b.ctx.__fpPracticalTest.openPractical();assert.equal(b.storage.get(key),raw);checks++;}
console.log(JSON.stringify({result:'PASS',scenarios:checks,scope:'破損履歴の混在、採点詳細検査、重複ID、1件削除と不正行保持、保存失敗、表示後の更新、全削除とキャンセル、JSON破損。',limit:'VM・DOM・localStorageの模擬試験。'},null,2));
