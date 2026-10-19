const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(process.argv[2]);
class E{
 constructor(tag='div'){this.tagName=tag.toUpperCase();this.children=[];this.attributes={};this.events={};this.className='';this._text='';this.style={};this.classList={toggle:(n,on)=>{const set=new Set(this.className.split(/\s+/).filter(Boolean));const value=on===undefined?!set.has(n):on;value?set.add(n):set.delete(n);this.className=[...set].join(' ');return value;}};}
 set textContent(v){this._text=String(v);this.children=[]}get textContent(){return this._text+this.children.map(x=>x.textContent).join('')}
 append(...x){this.children.push(...x)}replaceChildren(...x){this.children=x;this._text=''}setAttribute(n,v){this.attributes[n]=String(v)}addEventListener(n,f){this.events[n]=f}click(){this.events.click?.()}
}
const ctx=vm.createContext({console,document:{createElement:t=>new E(t)}});ctx.window=ctx;for(const f of ['practical-questions.js','practical-materials.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),ctx);
const qs=vm.runInContext('PRACTICAL_QUESTIONS',ctx),ms=vm.runInContext('PRACTICAL_MATERIALS',ctx),flat=e=>[e,...e.children.flatMap(flat)];let tables=0,rows=0,cells=0,heads=0,scrollRegions=0;
for(const n of [13,14,15,16,17]){
 const id='pr-jafp2-'+String(n).padStart(3,'0'),q=qs.find(q=>q.id===id),m=ms[id],box=new E();ctx.__fpMaterialView.render(box,q);assert.equal(m.sourceText,q.caseText);assert.equal(m.sentences.join(''),q.caseText);
 assert.deepEqual(flat(box).filter(e=>e.className==='material-condition-paragraph').map(e=>e.textContent),Array.from(m.sentences));assert.equal(flat(box).filter(e=>e.className==='material-basis-note').length,1);assert.equal(flat(box).filter(e=>e.tagName==='OL'||e.tagName==='A'||e.tagName==='IMG').length,0);assert.ok(!box.textContent.includes('【2026年4月1日基準の独自演習】'));
 for(const t of m.tables){
  const table=flat(box).find(e=>e.tagName==='TABLE'&&e.children[0].textContent===t.title);assert.ok(table);assert.equal(table.children[0].tagName,'CAPTION');assert.deepEqual(table.children[1].children[0].children.map(e=>e.textContent),Array.from(t.headers));
  for(const e of table.children[1].children[0].children){assert.equal(e.attributes.scope,'col');heads++;}
  assert.deepEqual(table.children[2].children.map(r=>r.children.map(c=>c.textContent)),Array.from(t.rows,r=>Array.from(r)));
  for(const row of table.children[2].children){assert.equal(row.children.length,t.headers.length);assert.equal(row.children[0].attributes.scope,'row');rows++;cells+=row.children.length;}
  if(t.headers.length>2){const wrap=flat(box).find(e=>e.children.includes(table));assert.equal(wrap.attributes.role,'region');assert.equal(wrap.attributes.tabindex,'0');assert.ok(wrap.attributes['aria-label'].includes('横にスクロール'));scrollRegions++;}
  tables++;
 }
 const toggle=flat(box).find(e=>e.className==='material-size-button'),before=toggle.attributes['aria-pressed'];toggle.click();assert.notEqual(toggle.attributes['aria-pressed'],before);toggle.click();assert.equal(toggle.attributes['aria-pressed'],before);
}
assert.equal(tables,8);assert.equal(rows,32);assert.equal(cells,73);assert.equal(heads,19);assert.equal(scrollRegions,3);
console.log('PASS:5 material renders;8 tables/32 rows/73 body cells/19 headers;row and column scopes;3 keyboard-scroll regions;5 size toggles;all conditions;single note/no automatic numbering/no external links. DOM simulation,not visual browser or assistive-technology validation.');
