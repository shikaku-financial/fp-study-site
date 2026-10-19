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















const qs=JSON.parse(boot().run('JSON.stringify(PRACTICAL_QUESTIONS)')),ids=['pr-jafp2-008','pr-jafp2-009','pr-jafp2-010'],q8=qs.find(q=>q.id===ids[0]),q9=qs.find(q=>q.id===ids[1]),q10=qs.find(q=>q.id===ids[2]),eng=boot().ctx.__fpPracticalTest;assert.equal(21n*20n,420n);assert.equal(420n*80n/100n,336n);assert.equal(q8.answer,420);assert.equal(q9.answer,1);assert.equal(q9.choices.length,4);assert.equal(q9.choiceExplanations.length,4);for(let i=0;i<4;i++)assert.equal(eng.grade(q9,i),i===1);for(let n=0;n<16;n++){const answers=[(n>>3)&1,(n>>2)&1,(n>>1)&1,n&1];assert.equal(eng.grade(q10,answers),answers.join()==='1,1,0,0');}assert.equal(q10.subAnswers.length,4);assert.equal(35n>=30n,true);assert.equal(55n>=50n,true);assert.equal(10n<20n,true);assert.ok(eng.grade(q8,'420'));assert.ok(!eng.grade(q8,'336'));assert.equal(280n-200n,80n);for(const q of JSON.parse(fs.readFileSync(path.join(root,'development-notes/SUPERSEDED_PRACTICAL_V204_TO_V205.json'),'utf8'))){const answer=q.subAnswers?q.subAnswers.map(s=>s.answer):q.answer;let b=boot(new Map([[pd,JSON.stringify({track:q.track,questions:[q],answers:[answer],pos:0})]]));b.el('prResume').click();b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,1);assert.deepEqual(JSON.parse(b.storage.get(ph)).attempts[0].questions[0],q);b=boot(b.storage);b.ctx.__fpPracticalTest.openPractical();flat(b.el('prHistoryList')).find(e=>e.textContent==='答え合わせ').click();b.el('prRetry').click();assert.deepEqual(JSON.parse(b.storage.get(pd)).questions[0],{...q,choices:q.choices||[]});assert.equal(b.ctx.__fpMaterialView.lookup(q),null);}console.log('PASS:3draft IDs;geometry/area independentcalculation;all4options;all16multichoice patterns;3actualold snapshots grading/history/retry/fallback. VM/DOM only.');
