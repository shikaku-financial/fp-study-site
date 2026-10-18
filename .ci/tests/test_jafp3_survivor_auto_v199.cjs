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












const all=JSON.parse(boot().run('JSON.stringify(PRACTICAL_QUESTIONS)')),ids=['pr-jafp3-013','pr-jafp3-014'],qs=ids.map(id=>all.find(q=>q.id===id)),old=JSON.parse(fs.readFileSync(path.join(root,'development-notes/SUPERSEDED_PRACTICAL_V198_TO_V199.json'),'utf8')),eng=boot().ctx.__fpPracticalTest;
const costs=[240n,6240n,1800n,960n].reduce((a,b)=>a+b),income=[2040n,4080n,660n].reduce((a,b)=>a+b),assets=820n;
assert.equal(costs,9240n);assert.equal(income,6780n);assert.equal(costs-income-assets,1640n);assert.equal(costs-income,2460n);assert.equal(costs-240n-income-assets,1400n);
assert.deepEqual(qs[0].choices,['2,460万円','1,640万円','1,400万円']);
// Independent accident decision matrix: insured object and excluded relationship.
const rules=[{damaged:'insured_car',relative:false,covered:true},{damaged:'own_gate',relative:false,covered:false},{damaged:'person',relative:true,covered:false}];
assert.deepEqual(rules.map(x=>x.damaged==='insured_car'&&!x.relative),rules.map(x=>x.covered));
for(let i=0;i<2;i++){const q=qs[i];assert.equal(q.revision,old[i].revision+1);assert.equal(q.answer,[1,0][i]);assert.equal(q.lawReferenceDate,'2026-04-01');assert.equal(q.choiceExplanations.length,3);for(let a=0;a<3;a++)assert.equal(eng.grade(q,a),a===[1,0][i]);}
assert.match(qs[0].caseText,/年額ではない/);assert.match(qs[0].caseText,/死亡保険金を含めず/);assert.match(qs[1].caseText,/重大な過失/);assert.match(qs[1].caseText,/自賠責保険の給付は考慮しない/);
let b=boot();b.ctx.__fpPracticalTest.openPractical();b.el('prSelectLevel3').click();const card=flat(b.el('prTracks')).find(e=>e.className==='pr-track'&&e.children.some(c=>c.textContent==='資産設計提案業務'));card.children.find(e=>e.tagName==='button').click();b.el('prNav').children[12].click();b.el('prChoices').children[1].click();b.el('prSaveExit').click();b=boot(b.storage);b.el('prResume').click();assert.equal(JSON.parse(b.storage.get(pd)).answers[12],1);b.el('prNav').children[13].click();b.el('prChoices').children[0].click();b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,2);b.el('prAll').click();for(const q of qs)for(const x of q.choiceExplanations)assert.ok(flat(b.el('prReviews')).some(e=>e.textContent===x));
for(const q of old){b=boot(new Map([[pd,JSON.stringify({track:q.track,questions:[q],answers:[q.answer],pos:0})]]));b.el('prResume').click();b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,1);assert.deepEqual(JSON.parse(b.storage.get(ph)).attempts[0].questions[0],q);b=boot(b.storage);b.ctx.__fpPracticalTest.openPractical();flat(b.el('prHistoryList')).find(e=>e.textContent==='答え合わせ').click();b.el('prRetry').click();assert.deepEqual(JSON.parse(b.storage.get(pd)).questions[0],q);assert.equal(b.ctx.__fpMaterialView.lookup(q),null);}
console.log('PASS: independent BigInt cash totals and 3 alternatives;accident/object relationship matrix;6 grading paths;new save/reload/history;2 real old snapshots. VM/DOM only, not legal amendment audit.');
