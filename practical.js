'use strict';
/* 実技モード。既存の学科の保存キーとロジックを変更しない。 */
(() => {
  const $p = id => document.getElementById(id);
  const DRAFT = 'fp-training-practical-v10-draft';
  const HISTORY = 'fp-training-practical-v10-results';
  const VIEWS = ['home','quiz','finish','exam','examResult','practicalHome','practicalExam','practicalResult'];
  let attempt = null;
  let lastResult = null;
  let reviewFilter = 'issues';
  let timer = null;
  const trackFor = id => PRACTICAL_TRACKS.find(t => t.id === id);
  const qsFor = id => PRACTICAL_QUESTIONS.filter(q => q.track === id);
  const read = (key, fallback) => {
    try { let data = JSON.parse(localStorage.getItem(key)); return data && typeof data === 'object' ? data : fallback; }
    catch { return fallback; }
  };
  const save = (key,data) => { try {localStorage.setItem(key,JSON.stringify(data));return true;}catch{alert('この端末には保存できません。ブラウザの保存設定または空き容量を確認してください。');return false;} };
  const remove = key => {try{localStorage.removeItem(key);}catch{ /* private mode */ }};
  const navigate = id => {
    if (timer){clearInterval(timer);timer=null;}
    VIEWS.forEach(v=>$p(v).classList.toggle('hidden',v!==id));
    window.scrollTo(0,0);
    if (id==='practicalHome') renderCourses();
    if (id==='home') updateHome();
  };
  const readableNum = n => Number(n).toLocaleString('ja-JP',{maximumFractionDigits:5});
  const parseNumber = value => {
    if (typeof value !== 'string') return NaN;
    const str = value.trim().replace(/[０-９．－＋，]/g, c => '０１２３４５６７８９．－＋，'.indexOf(c)>=0 ? '0123456789.-+,'.charAt('０１２３４５６７８９．－＋，'.indexOf(c)) : c).replace(/,/g,'');
    return str!=='' && /^[+-]?(?:\d+\.?\d*|\.\d+)$/.test(str) ? Number(str) : NaN;
  };
  const grade = (q,a) => {
    if (a===null||a===undefined||a==='') return false;
    if (q.kind==='choice') return a===q.answer;
    const num=parseNumber(String(a));
    return Number.isFinite(num) && Math.abs(num-q.answer) <= (q.tolerance||0)+1e-9;
  };
  const answerStr = (q,a) => {
    if (a===null||a===undefined||a==='')return '未回答';
    return q.kind==='choice' ? (q.choices[a]||'無効な選択') : `${a} ${q.unit||''}`;
  };
  const correctStr = q => q.kind==='choice' ? q.choices[q.answer] : `${readableNum(q.answer)} ${q.unit||''}`;
  const label = tr => `FP${tr.level}級｜${tr.org}｜${tr.name}`;
  function renderCourses(){
    const cards=$p('prTracks'); cards.replaceChildren();
    for(const tr of PRACTICAL_TRACKS){
      const available=qsFor(tr.id).length>0&&!tr.disabled;
      const box=document.createElement('div');box.className='pr-track'+(available?'':' disabled');
      const org=document.createElement('div');org.className='pr-org';org.textContent=`FP${tr.level}級｜${tr.org}`;
      const h=document.createElement('h3');h.textContent=tr.name;
      const p=document.createElement('p');p.className='muted small';p.textContent= available ? `${qsFor(tr.id).length}問の体験演習｜${tr.format}｜本試験は${tr.officialCount}問` : `追加予定｜本試験は${tr.officialCount}問`;
      const a=document.createElement('a');a.href=tr.source;a.target='_blank';a.rel='noopener noreferrer';a.textContent='参考：2026年公表の公式問題PDF';a.className='small';
      const btn=document.createElement('button');btn.type='button';btn.textContent=available?'この科目を練習する':'準備中';btn.disabled=!available;
      if(available){btn.className='primary';btn.addEventListener('click',()=>start(tr.id));}
      box.append(org,h,p,a,btn);cards.append(box);
    }
    const d=read(DRAFT,null);
    const okay=d && trackFor(d.track)&&Array.isArray(d.questions)&&Array.isArray(d.answers)&&d.questions.length===d.answers.length;
    $p('prResumeBox').classList.toggle('hidden',!okay);
    if(okay){$p('prResume').textContent=`FP${trackFor(d.track).level}級｜${trackFor(d.track).name}の続きから再開`;}
    const prior=read(HISTORY,{attempts:[]});
    const attempts=(Array.isArray(prior.attempts)?prior.attempts:[]).filter(a=>trackFor(a.track)&&Array.isArray(a.questions)&&Array.isArray(a.answers));
    $p('prHistoryBox').classList.toggle('hidden',attempts.length===0);
    const historyList=$p('prHistoryList');historyList.replaceChildren();
    for(const a of attempts.slice(0,8)){
      const row=document.createElement('div');row.className='exam-history-entry';
      const p=document.createElement('p');p.textContent=`${new Date(a.finishedAt).toLocaleDateString('ja-JP')}｜FP${trackFor(a.track).level}級 ${trackFor(a.track).name}｜${a.correct}/${a.questions.length}問`;
      const b=document.createElement('button');b.type='button';b.textContent='答え合わせを開く';
      b.addEventListener('click',()=>{lastResult=a;reviewFilter='issues';navigate('practicalResult');renderResult();});
      row.append(p,b);historyList.append(row);
    }
  }
  function start(id){
    const tr=trackFor(id);
    if(!tr||tr.disabled)return;
    const draft=read(DRAFT,null);
    if(draft && !confirm('保存している実技演習を終了し、新しく始めますか？前回の未採点の回答は消えます。'))return;
    const list=qsFor(id).map(q=>({...q,choices:q.choices.slice()}));
    attempt={version:11,track:id,questions:list,answers:list.map(()=>null),pos:0,startedAt:Date.now()};
    save(DRAFT,attempt);
    navigate('practicalExam');renderQuestion();
  }
  function renderQuestion(){
    if(!attempt)return;
    const tr=trackFor(attempt.track),q=attempt.questions[attempt.pos];
    $p('prLabel').textContent=`FP${tr.level}級｜${tr.name}`;
    $p('prProgress').textContent=`${attempt.pos+1}/${attempt.questions.length}問`;
    $p('prBar').style.width=`${attempt.answers.filter(v=>v!==null&&v!=='').length/attempt.questions.length*100}%`;
    $p('prCaseTitle').textContent=`${tr.id.startsWith('kinzai')?'設例':''} ${q.caseTitle}`.trim();
    $p('prCaseText').textContent=q.caseText;
    $p('prTopic').textContent=`学習テーマ：${q.topic}｜参考問題の法令基準日：${q.lawReferenceDate || "2025-04-01"}（数値条件は設例指定）`;
    $p('prQuestion').textContent=q.question;
    $p('prChoices').replaceChildren();
    const number=q.kind==='numeric';
    $p('prChoices').classList.toggle('hidden',number);
    $p('prNumeric').classList.toggle('hidden',!number);
    if(number){
      $p('prNumberUnit').textContent=q.unit||'';
      $p('prNumberInput').value=attempt.answers[attempt.pos]??'';
    }else{
      q.choices.forEach((choice,i)=>{
        const b=document.createElement('button');b.type='button';b.className='wide';b.textContent=`${i+1}. ${choice}`;
        const active=attempt.answers[attempt.pos]===i;
        b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));
        b.addEventListener('click',()=>{attempt.answers[attempt.pos]=i;save(DRAFT,attempt);renderQuestion();});
        $p('prChoices').append(b);
      });
    }
    $p('prPrev').disabled=attempt.pos===0;
    $p('prNext').disabled=attempt.pos===attempt.questions.length-1;
    $p('prNext').textContent=attempt.pos===attempt.questions.length-1?'最終問題':'次の問題';
    const nav=$p('prNav');nav.replaceChildren();
    for(let i=0;i<attempt.questions.length;i++){
      const b=document.createElement('button');b.type='button';b.textContent=String(i+1);
      const a=attempt.answers[i];const done=a!==null&&a!=='';
      b.classList.toggle('done',done);b.classList.toggle('current',i===attempt.pos);
      b.setAttribute('aria-label',`第${i+1}問${done?'回答済み':'未回答'}`);
      if(i===attempt.pos)b.setAttribute('aria-current','step');
      b.addEventListener('click',()=>jump(i));nav.append(b);
    }
    $p('prAnswered').textContent=`${attempt.answers.filter(a=>a!==null&&a!=='').length}/${attempt.answers.length}問 回答済`;
  }
  function jump(i){
    if(!attempt || i<0||i>=attempt.questions.length)return;
    attempt.pos=i;save(DRAFT,attempt);renderQuestion();window.scrollTo(0,0);
  }
  function resume(){
    const d=read(DRAFT,null);
    if(!d||!trackFor(d.track)||!Array.isArray(d.questions)||!Array.isArray(d.answers)||d.questions.length!==d.answers.length){alert('保存した演習データがありません。');return;}
    attempt=d;
    if(!Number.isInteger(attempt.pos)||attempt.pos<0||attempt.pos>=attempt.answers.length)attempt.pos=0;
    navigate('practicalExam');renderQuestion();
  }
  function finish(){
    if(!attempt)return;
    const unfilled=attempt.answers.filter(a=>a===null||a==='').length;
    if(!confirm(unfilled?`未回答が${unfilled}問あります。採点しますか？`:'演習を終了して採点しますか？'))return;
    const correct=attempt.questions.filter((q,i)=>grade(q,attempt.answers[i])).length;
    const result={id:`${Date.now()}-${Math.floor(Math.random()*100000)}`,track:attempt.track,questions:attempt.questions,answers:attempt.answers.slice(),correct,finishedAt:Date.now()};
    const prior=read(HISTORY,{attempts:[]});
    const rows=Array.isArray(prior.attempts)?prior.attempts:[];
    save(HISTORY,{attempts:[{...result},...rows].slice(0,8)});
    remove(DRAFT);attempt=null;lastResult=result;reviewFilter='issues';
    navigate('practicalResult');renderResult();
  }
  function renderResult(){
    if(!lastResult)return;
    const r=lastResult, total=r.questions.length,ratio=Math.round(100*r.correct/total),tr=trackFor(r.track);
    $p('prSummary').textContent=`${label(tr)}｜${total}問中${r.correct}問正解（${ratio}％）`;
    $p('prResultNote').textContent=`これは${total}問のオリジナル体験演習です。本試験は${tr.officialCount}問で配点も異なります。したがって、この正答率から本試験の合否は判定できません。`;
    $p('prIssues').classList.toggle('active',reviewFilter==='issues');$p('prAll').classList.toggle('active',reviewFilter==='all');
    const errors=r.questions.map((q,i)=>({q,i})).filter(({q,i})=>!grade(q,r.answers[i]));
    $p('prIssues').textContent=`要復習（${errors.length}問）`;
    $p('prAll').textContent=`全問（${total}問）`;
    $p('prReviewEmpty').textContent=errors.length===0&&reviewFilter==='issues'?'全問正解です。「全問」で解説を確認できます。':'';
    const list=$p('prReviews');list.replaceChildren();
    const items=reviewFilter==='issues'?errors:r.questions.map((q,i)=>({q,i}));
    items.forEach(({q,i})=>{
      const good=grade(q,r.answers[i]);
      const d=document.createElement('details');d.className='review-details';
      const heading=document.createElement('summary');
      const name=document.createElement('span');name.textContent=`第${i+1}問｜${q.caseTitle}`;
      const status=document.createElement('strong');status.className=good?'correct':'wrong';status.textContent=good?'正解':r.answers[i]===null||r.answers[i]===''?'未回答':'不正解';heading.append(name,status);
      const body=document.createElement('div');body.className='review-details-body';
      [['設例：',q.caseText],['問題：',q.question],['あなたの回答：',answerStr(q,r.answers[i])],['正解：',correctStr(q)],['解説：',q.explanation]].forEach(([k,v])=>{const p=document.createElement('p');p.textContent=k+v;body.append(p);});
      d.append(heading,body);list.append(d);
    });
  }
  $p('openPractical').addEventListener('click',()=>navigate('practicalHome'));
  $p('openPracticalTop').addEventListener('click',()=>navigate('practicalHome'));
  $p('prBackHome').addEventListener('click',()=>navigate('home'));
  $p('prResume').addEventListener('click',resume);
  $p('prPrev').addEventListener('click',()=>attempt&&jump(attempt.pos-1));
  $p('prNext').addEventListener('click',()=>attempt&&jump(attempt.pos+1));
  $p('prNumberInput').addEventListener('input',e=>{
    if(!attempt)return;
    attempt.answers[attempt.pos]=e.target.value;
    save(DRAFT,attempt);
    $p('prAnswered').textContent=`${attempt.answers.filter(a=>a!==null&&a!=='').length}/${attempt.answers.length}問 回答済`;
    $p('prNav').children[attempt.pos]?.classList.toggle('done',e.target.value!=='');
    $p('prBar').style.width=`${attempt.answers.filter(a=>a!==null&&a!=='').length/attempt.answers.length*100}%`;
  });
  $p('prSaveExit').addEventListener('click',()=>{if(attempt)save(DRAFT,attempt);attempt=null;navigate('practicalHome');});
  $p('prSubmit').addEventListener('click',finish);
  $p('prResultHome').addEventListener('click',()=>navigate('practicalHome'));
  $p('prRetry').addEventListener('click',()=>lastResult&&start(lastResult.track));
  $p('prIssues').addEventListener('click',()=>{reviewFilter='issues';renderResult();});
  $p('prAll').addEventListener('click',()=>{reviewFilter='all';renderResult();});

  // Header title works from every screen. Save in-progress practical answers first.
  $p('siteHomeLink').addEventListener('click', e => {
    e.preventDefault();
    if (attempt) { save(DRAFT, attempt); attempt = null; }
    if (typeof goHome === 'function') goHome();
    navigate('home');
  });
  // 学科の従来のキーとは別に、実技の結果は科目ごとに保存。再受験時は上書きせず履歴を蓄積する。
  window.__fpPracticalTest = {parseNumber,grade,trackFor,qsFor,read,openPractical:()=>navigate('practicalHome')};
})();
