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














const all=JSON.parse(boot().run('JSON.stringify(PRACTICAL_QUESTIONS)')),ids=[3,4,5,6].map(n=>'pr-jafp2-'+String(n).padStart(3,'0')),qs=ids.map(id=>all.find(q=>q.id===id)),old=JSON.parse(fs.readFileSync(path.join(root,'development-notes/SUPERSEDED_PRACTICAL_V202_TO_V203.json'),'utf8')),eng=boot().ctx.__fpPracticalTest;
const units=1200000n,lot=10000n,price=10500n,cost=units/lot*price,fee=cost*22n/1000n;assert.equal(cost,1260000n);assert.equal(fee,27720n);assert.equal(cost*11n/1000n,13860n);assert.equal(10500-10200,300);assert.equal(500-300,200);assert.match(qs[0].choices[0],/27,720円.*元本払戻金/);assert.match(qs[0].choices[1],/27,720円.*普通分配金/);assert.match(qs[0].choices[2],/13,860円.*元本払戻金/);
// Rational arithmetic: annual interest + annual redemption gain =21/10;
// percentage yield =15/7; integer truncation at 3 decimals differs from rounding.
const yieldScaled=(21n*100n*1000n)/(10n*98n);assert.equal(yieldScaled,2142n);assert.equal(qs[1].answer,Number(yieldScaled)/1000);assert.ok(!eng.grade(qs[1],'2.143'));assert.ok(!eng.grade(qs[1],'2.14'));assert.ok(eng.grade(qs[1],'２．１４２'));
const roundRatio=(n,d)=>(2n*n+d)/(2n*d);const payout=Number(roundRatio(80n*100n*100n,210n))/100,pbr=Number(roundRatio(2860n*100n,1740n))/100;assert.equal(payout,38.1);assert.equal(pbr,1.64);assert.deepEqual(qs[2].subAnswers.map(s=>s.answer),[payout,pbr]);assert.deepEqual(qs[2].subAnswers.map(s=>s.unit),['％','倍']);assert.ok(!eng.grade(qs[2],['2.80','1.64']));assert.ok(!eng.grade(qs[2],['38.10','0.46']));assert.ok(eng.grade(qs[2],['38.10','１．６４']));
const loss=4950000n-4200000n,gross=120000n+80000n,tax=18378n+12252n+6000n+4000n;assert.equal(loss-gross,550000n);assert.equal(loss-gross-50000n,500000n);assert.equal(loss-(gross-tax),590630n);assert.equal(qs[3].answer,Number(loss-gross));assert.equal(qs[3].unit,'円');for(const bad of ['55','500000','590630','750000'])assert.ok(!eng.grade(qs[3],bad));assert.ok(eng.grade(qs[3],'550,000'));
for(let i=0;i<4;i++){assert.equal(qs[i].revision,old[i].revision+1);assert.equal(qs[i].lawReferenceDate,'2026-04-01');assert.equal(qs[i].kind,old[i].kind);}for(let a=0;a<4;a++)assert.equal(eng.grade(qs[0],a),a===0);assert.equal(qs[0].choiceExplanations.length,4);
let b=boot();b.ctx.__fpPracticalTest.openPractical();b.el('prSelectLevel2').click();const card=flat(b.el('prTracks')).find(e=>e.className==='pr-track'&&e.children.some(c=>c.textContent==='資産設計提案業務'));card.children.find(e=>e.textContent==='この科目を練習する').click();
b.el('prNav').children[2].click();b.el('prChoices').children[0].click();b.el('prNav').children[3].click();b.el('prNumberInput').value='2.142';b.el('prNumberInput').events.input({target:b.el('prNumberInput')});b.el('prNav').children[4].click();let inputs=flat(b.el('prMultiNumeric')).filter(e=>e.id?.startsWith('prSubInput'));for(const[i,v]of ['38.10','1.64'].entries()){inputs[i].value=v;inputs[i].events.input({target:inputs[i]});}b.el('prNav').children[5].click();b.el('prNumberInput').value='550,000';b.el('prNumberInput').events.input({target:b.el('prNumberInput')});assert.equal(b.el('prAnswered').textContent,'4/40問 回答済');b.el('prSaveExit').click();b=boot(b.storage);b.el('prResume').click();assert.equal(b.el('prNumberInput').value,'550,000');b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,4);b.el('prAll').click();for(const text of qs[0].choiceExplanations)assert.ok(flat(b.el('prReviews')).some(e=>e.textContent===text));
for(const q of old){const answer=q.subAnswers?q.subAnswers.map(s=>s.answer):q.answer;b=boot(new Map([[pd,JSON.stringify({track:q.track,questions:[q],answers:[answer],pos:0})]]));b.el('prResume').click();b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,1);assert.deepEqual(JSON.parse(b.storage.get(ph)).attempts[0].questions[0],q);b=boot(b.storage);b.ctx.__fpPracticalTest.openPractical();flat(b.el('prHistoryList')).find(e=>e.textContent==='答え合わせ').click();b.el('prRetry').click();/* Existing retry normalizes an absent optional choices member to []. */assert.deepEqual(JSON.parse(b.storage.get(pd)).questions[0],{...q,choices:q.choices||[]});assert.equal(b.ctx.__fpMaterialView.lookup(q),null);}
console.log('PASS:4 finance IDs;BigInt fee/3-decimal truncation/rounding/gross-net separation;all4 options;5 answer fields;save/reload/grade/history/retry;4 actual old snapshots. VM/DOM only.');
