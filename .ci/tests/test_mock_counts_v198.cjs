// Fresh VM and DOM per reload; persistent storage survives. Not a real browser.
const vm=require('node:vm'),fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=process.argv[2]?path.resolve(process.argv[2]):path.resolve(__dirname,'..');
class Element{
 constructor(){this.children=[];this.events={};this.value='';this.style={};this.textContent='';this.classes=new Set();this.classList={add:n=>this.classes.add(n),remove:n=>this.classes.delete(n),toggle:(n,on)=>{if(on)this.classes.add(n);else this.classes.delete(n)}};}
 append(...x){this.children.push(...x)} appendChild(x){this.append(x);return x} replaceChildren(...x){this.children=x} setAttribute(){} addEventListener(n,f){this.events[n]=f} click(){if(!this.disabled)this.events.click?.({preventDefault(){},target:this})}get options(){return this.children}querySelectorAll(){return []}remove(){}
}
function boot(storage=new Map()){
 const elements=new Map(),fault={key:null},alerts=[],timers=new Set();let tick=0;
 const el=id=>{if(!elements.has(id))elements.set(id,new Element());return elements.get(id)};
 const ctx=vm.createContext({console,Date,Math,Number,JSON,Map,Set,Array,String,Object,Boolean,parseInt,parseFloat,isNaN,document:{getElementById:el,createElement:()=>new Element(),addEventListener(){},hidden:false,querySelectorAll(){return []}},localStorage:{getItem:k=>storage.get(k)??null,setItem:(k,v)=>{if(fault.key===k||fault.key==='*')throw Error('quota');storage.set(k,v)},removeItem:k=>storage.delete(k)},alert:s=>alerts.push(s),confirm:()=>true,setInterval:()=>{timers.add(++tick);return tick},clearInterval:i=>timers.delete(i),setTimeout:()=>1});ctx.window=ctx;ctx.scrollTo=()=>{};
 for(const n of ['questions.js','app.js','practical-questions.js','practical.js'])vm.runInContext(fs.readFileSync(path.join(root,n),'utf8'),ctx,{filename:n});
 return {ctx,el,storage,fault,alerts,timers,run:s=>vm.runInContext(s,ctx)};
}

for(const level of ['3','2']){
 const b=boot();b.run(`setLevel('${level}')`);
 const info=b.run(`fullExamAvailability('${level}')`);
 assert.equal(info.ready,true);
 assert.ok(!info.message.includes('/30')&&!info.message.includes('/60'));
 assert.ok(info.message.includes(level==='3'?'1回の出題：○×30問＋三択30問':'1回の出題：四択60問'));
 assert.ok(info.message.includes(level==='3'?'収録：○×90問・三択90問':'収録：四択180問'));
 assert.equal(b.el('count').textContent,'現在の収録問題：180問（学科）');
 b.run("createExam('full')");
 const questions=JSON.parse(b.run('JSON.stringify(getExamQuestions())'));
 assert.equal(questions.length,60);assert.equal(new Set(questions.map(q=>q.id)).size,60);
 for(const category of b.run('CATEGORIES.slice(1)')){
  const group=questions.filter(q=>q.category===category);assert.equal(group.length,10);
  if(level==='3') for(const format of ['true_false','three_choice'])assert.equal(group.filter(q=>q.format===format).length,5);
  else assert.ok(group.every(q=>q.format==='four_choice'));
 }
}
// Plenty overall but one subject/format lacks the minimum; beginning a new full
// exam must be blocked and the existing saved attempt must remain byte-identical.
for(const level of ['3','2']){
 const b=boot();b.run(`setLevel('${level}');createExam('mini')`);
 const before=b.storage.get('fp-training-exam-draft-v12');
 b.run(`for(let i=QUESTIONS.length-1;i>=0;i--){const q=QUESTIONS[i];if(q.level==='${level}'&&q.category===CATEGORIES[1]${level==='3'?"&&q.format==='three_choice'":''})QUESTIONS.splice(i,1)}`);
 b.run('updateHome()');const info=b.run(`fullExamAvailability('${level}')`);
 assert.equal(info.ready,false);assert.ok(info.message.includes('必要問題数が不足'));
 b.run("createExam('full')");assert.equal(b.storage.get('fp-training-exam-draft-v12'),before);assert.ok(b.alerts.length);
}
console.log('PASS: display distinguishes per-exam/pool counts; 3/2-grade full exams balance 60 unique questions; subject/format shortage blocks replacement and preserves old draft. VM/DOM only.');
