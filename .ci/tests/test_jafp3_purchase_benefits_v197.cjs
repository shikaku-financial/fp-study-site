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











const all=JSON.parse(boot().run('JSON.stringify(PRACTICAL_QUESTIONS)')),ids=['pr-jafp3-007','pr-jafp3-012'],qs=ids.map(id=>all.find(q=>q.id===id)),old=JSON.parse(fs.readFileSync(path.join(root,'development-notes/SUPERSEDED_PRACTICAL_V196_TO_V197.json'),'utf8')),eng=boot().ctx.__fpPracticalTest;
// Integer arithmetic is independent of the prose expression and avoids floating point rounding.
const base=12347n*170000n/10000n,total=(base*1022n)/1000n;assert.equal(base,209899n);assert.equal(total,214516n);assert.equal((base*1022n+500n)/1000n,214517n);
const benefits={diagnosis:800000,hospital:21*9000,surgery:20*9000,death:10*9000};assert.equal(Object.values(benefits).reduce((a,b)=>a+b),1259000);assert.equal(benefits.diagnosis+benefits.hospital+benefits.surgery,1169000);assert.equal(800000+21*9000+20*9000+100*9000,2069000);
assert.deepEqual(qs.map(q=>q.choices),[['209,899円','214,516円','214,517円'],['1,169,000円','2,069,000円','1,259,000円']]);
for(let i=0;i<2;i++){const q=qs[i];assert.equal(q.revision,old[i].revision+1);assert.equal(q.answer,[1,2][i]);assert.equal(q.lawReferenceDate,'2026-04-01');assert.equal(q.choiceExplanations.length,3);for(let a=0;a<3;a++)assert.equal(eng.grade(q,a),a===[1,2][i]);assert.notEqual(q.caseText,old[i].caseText);}
assert.match(qs[0].caseText,/最後に合計額の円未満を切り捨てる/);assert.match(qs[1].caseText,/交通事故だけを原因/);assert.match(qs[1].caseText,/税引前/);assert.match(qs[1].caseText,/相殺や減額はない/);
let b=boot();b.ctx.__fpPracticalTest.openPractical();b.el('prSelectLevel3').click();const card=flat(b.el('prTracks')).find(e=>e.className==='pr-track'&&e.children.some(c=>c.textContent==='資産設計提案業務'));card.children.find(e=>e.tagName==='button').click();b.el('prNav').children[6].click();b.el('prChoices').children[1].click();b.el('prSaveExit').click();b=boot(b.storage);b.el('prResume').click();assert.equal(JSON.parse(b.storage.get(pd)).answers[6],1);b.el('prNav').children[11].click();b.el('prChoices').children[2].click();b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,2);b.el('prAll').click();for(const q of qs)for(const x of q.choiceExplanations)assert.ok(flat(b.el('prReviews')).some(e=>e.textContent===x));
for(const q of old){b=boot(new Map([[pd,JSON.stringify({track:q.track,questions:[q],answers:[q.answer],pos:0})]]));b.el('prResume').click();b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,1);assert.deepEqual(JSON.parse(b.storage.get(ph)).attempts[0].questions[0],q);b=boot(b.storage);b.ctx.__fpPracticalTest.openPractical();flat(b.el('prHistoryList')).find(e=>e.textContent==='答え合わせ').click();b.el('prRetry').click();assert.deepEqual(JSON.parse(b.storage.get(pd)).questions[0],q);assert.equal(b.ctx.__fpMaterialView.lookup(q),null);}
console.log('PASS: integer-based fund floor/round alternatives;four benefits and death-cause alternatives;6 grading paths;new save/reload/history;2 actual old snapshots. VM/DOM only;stipulated calculations, not legal verification.');
