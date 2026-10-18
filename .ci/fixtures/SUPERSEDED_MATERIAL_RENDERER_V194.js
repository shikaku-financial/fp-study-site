(() => {
  let enlarged = false;
  const element = (tag, className, value) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (value !== undefined) el.textContent = String(value);
    return el;
  };
  // Editorial metadata belongs in a note, never in the case narrative.
  const displayText = value => String(value).replaceAll('【2026年4月1日基準の独自演習】','');
  const emphasize = (node, value) => {
    const text = displayText(value);
    const pattern = /[+-]?\d[\d,]*(?:\.\d+)?(?:万円|円|％|%|㎡|カ月|か月|月|年|歳|人|日|万口|口|m|ポイント|倍)/g;
    let cursor = 0;
    for (const match of text.matchAll(pattern)) {
      if (match.index > cursor) node.append(element('span','',text.slice(cursor,match.index)));
      node.append(element('strong','material-number',match[0]));
      cursor = match.index + match[0].length;
    }
    if (cursor < text.length) node.append(element('span','',text.slice(cursor)));
  };
  const table = (title, headers, rows) => {
    const wrap = element('div','material-table-wrap');
    const t = element('table','material-table');
    t.append(element('caption','',title));
    const head = element('thead'), tr = element('tr');
    for (const name of headers) { const th = element('th','',name); th.setAttribute('scope','col'); tr.append(th); }
    head.append(tr);t.append(head);
    const body = element('tbody');
    for (const [name,value] of rows) {
      const row = element('tr');const key=element('th','',name);key.setAttribute('scope','row');
      const cell=element('td');emphasize(cell,value);row.append(key,cell);body.append(row);
    }
    t.append(body);wrap.append(t);return wrap;
  };
  function diagramView(m) {
    const d=m.diagram;
    if(!d || !['family','land','pension'].includes(d.kind) ||
       typeof d.svg!=='string' || typeof d.alt!=='string' || !Array.isArray(d.notes) ||
       !d.notes.every(n=>typeof n==='string') || !d.svg.startsWith('<svg ') ||
       /<script|<foreignObject|\son[a-z]+\s*=|(?:href|src)\s*=/i.test(d.svg))return null;
    const figure=element('figure','material-diagram');
    figure.append(element('figcaption','',d.title));
    const image=element('img','material-diagram-image');
    image.src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(d.svg);
    image.alt=d.alt;image.setAttribute('alt',d.alt);image.setAttribute('decoding','async');
    figure.append(image);
    for(const note of d.notes)figure.append(element('p','material-diagram-note',note));
    const expand=element('details','material-diagram-expand');
    expand.append(element('summary','','図を拡大して見る'));
    const scroll=element('div','material-diagram-scroll');scroll.setAttribute('tabindex','0');scroll.setAttribute('aria-label','拡大図。横にスクロールできます。');
    const large=element('img','material-diagram-large');large.src=image.src;large.alt=d.alt;large.setAttribute('alt',d.alt);scroll.append(large);expand.append(scroll);
    expand.append(element('p','material-diagram-note','拡大図は横にスクロールできます。'));
    figure.append(expand);return figure;
  }
  function lookup(q) {
    const m=PRACTICAL_MATERIALS[q.id];
    return m && m.sourceText === q.caseText && Array.isArray(m.sentences) &&
      m.sentences.every(s=>typeof s==='string') &&
      (m.sentences.join('')===q.caseText || m.sentences.join('')===q.caseText.replace(/^【[^】]*】/,'')) && Array.isArray(m.inputRows) &&
      m.inputRows.every(r=>Array.isArray(r)&&r.length===2&&r.every(v=>typeof v==='string')) ? m : null;
  }
  function render(container,q) {
    container.replaceChildren();
    const m=lookup(q), kinzai=q.track.startsWith('kinzai');
    const doc=element('section',`material-document ${kinzai?'material-case':'material-source'}`);
    let localEnlarged=enlarged;
    doc.classList.toggle('material-enlarged',localEnlarged);
    doc.setAttribute('aria-label',kinzai?'設例と資料':'問題の資料');
    const top=element('div','material-heading');
    top.append(element('span','material-kicker',kinzai?'《 設 例 》':'〈 資 料 〉'));
    const button=element('button','material-size-button',enlarged?'標準の文字':'文字を大きく');
    button.type='button';button.setAttribute('aria-pressed',String(enlarged));
    button.addEventListener('click',()=>{
      localEnlarged=!localEnlarged;enlarged=localEnlarged;doc.classList.toggle('material-enlarged',localEnlarged);
      button.textContent=localEnlarged?'標準の文字':'文字を大きく';button.setAttribute('aria-pressed',String(localEnlarged));
    });
    top.append(button);doc.append(top);
    if(!m){
      // Historical snapshots and unknown/mismatched display records use their own text.
      const p=element('p','material-lead');emphasize(p,q.caseText);doc.append(p);
    }else{
      const drawing=diagramView(m);if(drawing)doc.append(drawing);
      if(m.inputRows.length)doc.append(table('資料に記載された数値・契約条件',['項目','内容'],m.inputRows));
      const source=element('div','material-statements');
      source.append(element('h4','material-subheading',kinzai?'相談内容・設例の条件':'資料の説明・計算条件'));
      const paragraphs=element('div','material-condition-text');
      for(const sentence of m.sentences){
        if(!displayText(sentence).trim())continue;
        const p=element('p','material-condition-paragraph');emphasize(p,sentence);paragraphs.append(p);
      }
      source.append(paragraphs);
      doc.append(source);
      const original=element('details','material-original');
      original.append(element('summary','','設例・資料の原文を表示'));
      original.append(element('p','',displayText(q.caseText)));doc.append(original);
    }
    const date=typeof q.lawReferenceDate==='string' && /^\d{4}-\d{2}-\d{2}$/.test(q.lawReferenceDate)?q.lawReferenceDate.split('-').map(Number):null;
    const note=element('p','material-basis-note',`（注）独自作成の演習問題です。法令基準日：${date?`${date[0]}年${date[1]}月${date[2]}日`:'未登録'}。`);
    doc.append(note);container.append(doc);
  }

  function academicLookup(q) {
    const m=ACADEMIC_MATERIALS[q.id];
    return m && m.sourceText===q.question && typeof m.stem==='string' &&
      Array.isArray(m.headers) && m.headers.every(v=>typeof v==='string') &&
      Array.isArray(m.rows) && m.rows.every(r=>Array.isArray(r)&&r.length===m.headers.length&&r.every(v=>typeof v==='string')) &&
      Array.isArray(m.notes)&&m.notes.every(v=>typeof v==='string') ? m : null;
  }
  function academicRender(container,q) {
    const m=academicLookup(q);container.replaceChildren();
    if(!m){container.textContent=q.question;return;}
    container.append(element('p','academic-stem',m.stem));
    const doc=element('section','material-document academic-document');
    doc.setAttribute('aria-label','学科問題の資料');
    let localEnlarged=enlarged;doc.classList.toggle('material-enlarged',localEnlarged);
    const top=element('div','material-heading');top.append(element('span','material-kicker','〈 資 料 〉'));
    const button=element('button','material-size-button',localEnlarged?'標準の文字':'文字を大きく');button.type='button';button.setAttribute('aria-pressed',String(localEnlarged));
    button.addEventListener('click',()=>{localEnlarged=!localEnlarged;enlarged=localEnlarged;doc.classList.toggle('material-enlarged',localEnlarged);button.textContent=localEnlarged?'標準の文字':'文字を大きく';button.setAttribute('aria-pressed',String(localEnlarged));});top.append(button);doc.append(top);
    const drawing=diagramView(m);if(drawing)doc.append(drawing);
    if(m.rows.length){
      const wrap=element('div','material-table-wrap'),t=element('table','material-table');t.append(element('caption','',m.title));
      const head=element('thead'),hr=element('tr');for(const h of m.headers){const th=element('th','',h);th.setAttribute('scope','col');hr.append(th);}head.append(hr);t.append(head);
      const body=element('tbody');for(const row of m.rows){const tr=element('tr');row.forEach((v,i)=>{const cell=element(i===0?'th':'td');if(i===0)cell.setAttribute('scope','row');emphasize(cell,v);tr.append(cell);});body.append(tr);}t.append(body);wrap.append(t);doc.append(wrap);
    }
    for(const note of m.notes){const p=element('p','material-diagram-note');emphasize(p,note);doc.append(p);}
    const original=element('details','material-original');original.append(element('summary','','問題文・資料の全文を表示'));original.append(element('p','',q.question));doc.append(original);container.append(doc);
  }
  window.__fpAcademicMaterialView={render:academicRender,lookup:academicLookup};
  window.__fpMaterialView={render,lookup};
})();