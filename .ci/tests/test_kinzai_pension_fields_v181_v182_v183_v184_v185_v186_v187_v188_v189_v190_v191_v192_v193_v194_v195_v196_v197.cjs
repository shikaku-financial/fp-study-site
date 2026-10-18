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




const flat=e=>[e,...e.children.flatMap(flat)],pd='fp-training-practical-v12-draft',ph='fp-training-practical-v12-results';









const all=JSON.parse(boot().run('JSON.stringify(PRACTICAL_QUESTIONS)')),q=all.find(q=>q.id==='pr-kinzai2_personal-002'),old=JSON.parse(fs.readFileSync(path.join(root,'development-notes/SUPERSEDED_PRACTICAL_V180_TO_V181.json'),'utf8'))[0];
assert.equal(q.kind,'multi_numeric');assert.equal(q.revision,old.revision+1);assert.equal(q.caseText,old.caseText);assert.equal(q.sourceCheckedDate,old.sourceCheckedDate);assert.deepEqual(q.subAnswers.map(x=>x.answer),[240000,300,457685]);assert.deepEqual(q.subAnswers.map(x=>x.unit),['円','月','円']);
// Integer rational arithmetic, half-up only at the final yen.
const numerator=(240000n*7125n*36n+380000n*5481n*240n)*300n*3n,denominator=1000000n*276n*4n;assert.equal(Number((numerator+denominator/2n)/denominator),457685);
assert.equal((2003-2000)*12,36);assert.equal((2026-2006)*12,240);assert.equal(36+240,276);assert.equal(2026-1982,44);
const eng=boot().ctx.__fpPracticalTest;
for(let mask=0;mask<8;mask++){const a=q.subAnswers.map((p,i)=>String(p.answer+((mask>>i)&1?0:1)));assert.equal(eng.grade(q,a),mask===7);}
assert.equal(eng.grade(q,['240,000','３００','４５７，６８５']),true);assert.equal(eng.grade(q,['240,00','300','457685']),false);assert.equal(eng.grade(q,['240000','276','457685']),false);assert.equal(eng.grade(q,['240000','300']),false);assert.equal(eng.grade(q,['240000','300',null]),false);
const multi=q=>['multi_numeric','multi_choice','wordbank_number'].includes(q.kind),answer=q=>multi(q)?q.subAnswers.map(answer):q.numericInputFormat==='wordbank-symbol-v1'?'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ'[q.answer-1]:q.kind==='choice'?q.answer:String(q.answer);
for(const item of all)assert.equal(eng.grade(item,answer(item)),true,item.id);assert.equal(all.length,240);
function inputs(b){return flat(b.el('prMultiNumeric')).filter(e=>e.id&&e.id.startsWith('prSubInput'));}function fill(b,i,t){const e=inputs(b)[i];e.value=t;e.events.input({target:e});}
function start(b){b.ctx.__fpPracticalTest.openPractical();b.el('prSelectLevel2').click();const card=flat(b.el('prTracks')).find(e=>e.className==='pr-track'&&e.children.some(c=>c.textContent==='個人資産相談業務'));card.children.find(e=>e.textContent==='第1回（15問）を練習').click();b.el('prNav').children[1].click();}
let b=boot();start(b);assert.equal(inputs(b).length,3);assert.deepEqual(JSON.parse(b.storage.get(pd)).answers[1],[null,null,null]);fill(b,0,'240,000');fill(b,1,'276');fill(b,2,'457,685');assert.equal(b.el('prAnswered').textContent,'1/15問 回答済');b.el('prSaveExit').click();b=boot(b.storage);b.el('prResume').click();assert.deepEqual(inputs(b).map(e=>e.value),['240,000','276','457,685']);fill(b,1,'３００');b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,1);assert.match(b.el('prResultNote').textContent,/全解答欄の正答：3\/47欄/);
const stored=b.storage.get(ph);b=boot(b.storage);b.ctx.__fpPracticalTest.openPractical();flat(b.el('prHistoryList')).find(e=>e.textContent==='答え合わせ').click();assert.equal(b.storage.get(ph),stored);b.el('prRetry').click();b.el('prNav').children[1].click();assert.equal(inputs(b).length,3);assert.deepEqual(inputs(b).map(e=>e.value),['','','']);
// Actual pre-conversion snapshot retains its one numeric input, amount, history and retry.
b=boot(new Map([[pd,JSON.stringify({track:old.track,questions:[old],answers:[String(old.answer)],pos:0})]]));b.el('prResume').click();assert.equal(inputs(b).length,0);assert.equal(b.el('prNumberInput').value,String(old.answer));b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,1);assert.ok(!b.el('prResultNote').textContent.includes('全解答欄'));b=boot(b.storage);b.ctx.__fpPracticalTest.openPractical();flat(b.el('prHistoryList')).find(e=>e.textContent==='答え合わせ').click();b.el('prRetry').click();assert.equal(JSON.parse(b.storage.get(pd)).questions[0].kind,'numeric');assert.equal(inputs(b).length,0);
for(const a of [['240000'],['240000','300',null,1]]){const raw=JSON.stringify({track:q.track,questions:[q],answers:[a],pos:0}),c=boot(new Map([[pd,raw]]));c.el('prResume').click();assert.equal(c.storage.get(pd),raw);assert.ok(c.alerts.length);}
b=boot();start(b);fill(b,0,'240000');const before=b.storage.get(pd);b.fault.key=pd;fill(b,1,'300');assert.equal(b.storage.get(pd),before);assert.ok(b.alerts.length);b.fault.key=null;b.el('prSaveExit').click();b=boot(b.storage);b.el('prResume').click();assert.deepEqual(inputs(b).map(e=>e.value),['240000','300','']);const external=b.storage.get(pd)+' ';b.storage.set(pd,external);fill(b,2,'457685');assert.equal(b.storage.get(pd),external);assert.ok(b.alerts.length);
console.log(JSON.stringify({result:'PASS',scope:'3 units;8 truth masks;240 current answers;integer pension calculation;chronology;new15-question input/save/reload/result/history/retry;actual old scalar snapshot;corrupt arrays;save failure;stale writer',mode:'VM/DOM only'}));
