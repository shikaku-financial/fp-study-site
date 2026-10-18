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













const all=JSON.parse(boot().run('JSON.stringify(PRACTICAL_QUESTIONS)')),ids=['pr-jafp3-015','pr-jafp3-016','pr-jafp3-017'],qs=ids.map(id=>all.find(q=>q.id===id)),old=JSON.parse(fs.readFileSync(path.join(root,'development-notes/SUPERSEDED_PRACTICAL_V199_TO_V200.json'),'utf8')),eng=boot().ctx.__fpPracticalTest;
// Independent progressive marginal-band summation, not fast-table subtraction.
function tax(x){const bands=[[1950000n,5n],[3300000n,10n],[6950000n,20n],[9000000n,23n],[18000000n,33n],[40000000n,40n],[10n**15n,45n]];let prev=0n,total=0n;for(const[end,rate]of bands){const upper=x<end?x:end;if(upper>prev)total+=(upper-prev)*rate/100n;prev=end;if(x<=end)break;}return total;}
const raw=7432800n-1284500n,taxable=raw/1000n*1000n;assert.equal(raw,6148300n);assert.equal(taxable,6148000n);assert.equal(tax(taxable),802100n);assert.equal(tax(raw),802160n);assert.equal(taxable*20n/100n,1229600n);
for(const[x,expected]of [[1949000n,97450n],[1950000n,97500n],[3299000n,232400n],[3300000n,232500n],[6949000n,962300n],[6950000n,962500n],[9000000n,1434000n],[18000000n,4404000n],[40000000n,13204000n]])assert.equal(tax(x),expected);
const costs=[{amount:4,eligible:false,benefit:0},{amount:18,eligible:false,benefit:0},{amount:28,eligible:true,benefit:35},{amount:16,eligible:true,benefit:0},{amount:2,eligible:true,benefit:0}];
const eligible=costs.filter(x=>x.eligible),net=eligible.reduce((n,x)=>n+Math.max(0,x.amount-x.benefit),0),threshold=Math.min(10,480*.05);assert.equal(net,18);assert.equal(net-threshold,8);assert.equal(eligible.reduce((n,x)=>n+x.amount-x.benefit,0)-threshold,1);assert.equal(eligible.reduce((n,x)=>n+x.amount,0)-threshold,36);
const allowed=new Set(['不動産所得','事業所得','山林所得']);assert.ok(allowed.has('山林所得'));assert.ok(!allowed.has('給与所得'));assert.match(qs[2].choices[0],/^山林所得／3月15日／10万円$/);assert.match(qs[2].caseText,/期限内にe-Tax/);assert.match(qs[2].caseText,/現金主義/);
for(let i=0;i<3;i++){const q=qs[i];assert.equal(q.revision,old[i].revision+1);assert.equal(q.answer,[2,1,0][i]);assert.equal(q.lawReferenceDate,'2026-04-01');assert.equal(q.choiceExplanations.length,3);for(let a=0;a<3;a++)assert.equal(eng.grade(q,a),a===[2,1,0][i]);}
let b=boot();b.ctx.__fpPracticalTest.openPractical();b.el('prSelectLevel3').click();const card=flat(b.el('prTracks')).find(e=>e.className==='pr-track'&&e.children.some(c=>c.textContent==='資産設計提案業務'));card.children.find(e=>e.tagName==='button').click();for(let i=0;i<3;i++){b.el('prNav').children[14+i].click();b.el('prChoices').children[[2,1,0][i]].click();}b.el('prSaveExit').click();b=boot(b.storage);b.el('prResume').click();assert.deepEqual(JSON.parse(b.storage.get(pd)).answers.slice(14,17),[2,1,0]);b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,3);b.el('prAll').click();for(const q of qs)for(const x of q.choiceExplanations)assert.ok(flat(b.el('prReviews')).some(e=>e.textContent===x));
for(const q of old){b=boot(new Map([[pd,JSON.stringify({track:q.track,questions:[q],answers:[q.answer],pos:0})]]));b.el('prResume').click();b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,1);assert.deepEqual(JSON.parse(b.storage.get(ph)).attempts[0].questions[0],q);b=boot(b.storage);b.ctx.__fpPracticalTest.openPractical();flat(b.el('prHistoryList')).find(e=>e.textContent==='答え合わせ').click();b.el('prRetry').click();assert.deepEqual(JSON.parse(b.storage.get(pd)).questions[0],q);assert.equal(b.ctx.__fpMaterialView.lookup(q),null);}
console.log('PASS: marginal-band BigInt tax/boundaries/alternatives;item-specific medical reimbursement cap;blue-return conditions;9 grading paths;new save/reload/history;3 old snapshots. VM/DOM only.');
