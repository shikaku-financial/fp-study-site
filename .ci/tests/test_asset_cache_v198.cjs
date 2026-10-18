const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(process.argv[2]||path.join(__dirname,'..'));
class Element{
 constructor(tag='div'){this.tagName=tag.toUpperCase();this.children=[];this.attributes={};this.events={};this.className='';this._text='';this.style={};this.classList={toggle:(name,on)=>{const set=new Set(this.className.split(/\s+/).filter(Boolean));const next=on===undefined?!set.has(name):on;next?set.add(name):set.delete(name);this.className=[...set].join(' ');return next;}};}
 set textContent(v){this._text=String(v);this.children=[];}get textContent(){return this._text+this.children.map(c=>c.textContent).join('');}
 append(...items){this.children.push(...items);}replaceChildren(...items){this.children=items;this._text='';}setAttribute(n,v){this.attributes[n]=String(v);}addEventListener(n,f){this.events[n]=f;}click(){this.events.click?.();}
}

const flat=e=>[e,...e.children.flatMap(flat)],label='【2026年4月1日基準の独自演習】';
const legacy=JSON.parse(fs.readFileSync(path.join(root,'development-notes/SUPERSEDED_PRACTICAL_V153_TO_V154.json'),'utf8'))[0];
const staleSource=fs.readFileSync(path.join(root,'development-notes/CACHE_REPRODUCTION_OLD_MATERIAL_VIEW_V154.js'),'utf8');
function render(source){const ctx=vm.createContext({console,document:{createElement:t=>new Element(t)}});ctx.window=ctx;vm.runInContext(source,ctx);const el=new Element();ctx.__fpMaterialView.render(el,legacy);return el;}
// Reproduce the supplied image's defining old view using an actual old renderer and old saved question.
const old=render(staleSource);assert.ok(old.textContent.includes(label));assert.equal(flat(old).filter(e=>e.tagName==='OL').length,1);
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');const urls=Array.from(html.matchAll(/<script src="([^"]+)"/g),m=>m[1]);const url=urls.find(u=>u.startsWith('practical-materials.js?'));
assert.ok(url&&!url.endsWith('v=94'));const cache=new Map([['practical-materials.js?v=94',staleSource]]);let misses=0;
function load(u){if(cache.has(u))return cache.get(u);misses++;const data=fs.readFileSync(path.join(root,u.split('?')[0]),'utf8');cache.set(u,data);return data;}
const current=render(load(url));assert.equal(misses,1);assert.equal(current.textContent.includes(label),false);assert.equal(flat(current).filter(e=>e.tagName==='OL').length,0);assert.equal(flat(current).filter(e=>e.className==='material-basis-note').length,1);assert.ok(current.textContent.includes('①報酬を得て'));assert.ok(current.textContent.includes('②NISA'));assert.ok(current.textContent.includes('③仮定事例'));assert.ok(html.includes('id="prBuildVersion" class="muted small">Ver.198'));
assert.ok(cache.get('practical-materials.js?v=94').includes("element('ol','material-condition-list')"));
console.log('PASS: actual old renderer reproduces image label/ol; old v94 cache entry retained but new HTML content URL misses it; legacy saved problem renders without editorial label/numbered list; one basis note; visible build198. Simulated URL cache and DOM only, not Safari/browser verification.');
