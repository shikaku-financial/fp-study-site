const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(process.argv[2]);
class E{
 constructor(tag='div'){this.tagName=tag.toUpperCase();this.children=[];this.attributes={};this.events={};this.className='';this._text='';this.style={};this.classList={toggle:(n,on)=>{const s=new Set(this.className.split(/\s+/).filter(Boolean));const v=on===undefined?!s.has(n):on;v?s.add(n):s.delete(n);this.className=[...s].join(' ');return v;}};}
 set textContent(v){this._text=String(v);this.children=[];}get textContent(){return this._text+this.children.map(x=>x.textContent).join('');}
 append(...x){this.children.push(...x)}replaceChildren(...x){this.children=x;this._text=''}setAttribute(n,v){this.attributes[n]=String(v)}addEventListener(n,f){this.events[n]=f}click(){this.events.click?.()}
}
const ctx=vm.createContext({console,document:{createElement:t=>new E(t)}});ctx.window=ctx;
for(const f of ['practical-questions.js','practical-materials.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),ctx);
const qs=vm.runInContext('PRACTICAL_QUESTIONS',ctx),ms=vm.runInContext('PRACTICAL_MATERIALS',ctx),flat=e=>[e,...e.children.flatMap(flat)];
let tableCount=0,rowCount=0,cellCount=0;
for(const n of ['008','009','010']){
 const id='pr-jafp2-'+n,q=qs.find(q=>q.id===id),m=ms[id],box=new E();ctx.__fpMaterialView.render(box,q);
 assert.equal(m.sourceText,q.caseText);assert.equal(m.sentences.join(''),q.caseText);
 assert.equal(flat(box).filter(e=>e.tagName==='OL').length,0);assert.equal(flat(box).filter(e=>e.className==='material-basis-note').length,1);
 assert.ok(!box.textContent.includes('【2026年4月1日基準の独自演習】'));assert.equal(flat(box).filter(e=>e.tagName==='A').length,0);
 const paragraphs=flat(box).filter(e=>e.className==='material-condition-paragraph');assert.deepEqual(paragraphs.map(e=>e.textContent),Array.from(m.sentences));
 for(const spec of m.tables||[]){
  const table=flat(box).find(e=>e.tagName==='TABLE'&&e.children[0].textContent===spec.title);assert.ok(table);
  assert.deepEqual(table.children[1].children[0].children.map(e=>e.textContent),Array.from(spec.headers));
  for(const h of table.children[1].children[0].children)assert.equal(h.attributes.scope,'col');
  assert.deepEqual(table.children[2].children.map(r=>r.children.map(c=>c.textContent)),Array.from(spec.rows,r=>Array.from(r)));
  for(const row of table.children[2].children){assert.equal(row.children[0].tagName,'TH');assert.equal(row.children[0].attributes.scope,'row');assert.equal(row.children.length,spec.headers.length);rowCount++;cellCount+=row.children.length;}
  tableCount++;
 }
 const button=flat(box).find(e=>e.className==='material-size-button'),doc=box.children[0];const before=button.attributes['aria-pressed'];button.click();assert.notEqual(button.attributes['aria-pressed'],before);assert.equal(doc.className.includes('material-enlarged'),button.attributes['aria-pressed']==='true');button.click();assert.equal(button.attributes['aria-pressed'],before);
 if(n==='008'){
  const images=flat(box).filter(e=>e.tagName==='IMG');assert.equal(images.length,2);
  for(const image of images){assert.equal(image.attributes.alt,m.diagram.alt);for(const term of ['21m','20m','420㎡','6m','商業地域','防火地域','80％','耐火建築物','適用除外'])assert.ok(image.attributes.alt.includes(term));assert.equal(decodeURIComponent(image.src.split(',')[1]),m.diagram.svg);}
  const scroll=flat(box).find(e=>e.className==='material-diagram-scroll');assert.equal(scroll.attributes.tabindex,'0');assert.ok(scroll.attributes['aria-label'].includes('横にスクロール'));
 }
}
assert.equal(tableCount,2);assert.equal(rowCount,9);assert.equal(cellCount,18);
console.log('PASS: 3 material renders;2 tables/9 rows/18 body cells;all column and row headers;3 size toggles;normal/expanded diagram alt and data;single basis note/no numbered paragraphs/no external links. DOM simulation only;no accessibility-tree or visual/browser claim.');
