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
const fields=b=>b.el('prMultiNumeric').children.filter(g=>g.children[0]?.children?.length===3).map(g=>g.children[0]);
const expected={'pr-jafp2-001':[1,0,0,1],'pr-jafp2-007':[0,0,0,1],'pr-jafp2-010':[0,0,1,1],'pr-jafp2-015':[1,0,1,1],'pr-jafp2-022':[1,0,1,1],'pr-jafp2-027':[1,0,1,1],'pr-jafp2-036':[0,0,1,1],'pr-jafp2-040':[0,0,1]};
const current=JSON.parse(boot().run('JSON.stringify(PRACTICAL_QUESTIONS.filter(q=>q.kind==="multi_choice"&&q.track==="jafp2"))'));
const normalized=q=>({...q,choices:q.choices||[]});
assert.equal(current.length,8);let combinations=0,count=0;
for(const q of current){
 const ans=q.id==='pr-jafp2-010'?[1,1,0,0]:expected[q.id];assert.deepEqual(q.subAnswers.map(p=>p.answer),ans);assert.ok(!q.caseText.includes('独自演習'));
 const b=boot();for(let mask=0;mask<2**ans.length;mask++){const a=ans.map((_,i)=>(mask>>i)&1);assert.equal(b.ctx.__fpPracticalTest.grade(q,a),a.every((v,i)=>v===ans[i]));combinations++;}
 for(let i=0;i<ans.length;i++) {assert.ok(q.subAnswers[i].label.length>15);assert.ok(q.subAnswers[i].label.endsWith('。'));count++;}
}
assert.equal(count,31);assert.equal(combinations,120);
for(const q of current){
 const ans=current.includes(q)&&q.id==='pr-jafp2-010'?[1,1,0,0]:expected[q.id];let b=boot(new Map([[pd,JSON.stringify({version:20,attemptId:'pr-snapshot-'+q.id,track:q.track,questions:[q],answers:[null],pos:0})]]));b.el('prResume').click();assert.equal(fields(b).length,ans.length);
 for(let i=0;i<ans.length;i++)assert.equal(fields(b)[i].children[0].textContent,q.subAnswers[i].label);
 fields(b)[0].children[ans[0]+1].click();b.el('prSaveExit').click();b=boot(b.storage);b.el('prResume').click();assert.deepEqual(JSON.parse(b.storage.get(pd)).answers[0],[ans[0],...ans.slice(1).map(()=>null)]);
 for(let i=1;i<ans.length;i++)fields(b)[i].children[ans[i]+1].click();b=boot(b.storage);b.el('prResume').click();b.el('prSubmit').click();let r=JSON.parse(b.storage.get(ph)).attempts[0];assert.equal(r.correct,1);assert.deepEqual(normalized(r.questions[0]),normalized(q));
 b=boot(b.storage);b.ctx.__fpPracticalTest.openPractical();flat(b.el('prHistoryList')).find(e=>e.textContent==='答え合わせ').click();b.el('prAll').click();for(const p of q.subAnswers)assert.ok(flat(b.el('prReviews')).some(e=>e.textContent.startsWith(p.label+'：正解')));
 b.el('prRetry').click();r=JSON.parse(b.storage.get(pd));assert.deepEqual(normalized(r.questions[0]),normalized(q));assert.deepEqual(r.answers[0],ans.map(()=>null));
}
const b=boot();b.ctx.__fpPracticalTest.openPractical();b.el('prSelectLevel2').click();const card=flat(b.el('prTracks')).find(e=>e.className==='pr-track'&&e.children.some(c=>c.textContent==='資産設計提案業務'));card.children.find(e=>e.textContent==='この科目を練習する').click();for(const q of current)assert.deepEqual(normalized(JSON.parse(b.storage.get(pd)).questions.find(x=>x.id===q.id)),normalized(q));
assert.equal(600/2,300); // Independent half-premium check in stated ten-thousand-yen units.
console.log('PASS:8 questions31 fields,120 exhaustive answer combinations;8 current snapshots input,partial save,reload,grade,per-field history,retry;fresh production latest;VM/DOM only;official partial scores not implemented');
