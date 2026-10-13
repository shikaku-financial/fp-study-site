'use strict';
/* 実技モード。正式リリース前の改訂に伴い保存キーを更新。 */
(() => {
  const $p = id => document.getElementById(id);
  const DRAFT = 'fp-training-practical-v12-draft';
  const HISTORY = 'fp-training-practical-v12-results';
  const VIEWS = ['home','quiz','finish','exam','examResult','practicalHome','practicalExam','practicalResult'];
  let attempt = null;
  let expectedDraftToken = null;
  let lastResult = null;
  let reviewFilter = 'issues';
  let selectedPracticalLevel = '3';
  let timer = null;
  const trackFor = id => PRACTICAL_TRACKS.find(t => t.id === id);
  const qsFor = id => PRACTICAL_QUESTIONS.filter(q => q.track === id);
  const read = (key, fallback) => {
    try { let data = JSON.parse(localStorage.getItem(key)); return data && typeof data === 'object' ? data : fallback; }
    catch { return fallback; }
  };
  const save = (key,data) => { try {
    if(key===DRAFT && localStorage.getItem(key)!==expectedDraftToken){
      alert('途中データが別の画面で更新・削除されています。上書きを止めました。続行するにはページを再読込みし、保存済みの続きから再開してください。この画面の未保存の回答は再読込みすると失われます。');return false;
    }
    const raw=JSON.stringify(data);localStorage.setItem(key,raw);
    if(key===DRAFT)expectedDraftToken=raw;
    return true;
  }catch{alert('この端末には保存できません。ブラウザの保存設定または空き容量を確認してください。');return false;} };
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
    // Two clear steps on mobile: grade first, then organizer.
    for (const level of ['3','2']) {
      const tab=$p(`prSelectLevel${level}`);
      const active=selectedPracticalLevel===level;
      tab.classList.toggle('active',active);
      tab.setAttribute('aria-pressed',String(active));
    }
    const cards=$p('prTracks');cards.replaceChildren();
    const selected=PRACTICAL_TRACKS.filter(tr=>tr.level===selectedPracticalLevel);
    const organizers=[
      {name:'日本FP協会',heading:'日本FP協会',sub:'資産設計提案業務'},
      {name:'金融財政事情研究会',heading:'金融財政事情研究会（金財）',sub:'相談業務別の実技科目'}
    ];
    for(const orgInfo of organizers){
      const groupCourses=selected.filter(tr=>tr.org===orgInfo.name);
      if(!groupCourses.length)continue;
      const group=document.createElement('section');group.className='pr-org-group';
      group.setAttribute('aria-label',`FP${selectedPracticalLevel}級 ${orgInfo.heading}`);
      const groupHead=document.createElement('div');groupHead.className='pr-org-heading';
      const h=document.createElement('h3');h.textContent=orgInfo.heading;
      const count=document.createElement('span');count.className='pr-org-count';count.textContent=`${groupCourses.length}科目`;
      groupHead.append(h,count);
      const desc=document.createElement('p');desc.className='muted small';desc.textContent=orgInfo.sub;
      const listing=document.createElement('div');listing.className='pr-track-list';
      for(const tr of groupCourses){
        const available=qsFor(tr.id).length>0&&!tr.disabled;
        const box=document.createElement('div');box.className='pr-track'+(available?'':' disabled');
        const org=document.createElement('div');org.className='pr-org';org.textContent=`FP${tr.level}級｜${orgInfo.heading}`;
        const title=document.createElement('h4');title.textContent=tr.name;
        const p=document.createElement('p');p.className='muted small';p.textContent= available ? `${qsFor(tr.id).length}問収録｜${tr.format}｜本試験は${tr.officialCount}問` : `追加予定｜本試験は${tr.officialCount}問`;
        const a=document.createElement('a');a.href=tr.source;a.target='_blank';a.rel='noopener noreferrer';a.textContent='参考：試験実施団体の公表問題PDF（外部） ↗';a.className='small';
        const btn=document.createElement('button');btn.type='button';btn.textContent=available?'この科目を練習する':'準備中';btn.disabled=!available;
        if(available){
          btn.className='primary';
          if(tr.id.startsWith('kinzai') && qsFor(tr.id).length>=30){
            btn.textContent='第1回（15問）を練習';
            btn.addEventListener('click',()=>start(tr.id,1));
            const second=document.createElement('button');second.type='button';
            second.className='secondary pr-second-set';second.textContent='第2回（15問）を練習';
            second.addEventListener('click',()=>start(tr.id,2));
            box.append(org,title,p,a,btn,second);listing.append(box);continue;
          }
          btn.addEventListener('click',()=>start(tr.id));
        }
        box.append(org,title,p,a,btn);listing.append(box);
      }
      group.append(groupHead,desc,listing);cards.append(group);
    }
    const d=read(DRAFT,null);
    const okay=validDraft(d);
    $p('prResumeBox').classList.toggle('hidden',!okay);
    if(okay){$p('prResume').textContent=`FP${trackFor(d.track).level}級｜${trackFor(d.track).name}の続きから再開`;}
    renderPracticalHistory();
  }
  function historyRows(){
    const stored=read(HISTORY,{attempts:[]});
    return Array.isArray(stored.attempts)?stored.attempts:[];
  }
  function validHistory(){
    // Keep the raw position and snapshot so one-row deletion preserves every other row.
    return historyRows().map((a,index)=>({a,index})).filter(({a})=>
      a && typeof a.id==='string' && a.id && validDraft(a)).map(({a,index})=>({
        ...a,correct:a.questions.filter((q,i)=>grade(q,a.answers[i])).length,
        storedIndex:index,storedSnapshot:JSON.stringify(a)
      }));
  }
  function renderPracticalHistory(){
    const attempts=validHistory();
    const skipped=historyRows().length-attempts.length;
    $p('prHistoryValidation').textContent=skipped?`${skipped}件の履歴はデータを確認できないため表示していません。保存データは保持しています。`:'';
    $p('prHistoryBox').classList.toggle('hidden',historyRows().length===0);
    const historyList=$p('prHistoryList');historyList.replaceChildren();
    for(const a of attempts){
      const tr=trackFor(a.track);
      const row=document.createElement('div');row.className='pr-history-entry';
      const summary=document.createElement('div');summary.className='pr-history-summary';
      const course=document.createElement('strong');course.textContent=`FP${tr.level}級｜${tr.org==='金融財政事情研究会'?'金財':'日本FP協会'}｜${tr.name}`;
      const details=document.createElement('span');details.className='muted small';details.textContent=`${Number.isFinite(a.finishedAt)&&Number.isFinite(new Date(a.finishedAt).getTime())?new Date(a.finishedAt).toLocaleDateString('ja-JP'):'日付不明'}｜${a.correct}/${a.questions.length}問正解`;
      summary.append(course,details);
      const buttons=document.createElement('div');buttons.className='pr-history-actions';
      const open=document.createElement('button');open.type='button';open.textContent='答え合わせ';
      open.addEventListener('click',()=>{lastResult=a;reviewFilter='issues';navigate('practicalResult');renderResult();});
      const del=document.createElement('button');del.type='button';del.className='danger-outline';del.textContent='削除';
      del.setAttribute('aria-label',`${course.textContent} ${details.textContent} の履歴を削除`);
      del.addEventListener('click',()=>{
        if(!confirm(`「${course.textContent}」の受験履歴を1件削除しますか？\n削除後は復元できません。`))return;
        const stored=historyRows();
        if(JSON.stringify(stored[a.storedIndex])!==a.storedSnapshot){$p('prHistoryNotice').textContent='履歴が更新されています。科目一覧を開き直してから削除してください。';return;}
        const updated=stored.slice();updated.splice(a.storedIndex,1);
        if(!save(HISTORY,{attempts:updated}))return;
        if(lastResult&&lastResult.id===a.id)lastResult=null;
        $p('prHistoryNotice').textContent='受験履歴を1件削除しました。';
        renderPracticalHistory();
      });
      buttons.append(open,del);row.append(summary,buttons);historyList.append(row);
    }
  }
  function clearPracticalHistory(){
    const attempts=historyRows();
    if(!attempts.length)return;
    if(!confirm(`実技演習の受験履歴${attempts.length}件（表示できない記録を含む）をすべて削除しますか？\n削除後は復元できません。\n学科の記録と途中保存の回答は残ります。`))return;
    if(!save(HISTORY,{attempts:[]}))return;
    lastResult=null;
    $p('prHistoryNotice').textContent=`受験履歴${attempts.length}件を削除しました。`;
    renderPracticalHistory();
  }
  // Start from immutable question snapshots so that reattempts use the exact same set.
  function startFromQuestions(trackId, sourceQuestions, mode='full'){
    const originalDraftToken=draftToken(DRAFT);
    const tr=trackFor(trackId);
    if(!tr || !Array.isArray(sourceQuestions) || !sourceQuestions.length)return;
    const draft=read(DRAFT,null);
    if(draft && !confirm('保存している実技演習を終了し、新しく始めますか？前回の未採点の回答は消えます。'))return;
    const list=sourceQuestions.map(q=>({...q,choices:Array.isArray(q.choices)?q.choices.slice():[]}));
    const previousToken=expectedDraftToken;
    expectedDraftToken=originalDraftToken;
    const nextAttempt={version:17,track:trackId,mode,questions:list,answers:list.map(()=>null),pos:0,startedAt:Date.now()};
    if(!save(DRAFT,nextAttempt)){expectedDraftToken=previousToken;return;}
    attempt=nextAttempt;
    navigate('practicalExam');renderQuestion();
  }
  function retrySameSet(){
    if(!lastResult)return;
    startFromQuestions(lastResult.track,lastResult.questions,'retry');
  }
  function retryMistakes(){
    if(!lastResult)return;
    const wrong=lastResult.questions.filter((q,i)=>!grade(q,lastResult.answers[i]));
    if(!wrong.length){alert('全問正解のため、復習が必要な問題はありません。');return;}
    startFromQuestions(lastResult.track,wrong,'mistakes');
  }
  function start(id, setNumber=1){
    const tr=trackFor(id);
    if(!tr||tr.disabled)return;
    const draft=read(DRAFT,null);
    if(draft && !confirm('保存している実技演習を終了し、新しく始めますか？前回の未採点の回答は消えます。'))return;
    const source=qsFor(id);
    const selected=(id.startsWith('kinzai') && source.length>=30) ? source.slice((setNumber-1)*15,setNumber*15) : source;
    startFromQuestions(id,selected,`set-${setNumber}`);
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
  function validDraft(d){
    if(!d || !trackFor(d.track) || !Array.isArray(d.questions) || !d.questions.length ||
       d.questions.length > qsFor(d.track).length || !Array.isArray(d.answers) || d.questions.length !== d.answers.length)return false;
    const ids=new Set();
    return d.questions.every((q,i)=>{
      if(!q || typeof q.id!=='string' || ids.has(q.id) || q.track!==d.track ||
         !qsFor(d.track).some(current=>current.id===q.id) || typeof q.question!=='string' || !q.question.trim() ||
         typeof q.explanation!=='string')return false;
      ids.add(q.id);
      const a=d.answers[i];
      if(q.kind==='numeric')return Number.isFinite(q.answer) &&
        (q.tolerance===undefined || (Number.isFinite(q.tolerance)&&q.tolerance>=0)) &&
        (a===null || typeof a==='string' || (typeof a==='number'&&Number.isFinite(a)));
      return q.kind==='choice' && Array.isArray(q.choices) && q.choices.length>=2 &&
        q.choices.every(c=>typeof c==='string') && Number.isInteger(q.answer) && q.answer>=0 && q.answer<q.choices.length &&
        (a===null || (Number.isInteger(a)&&a>=0&&a<q.choices.length));
    });
  }
  function resume(){
    const originalDraftToken=draftToken(DRAFT);
    const d=read(DRAFT,null);
    if(!validDraft(d)){alert('保存した演習データがありません。');return;}
    attempt=d;
    expectedDraftToken=originalDraftToken;
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
    if(!save(DRAFT,attempt))return;
    if(!save(HISTORY,{attempts:[{...result},...rows].slice(0,8)}))return;
    remove(DRAFT);attempt=null;lastResult=result;reviewFilter='issues';
    navigate('practicalResult');renderResult();
  }
  function renderResult(){
    if(!lastResult)return;
    const r=lastResult, total=r.questions.length,ratio=Math.round(100*r.correct/total),tr=trackFor(r.track);
    $p('prSummary').textContent=`${label(tr)}｜${total}問中${r.correct}問正解（${ratio}％）`;
    $p('prRetryMistakes').disabled=r.correct===total;
    $p('prRetryMistakes').textContent=r.correct===total?'全問正解（復習不要）':`間違えた${total-r.correct}問だけ再演習`;
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
      const note=document.createElement('p');note.className='muted small';
      note.textContent=`独自作成の演習問題です。資料の法令基準日：${q.lawReferenceDate||'未登録'}。全問の専門家監修は未完了です。`;
      body.append(note);
      const tr=trackFor(r.track);
      if(tr&&tr.source){
        const ref=document.createElement('p');const a=document.createElement('a');
        a.href=tr.source;a.target='_blank';a.rel='noopener noreferrer';
        a.textContent='参考にした試験実施団体の公表問題PDF（外部） ↗';ref.append(a);body.append(ref);
      }
      d.append(heading,body);list.append(d);
    });
  }
  for(const level of ['3','2'])$p(`prSelectLevel${level}`).addEventListener('click',()=>{selectedPracticalLevel=level;renderCourses();});
  $p('prClearHistory').addEventListener('click',clearPracticalHistory);
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
  $p('prSaveExit').addEventListener('click',()=>{if(attempt&&!save(DRAFT,attempt))return;attempt=null;navigate('practicalHome');});
  $p('prSubmit').addEventListener('click',finish);
  $p('prResultHome').addEventListener('click',()=>navigate('practicalHome'));
  $p('prRetry').addEventListener('click',retrySameSet);
  $p('prRetryMistakes').addEventListener('click',retryMistakes);
  $p('prIssues').addEventListener('click',()=>{reviewFilter='issues';renderResult();});
  $p('prAll').addEventListener('click',()=>{reviewFilter='all';renderResult();});

  // Header title works from every screen. Save in-progress practical answers first.
  $p('siteHomeLink').addEventListener('click', e => {
    e.preventDefault();
    if (attempt) { if (!save(DRAFT, attempt)) return; attempt = null; }
    if (typeof goHome === 'function' && goHome() === false) return;
    navigate('home');
  });
  // 学科の従来のキーとは別に、実技の結果は科目ごとに保存。再受験時は上書きせず履歴を蓄積する。
  window.__fpPracticalTest = {parseNumber,grade,trackFor,qsFor,read,openPractical:()=>navigate('practicalHome')};
})();
