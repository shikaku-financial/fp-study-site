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



const ad='fp-training-exam-draft-v12',ah='fp-training-exam-history-v12';
// Two isolated script contexts share storage, representing two already-open tabs.
for(const action of ['save','finish','leave','next','flag']){
 const a=boot();a.run("createExam('mini')");const b=boot(a.storage);b.run('resumeExam();exam.answers[0]=1;saveExamDraft()');const raw=a.storage.get(ad);
 a.run("exam.answers[0]=0");if(action==='save')a.run('saveExamDraft()');if(action==='finish')a.run('finishExam()');if(action==='leave')a.run('goHome()');if(action==='next')a.el('examNext').click();if(action==='flag')a.el('examFlag').click();
 assert.equal(a.storage.get(ad),raw,action);assert.equal(a.storage.has(ah),false);assert.ok(a.alerts.length);checks++;
}
for(const finish of [false,true]){
 const a=boot();a.run("createExam('mini')");const b=boot(a.storage);b.run('resumeExam()');if(finish)b.run('finishExam()');else b.storage.delete(ad);
 const history=a.storage.get(ah);a.run('finishExam()');assert.equal(a.storage.has(ad),false);assert.equal(a.storage.get(ah),history);assert.ok(a.alerts.length);checks++;
}
for(const action of ['answer','next','finish','leave','header']){
 const a=boot();startPr(a);const b=boot(a.storage);b.el('prResume').click();b.el('prChoices').children[1].click();const raw=a.storage.get(pd);
 if(action==='answer')a.el('prChoices').children[0].click();if(action==='next')a.el('prNext').click();if(action==='finish')a.el('prSubmit').click();if(action==='leave')a.el('prSaveExit').click();if(action==='header')a.el('siteHomeLink').click();
 assert.equal(a.storage.get(pd),raw);assert.equal(a.storage.has(ph),false);assert.ok(a.alerts.length);checks++;
}
for(const finish of [false,true]){
 const a=boot();startPr(a);const b=boot(a.storage);b.el('prResume').click();if(finish)b.el('prSubmit').click();else b.storage.delete(pd);
 const history=a.storage.get(ph);a.el('prSubmit').click();assert.equal(a.storage.has(pd),false);assert.equal(a.storage.get(ph),history);assert.ok(a.alerts.length);checks++;
}
// New draft in another tab cannot be overwritten by the old attempt.
let a=boot();a.run("createExam('mini')");let b=boot(a.storage);b.run("createExam('full')");let raw=a.storage.get(ad);a.run('saveExamDraft()');assert.equal(a.storage.get(ad),raw);checks++;
a=boot();startPr(a);b=boot(a.storage);startPr(b);b.el('prNext').click();raw=a.storage.get(pd);a.el('prSubmit').click();assert.equal(a.storage.get(pd),raw);checks++;
// Sequential own writes still work, including fresh reload after a conflict.
a=boot();a.run("createExam('mini');exam.answers[0]=1;saveExamDraft();exam.answers[1]=0;saveExamDraft()");b=boot(a.storage);b.run('resumeExam()');assert.equal(b.run('exam.answers[0]'),1);assert.equal(b.run('exam.answers[1]'),0);b.run('finishExam();finishExam()');assert.equal(JSON.parse(b.storage.get(ah)).attempts.length,1);checks++;
a=boot();startPr(a);a.el('prChoices').children[1].click();a.el('prNext').click();b=boot(a.storage);b.el('prResume').click();assert.equal(b.el('prProgress').textContent,'2/20問');b.el('prSubmit').click();b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts.length,1);checks++;
console.log(JSON.stringify({result:'PASS',scenarios:checks,scope:'2つの独立VMで保存領域を共有し、古いタブの回答・移動・採点・離脱、別タブの新規開始・採点・削除後の復活防止、連続採点を確認。',limit:'操作を順に実行した模擬試験。同時書込みの原子性は保証しない。'},null,2));
