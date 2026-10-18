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


const flat=e=>[e,...e.children.flatMap(flat)];
let checks=0;const initial=boot();const tracks=JSON.parse(initial.run('JSON.stringify(PRACTICAL_TRACKS)'));
assert.ok(tracks.every(t=>t.source));
for(const level of ['2','3']){
 const b=boot();b.ctx.__fpPracticalTest.openPractical();b.el('prSelectLevel'+level).click();
 const cards=flat(b.el('prTracks')).filter(e=>e.className==='pr-track');
 assert.equal(cards.length,tracks.filter(t=>t.level===level&&!t.disabled).length);
 for(const card of cards){assert.equal(flat(card).filter(e=>e.href).length,0);checks++;}
}
for(const track of tracks.filter(t=>!t.disabled)){
 let b=boot();b.ctx.__fpPracticalTest.openPractical();b.el('prSelectLevel'+track.level).click();
 const card=flat(b.el('prTracks')).find(e=>e.className==='pr-track'&&e.children.some(c=>c.textContent===track.name));
 card.children.find(e=>e.textContent==='この科目を練習する'||e.textContent==='第1回（15問）を練習').click();
 b.el('prSubmit').click();b.el('prAll').click();
 assert.ok(b.el('prReviews').children.length>0);
 assert.equal(flat(b.el('prReviews')).filter(e=>e.href===track.source).length,0);
 assert.equal(flat(b.el('prReviews')).some(e=>e.textContent.includes('公表問題PDF')),false);checks++;
 b=boot(b.storage);b.ctx.__fpPracticalTest.openPractical();
 flat(b.el('prHistoryList')).find(e=>e.textContent==='答え合わせ').click();
 assert.ok(b.el('prReviews').children.length>0);assert.equal(flat(b.el('prReviews')).filter(e=>e.href===track.source).length,0);checks++;
}
console.log(JSON.stringify({result:'PASS',checks,scope:'all practical course cards, submitted review and persisted history review: public exam PDF links absent; source metadata retained',limit:'VM/DOM only'}));
