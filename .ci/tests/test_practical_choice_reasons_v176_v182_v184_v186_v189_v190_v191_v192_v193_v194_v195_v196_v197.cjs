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






const all=JSON.parse(boot().run('JSON.stringify(PRACTICAL_QUESTIONS)'));const ids=JSON.parse(fs.readFileSync(path.join(root,'development-notes/SUPERSEDED_PRACTICAL_V175_TO_V176.json'),'utf8')).map(q=>q.id);
const samples=[...all.filter(q=>q.kind==='choice'),...JSON.parse(fs.readFileSync(path.join(root,'development-notes/SUPERSEDED_PRACTICAL_V175_TO_V176.json'),'utf8'))];
const legacy={...samples[0]};delete legacy.choiceExplanations;samples.push(legacy,{...legacy,choiceExplanations:['length mismatch']});const numeric=all.find(q=>q.kind==='numeric');samples.push(numeric);
for(const q of samples){let b=boot(new Map([[pd,JSON.stringify({track:q.track,questions:[q],answers:[null],pos:0})]]));b.el('prResume').click();assert.ok(!flat(b.el('prReviews')).some(e=>e.textContent==='各選択肢の解説を見る'));
 if(q.kind==='numeric'){b.el('prNumberInput').value=String(q.answer);b.el('prNumberInput').events.input({target:b.el('prNumberInput')});}else b.el('prChoices').children[q.answer].click();b.el('prSubmit').click();b.el('prAll').click();
 const valid=q.kind==='choice'&&Array.isArray(q.choiceExplanations)&&q.choiceExplanations.length===q.choices.length;
 for(let reload=0;reload<2;reload++){
  const nodes=flat(b.el('prReviews'));assert.equal(nodes.filter(e=>e.textContent==='各選択肢の解説を見る').length,valid?1:0);
  if(valid)for(let i=0;i<q.choices.length;i++){assert.ok(nodes.some(e=>e.textContent===q.choices[i]));assert.ok(nodes.some(e=>e.textContent===q.choiceExplanations[i]));}
  const record=JSON.parse(b.storage.get(ph)).attempts[0];assert.deepEqual(record.questions[0],q);assert.equal(record.correct,1);
  if(reload===0){b=boot(b.storage);b.ctx.__fpPracticalTest.openPractical();flat(b.el('prHistoryList')).find(e=>e.textContent==='答え合わせ').click();b.el('prAll').click();}
 }
}
assert.equal(samples.length,133);console.log(JSON.stringify({result:'PASS',scope:'133 samples:all122 current choice questions;8 old;missing/mismatched/numeric;no pre-grade disclosure;post-grade and reloaded-history option reasons;stored snapshots unchanged;VM/DOM only'}));
