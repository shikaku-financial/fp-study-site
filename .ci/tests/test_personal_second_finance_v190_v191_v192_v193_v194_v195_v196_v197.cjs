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
 for(const n of ['questions.js','app.js','practical-questions.js','practical-materials.js','practical.js'])vm.runInContext(fs.readFileSync(path.join(root,n),'utf8'),ctx,{filename:n});
 return {ctx,el,storage,fault,alerts,timers,run:s=>vm.runInContext(s,ctx)};
}




const flat=e=>[e,...e.children.flatMap(flat)],pd='fp-training-practical-v12-draft',ph='fp-training-practical-v12-results';










const all=JSON.parse(boot().run('JSON.stringify(PRACTICAL_QUESTIONS)')),ids=[4,5,6].map(i=>'pr-kinzai2_personal-v16-'+String(i).padStart(3,'0')),[q4,q5,q6]=ids.map(id=>all.find(q=>q.id===id)),old=JSON.parse(fs.readFileSync(path.join(root,'development-notes/SUPERSEDED_PRACTICAL_V189_TO_V190.json'),'utf8')),eng=boot().ctx.__fpPracticalTest,symbols='アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ';
assert.deepEqual([q4.kind,q5.kind,q6.kind],['multi_numeric','wordbank_number','multi_choice']);for(let i=0;i<3;i++){const q=[q4,q5,q6][i];assert.equal(q.revision,old[i].revision+1);assert.ok(q.caseText.startsWith(old[i].caseText));assert.equal(q.lawReferenceDate,'2026-04-01');assert.equal(q.taxYear,2026);}assert.equal(q4.caseText,q5.caseText);assert.equal(q5.caseText,q6.caseText);
const equity=2000000000n,profit=250000000n,shares=1000000n,price=3000n,debt=800000000n,bps=equity/shares,eps=profit/shares;assert.equal(bps,2000n);assert.equal(eps,250n);assert.equal(price*100n/bps,150n);assert.equal(profit*10000n/((equity+equity)/2n),1250n);assert.equal(debt*100n/equity,40n);assert.equal(price/eps,12n);assert.equal(debt*10000n/(debt+equity),2857n);assert.deepEqual(q4.subAnswers.map(p=>p.answer),[1.5,12.5,40]);assert.equal(eng.grade(q4,['１．５０','12.50','40.00']),true);for(const a of [['12','12.5','40'],['1.5','0.125','40'],['1.5','12.5','28.57'],['1.5倍','12.5','40'],['1.5','12.5',null]])assert.equal(eng.grade(q4,a),false);
// Independent expected kana codes, not generated from the question's answers.
let combos=0;for(const a of symbols.slice(0,9))for(const b of symbols.slice(0,9))for(const c of symbols.slice(0,9)){assert.equal(eng.grade(q5,[a,b,c]),a==='ア'&&b==='ウ'&&c==='カ');combos++;}assert.equal(combos,729);assert.equal(eng.grade(q5,['あ','ｳ','カ']),true);assert.equal(eng.grade(q5,['1','3','6']),false);assert.equal(150000n*21n/1000n,3150n);assert.equal(150000n+3150n+50000n,203150n);assert.match(q5.question,/元本払戻し/);assert.match(q5.explanation,/2027年以後/);
// Independent two-day illustration shows why a daily multiple is not a holding-period multiple.
assert.equal(10000n*110n/100n*90n/100n,9900n);assert.equal(10000n*120n/100n*80n/100n,9600n);assert.notEqual(9600n,9800n);
assert.deepEqual(q6.subAnswers.map(p=>p.answer),[0,1,1,0]);for(let mask=0;mask<16;mask++)assert.equal(eng.grade(q6,Array.from({length:4},(_,i)=>(mask>>i)&1)),mask===6);assert.equal(120+240,360);assert.ok(300<=120*3);assert.equal(1800-300,1500);assert.ok(1500>1200);assert.match(q6.question,/30歳/);assert.match(q6.question,/別のNISA対象商品/);assert.match(q6.explanation,/株式数比例配分方式/);
const multi=q=>['multi_numeric','multi_choice','wordbank_number'].includes(q.kind),answer=q=>multi(q)?q.subAnswers.map(answer):q.numericInputFormat==='wordbank-symbol-v1'?symbols[q.answer-1]:q.kind==='choice'?q.answer:String(q.answer);for(const q of all)assert.equal(eng.grade(q,answer(q)),true,q.id);
function inputs(b){return flat(b.el('prMultiNumeric')).filter(e=>e.id&&e.id.startsWith('prSubInput'));}function fields(b){return flat(b.el('prMultiNumeric')).filter(e=>e.tagName==='fieldset');}function enter(b,i,t){const e=inputs(b)[i];e.value=t;e.events.input({target:e});}function choose(b,i,a){fields(b)[i].children[a+1].click();}function start(b){b.ctx.__fpPracticalTest.openPractical();b.el('prSelectLevel2').click();const card=flat(b.el('prTracks')).find(e=>e.className==='pr-track'&&e.children.some(c=>c.textContent==='個人資産相談業務'));card.children.find(e=>e.textContent==='第2回（15問）を練習').click();b.el('prNav').children[3].click();}
let b=boot();start(b);assert.equal(inputs(b).length,3);enter(b,0,'1.5');assert.equal(b.el('prAnswered').textContent,'0/15問 回答済');b.el('prSaveExit').click();b=boot(b.storage);b.el('prResume').click();assert.deepEqual(inputs(b).map(e=>e.value),['1.5','','']);enter(b,1,'12.5');enter(b,2,'40');b.el('prNav').children[4].click();assert.ok(inputs(b).every(e=>e.inputMode==='text'));['ア','ウ','カ'].forEach((s,i)=>enter(b,i,s));b.el('prNav').children[5].click();assert.equal(fields(b).length,4);[0,1,1,0].forEach((v,i)=>choose(b,i,v));b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,3);assert.match(b.el('prResultNote').textContent,/全解答欄の正答：10\/47欄/);b.el('prAll').click();for(const q of [q4,q5,q6])assert.ok(flat(b.el('prReviews')).some(e=>e.textContent==='解説：'+q.explanation));assert.ok(flat(b.el('prReviews')).some(e=>e.textContent.includes('ウ（20.315％）')));const saved=b.storage.get(ph);b=boot(b.storage);b.ctx.__fpPracticalTest.openPractical();flat(b.el('prHistoryList')).find(e=>e.textContent==='答え合わせ').click();assert.equal(b.storage.get(ph),saved);b.el('prRetry').click();b.el('prNav').children[3].click();assert.deepEqual(inputs(b).map(e=>e.value),['','','']);
for(const q of old){b=boot(new Map([[pd,JSON.stringify({track:q.track,questions:[q],answers:[q.kind==='choice'?q.answer:String(q.answer)],pos:0})]]));b.el('prResume').click();assert.equal(inputs(b).length,0);assert.equal(fields(b).length,0);b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,1);b.el('prAll').click();if(q.kind==='choice')for(const s of q.choiceExplanations)assert.ok(flat(b.el('prReviews')).some(e=>e.textContent===s));b=boot(b.storage);b.ctx.__fpPracticalTest.openPractical();flat(b.el('prHistoryList')).find(e=>e.textContent==='答え合わせ').click();b.el('prRetry').click();assert.equal(JSON.parse(b.storage.get(pd)).questions[0].kind,q.kind);}
b=boot();for(let i=0;i<3;i++){const q=[q4,q5,q6][i];assert.ok(b.ctx.__fpMaterialView.lookup(q));assert.equal(b.ctx.__fpMaterialView.lookup(old[i]),null);b.ctx.__fpMaterialView.render(b.el('mat'),q);assert.ok(flat(b.el('mat')).some(e=>e.textContent==='追加：負債総額'));b.ctx.__fpMaterialView.render(b.el('mat'),old[i]);assert.ok(!flat(b.el('mat')).some(e=>e.textContent==='追加：負債総額'));}
b=boot();start(b);enter(b,0,'1.5');const before=b.storage.get(pd);b.fault.key=pd;enter(b,1,'12.5');assert.equal(b.storage.get(pd),before);b.fault.key=null;b.el('prSaveExit').click();b=boot(b.storage);b.el('prResume').click();assert.deepEqual(inputs(b).map(e=>e.value),['1.5','12.5','']);const external=b.storage.get(pd)+' ';b.storage.set(pd,external);enter(b,2,'40');assert.equal(b.storage.get(pd),external);assert.ok(b.alerts.length);
for(const [q,a] of [[q4,['1.5']],[q5,['ア','ウ']],[q6,[0,'1',1,0]]]){const raw=JSON.stringify({track:q.track,questions:[q],answers:[a],pos:0});b=boot(new Map([[pd,raw]]));b.el('prResume').click();assert.equal(b.storage.get(pd),raw);assert.ok(b.alerts.length);}
console.log(JSON.stringify({result:'PASS',scope:'729 ETF codes;16 NISA truth combinations;exact BigInt ratios/tax/day-multiple;240 correct paths;second-set40 fields;10-field save/reload/history/retry;3 real legacy snapshots and materials;quota/stale/corrupt;VM/DOM only'}));
