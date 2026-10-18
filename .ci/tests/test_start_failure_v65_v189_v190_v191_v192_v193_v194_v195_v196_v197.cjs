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
for(const kind of ['mini','full']){
 const b=boot();b.fault.key=ad;b.run(`createExam('${kind}')`);assert.equal(b.run('exam'),null);assert.equal(b.timers.size,0);assert.equal(b.storage.has(ad),false);assert.ok(b.alerts.length);b.fault.key=null;b.run('goHome()');assert.equal(b.storage.has(ad),false);b.run(`createExam('${kind}')`);assert.ok(b.run('exam'));checks++;
}
// Failed replacement retains the old attempt, its answer, saved bytes and timer.
for(const kind of ['mini','full']){
 const b=boot();b.run("createExam('mini');exam.answers[0]=1;saveExamDraft()");const old=b.run('JSON.stringify(exam)'),raw=b.storage.get(ad);b.fault.key=ad;b.run(`createExam('${kind}')`);assert.equal(b.run('JSON.stringify(exam)'),old);assert.equal(b.storage.get(ad),raw);assert.equal(b.timers.size,1);b.fault.key=null;assert.equal(b.run('saveExamDraft()'),true);checks++;
}
// Another writer changes data during the replacement confirmation.
let b=boot();b.run("createExam('mini')");let old=b.run('JSON.stringify(exam)');b.ctx.confirm=()=>{b.storage.set(ad,'external-change');return true};b.run("createExam('full')");assert.equal(b.run('JSON.stringify(exam)'),old);assert.equal(b.storage.get(ad),'external-change');checks++;
for(const leave of ['prSaveExit','siteHomeLink']){
 b=boot();b.fault.key=pd;startPr(b);assert.equal(b.storage.has(pd),false);assert.ok(b.alerts.length);b.fault.key=null;b.el(leave).click();assert.equal(b.storage.has(pd),false);startPr(b);assert.ok(b.storage.has(pd));checks++;
}
// Failed practical replacement preserves the prior in-memory attempt.
b=boot();startPr(b);b.el('prChoices').children[1].click();const raw=b.storage.get(pd);b.fault.key=pd;startPr(b);assert.equal(b.storage.get(pd),raw);b.fault.key=null;b.el('prSaveExit').click();assert.equal(b.storage.get(pd),raw);checks++;
// Failed retry must not create an invisible draft when later navigating home.
b=boot();startPr(b);b.el('prSubmit').click();b.fault.key=pd;b.el('prRetry').click();assert.equal(b.storage.has(pd),false);b.fault.key=null;b.el('siteHomeLink').click();assert.equal(b.storage.has(pd),false);assert.equal(JSON.parse(b.storage.get(ph)).attempts.length,1);checks++;
console.log(JSON.stringify({result:'PASS',scenarios:checks,scope:'新規開始・置換・再挑戦の保存失敗、旧状態保持、失敗後ホーム移動、競合、再試行。',limit:'VM・DOM・localStorage模擬。'},null,2));
