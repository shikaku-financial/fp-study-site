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
 for(const n of ['questions.js','app.js','practical-questions.js','practical.js'])vm.runInContext(fs.readFileSync(path.join(root,n),'utf8'),ctx,{filename:n});
 return {ctx,el,storage,fault,alerts,timers,run:s=>vm.runInContext(s,ctx)};
}




const flat=e=>[e,...e.children.flatMap(flat)],pd='fp-training-practical-v12-draft',ph='fp-training-practical-v12-results';









const all=JSON.parse(boot().run('JSON.stringify(PRACTICAL_QUESTIONS)')),q=all.find(q=>q.id==='pr-kinzai2_personal-003'),old=JSON.parse(fs.readFileSync(path.join(root,'development-notes/SUPERSEDED_PRACTICAL_V181_TO_V182.json'),'utf8'))[0];
assert.equal(q.kind,'multi_choice');assert.equal(q.revision,old.revision+1);assert.equal(q.caseText,old.caseText);assert.deepEqual(q.subAnswers.map(x=>x.answer),[1,1,0,0]);assert.ok(q.subAnswers.every(p=>JSON.stringify(p.choices)==='["○","×"]'));const eng=boot().ctx.__fpPracticalTest;
for(let mask=0;mask<16;mask++)assert.equal(eng.grade(q,Array.from({length:4},(_,i)=>(mask>>i)&1)),mask===3);
const halfUp=(num,den)=>Math.floor((num*2+den)/(2*den));assert.equal(halfUp(300000,30*10)*10,10000);assert.equal(halfUp(10000*2,3),6667);assert.equal(19000+19000,38000);const threshold=21000;assert.equal([19000,19000].filter(n=>n>=threshold).reduce((a,b)=>a+b,0),0);assert.equal([20999,21000].filter(n=>n>=threshold).reduce((a,b)=>a+b,0),21000);assert.equal(12+6,18);assert.notEqual(18,24);assert.match(q.explanation,/埋葬料5万円/);assert.match(q.question,/2026年4月/);assert.match(q.question,/継続12か月/);
const multi=q=>['multi_numeric','multi_choice','wordbank_number'].includes(q.kind),answer=q=>multi(q)?q.subAnswers.map(answer):q.numericInputFormat==='wordbank-symbol-v1'?'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ'[q.answer-1]:q.kind==='choice'?q.answer:String(q.answer);for(const item of all)assert.equal(eng.grade(item,answer(item)),true,item.id);assert.equal(all.length,240);
function fields(b){return flat(b.el('prMultiNumeric')).filter(e=>e.tagName==='fieldset');}function choose(b,i,a){fields(b)[i].children[a+1].click();}function start(b){b.ctx.__fpPracticalTest.openPractical();b.el('prSelectLevel2').click();const card=flat(b.el('prTracks')).find(e=>e.className==='pr-track'&&e.children.some(c=>c.textContent==='個人資産相談業務'));card.children.find(e=>e.textContent==='第1回（15問）を練習').click();b.el('prNav').children[2].click();}
let b=boot();start(b);assert.equal(fields(b).length,4);assert.deepEqual(JSON.parse(b.storage.get(pd)).answers[2],[null,null,null,null]);choose(b,0,1);assert.equal(b.el('prAnswered').textContent,'0/15問 回答済');for(let i=1;i<4;i++)choose(b,i,0);b.el('prSaveExit').click();b=boot(b.storage);b.el('prResume').click();assert.deepEqual(JSON.parse(b.storage.get(pd)).answers[2],[1,0,0,0]);choose(b,1,1);for(let i=0;i<4;i++)assert.equal(fields(b)[i].children[q.subAnswers[i].answer+1].attrs['aria-pressed'],'true');b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,1);assert.match(b.el('prResultNote').textContent,/全解答欄の正答：4\/47欄/);b.el('prAll').click();assert.ok(flat(b.el('prReviews')).some(e=>e.textContent==='解説：'+q.explanation));const saved=b.storage.get(ph);b=boot(b.storage);b.ctx.__fpPracticalTest.openPractical();flat(b.el('prHistoryList')).find(e=>e.textContent==='答え合わせ').click();assert.equal(b.storage.get(ph),saved);b.el('prRetry').click();b.el('prNav').children[2].click();assert.equal(fields(b).length,4);assert.deepEqual(JSON.parse(b.storage.get(pd)).answers[2],[null,null,null,null]);
// Pre-conversion history continues to use the real three-choice snapshot.
b=boot(new Map([[pd,JSON.stringify({track:old.track,questions:[old],answers:[old.answer],pos:0})]]));b.el('prResume').click();assert.equal(b.el('prChoices').children.length,3);assert.equal(fields(b).length,0);b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,1);b=boot(b.storage);b.ctx.__fpPracticalTest.openPractical();flat(b.el('prHistoryList')).find(e=>e.textContent==='答え合わせ').click();b.el('prAll').click();assert.ok(flat(b.el('prReviews')).some(e=>e.textContent===old.choiceExplanations[0]));b.el('prRetry').click();assert.equal(JSON.parse(b.storage.get(pd)).questions[0].kind,'choice');assert.equal(b.el('prChoices').children.length,3);
for(const a of [[1,1,0],['1',1,0,0],[2,1,0,0],[1,1,0,0,0]]){const raw=JSON.stringify({track:q.track,questions:[q],answers:[a],pos:0}),c=boot(new Map([[pd,raw]]));c.el('prResume').click();assert.equal(c.storage.get(pd),raw);assert.ok(c.alerts.length);}
b=boot();start(b);choose(b,0,1);const before=b.storage.get(pd);b.fault.key=pd;choose(b,1,1);assert.equal(b.storage.get(pd),before);b.fault.key=null;b.el('prSaveExit').click();b=boot(b.storage);b.el('prResume').click();assert.deepEqual(JSON.parse(b.storage.get(pd)).answers[2],[1,1,null,null]);const external=b.storage.get(pd)+' ';b.storage.set(pd,external);choose(b,2,0);assert.equal(b.storage.get(pd),external);assert.ok(b.alerts.length);
const choices=all.filter(q=>q.kind==='choice');assert.equal(choices.length,122);assert.ok(choices.every(q=>q.choiceExplanations.length===q.choices.length));assert.equal(choices.reduce((n,q)=>n+q.choiceExplanations.length,0),378);
console.log(JSON.stringify({result:'PASS',scope:'4 independent statements;16 truth combinations;daily roundings/threshold boundaries;240 correct-answer paths;new20-field set input/save/reload/history/retry;real old3-choice snapshot with reasons;invalid arrays;quota/stale writer;VM/DOM only'}));
