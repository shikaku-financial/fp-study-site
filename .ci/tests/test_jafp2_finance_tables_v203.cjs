const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(process.argv[2]||path.join(__dirname,'..'));
class Element{
 constructor(tag='div'){this.tagName=tag.toUpperCase();this.children=[];this.attributes={};this.events={};this.className='';this._text='';this.style={};this.classList={toggle:(name,on)=>{const set=new Set(this.className.split(/\s+/).filter(Boolean));const next=on===undefined?!set.has(name):on;next?set.add(name):set.delete(name);this.className=[...set].join(' ');return next;}};}
 set textContent(v){this._text=String(v);this.children=[];}get textContent(){return this._text+this.children.map(c=>c.textContent).join('');}
 append(...items){this.children.push(...items);}replaceChildren(...items){this.children=items;this._text='';}setAttribute(n,v){this.attributes[n]=String(v);}addEventListener(n,f){this.events[n]=f;}click(){this.events.click?.();}
}


const ctx=vm.createContext({console,document:{createElement:tag=>new Element(tag)}});ctx.window=ctx;for(const n of ['practical-questions.js','practical-materials.js'])vm.runInContext(fs.readFileSync(path.join(root,n),'utf8'),ctx);const qs=vm.runInContext('PRACTICAL_QUESTIONS',ctx),ms=vm.runInContext('PRACTICAL_MATERIALS',ctx),flat=e=>[e,...e.children.flatMap(flat)];

let tables=0,rows=0;const ids=[3,4,5,6].map(n=>'pr-jafp2-'+String(n).padStart(3,'0'));
for(const id of ids){const q=qs.find(q=>q.id===id),m=ms[id],box=new Element();ctx.__fpMaterialView.render(box,q);assert.equal(m.sourceText,q.caseText);assert.equal(m.sentences.join(''),q.caseText);for(const data of m.tables){const table=flat(box).find(e=>e.tagName==='TABLE'&&e.children[0].textContent===data.title);assert.ok(table,id+data.title);assert.deepEqual(table.children[2].children.map(r=>r.children.map(c=>c.textContent)),Array.from(data.rows,r=>Array.from(r)));for(const h of table.children[1].children[0].children)assert.equal(h.attributes.scope,'col');for(const row of table.children[2].children)assert.equal(row.children[0].attributes.scope,'row');tables++;rows+=data.rows.length;}assert.equal(flat(box).filter(e=>e.tagName==='OL').length,0);assert.equal(flat(box).filter(e=>e.className==='material-basis-note').length,1);assert.ok(!box.textContent.includes('【2026年4月1日基準の独自演習】'));for(const sentence of m.sentences)assert.ok(box.textContent.includes(sentence));}
assert.equal(tables,6);assert.equal(rows,21);const m=ms[ids[3]];assert.deepEqual(Array.from(m.tables[1].rows,r=>Array.from(r)),[['上場株式の配当','120,000','18,378','6,000','0'],['公募株式投信の分配','80,000','12,252','4,000','50,000']]);assert.equal(m.tables[1].headers.length,5);
console.log('PASS:6 original tables/21 rows;all cells/headers/row scopes;5-column gross/tax/special separation;full conditions;one note/no automatic numbering. DOM simulation.');
