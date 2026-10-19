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















const all=JSON.parse(boot().run('JSON.stringify(PRACTICAL_QUESTIONS)')),ids=[13,14,15,16,17].map(n=>'pr-jafp2-'+String(n).padStart(3,'0')),qs=ids.map(id=>all.find(q=>q.id===id));
const expected=[[1700,2200,9],1,[1,0,1,1],1,16800],old=JSON.parse(fs.readFileSync(path.join(root,'development-notes/SUPERSEDED_PRACTICAL_V205_TO_V206.json'),'utf8'));
const eng=boot().ctx.__fpPracticalTest;
assert.equal(10n-5n+1n,6n);assert.equal(6n*10000n+10n*3000n,90000n);assert.equal(500n+1200n,1700n);assert.equal(1700n+500n,2200n);
const general=60000n/4n+20000n,medical=80000n/4n+20000n,pension=40000n/2n+10000n;assert.equal(general+medical+pension,105000n);assert.equal(60000n/2n+10000n+medical+pension,110000n);assert.equal(general+medical+40000n/2n,95000n);assert.equal(60000n+80000n+40000n,180000n);
assert.equal(600n/2n,300n);assert.equal(2400n*50n/100n,1200n);assert.equal(20000n*1200n/1000n,24000n);assert.equal(24000n*70n/100n,16800n);assert.equal(24000n*30n/100n,7200n);
for(let i=0;i<qs.length;i++)assert.ok(eng.grade(qs[i],expected[i]));
for(const a of [[1700,2200,10],[1700,2200,8],[1700,2200,6],[2200,2200,9]])assert.ok(!eng.grade(qs[0],a));
for(const n of [0,1,2,3]){assert.equal(eng.grade(qs[1],n),n===1);assert.equal(eng.grade(qs[3],n),n===1);}
for(let mask=0;mask<16;mask++){const a=[(mask>>3)&1,(mask>>2)&1,(mask>>1)&1,mask&1];assert.equal(eng.grade(qs[2],a),a.join()==='1,0,1,1');}
for(const a of ['24000','7200','168','168000','33,600','1,6800'])assert.ok(!eng.grade(qs[4],a));assert.ok(eng.grade(qs[4],'１６，８００'));
// A real new40-question start supplies current data. UI interactions then store five answered questions.
let b=boot();b.ctx.__fpPracticalTest.openPractical();b.el('prSelectLevel2').click();const card=flat(b.el('prTracks')).find(e=>e.className==='pr-track'&&e.children.some(c=>c.textContent==='資産設計提案業務'));card.children.find(e=>e.textContent==='この科目を練習する').click();
const fields=b=>b.el('prMultiNumeric').children.filter(g=>g.className==='pr-sub-answer');
for(let n=0;n<5;n++){
 b.el('prNav').children[12+n].click();const q=qs[n],a=expected[n];
 if(q.kind==='multi_numeric')for(let i=0;i<a.length;i++){const input=fields(b)[i].children[1].children[0];input.value=String(a[i]);input.events.input();}
 else if(q.kind==='multi_choice')for(let i=0;i<a.length;i++)fields(b)[i].children[0].children[a[i]+1].click();
 else if(q.kind==='choice')b.el('prChoices').children[a].click();
 else{b.el('prNumberInput').value='１６，８００';b.el('prNumberInput').events.input({target:b.el('prNumberInput')});}
}
b.el('prSaveExit').click();const stored=JSON.parse(b.storage.get(pd));assert.deepEqual(stored.answers.slice(12,17),[['1700','2200','9'],1,[1,0,1,1],1,'１６，８００']);
b=boot(b.storage);b.el('prResume').click();assert.equal(b.el('prNumberInput').value,'１６，８００');b.el('prSubmit').click();const result=JSON.parse(b.storage.get(ph)).attempts[0];assert.equal(result.correct,5);b.el('prAll').click();for(const q of qs)assert.ok(flat(b.el('prReviews')).some(e=>e.textContent==='解説：'+q.explanation));
b=boot(b.storage);b.ctx.__fpPracticalTest.openPractical();flat(b.el('prHistoryList')).find(e=>e.textContent==='答え合わせ').click();b.el('prRetry').click();assert.equal(JSON.parse(b.storage.get(pd)).questions.length,40);
// Preserve all five actual old snapshots independently, including the old10万円 and24,000円.
for(const q of old){const answer=q.subAnswers?q.subAnswers.map(x=>x.answer):q.answer;b=boot(new Map([[pd,JSON.stringify({track:q.track,questions:[q],answers:[answer],pos:0})]]));b.el('prResume').click();b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,1);assert.deepEqual(JSON.parse(b.storage.get(ph)).attempts[0].questions[0],q);assert.equal(b.ctx.__fpMaterialView.lookup(q),null);b=boot(b.storage);b.ctx.__fpPracticalTest.openPractical();flat(b.el('prHistoryList')).find(e=>e.textContent==='答え合わせ').click();b.el('prRetry').click();assert.deepEqual(JSON.parse(b.storage.get(pd)).questions[0],{...q,choices:q.choices||[]});}
console.log('PASS:5 new IDs/10 fields;independent BigInt units/inclusive-days/tax tiers/discount;8 choice alternatives and16 binary patterns;fresh40-set input/save/reload/resume/grade5/review/history/retry;5 actual old snapshots grading/history/retry/materialfallback. VM/DOM only.');
