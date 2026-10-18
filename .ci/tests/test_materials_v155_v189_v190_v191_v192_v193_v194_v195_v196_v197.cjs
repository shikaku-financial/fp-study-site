const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(process.argv[2]||path.join(__dirname,'..'));
class Element{
 constructor(tag='div'){this.tagName=tag.toUpperCase();this.children=[];this.attributes={};this.events={};this.className='';this._text='';this.style={};this.classList={toggle:(name,on)=>{const set=new Set(this.className.split(/\s+/).filter(Boolean));const next=on===undefined?!set.has(name):on;next?set.add(name):set.delete(name);this.className=[...set].join(' ');return next;}};}
 set textContent(v){this._text=String(v);this.children=[];}get textContent(){return this._text+this.children.map(c=>c.textContent).join('');}
 append(...items){this.children.push(...items);}replaceChildren(...items){this.children=items;this._text='';}setAttribute(n,v){this.attributes[n]=String(v);}addEventListener(n,f){this.events[n]=f;}click(){this.events.click?.();}
}
const ctx=vm.createContext({console,document:{createElement:tag=>new Element(tag)}});ctx.window=ctx;
for(const name of ['practical-questions.js','practical-materials.js'])vm.runInContext(fs.readFileSync(path.join(root,name),'utf8'),ctx,{filename:name});
const qs=vm.runInContext('PRACTICAL_QUESTIONS',ctx),map=vm.runInContext('PRACTICAL_MATERIALS',ctx),renderer=ctx.__fpMaterialView;
const clean=v=>String(v).replaceAll('【2026年4月1日基準の独自演習】','');
const flat=e=>[e,...e.children.flatMap(flat)];let checks=0,tables=0;
for(const q of qs){
 const m=map[q.id];assert.equal(m.sourceText,q.caseText);assert.equal(renderer.lookup(q),m);
 assert.equal(m.sentences.join(''),q.caseText,'no source sentence loss: '+q.id);checks+=3;
 const container=new Element();renderer.render(container,q);const doc=container.children[0];assert.equal(doc.attributes['aria-label'],q.track.startsWith('kinzai')?'設例と資料':'問題の資料');checks++;
 // All original sentences are in the main visible document, excluding the closed original-text disclosure.
 const visible=e=>e.className==='material-original'?'':e._text+e.children.map(visible).join('');
 const text=visible(doc);assert.equal(text.includes('【2026年4月1日基準の独自演習】'),false);assert.equal(flat(doc).filter(e=>e.tagName==='OL').length,0);assert.equal(flat(doc).filter(e=>e.className==='material-basis-note').length,1);assert.equal(flat(doc).filter(e=>e.className==='material-condition-paragraph').length,m.sentences.filter(s=>clean(s).trim()).length);for(const sentence of m.sentences)assert.ok(text.includes(clean(sentence)),q.id+': missing visible condition');checks++;
 const original=flat(doc).find(e=>e.className==='material-original');assert.equal(original.children[1].textContent,clean(q.caseText));checks++;
 for(const t of flat(doc).filter(e=>e.tagName==='TABLE')){
  tables++;assert.ok(t.children.some(e=>e.tagName==='CAPTION'));assert.equal(t.children[1].tagName,'THEAD');assert.equal(t.children[2].tagName,'TBODY');
  for(const row of t.children[2].children)assert.equal(row.children[0].attributes.scope,'row');checks++;
 }
 const button=flat(doc).find(e=>e.tagName==='BUTTON');assert.equal(button.attributes['aria-pressed'],'false');button.click();assert.equal(button.attributes['aria-pressed'],'true');assert.ok(doc.className.includes('material-enlarged'));button.click();assert.equal(button.attributes['aria-pressed'],'false');checks+=3;
 // Mismatched legacy snapshots must never show a current table.
 const legacy={...q,caseText:'旧版の設例。<img src=x onerror=alert(1)>100万円。'};assert.equal(renderer.lookup(legacy),null);renderer.render(container,legacy);assert.equal(flat(container).filter(e=>e.tagName==='TABLE').length,0);assert.ok(container.textContent.includes(legacy.caseText));assert.equal(flat(container).filter(e=>e.tagName==='IMG').length,0);checks+=4;
}
// V203 intentionally replaces four two-column inputRows tables with six detailed tables.
// Their complete cells and 21 rows are checked by test_jafp2_finance_tables_v203.
assert.equal(qs.length,240);assert.equal(Object.keys(map).length,240);assert.equal(Object.values(map).filter(m=>m.inputRows.length).length,219);
console.log(JSON.stringify({result:'PASS',questions:240,curatedInputTables:219,renderedTables:tables,checks,scope:'all substantive source sentences visible; no auto numbering; one small basis note; semantic tables; enlarging; original condition text except editorial prefix; legacy fallback; HTML-looking text never interpreted as markup',limit:'DOM simulation; no browser layout or iPhone validation'},null,2));

// Separate review documents must toggle according to their own displayed state.
const first=new Element(),second=new Element();renderer.render(first,qs[0]);renderer.render(second,qs[1]);
const a=flat(first).find(e=>e.tagName==='BUTTON'),b=flat(second).find(e=>e.tagName==='BUTTON');a.click();b.click();assert.equal(a.attributes['aria-pressed'],'true');assert.equal(b.attributes['aria-pressed'],'true');a.click();b.click();assert.equal(a.attributes['aria-pressed'],'false');assert.equal(b.attributes['aria-pressed'],'false');
console.log('PASS: independently controlled review document font size.');

let figures=0;
for(const q of qs){
 const container=new Element();renderer.render(container,q);const m=map[q.id];const figure=flat(container).find(e=>e.className==='material-diagram');
 if(!m.diagram){assert.equal(figure,undefined);continue;}
 figures++;assert.ok(figure);const imgs=flat(figure).filter(e=>e.tagName==='IMG');assert.equal(imgs.length,2);assert.equal(imgs[0].src,imgs[1].src);assert.equal(decodeURIComponent(imgs[0].src.slice('data:image/svg+xml;charset=utf-8,'.length)),m.diagram.svg);assert.equal(imgs[0].attributes.alt,m.diagram.alt);assert.ok(flat(figure).some(e=>e.tagName==='DETAILS'));assert.ok(flat(figure).some(e=>e.attributes.tabindex==='0'));
 const original=m.diagram.svg;m.diagram.svg='<svg xmlns="http://www.w3.org/2000/svg"><script>alert(1)</script></svg>';renderer.render(container,q);assert.equal(flat(container).filter(e=>e.className==='material-diagram').length,0);assert.ok(container.textContent.includes(clean(m.sentences[0])));m.diagram.svg=original;
 renderer.render(container,{...q,caseText:'旧版の図を含まない設例。'});assert.equal(flat(container).filter(e=>e.tagName==='IMG').length,0);assert.ok(container.textContent.includes('旧版の図を含まない設例。'));
}
assert.equal(figures,82);console.log('PASS: 82 diagram instances, paired SVG image data, alternative text, expansion, static SVG guard, legacy fallback.');

// The annotation follows the snapshot date, not the current global basis.
const legacyDate={...qs[0],caseText:'【2026年4月1日基準の独自演習】①契約条件は2025年4月1日。②10万円。',lawReferenceDate:'2025-04-01'};const box=new Element();renderer.render(box,legacyDate);assert.ok(box.textContent.includes('①契約条件は2025年4月1日。②10万円。'));assert.equal(box.textContent.includes('【2026年4月1日基準の独自演習】'),false);assert.ok(flat(box).some(e=>e.className==='material-basis-note'&&e.textContent.includes('2025年4月1日')));assert.equal(flat(box).filter(e=>e.tagName==='OL').length,0);
console.log('PASS: legacy fallback preserves meaningful statement numbers and dated conditions; note follows snapshot basis.');
