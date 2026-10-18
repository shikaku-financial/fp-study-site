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









const all=JSON.parse(boot().run('JSON.stringify(PRACTICAL_QUESTIONS)'));const multi=q=>['multi_numeric','multi_choice','wordbank_number'].includes(q.kind);const rows=all.filter(multi);assert.ok(rows.length>=11);
const right=q=>q.numericInputFormat==='wordbank-symbol-v1'?'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ'[q.answer-1]:q.kind==='choice'?q.answer:String(q.answer);
const wrong=q=>q.kind==='choice'?(q.answer+1)%q.choices.length:String(q.answer+Math.max(1000,(q.tolerance||0)*100+1));
let runs=0;
function run(q,mode){const scalar=all.find(x=>x.track===q.track&&!multi(x))||JSON.parse(fs.readFileSync(path.join(root,'development-notes/SUPERSEDED_PRACTICAL_V193_TO_V194.json'),'utf8')).find(x=>x.track===q.track&&x.id!==q.id&&!multi(x));assert.ok(scalar);let a=q.subAnswers.map(right),correctFields=q.subAnswers.length+1,correctQuestions=2;
 if(mode==='partial'){a[0]=wrong(q.subAnswers[0]);correctFields--;correctQuestions=1;}
 if(mode==='empty'){a=null;correctFields=1;correctQuestions=1;}
 const store=new Map([[pd,JSON.stringify({track:q.track,questions:[q,scalar],answers:[a,right(scalar)],pos:0})]]);let b=boot(store);b.el('prResume').click();b.el('prSubmit').click();const stored=JSON.parse(store.get(ph));assert.equal(stored.attempts[0].correct,correctQuestions);assert.deepEqual(stored.attempts[0].questions,[q,scalar]);assert.ok(!('correctFields' in stored.attempts[0]));assert.match(b.el('prResultNote').textContent,new RegExp(`全解答欄の正答：${correctFields}/${q.subAnswers.length+1}欄`));assert.match(b.el('prResultNote').textContent,/公式の得点・部分点ではありません/);
const before=store.get(ph);b=boot(store);b.ctx.__fpPracticalTest.openPractical();flat(b.el('prHistoryList')).find(e=>e.textContent==='答え合わせ').click();assert.match(b.el('prResultNote').textContent,new RegExp(`全解答欄の正答：${correctFields}/${q.subAnswers.length+1}欄`));assert.equal(store.get(ph),before);b.el('prRetry').click();assert.deepEqual(JSON.parse(store.get(pd)).questions,[q,scalar].map(x=>({...x,choices:Array.isArray(x.choices)?x.choices:[]})));runs++;
}
for(const q of rows)for(const mode of ['correct','partial','empty'])run(q,mode);
// A valid older snapshot with a different answer must use its own stored answer.
const legacy=JSON.parse(JSON.stringify(rows.find(q=>q.kind==='multi_numeric')));legacy.subAnswers[0].answer+=7;legacy.revision=Math.max(1,legacy.revision-1);run(legacy,'correct');
const scalar=all.find(q=>q.kind==='choice');let b=boot(new Map([[pd,JSON.stringify({track:scalar.track,questions:[scalar],answers:[scalar.answer],pos:0})]]));b.el('prResume').click();b.el('prSubmit').click();assert.ok(!b.el('prResultNote').textContent.includes('全解答欄の正答'));
console.log(JSON.stringify({result:'PASS',multi_questions:rows.length,answer_fields:rows.reduce((s,q)=>s+q.subAnswers.length,0),result_and_reload_and_history_and_retry_paths:runs,legacy_snapshot_answer_used:true,scalar_only_summary_unchanged:true,mode:'VM/DOM simulation'}));
