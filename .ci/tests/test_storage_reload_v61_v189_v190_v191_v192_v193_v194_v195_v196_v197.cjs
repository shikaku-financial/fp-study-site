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
function startPr(b){b.ctx.__fpPracticalTest.openPractical();flat(b.el('prTracks')).find(e=>e.textContent==='この科目を練習する'&&!e.disabled).click()}
const pd='fp-training-practical-v12-draft',ph='fp-training-practical-v12-results';let checks=0;
// Academic page reload preserves position, selected answers, flags and snapshots.
for(const level of ['2','3']){
 let b=boot();b.run(`setLevel('${level}');createExam('full');exam.answers[0]=getExamQuestions()[0].answer;exam.pos=7;exam.flags[7]=true;saveExamDraft()`);
 const saved=b.storage.get('fp-training-exam-draft-v12');b=boot(b.storage);assert.equal(b.run('exam'),null);b.run('resumeExam()');assert.equal(b.run('exam.pos'),7);assert.equal(b.run('exam.flags[7]'),true);assert.equal(JSON.stringify(b.run('exam')),saved);checks++;
}
// Each write can fail independently. Keep recoverable draft and avoid duplicate history on retry.
for(const key of ['fp-training-exam-draft-v12','fp-training-v12','fp-training-exam-details-v12','fp-training-exam-history-v12']){
 let b=boot();b.run("createExam('mini');exam.answers=getExamQuestions().map(q=>q.answer);saveExamDraft()");b.fault.key=key;b.run('finishExam()');
 assert.notEqual(b.run('exam'),null,key);assert.ok(b.storage.has('fp-training-exam-draft-v12'));assert.ok(b.alerts.length>0,key);
 b=boot(b.storage);b.run('resumeExam();finishExam()');assert.equal(b.run('exam'),null);
 assert.equal(b.run('readJSON(EXAM_HISTORY_KEY,{attempts:[]}).attempts.length'),1);assert.equal(b.run('readJSON(EXAM_DETAILS_KEY,{attempts:[]}).attempts.length'),1);assert.match(b.el('examSummary').textContent,/6問中 6問正解/);checks++;
}
let b=boot();b.run("createExam('mini')");b.fault.key='fp-training-exam-draft-v12';assert.equal(b.run('goHome()'),false);assert.notEqual(b.run('exam'),null);b.el('siteHomeLink').click();assert.notEqual(b.run('exam'),null);checks++;
b=boot();b.run("createExam('mini');exam.deadline=Date.now()-1");b.fault.key='fp-training-exam-draft-v12';b.run('updateTimer()');assert.notEqual(b.run('exam'),null);assert.equal(b.timers.size,0);b.fault.key=null;b.run('finishExam()');assert.equal(b.run('readJSON(EXAM_HISTORY_KEY,{attempts:[]}).attempts[0].timeOver'),true);checks++;
// Practical real answer events survive a fresh script context.
b=boot();startPr(b);b.el('prChoices').children[1].click();b.el('prNext').click();const saved=b.storage.get(pd);b=boot(b.storage);b.el('prResume').click();assert.equal(b.el('prProgress').textContent,'2/20問');assert.equal(b.storage.get(pd),saved);checks++;
for(const key of [pd,ph]){
 b=boot();startPr(b);b.el('prChoices').children[1].click();b.fault.key=key;b.el('prSubmit').click();assert.ok(b.storage.has(pd),key);assert.equal(b.storage.has(ph),false,key);assert.ok(b.alerts.length>0);
 b=boot(b.storage);b.el('prResume').click();b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts.length,1);assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].answers[0],1);assert.equal(b.storage.has(pd),false);checks++;
}
for(const leave of ['prSaveExit','siteHomeLink']){
 b=boot();startPr(b);b.fault.key=pd;b.el('prChoices').children[1].click();b.el(leave).click();b.fault.key=null;b.el('prSaveExit').click();assert.equal(JSON.parse(b.storage.get(pd)).answers[0],1);checks++;
}
console.log(JSON.stringify({result:'PASS',scenarios:checks,scope:'新しいVM・DOMでの学科2級/3級・実技の再開。学科4保存段階と実技2保存段階の失敗、再読込後の再採点・重複防止、保存失敗時の離脱抑止、時間切れ保存失敗後の手動再採点。',limit:'localStorage模擬。実ブラウザの再読込・実容量制限・描画・タッチ未検証。'},null,2));
