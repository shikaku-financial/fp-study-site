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
function start(b,pos){b.ctx.__fpPracticalTest.openPractical();b.el('prSelectLevel2').click();const card=flat(b.el('prTracks')).find(e=>e.className==='pr-track'&&e.children.some(c=>c.textContent==='資産設計提案業務'));card.children.find(e=>e.textContent==='この科目を練習する').click();b.el('prNav').children[pos].click();}
for(const [pos,ans] of [[6,[0,0,0,1]],[14,[1,0,1,1]],[21,[1,0,1,1]]]){
 let b=boot();start(b,pos);let q=JSON.parse(b.storage.get(pd)).questions[pos];assert.equal(fields(b).length,4);
 for(let mask=0;mask<16;mask++){const a=Array.from({length:4},(_,i)=>(mask>>i)&1);assert.equal(b.ctx.__fpPracticalTest.grade(q,a),a.every((v,i)=>v===ans[i]));}
 fields(b)[0].children[ans[0]+1].click();assert.equal(b.el('prAnswered').textContent,'0/40問 回答済');b.el('prSaveExit').click();b=boot(b.storage);b.el('prResume').click();assert.deepEqual(JSON.parse(b.storage.get(pd)).answers[pos],[ans[0],null,null,null]);
 for(let i=1;i<4;i++)fields(b)[i].children[ans[i]+1].click();assert.equal(b.el('prAnswered').textContent,'1/40問 回答済');b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,1);b.el('prAll').click();assert.ok(flat(b.el('prReviews')).some(e=>e.textContent.includes('④')&&e.textContent.includes('：正解')));
 b=boot(b.storage);b.ctx.__fpPracticalTest.openPractical();flat(b.el('prHistoryList')).find(e=>e.textContent==='答え合わせ').click();assert.match(b.el('prSummary').textContent,/40問中1問正解/);b.el('prRetry').click();b.el('prNav').children[pos].click();assert.deepEqual(JSON.parse(b.storage.get(pd)).answers[pos],[null,null,null,null]);
 for(let i=0;i<4;i++)fields(b)[i].children[(i===0?1-ans[i]:ans[i])+1].click();b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,0);b.el('prRetryMistakes').click();assert.ok(JSON.parse(b.storage.get(pd)).questions.some(x=>x.id===q.id));
 for(const a of [[0,0,0],['0',0,0,1],[2,0,0,1]]){const raw=JSON.stringify({track:q.track,questions:[q],answers:[a],pos:0});const c=boot(new Map([[pd,raw]]));c.el('prResume').click();assert.equal(c.storage.get(pd),raw);assert.ok(c.alerts.length);}
 b=boot();start(b,pos);fields(b)[0].children[ans[0]+1].click();const raw=b.storage.get(pd);b.fault.key=pd;fields(b)[1].children[ans[1]+1].click();assert.equal(b.storage.get(pd),raw);b.fault.key=null;b.el('prSaveExit').click();b=boot(b.storage);b.el('prResume').click();assert.deepEqual(JSON.parse(b.storage.get(pd)).answers[pos],[ans[0],ans[1],null,null]);const external=b.storage.get(pd)+' ';b.storage.set(pd,external);fields(b)[2].children[ans[2]+1].click();assert.equal(b.storage.get(pd),external);assert.ok(b.alerts.length);
}
const old=JSON.parse(fs.readFileSync(path.join(root,'development-notes/SUPERSEDED_PRACTICAL_V149_TO_V150.json'),'utf8'));assert.equal(old.length,3);
for(const q of old){const answer=q.kind==='multi_choice'?q.subAnswers.map(p=>p.answer):q.answer;let b=boot(new Map([[pd,JSON.stringify({track:q.track,questions:[q],answers:[answer],pos:0})]]));b.el('prResume').click();if(q.kind==='multi_choice')assert.equal(fields(b).length,3);else assert.equal(b.el('prChoices').children.length,4);b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,1);b.el('prRetry').click();const saved=JSON.parse(b.storage.get(pd));assert.equal(saved.questions[0].kind,q.kind);if(q.kind==='multi_choice')assert.equal(saved.questions[0].subAnswers.length,3);}
console.log('PASS:3 current four-field forms;48 complete combinations;partial/save/reload/history/retry/wrong-only;invalid arrays/quota/stale;3 actual legacy snapshots;VM/DOM only');
