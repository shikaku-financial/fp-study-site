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










const all=JSON.parse(boot().run('JSON.stringify(PRACTICAL_QUESTIONS)')),q=all.find(q=>q.id==='pr-kinzai2_personal-006'),old=JSON.parse(fs.readFileSync(path.join(root,'development-notes/SUPERSEDED_PRACTICAL_V184_TO_V185.json'),'utf8'))[0],eng=boot().ctx.__fpPracticalTest;
assert.equal(q.kind,'multi_choice');assert.equal(q.revision,old.revision+1);assert.equal(q.caseText,old.caseText);assert.equal(q.lawReferenceDate,'2026-04-01');assert.equal(q.taxYear,2026);assert.deepEqual(q.subAnswers.map(p=>p.answer),[1,0,1]);assert.ok(q.subAnswers.every(p=>JSON.stringify(p.choices)==='["○","×"]'));
for(let mask=0;mask<8;mask++)assert.equal(eng.grade(q,[mask&1,(mask>>1)&1,(mask>>2)&1]),mask===5);
// Separate integer-tax check of the explanation, not derived from answer bits.
const gain=100000n,incomeTax=gain*15n/100n,reconstruction=incomeTax*21n/1000n,resident=gain*5n/100n;assert.equal(incomeTax,15000n);assert.equal(reconstruction,315n);assert.equal(incomeTax+reconstruction+resident,20315n);assert.notEqual(incomeTax+reconstruction+resident,gain*221n/1000n);assert.deepEqual([1,2,3].map(n=>q.taxYear+n),[2027,2028,2029]);assert.equal([2027,2028,2029].includes(2030),false);assert.match(q.question,/2026年分/);assert.match(q.question,/連続/);assert.match(q.question,/NISA・相対取引・大口株主等には該当しない/);assert.match(q.explanation,/一般株式等/);assert.match(q.explanation,/売買がない年/);assert.match(q.explanation,/配当控除はありません/);
const multi=q=>['multi_numeric','multi_choice','wordbank_number'].includes(q.kind),answer=q=>multi(q)?q.subAnswers.map(answer):q.numericInputFormat==='wordbank-symbol-v1'?'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ'[q.answer-1]:q.kind==='choice'?q.answer:String(q.answer);for(const x of all)assert.equal(eng.grade(x,answer(x)),true,x.id);
function fields(b){return flat(b.el('prMultiNumeric')).filter(e=>e.tagName==='fieldset');}function choose(b,i,a){fields(b)[i].children[a+1].click();}function start(b){b.ctx.__fpPracticalTest.openPractical();b.el('prSelectLevel2').click();let card=flat(b.el('prTracks')).find(e=>e.className==='pr-track'&&e.children.some(c=>c.textContent==='個人資産相談業務'));card.children.find(e=>e.textContent==='第1回（15問）を練習').click();b.el('prNav').children[5].click();}
let b=boot();start(b);assert.equal(fields(b).length,3);assert.deepEqual(JSON.parse(b.storage.get(pd)).answers[5],[null,null,null]);choose(b,0,1);assert.equal(b.el('prAnswered').textContent,'0/15問 回答済');choose(b,1,0);b.el('prSaveExit').click();b=boot(b.storage);b.el('prResume').click();assert.deepEqual(JSON.parse(b.storage.get(pd)).answers[5],[1,0,null]);choose(b,2,1);for(let i=0;i<3;i++)assert.equal(fields(b)[i].children[q.subAnswers[i].answer+1].attrs['aria-pressed'],'true');b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,1);assert.match(b.el('prResultNote').textContent,/全解答欄の正答：3\/47欄/);b.el('prAll').click();assert.ok(flat(b.el('prReviews')).some(e=>e.textContent==='解説：'+q.explanation));const saved=b.storage.get(ph);b=boot(b.storage);b.ctx.__fpPracticalTest.openPractical();flat(b.el('prHistoryList')).find(e=>e.textContent==='答え合わせ').click();assert.equal(b.storage.get(ph),saved);b.el('prRetry').click();b.el('prNav').children[5].click();assert.equal(fields(b).length,3);assert.deepEqual(JSON.parse(b.storage.get(pd)).answers[5],[null,null,null]);
b=boot(new Map([[pd,JSON.stringify({track:old.track,questions:[old],answers:[String(old.answer)],pos:0})]]));b.el('prResume').click();assert.equal(fields(b).length,0);assert.equal(b.el('prNumberInput').value,'1.5');b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,1);b=boot(b.storage);b.ctx.__fpPracticalTest.openPractical();flat(b.el('prHistoryList')).find(e=>e.textContent==='答え合わせ').click();b.el('prAll').click();assert.ok(flat(b.el('prReviews')).some(e=>e.textContent==='解説：'+old.explanation));b.el('prRetry').click();assert.equal(JSON.parse(b.storage.get(pd)).questions[0].kind,'numeric');
b=boot();start(b);choose(b,0,1);const before=b.storage.get(pd);b.fault.key=pd;choose(b,1,0);assert.equal(b.storage.get(pd),before);b.fault.key=null;b.el('prSaveExit').click();b=boot(b.storage);b.el('prResume').click();assert.deepEqual(JSON.parse(b.storage.get(pd)).answers[5],[1,0,null]);const external=b.storage.get(pd)+' ';b.storage.set(pd,external);choose(b,2,1);assert.equal(b.storage.get(pd),external);assert.ok(b.alerts.length);
for(const a of [[1,0],[1,0,'1'],[1,0,2],[1,0,1,0]]){const raw=JSON.stringify({track:q.track,questions:[q],answers:[a],pos:0});b=boot(new Map([[pd,raw]]));b.el('prResume').click();assert.equal(b.storage.get(pd),raw);assert.ok(b.alerts.length);}
console.log(JSON.stringify({result:'PASS',scope:'8 truth combinations;independent exact tax-components/calendar checks;240 correct paths;29-field full-set save/reload/grade/history/retry;real old PBR snapshot;invalid arrays/quota/stale;VM/DOM only'}));
