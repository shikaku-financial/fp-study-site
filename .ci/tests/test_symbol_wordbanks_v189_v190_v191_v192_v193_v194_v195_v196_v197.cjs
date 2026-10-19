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










const all=JSON.parse(boot().run('JSON.stringify(PRACTICAL_QUESTIONS)')),symbols='アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ',ids=[1,7,12].map(i=>'pr-kinzai2_personal-'+String(i).padStart(3,'0')),qs=ids.map(id=>all.find(q=>q.id===id)),old=JSON.parse(fs.readFileSync(path.join(root,'development-notes/SUPERSEDED_PRACTICAL_V188_TO_V189.json'),'utf8')),eng=boot().ctx.__fpPracticalTest;
let combos=0;const expected=[['ア','エ','キ'],['エ','ケ','イ','ウ'],['ア','エ','カ']];
qs.forEach((q,k)=>{const o=old[k];assert.equal(q.revision,o.revision+1);assert.equal(q.caseText,o.caseText);assert.equal(q.sourceCheckedDate,o.sourceCheckedDate);assert.deepEqual(q.subAnswers.map(p=>p.answer),o.subAnswers.map(p=>p.answer));q.subAnswers.forEach((p,i)=>{assert.equal(p.numericInputFormat,'wordbank-symbol-v1');assert.deepEqual(p.wordBank,o.subAnswers[i].wordBank);});assert.deepEqual(q.subAnswers.map(p=>symbols[p.answer-1]),expected[k]);
 function walk(a){if(a.length===q.subAnswers.length){assert.equal(eng.grade(q,a),JSON.stringify(a)===JSON.stringify(expected[k]));combos++;return;}for(const c of symbols.slice(0,q.subAnswers[0].wordBank.length))walk([...a,c]);}walk([]);
 assert.equal(eng.grade(q,expected[k].map(c=>String.fromCharCode(c.charCodeAt(0)-0x60))),true);assert.equal(eng.grade(q,expected[k].map(c=>'　'+c+' ')),true);assert.equal(eng.grade(q,o.subAnswers.map(p=>String(p.answer))),false);assert.equal(eng.grade(q,o.subAnswers.map(p=>p.answer)),false);
 for(const bad of ['','1','１','1.0','アア','ア イ','ア\u200b','Ａ','a','ン','ガ','ｶﾞ','ァ']){const a=expected[k].slice();a[0]=bad;assert.equal(eng.grade(q,a),false,bad);}
 assert.equal(eng.grade(o,o.subAnswers.map(p=>String(p.answer))),true);assert.equal(eng.grade(o,expected[k]),false);
});assert.equal(combos,7802);assert.equal(eng.grade(qs[0],['ｱ','ｴ','ｷ']),true);assert.equal(eng.grade(qs[1],['ｴ','ｹ','ｲ','ｳ']),true);
const multi=q=>['multi_numeric','multi_choice','wordbank_number'].includes(q.kind),answer=q=>multi(q)?q.subAnswers.map(answer):q.numericInputFormat==='wordbank-symbol-v1'?symbols[q.answer-1]:q.kind==='choice'?q.answer:String(q.answer);for(const q of all)assert.equal(eng.grade(q,answer(q)),true,q.id);
function inputs(b){return flat(b.el('prMultiNumeric')).filter(e=>e.id&&e.id.startsWith('prSubInput'));}function enter(b,i,t){const e=inputs(b)[i];e.value=t;e.events.input({target:e});}function start(b){b.ctx.__fpPracticalTest.openPractical();b.el('prSelectLevel2').click();const card=flat(b.el('prTracks')).find(e=>e.className==='pr-track'&&e.children.some(c=>c.textContent==='個人資産相談業務'));card.children.find(e=>e.textContent==='第1回（15問）を練習').click();}
let b=boot();start(b);assert.ok(flat(b.el('prMultiNumeric')).some(e=>e.textContent==='語群（入力するのは記号です）'));assert.ok(inputs(b).every(e=>e.inputMode==='text'));assert.deepEqual(flat(b.el('prMultiNumeric')).filter(e=>e.tagName==='th').map(e=>e.textContent),symbols.slice(0,9).split(''));
enter(b,0,'1');assert.equal(inputs(b)[0].attrs['aria-invalid'],'true');assert.ok(flat(b.el('prMultiNumeric')).some(e=>e.textContent.includes('記号ア〜ケ')));enter(b,0,'あ');assert.equal(inputs(b)[0].attrs['aria-invalid'],'false');assert.equal(b.el('prAnswered').textContent,'0/15問 回答済');b.el('prSaveExit').click();b=boot(b.storage);b.el('prResume').click();assert.deepEqual(inputs(b).map(e=>e.value),['あ','','']);enter(b,1,'ｴ');enter(b,2,'キ');assert.equal(b.el('prAnswered').textContent,'1/15問 回答済');
for(let k=1;k<3;k++){b.el('prNav').children[[0,6,11][k]].click();expected[k].forEach((s,i)=>enter(b,i,s));}b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,3);assert.match(b.el('prResultNote').textContent,/全解答欄の正答：10\/47欄/);b.el('prAll').click();assert.ok(flat(b.el('prReviews')).some(e=>e.textContent.includes('キ（67,440円）')));assert.ok(flat(b.el('prReviews')).some(e=>e.textContent.includes('ケ（2,000,000円）')));assert.ok(flat(b.el('prReviews')).some(e=>e.textContent.includes('カ（6,560万円）')));const saved=b.storage.get(ph);b=boot(b.storage);b.ctx.__fpPracticalTest.openPractical();flat(b.el('prHistoryList')).find(e=>e.textContent==='答え合わせ').click();assert.equal(b.storage.get(ph),saved);b.el('prRetry').click();assert.deepEqual(inputs(b).map(e=>e.value),['','','']);assert.ok(inputs(b).every(e=>e.inputMode==='text'));
// Every archived numeric question keeps numeric input, its answer text, history and retry.
for(const q of old){const a=q.subAnswers.map(p=>String(p.answer));b=boot(new Map([[pd,JSON.stringify({track:q.track,questions:[q],answers:[a],pos:0})]]));b.el('prResume').click();assert.ok(inputs(b).every(e=>e.inputMode==='numeric'));assert.ok(flat(b.el('prMultiNumeric')).some(e=>e.textContent==='語群（入力するのは番号です）'));assert.deepEqual(inputs(b).map(e=>e.value),a);b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,1);b.el('prAll').click();assert.ok(flat(b.el('prReviews')).some(e=>e.textContent.includes('番（')));b=boot(b.storage);b.ctx.__fpPracticalTest.openPractical();flat(b.el('prHistoryList')).find(e=>e.textContent==='答え合わせ').click();b.el('prRetry').click();assert.ok(inputs(b).every(e=>e.inputMode==='numeric'));assert.equal(JSON.parse(b.storage.get(pd)).questions[0].subAnswers[0].numericInputFormat,'wordbank-index-v1');}
// Mixed old/new snapshots grade independently and are never migrated implicitly.
const mix=[old[0],qs[0]],mixAnswers=[old[0].subAnswers.map(p=>String(p.answer)),expected[0]];b=boot(new Map([[pd,JSON.stringify({track:qs[0].track,questions:mix,answers:mixAnswers,pos:0})]])); // duplicate IDs are intentionally rejected
const duplicate=b.storage.get(pd);b.el('prResume').click();assert.equal(b.storage.get(pd),duplicate);assert.ok(b.alerts.length);
b=boot(new Map([[pd,JSON.stringify({track:qs[0].track,questions:[old[0],qs[1]],answers:[mixAnswers[0],expected[1]],pos:0})]]));b.el('prResume').click();b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,2);
b=boot();start(b);enter(b,0,'ア');const before=b.storage.get(pd);b.fault.key=pd;enter(b,1,'エ');assert.equal(b.storage.get(pd),before);b.fault.key=null;b.el('prSaveExit').click();b=boot(b.storage);b.el('prResume').click();assert.deepEqual(inputs(b).map(e=>e.value),['ア','','']);const external=b.storage.get(pd)+' ';b.storage.set(pd,external);enter(b,2,'キ');assert.equal(b.storage.get(pd),external);assert.ok(b.alerts.length);
for(const mutate of [q=>q.subAnswers[1].numericInputFormat='wordbank-index-v1',q=>q.subAnswers[1].wordBank=['bad','bank'],q=>q.subAnswers[0].answer=0,q=>q.subAnswers.forEach(p=>p.numericInputFormat='wordbank-symbol-v2'),q=>q.subAnswers.forEach(p=>p.wordBank=Array(31).fill('x'))]){const q=JSON.parse(JSON.stringify(qs[0]));mutate(q);const raw=JSON.stringify({track:q.track,questions:[q],answers:[expected[0]],pos:0});b=boot(new Map([[pd,raw]]));b.el('prResume').click();assert.equal(b.storage.get(pd),raw);assert.ok(b.alerts.length);}
console.log(JSON.stringify({result:'PASS',scope:'7802 current kana combinations;hiragana/halfwidth/fullwidth spaces;invalid numeric/multiple/out-of-range codes;240 correct paths;3 banks10 fields save/reload/grade/history/retry;3 actual legacy numeric banks;mixed snapshots;quota/stale/schema/corrupt;VM/DOM only'}));
