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
const inputs=b=>flat(b.el('prMultiNumeric')).filter(e=>e.id?.startsWith('prSubInput'));
function enter(b,i,value){const e=inputs(b)[i];e.value=value;e.events.input({target:e});}
function start(b){b.ctx.__fpPracticalTest.openPractical();b.el('prSelectLevel2').click();const card=flat(b.el('prTracks')).find(e=>e.className==='pr-track'&&e.children.some(c=>c.textContent==='資産設計提案業務'));card.children.find(e=>e.textContent==='この科目を練習する').click();b.el('prNav').children[22].click();}
let b=boot();start(b);let q=JSON.parse(b.storage.get(pd)).questions[22];assert.equal(q.kind,'wordbank_number');assert.equal(inputs(b).length,3);assert.ok(flat(b.el('prMultiNumeric')).some(e=>e.textContent==='語群（入力するのは番号です）'));assert.ok(inputs(b).every(e=>e.inputMode==='numeric'));
for(let a=1;a<=6;a++)for(let c=1;c<=6;c++)for(let d=1;d<=6;d++)assert.equal(b.ctx.__fpPracticalTest.grade(q,[String(a),String(c),String(d)]),a===3&&c===6&&d===3);
for(const v of ['', '0','7','03','3.0','+3','-3','3e0','3,0','1/4','３．０','NaN','Infinity','3番']){enter(b,0,v);enter(b,1,'6');enter(b,2,'3');assert.equal(b.ctx.__fpPracticalTest.grade(q,[v,'6','3']),false);assert.equal(b.el('prAnswered').textContent,'0/40問 回答済');}
enter(b,0,'３');enter(b,1,'');enter(b,2,'');b.el('prSaveExit').click();b=boot(b.storage);b.el('prResume').click();assert.equal(inputs(b)[0].value,'３');assert.equal(inputs(b)[1].value,'');enter(b,1,'６');enter(b,2,'３');assert.equal(b.el('prAnswered').textContent,'1/40問 回答済');b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,1);b.el('prAll').click();assert.ok(flat(b.el('prReviews')).some(e=>e.textContent.includes('3番（1/4）')));assert.ok(flat(b.el('prReviews')).some(e=>e.textContent.includes('6番（1/8）')));
b=boot(b.storage);b.ctx.__fpPracticalTest.openPractical();flat(b.el('prHistoryList')).find(e=>e.textContent==='答え合わせ').click();assert.match(b.el('prSummary').textContent,/40問中1問正解/);b.el('prRetry').click();b.el('prNav').children[22].click();assert.deepEqual(JSON.parse(b.storage.get(pd)).answers[22],[null,null,null]);enter(b,0,'3');const raw=b.storage.get(pd);b.fault.key=pd;enter(b,1,'6');assert.equal(b.storage.get(pd),raw);b.fault.key=null;b.el('prSaveExit').click();b=boot(b.storage);b.el('prResume').click();assert.deepEqual(JSON.parse(b.storage.get(pd)).answers[22],['3',null,null]);const external=b.storage.get(pd)+' ';b.storage.set(pd,external);enter(b,2,'3');assert.equal(b.storage.get(pd),external);assert.ok(b.alerts.length);
for(const mutate of [x=>x.subAnswers[0].wordBank=[],x=>x.subAnswers[1].wordBank=['x','y'],x=>x.subAnswers[0].answer=0,x=>x.subAnswers[0].answer=7,x=>x.subAnswers[0].tolerance=1,x=>x.subAnswers[0].numericInputFormat='grouped-decimal-v1']){const broken=JSON.parse(JSON.stringify(q));mutate(broken);const raw=JSON.stringify({track:q.track,questions:[broken],answers:[['3','6','3']],pos:0});const c=boot(new Map([[pd,raw]]));c.el('prResume').click();assert.equal(c.storage.get(pd),raw);assert.ok(c.alerts.length);}
// Source mutation cannot change the snapshot's code-to-word mapping.
b=boot();start(b);b.run("PRACTICAL_QUESTIONS.find(q=>q.id==='pr-jafp2-023').subAnswers[0].wordBank[2]='CHANGED'");assert.equal(JSON.parse(b.storage.get(pd)).questions[22].subAnswers[0].wordBank[2],'1/4');enter(b,0,'3');enter(b,1,'6');enter(b,2,'3');b.el('prSubmit').click();b.el('prAll').click();assert.ok(flat(b.el('prReviews')).some(e=>e.textContent.includes('3番（1/4）')));
console.log('PASS wordbank216 combinations; invalid formats/range;fullwidth;partial/save/reload/history/retry;quota/stale;invalid snapshot schema;mapping snapshot isolation;current-form answers;VM/DOM only');
