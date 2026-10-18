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















const all=JSON.parse(boot().run('JSON.stringify(PRACTICAL_QUESTIONS)')),ids=['pr-jafp2-011','pr-jafp2-012'],qs=ids.map(id=>all.find(q=>q.id===id)),old=JSON.parse(fs.readFileSync(path.join(root,'development-notes/SUPERSEDED_PRACTICAL_V203_TO_V204.json'),'utf8')),eng=boot().ctx.__fpPracticalTest;
const income=360n+20n,expense=18n+24n+16n+62n+12n;assert.equal(96n,84n+12n);assert.equal(income-expense,248n);assert.equal(income-(expense-12n+96n),164n);assert.equal(income+40n-expense,288n);assert.equal(qs[0].answer,Number(income-expense));
const sale=6200n,estimated=sale*5n/100n,pretax=sale-estimated-200n,net=pretax-3000n;assert.equal(estimated,310n);assert.equal(pretax,5690n);assert.equal(net,2690n);assert.equal(sale-(sale-200n)*5n/100n-200n-3000n,2700n);assert.equal(qs[1].answer,Number(net));assert.ok(new Date('2026-01-01')-new Date('2014-06-01')>5*366*86400000);
for(const[i,q]of qs.entries()){assert.equal(q.kind,'numeric');assert.equal(q.unit,'万円');assert.equal(q.tolerance,0);assert.equal(q.revision,old[i].revision+1);assert.ok(eng.grade(q,String(q.answer)));assert.ok(!eng.grade(q,String(old[i].answer)));assert.equal(q.lawReferenceDate,'2026-04-01');}
for(const a of ['164','288','260','2480000'])assert.ok(!eng.grade(qs[0],a));for(const a of ['700','2700','5690','26900000'])assert.ok(!eng.grade(qs[1],a));assert.ok(eng.grade(qs[1],'２，６９０'));
let b=boot();b.ctx.__fpPracticalTest.openPractical();b.el('prSelectLevel2').click();const card=flat(b.el('prTracks')).find(e=>e.className==='pr-track'&&e.children.some(c=>c.textContent==='資産設計提案業務'));card.children.find(e=>e.textContent==='この科目を練習する').click();for(const[n,v]of [[10,'248'],[11,'2,690']]){b.el('prNav').children[n].click();b.el('prNumberInput').value=v;b.el('prNumberInput').events.input({target:b.el('prNumberInput')});}b.el('prSaveExit').click();b=boot(b.storage);b.el('prResume').click();assert.equal(b.el('prNumberInput').value,'2,690');b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,2);b.el('prAll').click();for(const q of qs)assert.ok(flat(b.el('prReviews')).some(e=>e.textContent==='解説：'+q.explanation));
for(const q of old){b=boot(new Map([[pd,JSON.stringify({track:q.track,questions:[q],answers:[String(q.answer)],pos:0})]]));b.el('prResume').click();b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,1);assert.deepEqual(JSON.parse(b.storage.get(ph)).attempts[0].questions[0],q);b=boot(b.storage);b.ctx.__fpPracticalTest.openPractical();flat(b.el('prHistoryList')).find(e=>e.textContent==='答え合わせ').click();b.el('prRetry').click();assert.deepEqual(JSON.parse(b.storage.get(pd)).questions[0],q);assert.equal(b.ctx.__fpMaterialView.lookup(q),null);}
console.log('PASS:2property IDs;BigInt principal/interest/deposit/depreciation and5%gross base;unit andwronganswer tests;save/reload/resume/grade/review/history/retry;actual2old snapshots. VM/DOM only.');
