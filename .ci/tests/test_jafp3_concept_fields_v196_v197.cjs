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










const all=JSON.parse(boot().run('JSON.stringify(PRACTICAL_QUESTIONS)')),ids=[5,10,11].map(i=>'pr-jafp3-'+String(i).padStart(3,'0')),qs=ids.map(id=>all.find(q=>q.id===id)),old=JSON.parse(fs.readFileSync(path.join(root,'development-notes/SUPERSEDED_PRACTICAL_V195_TO_V196.json'),'utf8')),eng=boot().ctx.__fpPracticalTest;
const expected=[0,1,0],truth=[[[true,true,true],[false,true,true],[true,true,false]],[[true,false,false],[true,true,true],[false,true,true]],[[true,true,true],[false,false,false],[false,false,false]]];
for(let i=0;i<3;i++){const q=qs[i];assert.equal(q.kind,'choice');assert.equal(q.choices.length,3);assert.equal(q.choiceExplanations.length,3);assert.equal(q.answer,expected[i]);assert.equal(q.revision,old[i].revision+1);assert.equal(q.answer,old[i].answer);assert.notEqual(q.caseText,old[i].caseText);assert.equal(q.lawReferenceDate,'2026-04-01');assert.equal(q.sourceCheckedDate,'2026-10-18');assert.match(q.question,/空欄/);for(let a=0;a<3;a++)assert.equal(eng.grade(q,a),truth[i][a].every(Boolean));assert.equal(truth[i].filter(r=>r.every(Boolean)).length,1);}
assert.deepEqual(qs[0].choices,['2か月／20日／2年','1か月／20日／2年','2か月／20日／3年']);assert.match(qs[0].caseText,/2026年3月31日/);assert.match(qs[0].caseText,/翌4月1日/);assert.match(qs[0].explanation,/翌営業日/);assert.match(qs[0].explanation,/必着/);assert.match(qs[1].choices[1],/再調達原価／取引事例比較法／現在価値/);assert.match(qs[1].explanation,/比準価格は取引事例比較法/);assert.match(qs[2].choices[0],/期間の定めのない契約／更新がなく期間満了で終了／所定の書面または電磁的記録/);assert.match(qs[2].caseText,/新規賃貸借/);assert.match(qs[2].caseText,/一時使用/);assert.match(qs[2].caseText,/切替えも扱わない/);assert.match(qs[2].explanation,/2022年5月18日/);assert.ok('2022-05-18'<'2026-04-01');assert.match(qs[2].explanation,/再契約まで禁止されるわけではありません/);
let combos=0;for(let a=0;a<3;a++)for(let b=0;b<3;b++)for(let c=0;c<3;c++){const values=[a,b,c];assert.equal(qs.every((q,i)=>eng.grade(q,values[i])),a===0&&b===1&&c===0);combos++;}assert.equal(combos,27);
const symbols='アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ',multi=q=>['multi_numeric','multi_choice','wordbank_number'].includes(q.kind),answer=q=>multi(q)?q.subAnswers.map(answer):q.numericInputFormat==='wordbank-symbol-v1'?symbols[q.answer-1]:q.kind==='choice'?q.answer:String(q.answer);for(const q of all)assert.equal(eng.grade(q,answer(q)),true,q.id);
let b=boot();b.ctx.__fpPracticalTest.openPractical();b.el('prSelectLevel3').click();const card=flat(b.el('prTracks')).find(e=>e.className==='pr-track'&&e.children.some(c=>c.textContent==='資産設計提案業務'));card.children.find(e=>e.tagName==='button').click();b.el('prNav').children[4].click();b.el('prChoices').children[0].click();b.el('prSaveExit').click();b=boot(b.storage);b.el('prResume').click();assert.equal(JSON.parse(b.storage.get(pd)).answers[4],0);b.el('prNav').children[9].click();b.el('prChoices').children[1].click();b.el('prNav').children[10].click();b.el('prChoices').children[0].click();b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,3);b.el('prAll').click();for(const q of qs)for(const x of q.choiceExplanations)assert.ok(flat(b.el('prReviews')).some(e=>e.textContent===x));const saved=b.storage.get(ph);b=boot(b.storage);b.ctx.__fpPracticalTest.openPractical();flat(b.el('prHistoryList')).find(e=>e.textContent==='答え合わせ').click();assert.equal(b.storage.get(ph),saved);b.el('prRetry').click();assert.equal(JSON.parse(b.storage.get(pd)).answers[4],null);
for(const q of old){b=boot(new Map([[pd,JSON.stringify({track:q.track,questions:[q],answers:[q.answer],pos:0})]]));b.el('prResume').click();b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,1);assert.deepEqual(JSON.parse(b.storage.get(ph)).attempts[0].questions[0],q);b=boot(b.storage);b.ctx.__fpPracticalTest.openPractical();flat(b.el('prHistoryList')).find(e=>e.textContent==='答え合わせ').click();b.el('prRetry').click();assert.deepEqual(JSON.parse(b.storage.get(pd)).questions[0],q);assert.equal(b.ctx.__fpMaterialView.lookup(q),null);}
console.log('PASS: independent truth of9 alternatives/27 three-question combinations;applicable conditions and electronic-vs-paper distinctions;240 correct paths;new select/save/reload/grade/history/retry;3 actual old snapshots and material fallback;VM/DOM only. These tests do not establish legal truth beyond documented source review.');
