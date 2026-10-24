'use strict';
(()=>{
 const C=BOKI_CORE,D=BOKI_DATA,KEY='fll-boki-progress',app=document.getElementById('boki-app'),notice=document.getElementById('boki-notice');
 const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const num=n=>n.toLocaleString('ja-JP');
 const duplicateMessage=answer=>{
  const sides=C.journalDuplicateSides(answer);
  if(!sides.length)return '';
  return sides.map(s=>s==='debit'?'借方':'貸方').join('・')+'で同じ勘定科目が重複しています。同じ側の科目は1回だけ使用し、金額を1行にまとめてください。重複したまま採点すると、この仕訳は不正解です。';
 };
 let store={schema:1,active:null,history:[]},level='3',form='1',session=null,displayed=null,timer=null,dirty=false,lastSaved=null;
 function say(text){notice.textContent=text;notice.classList.toggle('hidden',!text);}
 function persist(){
  try{
   if(localStorage.getItem(KEY)!==lastSaved){dirty=true;say('別のタブで学習記録が更新されました。この画面からは上書きせずに保護しています。最新の記録を確認するにはページを再読み込みしてください。');return false;}
   const next=JSON.stringify(store);localStorage.setItem(KEY,next);lastSaved=next;dirty=false;document.getElementById('boki-save-status')?.replaceChildren(document.createTextNode('このブラウザに保存しました'));if(notice.textContent.startsWith('保存に失敗しました。'))say('');return true;}
  catch{dirty=true;say('保存に失敗しました。この画面では解答を続けられますが、閉じると今回の変更が失われる場合があります。ブラウザの空き容量・保存設定をご確認ください。');return false;}
 }
 try{
  const raw=localStorage.getItem(KEY);
  lastSaved=raw;
  if(raw){
   const parsed=JSON.parse(raw);
   if(parsed.schema!==1||!Array.isArray(parsed.history))throw Error('schema');
   const activeOK=parsed.active===null||C.validSession(parsed.active,D);
   store={schema:1,active:activeOK?parsed.active:null,history:parsed.history.filter(h=>C.validSession(h,D)&&Number.isFinite(h.finished)).slice(0,20)};
   if(!activeOK)say('途中データの形式が現在の問題と一致しないため、再開できません。新しい演習を開始できます。');
  }
 }catch{say('学習記録を読み込めませんでした。新しい演習は利用できます。保存済みデータは演習を開始するまで書き換えません。');}
 const itemsFor=s=>s.ids.map(id=>C.allItems(C.examFor(D,s.level,s.form)).find(i=>i.id===id));
 function focusHeading(){const h=document.getElementById('boki-heading');if(h){h.focus({preventScroll:true});(h.closest('section.card')||h).scrollIntoView({block:'start',behavior:'instant'});}}
 function clearTimer(){if(timer)clearInterval(timer);timer=null;}
 function home(){
  clearTimer();session=null;displayed=null;
  const exam=C.examFor(D,level,form),history=store.history.filter(h=>String(h.level)===level&&String(h.form)===form),latest=new Map();
  for(const h of [...history].reverse())for(const item of itemsFor(h))latest.set(item.id,C.grade(item,h.answers[item.id]).correct);
  const passed=[...latest.values()].filter(Boolean).length,needsReview=[...latest.values()].some(correct=>!correct);
  app.innerHTML=`<section class="card"><div class="section-heading"><h2 id="boki-heading" tabindex="-1">学習する級を選択</h2><span class="boki-tag">無料・登録不要</span></div><div class="boki-level-grid" role="group" aria-label="級を選択">${['3','2'].map(l=>`<button data-action="level" data-level="${l}" class="${l===level?'active':''}" aria-pressed="${l===level}">日商簿記${l}級<small>${l==='3'?'商業簿記':'商業簿記・工業簿記'}</small></button>`).join('')}</div><label class="field-label" for="boki-form">模試の回</label><select id="boki-form">${['1',...Object.keys(D[level].forms||{})].map(f=>`<option value="${f}" ${form===f?'selected':''}>${esc(C.examFor(D,level,f).set)}</option>`).join('')}</select><div class="boki-kpis"><div><strong>${exam.minutes}分</strong><span>模試の制限時間</span></div><div><strong>${exam.sections.length}大問</strong><span>${esc(exam.set)}</span></div><div><strong>100点</strong><span>70点が到達目安</span></div></div><label class="field-label" for="boki-section">出題分野</label><select id="boki-section"><option value="all">すべての分野</option>${exam.sections.map((s,i)=>`<option value="${i}">${esc(s.title)}</option>`).join('')}</select><div class="actions"><button class="primary" data-action="practice">問題演習を開始</button>${needsReview?'<button data-action="review">間違えた問題を復習</button>':''}</div><p class="muted small">演習は1題ずつ答え合わせ。仕訳は借方・貸方の科目と金額を選択・入力します。</p></section>
  <section class="card"><h2>模擬試験モード</h2><p class="boki-intro">${esc(exam.label)} ${esc(exam.set)}<br><strong>${exam.minutes}分・${exam.sections.length}大問・100点満点</strong></p><p class="muted small">終了後にまとめて採点・解説します。仕訳は取引単位、表問題は解答欄ごとの独自配点です。</p><button class="primary full-width" data-action="exam">模擬試験を開始</button>${store.active?`<div class="result"><p>中断中：日商簿記${esc(store.active.level)}級 第${esc(store.active.form)}回 ${store.active.mode==='exam'?'模試':'演習'}／${store.active.index+1}題目</p><button class="outline-full" data-action="resume">中断した学習を再開</button><button class="subtle" data-action="discard">途中経過を削除</button></div>`:''}</section>
  <section class="card"><h2>学習記録</h2><p class="stats">${latest.size}題を学習 ／ 全問正解 ${passed}題${latest.size?' ／ 正解率 '+Math.round(passed/latest.size*100)+'%':''}</p><p class="muted small">選択中の回について、採点を終えた演習・模試の各題の最新結果を集計します。表問題は全欄正解で「全問正解」です。</p>${history.length?history.map(h=>{const r=C.result(itemsFor(h),h.answers);return `<div class="boki-history"><div><strong>第${esc(h.form)}回 ${h.mode==='exam'?'模試':h.mode==='review'?'復習':'演習'} ${r.earned} / ${r.max}点</strong><p class="muted small">${esc(new Date(h.finished).toLocaleString('ja-JP'))}</p></div><button data-action="history" data-id="${esc(h.id)}">答え合わせを見る</button></div>`;}).join(''):'<p class="muted">まだ採点を終えた記録はありません。</p>'}<p class="muted small">履歴は新しい20回分を保持します。</p><button class="subtle" data-action="clear">簿記ラボの記録を削除</button></section>`;
 }
 function start(mode){
  if(store.active&&!window.confirm('中断中の学習を、新しい学習で置き換えますか？'))return;
  const exam=C.examFor(D,level,form);let list=C.allItems(exam);
  if(mode==='practice'){const value=document.getElementById('boki-section').value;if(value!=='all')list=exam.sections[Number(value)].items;}
  if(mode==='review'){
   const latest=new Map();for(const h of [...store.history].reverse().filter(h=>String(h.level)===level&&String(h.form)===form))for(const item of itemsFor(h))latest.set(item.id,C.grade(item,h.answers[item.id]).correct);
   list=list.filter(i=>latest.has(i.id)&&!latest.get(i.id));if(!list.length){say('復習する問題はありません。採点を終えた学習で間違えた題があると、ここから復習できます。');return;}
  }
  session={revision:C.revision,id:String(Date.now())+'-'+Math.random().toString(36).slice(2,9),level,form,mode,ids:list.map(i=>i.id),index:0,answers:{},checked:{},flags:{},started:Date.now(),deadline:mode==='exam'?Date.now()+exam.minutes*60000:null};
  store.active=session;say('');persist();renderSession();focusHeading();
 }
 function emptyJournal(item){const count=Math.max(item.debit.length,item.credit.length)+1;return {debit:Array.from({length:count},()=>['','']),credit:Array.from({length:count},()=>['',''])};}
 function tableHTML(t,item,answer,disabled){
  return `<div class="boki-scroll" role="region" tabindex="0" aria-label="${esc(t.caption)}。横にスクロールできます"><table><caption>${esc(t.caption)}</caption><thead><tr>${t.headers.map(h=>`<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${t.rows.map(row=>`<tr>${row.map((cell,index)=>{
   if(typeof cell==='object'){
    const f=item.fields.find(f=>f.id===cell.id),correct=disabled?C.fieldCorrect(f,answer?.[f.id]):null;
    if(f.type==='choice'){const tag=index===0?'th':'td',scope=index===0?' scope="row"':'';return `<${tag}${scope}><select data-field="${f.id}" aria-label="${esc(f.label)}" ${disabled?'disabled class="'+(correct?'answer-good':'answer-bad')+'"':''}><option value="">選択してください</option>${f.options.map(opt=>`<option value="${esc(opt)}" ${answer?.[f.id]===opt?'selected':''}>${esc(opt)}</option>`).join('')}</select></${tag}>`;}
    return `<td><input type="text" inputmode="numeric" maxlength="30" autocomplete="off" data-field="${f.id}" aria-label="${esc(f.label)}" value="${esc(answer?.[f.id]??'')}" ${disabled?'disabled class="'+(correct?'answer-good':'answer-bad')+'"':''}></td>`;
   }
   return `<${index===0?'th scope="row"':'td'}>${esc(cell)}</${index===0?'th':'td'}>`;
  }).join('')}</tr>`).join('')}</tbody></table></div>`;
 }
 function itemHTML(item,answer,disabled){
  let html=`<p class="muted small boki-scroll-hint">解答表は左右にスクロールできます。</p><p class="boki-prompt">${esc(item.prompt)}</p>${item.notes?'<ol class="boki-notes">'+item.notes.map(n=>`<li>${esc(n)}</li>`).join('')+'</ol>':''}`;
  if(item.type==='journal'){
   const a=answer||emptyJournal(item);html+='<p class="muted small">使わない行は科目・金額とも空欄にしてください。行の順序は採点に影響しません。同じ側の科目は重複できません。金額の単位：円。</p>';
   const rowCount=Math.max(item.debit.length,item.credit.length)+1;
   html+=`<div class="boki-scroll" role="region" tabindex="0" aria-label="仕訳解答欄。横にスクロールできます"><table><caption>仕訳の解答欄</caption><thead><tr><th scope="col">借方科目</th><th scope="col">金額（円）</th><th scope="col">貸方科目</th><th scope="col">金額（円）</th></tr></thead><tbody>${Array.from({length:rowCount},(_,row)=>`<tr>${['debit','credit'].map(side=>{const values=a[side]?.[row]||['',''],name=(side==='debit'?'借方':'貸方')+(row+1)+'行目';return `<td><select data-side="${side}" data-row="${row}" data-part="0" aria-label="${name}の科目" ${disabled?'disabled':''}><option value="">選択してください</option>${item.options.map(opt=>`<option value="${esc(opt)}" ${values[0]===opt?'selected':''}>${esc(opt)}</option>`).join('')}</select></td><td><input type="text" inputmode="numeric" maxlength="30" autocomplete="off" data-side="${side}" data-row="${row}" data-part="1" aria-label="${name}の金額" value="${esc(values[1])}" ${disabled?'disabled':''}></td>`;}).join('')}</tr>`).join('')}</tbody></table></div>`;
   const duplicate=duplicateMessage(a);
   html+=`<p id="boki-journal-duplicate-warning" class="boki-inline-warning ${duplicate?'':'hidden'}" role="status">${esc(duplicate)}</p>`;
  }else html+=item.tables.map(t=>tableHTML(t,item,answer,disabled)).join('');
  return html;
 }
 function solutions(item,answer){
  const g=C.grade(item,answer);
  let html=`<p class="${g.correct?'correct':'wrong'}"><strong>${g.correct?'正解':'要復習'}：${g.earned} / ${g.max}点</strong></p>`;
  if(item.type==='journal'){
   html+=`<div class="boki-solution"><h3>正しい仕訳</h3><p>借方：${item.debit.map(r=>esc(r[0])+' '+num(r[1])+'円').join(' ／ ')}<br>貸方：${item.credit.map(r=>esc(r[0])+' '+num(r[1])+'円').join(' ／ ')}</p><p>${esc(item.explanation)}</p></div>`;
    if(!g.correct&&duplicateMessage(answer))html+=`<p class="boki-inline-warning">${esc(duplicateMessage(answer))}</p>`;
  }else html+=item.fields.map(f=>{const correct=C.fieldCorrect(f,answer?.[f.id]);return `<div class="boki-solution"><p class="${correct?'correct':'wrong'}"><strong>${correct?'○':'×'} ${esc(f.label)}</strong>（${correct?f.points:0}/${f.points}点）</p><p>あなたの解答：${esc(answer?.[f.id]||'未解答')} ／ 正答：<strong>${f.type==='choice'?esc(f.answer):num(f.answer)}</strong></p><p>${esc(f.explanation)}</p></div>`;}).join('');
  return html;
 }
 function navigation(){
  const exam=C.examFor(D,session.level,session.form),currentIds=new Set(session.ids);
  return exam.sections.map(section=>{const items=section.items.filter(i=>currentIds.has(i.id));if(!items.length)return '';return `<div class="boki-nav-section"><h3>${esc(section.title)}</h3><div class="boki-question-nav">${items.map((item,i)=>{const n=session.ids.indexOf(item.id),done=C.touched(session.answers[item.id]);return `<button data-action="jump" data-index="${n}" class="${n===session.index?'current ':''}${done?'done ':''}${session.flags[item.id]?'flagged':''}" ${n===session.index?'aria-current="step"':''} aria-label="${esc(section.title)}の${i+1}題目、${done?'入力あり':'未入力'}${session.flags[item.id]?'、見直し':''}">${i+1}${done?' ✓':''}${session.flags[item.id]?' ★':''}</button>`;}).join('')}</div></div>`;}).join('');
 }
 function renderSession(){
  clearTimer();const item=itemsFor(session)[session.index],exam=C.examFor(D,session.level,session.form),section=exam.sections.find(s=>s.items.some(i=>i.id===item.id)),disabled=session.mode!=='exam'&&!!session.checked[item.id];
  app.innerHTML=`<section class="card"><div class="boki-session-top"><div><span class="pill">${esc(exam.label)} ${session.mode==='exam'?'模試':session.mode==='review'?'復習':'演習'}</span><p class="muted small">${esc(exam.set)} ／ ${session.index+1} / ${session.ids.length}題</p></div>${session.mode==='exam'?'<span id="boki-timer" class="timer" role="timer" aria-label="残り時間"></span>':''}<button data-action="pause">保存してホームへ</button></div><p class="boki-tag">${esc(section.title)}</p><h2 id="boki-heading" tabindex="-1">${esc(item.title||'仕訳 '+(section.items.indexOf(item)+1))}</h2>${itemHTML(item,session.answers[item.id],disabled)}<p class="boki-live" id="boki-save-status" role="status">${dirty?'保存に失敗しています':'入力はこのブラウザに自動保存します'}</p><button id="boki-flag" class="review-flag ${session.flags[item.id]?'active':''}" aria-pressed="${!!session.flags[item.id]}" data-action="flag">${session.flags[item.id]?'★ 見直し指定を解除':'☆ あとで見直す'}</button>${disabled?'<div class="result" role="status">'+solutions(item,session.answers[item.id])+'</div>':''}<div class="actions"><button data-action="prev" ${session.index===0?'disabled':''}>前の題</button>${session.mode!=='exam'&&!disabled?'<button class="primary" data-action="check">答え合わせ</button>':''}<button data-action="next" ${session.index===session.ids.length-1?'disabled':''}>次の題</button></div><details class="exam-nav-details"><summary>問題一覧・解答状況</summary><p class="muted small">✓ 入力あり ／ ★ 見直し指定。入力ありは全欄の解答完了を意味しません。</p><div id="boki-nav">${navigation()}</div></details><div class="actions"><button class="danger-outline" data-action="finish">${session.mode==='exam'?'模試を終了して採点':'演習を終了して結果を見る'}</button></div></section>`;
  if(session.mode==='exam'){tick();if(session)timer=setInterval(tick,500);}
 }
 function tick(){
  if(!session||session.mode!=='exam')return;
  const seconds=Math.max(0,Math.ceil((session.deadline-Date.now())/1000));
  const el=document.getElementById('boki-timer');if(el){el.textContent=Math.floor(seconds/60)+':'+String(seconds%60).padStart(2,'0');el.classList.toggle('urgent',seconds<300);}
  if(seconds===0)finish(true);
 }
 function input(event){
  if(!session)return; if(session.mode==='exam'&&Date.now()>=session.deadline){finish(true);return;}
  const target=event.target,item=itemsFor(session)[session.index];if(session.checked[item.id]&&session.mode!=='exam')return;
  if(target.dataset.field){session.answers[item.id]??={};session.answers[item.id][target.dataset.field]=target.value;}
  else if(target.dataset.side){session.answers[item.id]??=emptyJournal(item);session.answers[item.id][target.dataset.side][Number(target.dataset.row)][Number(target.dataset.part)]=target.value;}
  else return;
  persist();
  const warning=document.getElementById('boki-journal-duplicate-warning');
  if(warning){const msg=duplicateMessage(session.answers[item.id]);warning.textContent=msg;warning.classList.toggle('hidden',!msg);}
  const nav=document.getElementById('boki-nav');if(nav)nav.innerHTML=navigation();
 }
 function finish(expired=false){
  if(!session)return;
  if(!expired&&!window.confirm('解答を確定して採点します。未解答の欄は0点です。終了しますか？'))return;
  const completed={...session,finished:Date.now(),expired};
  const previousHistory=store.history,previousActive=store.active;
  store.history=[completed,...store.history.filter(h=>h.id!==completed.id)].slice(0,20);store.active=null;
  if(!persist()){
   store.history=previousHistory;store.active=previousActive;
   if(expired)clearTimer();
   return;
  }
  clearTimer();session=null;
  if(expired)say('制限時間になったため、入力済みの解答で採点しました。');
  showResult(completed);focusHeading();
 }
 function showResult(h){
  clearTimer();session=null;displayed=h;level=String(h.level);form=String(h.form);const items=itemsFor(h),result=C.result(items,h.answers),exam=C.examFor(D,level,form);
  app.innerHTML=`<section class="card boki-result"><p class="boki-tag">${esc(exam.label)} ${esc(exam.set)} ${h.mode==='exam'?'模擬試験':'問題演習'}の結果</p><h2 id="boki-heading" tabindex="-1">採点結果</h2><p class="boki-summary">${result.earned} <span class="muted">/ ${result.max}点</span></p><p>${h.mode==='exam'?(result.earned>=70?'到達目安の70点以上です。':'70点の到達目安まで、間違えた箇所を復習しましょう。'):'演習では合否判定を行いません。'}</p><p class="muted small">独自問題・独自配点による学習の目安です。</p>${exam.sections.map(s=>{const subset=s.items.filter(i=>h.ids.includes(i.id));if(!subset.length)return '';const r=C.result(subset,h.answers);return `<div class="stat-row"><span>${esc(s.title)}</span><strong>${r.earned} / ${r.max}点</strong></div>`;}).join('')}<div class="actions"><button class="primary" data-action="home">ホームへ</button>${result.grades.some(g=>!g.correct)?'<button data-action="result-review">今回間違えた題を復習</button>':''}</div><h3>問題別の答え合わせ</h3>${items.map((item,i)=>{const g=C.grade(item,h.answers[item.id]);return `<details><summary class="${g.correct?'correct':'wrong'}">${i+1}. ${esc(item.title||'仕訳')}　${g.earned}/${g.max}点</summary>${itemHTML(item,h.answers[item.id],true)}${solutions(item,h.answers[item.id])}</details>`;}).join('')}</section>`;
 }
 app.addEventListener('input',input);app.addEventListener('change',event=>{if(event.target.id==='boki-form'){form=event.target.value;home();document.getElementById('boki-form')?.focus({preventScroll:true});}else if(event.target.matches('select[data-side], select[data-field]'))input(event);});
 app.addEventListener('click',event=>{
  const button=event.target.closest('button[data-action]');if(!button||button.disabled)return;
  const action=button.dataset.action;
  if(session&&session.mode==='exam'&&Date.now()>=session.deadline){finish(true);return;}
  if(action==='level'){level=button.dataset.level;form='1';say('');home();app.querySelector('button[data-action="level"][data-level="'+level+'"]')?.focus({preventScroll:true});}
  else if(['practice','review','exam'].includes(action))start(action);
  else if(action==='home'){home();focusHeading();}
  else if(action==='resume'){session=store.active;level=String(session.level);form=String(session.form);renderSession();focusHeading();}
  else if(action==='pause'){if(!persist())return;home();focusHeading();}
  else if(action==='discard'){if(window.confirm('簿記ラボの途中経過を削除しますか？')){store.active=null;persist();home();}}
  else if(action==='clear'){if(window.confirm('簿記ラボの履歴と途中経過を削除しますか？FPラボの記録は変更しません。')){store={schema:1,active:null,history:[]};persist();home();}}
  else if(action==='history'){const h=store.history.find(h=>h.id===button.dataset.id);if(h){showResult(h);focusHeading();}}
  else if(action==='result-review'){
   if(store.active&&!window.confirm('中断中の学習を、今回の復習で置き換えますか？'))return;
   const wrong=itemsFor(displayed).filter(i=>!C.grade(i,displayed.answers[i.id]).correct);if(!wrong.length){say('今回はすべて正解です。');return;}
   session={revision:C.revision,id:String(Date.now())+'-review',level,form,mode:'review',ids:wrong.map(i=>i.id),index:0,answers:{},checked:{},flags:{},started:Date.now(),deadline:null};store.active=session;persist();renderSession();focusHeading();
  }
  else if(session){
   const id=session.ids[session.index];
   if(action==='finish'){finish();return;}
   if(action==='check'){session.checked[id]=true;}
   else if(action==='flag'){session.flags[id]=!session.flags[id];}
   else if(action==='prev')session.index=Math.max(0,session.index-1);
   else if(action==='next')session.index=Math.min(session.ids.length-1,session.index+1);
   else if(action==='jump')session.index=Number(button.dataset.index);
   persist();renderSession();if(action==='flag')document.getElementById('boki-flag')?.focus();else focusHeading();
  }
 });
 document.addEventListener('visibilitychange',()=>{if(!document.hidden)tick();});
 window.addEventListener('beforeunload',event=>{if(dirty){event.preventDefault();event.returnValue='';}});
 home();
})();
