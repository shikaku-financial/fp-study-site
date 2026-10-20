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
 for(const n of ['questions.js','app.js','practical-questions.js','practical.js'])vm.runInContext(fs.readFileSync(path.join(root,n),'utf8'),ctx,{filename:n});
 return {ctx,el,storage,fault,alerts,timers,run:s=>vm.runInContext(s,ctx)};
}




const flat=e=>[e,...e.children.flatMap(flat)],pd='fp-training-practical-v12-draft',ph='fp-training-practical-v12-results';










const all=JSON.parse(boot().run('JSON.stringify(PRACTICAL_QUESTIONS)')),old=JSON.parse(fs.readFileSync(path.join(root,'development-notes/SUPERSEDED_PRACTICAL_V183_TO_V184.json'),'utf8')),q4=all.find(q=>q.id==='pr-kinzai2_personal-004'),q5=all.find(q=>q.id==='pr-kinzai2_personal-005'),eng=boot().ctx.__fpPracticalTest;
assert.equal(q4.kind,'multi_choice');assert.equal(q5.kind,'multi_numeric');for(const q of [q4,q5]){const o=old.find(x=>x.id===q.id);assert.equal(q.revision,o.revision+1);assert.equal(q.caseText,o.caseText.replaceAll('【2026年4月1日基準の独自演習】',''));}
assert.deepEqual(q4.subAnswers.map(p=>p.answer),[0,1,0]);for(let mask=0;mask<8;mask++)assert.equal(eng.grade(q4,[mask&1,(mask>>1)&1,(mask>>2)&1]),mask===2);
// Independent exact rational arithmetic: no use of question answer constants.
const profit=200000000n,shares=1000000n,capital=1600000000n,price=2400n,dividend=60n;
const ratios=[[price*shares,profit],[dividend*shares*100n,profit],[dividend*100n,price],[profit*100n,capital]];
const cents=ratios.map(([n,d])=>(n*200n+d)/(2n*d));assert.deepEqual(cents,[1200n,3000n,250n,1250n]);assert.deepEqual(q5.subAnswers.map(p=>p.answer),cents.map(n=>Number(n)/100));assert.equal(Number(dividend*shares),60000000);assert.equal(eng.grade(q5,['12.00','30.00','2.50','12.50']),true);assert.equal(eng.grade(q5,['１２','３０','２．５','１２．５']),true);
for(let i=0;i<4;i++){let a=['12','30','2.5','12.5'];a[i]=String(Number(a[i])+0.01);assert.equal(eng.grade(q5,a),false);}for(const bad of [['12','0.3','2.5','12.5'],['12','30','0.025','12.5'],['12','30','2.5','8.33'],['12倍','30','2.5','12.5'],['12','30','2.5',null],['12','30','2.5']])assert.equal(eng.grade(q5,bad),false);
const multi=q=>['multi_numeric','multi_choice','wordbank_number'].includes(q.kind),answer=q=>multi(q)?q.subAnswers.map(answer):q.numericInputFormat==='wordbank-symbol-v1'?'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ'[q.answer-1]:q.kind==='choice'?q.answer:String(q.answer);for(const q of all)assert.equal(eng.grade(q,answer(q)),true,q.id);
function fields(b){return flat(b.el('prMultiNumeric')).filter(e=>e.tagName==='fieldset');}function inputs(b){return flat(b.el('prMultiNumeric')).filter(e=>e.id&&e.id.startsWith('prSubInput'));}function choose(b,i,a){fields(b)[i].children[a+1].click();}function enter(b,i,s){let e=inputs(b)[i];e.value=s;e.events.input({target:e});}function start(b){b.ctx.__fpPracticalTest.openPractical();b.el('prSelectLevel2').click();let card=flat(b.el('prTracks')).find(e=>e.className==='pr-track'&&e.children.some(c=>c.textContent==='個人資産相談業務'));card.children.find(e=>e.textContent==='第1回（15問）を練習').click();b.el('prNav').children[3].click();}
let b=boot();start(b);assert.equal(fields(b).length,3);choose(b,0,0);assert.equal(b.el('prAnswered').textContent,'0/15問 回答済');choose(b,1,1);choose(b,2,0);b.el('prNav').children[4].click();assert.equal(inputs(b).length,4);enter(b,0,'12.00');enter(b,1,'30');b.el('prSaveExit').click();b=boot(b.storage);b.el('prResume').click();assert.deepEqual(inputs(b).map(e=>e.value),['12.00','30','','']);enter(b,2,'2.50');enter(b,3,'12.50');b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,2);assert.match(b.el('prResultNote').textContent,/全解答欄の正答：7\/47欄/);b.el('prAll').click();assert.ok(flat(b.el('prReviews')).some(e=>e.textContent==='解説：'+q5.explanation));const saved=b.storage.get(ph);b=boot(b.storage);b.ctx.__fpPracticalTest.openPractical();flat(b.el('prHistoryList')).find(e=>e.textContent==='答え合わせ').click();assert.equal(b.storage.get(ph),saved);b.el('prRetry').click();b.el('prNav').children[3].click();assert.equal(fields(b).length,3);b.el('prNav').children[4].click();assert.deepEqual(inputs(b).map(e=>e.value),['','','','']);
// Real superseded questions survive draft, grading, result reload and retry.
for(const q of old){b=boot(new Map([[pd,JSON.stringify({track:q.track,questions:[q],answers:[q.numericInputFormat==='wordbank-symbol-v1'?'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ'[q.answer-1]:q.kind==='choice'?q.answer:String(q.answer)],pos:0})]]));b.el('prResume').click();assert.equal(fields(b).length,0);assert.equal(inputs(b).length,0);b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,1);b=boot(b.storage);b.ctx.__fpPracticalTest.openPractical();flat(b.el('prHistoryList')).find(e=>e.textContent==='答え合わせ').click();b.el('prAll').click();if(q.kind==='choice')for(const s of q.choiceExplanations)assert.ok(flat(b.el('prReviews')).some(e=>e.textContent===s));b.el('prRetry').click();assert.equal(JSON.parse(b.storage.get(pd)).questions[0].kind,q.kind);}
b=boot();start(b);choose(b,0,0);let before=b.storage.get(pd);b.fault.key=pd;choose(b,1,1);assert.equal(b.storage.get(pd),before);b.fault.key=null;b.el('prSaveExit').click();b=boot(b.storage);b.el('prResume').click();assert.deepEqual(JSON.parse(b.storage.get(pd)).answers[3],[0,null,null]);const external=b.storage.get(pd)+' ';b.storage.set(pd,external);choose(b,2,0);assert.equal(b.storage.get(pd),external);assert.ok(b.alerts.length);
for(const [q,a] of [[q4,[0,1]],[q4,[0,'1',0]],[q5,['12','30']],[q5,['12','30','2.5',{}]]]){const raw=JSON.stringify({track:q.track,questions:[q],answers:[a],pos:0});b=boot(new Map([[pd,raw]]));b.el('prResume').click();assert.equal(b.storage.get(pd),raw);assert.ok(b.alerts.length);}
console.log(JSON.stringify({result:'PASS',scope:'8 truth combinations;independent BigInt ratios;4-field strict grading;240 correct paths;27-field full-set save/reload/grade/history/retry;actual old choice/numeric snapshots and reasons;quota/stale/corrupt drafts;VM/DOM only'}));
