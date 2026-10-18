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













const all=JSON.parse(boot().run('JSON.stringify(PRACTICAL_QUESTIONS)')),ids=['pr-jafp3-018','pr-jafp3-019'],qs=ids.map(id=>all.find(q=>q.id===id)),old=JSON.parse(fs.readFileSync(path.join(root,'development-notes/SUPERSEDED_PRACTICAL_V200_TO_V201.json'),'utf8')),eng=boot().ctx.__fpPracticalTest;
// Independent branch traversal: renunciation removes a living branch for civil law,
// but tax-count traversal ignores renunciation. Predeceased nodes are replaced, not counted twice.
const tree=[{name:'航平',dead:false,renounced:true,children:[{name:'遥',dead:false}]},{name:'香織',dead:true,children:[{name:'葵',dead:false},{name:'陸',dead:false}]},{name:'直樹',dead:false,children:[]}];
function heirs(n,ignoreRenunciation=false){if(n.renounced&&!ignoreRenunciation)return [];return n.dead?n.children.flatMap(c=>heirs(c,ignoreRenunciation)):[n.name];}
const branches=tree.map(n=>heirs(n)).filter(x=>x.length),civil=['美和',...branches.flat()],tax=['美和',...tree.flatMap(n=>heirs(n,true))];assert.deepEqual(civil,['美和','葵','陸','直樹']);assert.deepEqual(tax,['美和','航平','葵','陸','直樹']);assert.equal(civil.length,4);assert.equal(tax.length,5);
const shares=new Map([['美和',[1n,2n]]]);for(const b of branches)for(const name of b)shares.set(name,[1n,2n*BigInt(branches.length)*BigInt(b.length)]);
assert.deepEqual(shares.get('直樹'),[1n,4n]);assert.deepEqual(shares.get('葵'),[1n,8n]);assert.deepEqual(shares.get('陸'),[1n,8n]);assert.equal([...shares.values()].reduce((s,[n,d])=>s+n*8n/d,0n),8n);assert.ok(!shares.has('航平')&&!shares.has('遥')&&!shares.has('香織'));
assert.equal(3000+600*tax.length,6000);assert.equal(3000+600*civil.length,5400);assert.equal(3000+600*(tax.length+1),6600);assert.deepEqual(qs[1].choices,['5,400万円','6,000万円','6,600万円']);assert.match(qs[0].choices[2],/美和1\/2・直樹1\/4・葵と陸は各1\/8/);assert.match(qs[0].choices[0],/各1\/6/);assert.match(qs[0].choices[1],/遥1\/6/);
for(let i=0;i<2;i++){const q=qs[i];assert.equal(q.revision,old[i].revision+1);assert.equal(q.answer,[2,1][i]);assert.equal(q.lawReferenceDate,'2026-04-01');assert.equal(q.choiceExplanations.length,3);for(let a=0;a<3;a++)assert.equal(eng.grade(q,a),a===[2,1][i]);}
let b=boot();b.ctx.__fpPracticalTest.openPractical();b.el('prSelectLevel3').click();const card=flat(b.el('prTracks')).find(e=>e.className==='pr-track'&&e.children.some(c=>c.textContent==='資産設計提案業務'));card.children.find(e=>e.tagName==='button').click();for(let i=0;i<2;i++){b.el('prNav').children[17+i].click();b.el('prChoices').children[[2,1][i]].click();}b.el('prSaveExit').click();b=boot(b.storage);b.el('prResume').click();assert.deepEqual(JSON.parse(b.storage.get(pd)).answers.slice(17,19),[2,1]);b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,2);b.el('prAll').click();for(const q of qs)for(const x of q.choiceExplanations)assert.ok(flat(b.el('prReviews')).some(e=>e.textContent===x));
for(const q of old){b=boot(new Map([[pd,JSON.stringify({track:q.track,questions:[q],answers:[q.answer],pos:0})]]));b.el('prResume').click();b.el('prSubmit').click();assert.equal(JSON.parse(b.storage.get(ph)).attempts[0].correct,1);assert.deepEqual(JSON.parse(b.storage.get(ph)).attempts[0].questions[0],q);b=boot(b.storage);b.ctx.__fpPracticalTest.openPractical();flat(b.el('prHistoryList')).find(e=>e.textContent==='答え合わせ').click();b.el('prRetry').click();assert.deepEqual(JSON.parse(b.storage.get(pd)).questions[0],q);assert.equal(b.ctx.__fpMaterialView.lookup(q),null);}
console.log('PASS: independent civil/tax branch traversal;fraction sum and 3 alternatives;6 grading paths;save/reload/history;2 actual old snapshots. VM/DOM only, not complete statutory review.');
