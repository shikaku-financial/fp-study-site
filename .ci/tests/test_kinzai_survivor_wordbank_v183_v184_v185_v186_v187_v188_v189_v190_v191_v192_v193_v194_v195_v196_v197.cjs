// V189 legacy-number contract: boot installs real archived V188 question records. Current symbols are tested separately.
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
 for(const n of ['questions.js','app.js','practical-questions.js','practical.js']){if(n==='practical.js'){const old=JSON.parse(fs.readFileSync(path.join(root,'development-notes/SUPERSEDED_PRACTICAL_V188_TO_V189.json'),'utf8'));vm.runInContext('for(const q of '+JSON.stringify(old)+'){PRACTICAL_QUESTIONS[PRACTICAL_QUESTIONS.findIndex(x=>x.id===q.id)]=q;}',ctx);}vm.runInContext(fs.readFileSync(path.join(root,n),'utf8'),ctx,{filename:n});}
 return {ctx,el,storage,fault,alerts,timers,run:s=>vm.runInContext(s,ctx)};
}




const flat=e=>[e,...e.children.flatMap(flat)],pd='fp-training-practical-v12-draft',ph='fp-training-practical-v12-results';









const all=JSON.parse(boot().run('JSON.stringify(PRACTICAL_QUESTIONS)')),q=all.find(q=>q.id==='pr-kinzai2_personal-001'),old=JSON.parse(fs.readFileSync(path.join(root,'development-notes/SUPERSEDED_PRACTICAL_V182_TO_V183.json'),'utf8'))[0],eng=boot().ctx.__fpPracticalTest;
assert.equal(q.kind,'wordbank_number');assert.equal(q.revision,old.revision+1);assert.equal(q.caseText,old.caseText);assert.deepEqual(q.subAnswers.map(p=>p.answer),[1,4,7]);assert.ok(q.subAnswers.every(p=>JSON.stringify(p.wordBank)===JSON.stringify(q.subAnswers[0].wordBank)));assert.equal(q.subAnswers[0].wordBank.length,9);
let combinations=0;for(let a=1;a<=9;a++)for(let b=1;b<=9;b++)for(let c=1;c<=9;c++){assert.equal(eng.grade(q,[String(a),String(b),String(c)]),a===1&&b===4&&c===7);combinations++;}assert.equal(combinations,729);
assert.equal(847300+243800*2,1334900);assert.equal(847300+243800,1091100);assert.equal(847300+243800*2+81300,1416200);assert.equal(5620*12,67440);assert.equal(5450*12,65400);assert.equal(eng.grade(q,['１','４','７']),true);for(const a of [['0','4','7'],['10','4','7'],['1.0','4','7'],['1,','4','7'],['イ','4','7'],['1','1334900','67440'],['1','4',null]])assert.equal(eng.grade(q,a),false);
const multi=q=>['multi_numeric','multi_choice','wordbank_number'].includes(q.kind),answer=q=>multi(q)?q.subAnswers.map(answer):q.numericInputFormat==='wordbank-symbol-v1'?'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ'[q.answer-1]:q.kind==='choice'?q.answer:String(q.answer);for(const item of all)assert.equal(eng.grade(item,answer(item)),true,item.id);
function inputs(b){return flat(b.el('prMultiNumeric')).filter(e=>e.id&&e.id.startsWith('prSubInput'));}function enter(b,i,t){const e=inputs(b)[i];e.value=t;e.events.input({target:e});}function start(b){b.ctx.__fpPracticalTest.openPractical();b.el('prSelectLevel2').click();const card=flat(b.el('prTracks')).find(e=>e.className==='pr-track'&&e.children.some(c=>c.textContent==='個人資産相談業務'));card.children.find(e=>e.textContent==='第1回（15問）を練習').click();}
let b=boot();start(b);assert.equal(inputs(b).length,3);assert.ok(flat(b.el('prMultiNumeric')).some(e=>e.textContent==='語群（入力するのは番号です）'));enter(b,0,'1');assert.equal(b.el('prAnswered').textContent,'0/15問 回答済');enter(b,1,'1334900');assert.ok(flat(b.el('prMultiNumeric')).some(e=>e.textContent.includes('1〜9')));enter(b,1,'４');enter(b,2,'７');b.el('prSaveExit').click();b=boot(b.storage);b.el('prResume').click();assert.deepEqual(inputs(b).map(e=>e.value),['1','４','７']);b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,1);assert.match(b.el('prResultNote').textContent,/全解答欄の正答：3\/47欄/);b.el('prAll').click();assert.ok(flat(b.el('prReviews')).some(e=>e.textContent.includes('7番（67,440円）')));const saved=b.storage.get(ph);b=boot(b.storage);b.ctx.__fpPracticalTest.openPractical();flat(b.el('prHistoryList')).find(e=>e.textContent==='答え合わせ').click();assert.equal(b.storage.get(ph),saved);b.el('prRetry').click();assert.equal(inputs(b).length,3);assert.deepEqual(inputs(b).map(e=>e.value),['','','']);
b=boot(new Map([[pd,JSON.stringify({track:old.track,questions:[old],answers:[String(old.answer)],pos:0})]]));b.el('prResume').click();assert.equal(inputs(b).length,0);assert.equal(b.el('prNumberInput').value,String(old.answer));b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,1);b=boot(b.storage);b.ctx.__fpPracticalTest.openPractical();flat(b.el('prHistoryList')).find(e=>e.textContent==='答え合わせ').click();b.el('prRetry').click();assert.equal(JSON.parse(b.storage.get(pd)).questions[0].kind,'numeric');
b=boot();start(b);enter(b,0,'1');const before=b.storage.get(pd);b.fault.key=pd;enter(b,1,'4');assert.equal(b.storage.get(pd),before);b.fault.key=null;b.el('prSaveExit').click();b=boot(b.storage);b.el('prResume').click();assert.deepEqual(inputs(b).map(e=>e.value),['1','4','']);const external=b.storage.get(pd)+' ';b.storage.set(pd,external);enter(b,2,'7');assert.equal(b.storage.get(pd),external);assert.ok(b.alerts.length);
const broken=JSON.parse(JSON.stringify(q));broken.subAnswers[1].wordBank=['wrong','bank'];const raw=JSON.stringify({track:q.track,questions:[broken],answers:[['1','4','7']],pos:0});b=boot(new Map([[pd,raw]]));b.el('prResume').click();assert.equal(b.storage.get(pd),raw);assert.ok(b.alerts.length);
console.log(JSON.stringify({result:'PASS',scope:'729 wordbank combinations;annual/pension arithmetic;month/year/prior-year distractors;strict codes/fullwidth/ranges;240 correct paths;new22-field set input/save/reload/history/retry;actual legacy numeric snapshot;quota/stale;bank integrity;VM/DOM only'}));
