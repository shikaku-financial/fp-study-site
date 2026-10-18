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










const all=JSON.parse(boot().run('JSON.stringify(PRACTICAL_QUESTIONS)')),ids=[2,3,4].map(i=>'pr-jafp3-'+String(i).padStart(3,'0')),[q2,q3,q4]=ids.map(id=>all.find(q=>q.id===id)),old=JSON.parse(fs.readFileSync(path.join(root,'development-notes/SUPERSEDED_PRACTICAL_V194_TO_V195.json'),'utf8')),eng=boot().ctx.__fpPracticalTest;
for(let i=0;i<3;i++){const q=[q2,q3,q4][i];assert.equal(q.revision,old[i].revision+1);assert.equal(q.kind,'choice');assert.equal(q.choices.length,3);assert.equal(q.choiceExplanations.length,3);assert.equal(q.lawReferenceDate,'2026-04-01');assert.equal(q.sourceCheckedDate,old[i].sourceCheckedDate);assert.equal(q.answer,old[i].answer);assert.notEqual(q.caseText,old[i].caseText);for(let a=0;a<3;a++)assert.equal(eng.grade(q,a),a===q.answer);}
// Independent rational calculations in whole ten-thousand yen units, with half-up rounding.
const round=(n,d)=>(2n*n+d)/(2n*d),salary=[],living=[],incomes=[],costs=[],balances=[800n];
for(let y=0;y<=3;y++){salary.push(round(600n*101n**BigInt(y),100n**BigInt(y)));living.push(round(260n*102n**BigInt(y),100n**BigInt(y)));incomes.push(salary[y]+80n);costs.push(living[y]+180n+[20n,20n,120n,80n][y]+24n+16n);if(y)balances.push(round(balances[y-1]*102n+(incomes[y]-costs[y])*100n,100n));}
assert.deepEqual(salary,[600n,606n,612n,618n]);assert.deepEqual(living,[260n,265n,271n,276n]);assert.deepEqual(incomes,[680n,686n,692n,698n]);assert.deepEqual(costs,[500n,505n,611n,576n]);assert.deepEqual(incomes.map((x,i)=>x-costs[i]),[180n,181n,81n,122n]);assert.deepEqual(balances,[800n,997n,1098n,1242n]);assert.equal(round(270504n,1000n),271n);assert.equal(round(27591408n,100000n),276n);assert.notEqual(living[3],275n);assert.match(q2.question,/誤っている/);assert.deepEqual(q2.choices,['（ア）275万円','（イ）181万円','（ウ）1,242万円']);assert.match(q2.caseText,/可処分/);assert.match(q2.caseText,/前年の丸め済み生活費/);assert.match(q2.caseText,/運用益を収入合計へ重ねて計上せず/);
const assets=320n+480n+2800n,loan=1900n;assert.equal(assets,3600n);assert.equal(assets-loan,1700n);assert.equal(2800n-loan,900n);assert.deepEqual(q3.choices,['3,600万円','900万円','1,700万円']);assert.equal(100000n*21216n/100000n,21216n);assert.equal(100000n*19216n/100000n,19216n);assert.equal(100000n*471346n/100000n,471346n);const r=0.02,n=5,pow=(1+r)**n;assert.equal((r*pow/(pow-1)).toFixed(5),'0.21216');assert.equal(((1-1/pow)/r).toFixed(5),'4.71346');assert.equal((r/(pow-1)).toFixed(5),'0.19216');assert.deepEqual(q4.choices,['192.16万円','212.16万円','4,713.46万円']);assert.match(q4.caseText,/初回は運用開始から1年後/);assert.match(q4.caseText,/合計5回/);
const symbols='アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ',multi=q=>['multi_numeric','multi_choice','wordbank_number'].includes(q.kind),answer=q=>multi(q)?q.subAnswers.map(answer):q.numericInputFormat==='wordbank-symbol-v1'?symbols[q.answer-1]:q.kind==='choice'?q.answer:String(q.answer);for(const q of all)assert.equal(eng.grade(q,answer(q)),true,q.id);
let b=boot();b.ctx.__fpPracticalTest.openPractical();b.el('prSelectLevel3').click();const card=flat(b.el('prTracks')).find(e=>e.className==='pr-track'&&e.children.some(c=>c.textContent==='資産設計提案業務'));assert.ok(card);const btn=card.children.find(e=>e.tagName==='button');assert.ok(btn);btn.click();b.el('prNav').children[1].click();b.el('prChoices').children[0].click();b.el('prSaveExit').click();b=boot(b.storage);b.el('prResume').click();assert.equal(JSON.parse(b.storage.get(pd)).answers[1],0);b.el('prNav').children[2].click();b.el('prChoices').children[2].click();b.el('prNav').children[3].click();b.el('prChoices').children[1].click();b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,3);const saved=b.storage.get(ph);b=boot(b.storage);b.ctx.__fpPracticalTest.openPractical();flat(b.el('prHistoryList')).find(e=>e.textContent==='答え合わせ').click();assert.equal(b.storage.get(ph),saved);b.el('prRetry').click();assert.equal(JSON.parse(b.storage.get(pd)).answers[3],null);
for(const q of old){b=boot(new Map([[pd,JSON.stringify({track:q.track,questions:[q],answers:[q.answer],pos:0})]]));b.el('prResume').click();b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,1);assert.deepEqual(JSON.parse(b.storage.get(ph)).attempts[0].questions[0],q);b=boot(b.storage);b.ctx.__fpPracticalTest.openPractical();flat(b.el('prHistoryList')).find(e=>e.textContent==='答え合わせ').click();b.el('prRetry').click();assert.equal(JSON.parse(b.storage.get(pd)).questions[0].caseText,q.caseText);assert.equal(b.ctx.__fpMaterialView.lookup(q),null);}
console.log('PASS: independent rational multiyear cash flows/rounding; balance sheet; coefficient derivation and given precision;all choices;240 correct paths;new select/save/reload/grade/history/retry;3 old snapshots;VM/DOM only');
