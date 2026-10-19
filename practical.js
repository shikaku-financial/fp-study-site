'use strict';
/* 実技モード。正式リリース前の改訂に伴い保存キーを更新。 */
(() => {
  const $p = id => document.getElementById(id);
  const DRAFT = 'fp-training-practical-v12-draft';
  const HISTORY = 'fp-training-practical-v12-results';
  const AUTO_NEXT_PREF = 'fp-training-practical-auto-next';
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
  // Strict format is frozen into new snapshots; legacy attempts keep their original parser.
  const parseStrictNumber = value => {
    if (typeof value !== 'string') return NaN;
    const normalized=value.trim().replace(/[０-９．－＋，]/g,c=>'0123456789.-+,'.charAt('０１２３４５６７８９．－＋，'.indexOf(c)));
    if(!/^[+-]?(?:(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d*)?|\.\d+)$/.test(normalized))return NaN;
    const number=Number(normalized.replace(/,/g,''));
    return Number.isFinite(number)?number:NaN;
  };
  const parseWordBank = (value,bank) => {
    if(typeof value!=='string'||!Array.isArray(bank))return NaN;
    const normalized=value.trim().replace(/[０-９]/g,c=>String('０１２３４５６７８９'.indexOf(c)));
    if(!/^[1-9]\d*$/.test(normalized))return NaN;
    const n=Number(normalized);return Number.isSafeInteger(n)&&n<=bank.length?n:NaN;
  };
  // The parser version lives in each snapshot: new kana input never reinterprets old numeric codes.
  const WORD_BANK_SYMBOLS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ';
  const isSymbolBank = q => q.numericInputFormat==='wordbank-symbol-v1';
  const parseWordBankSymbol = (value,bank) => {
    if(typeof value!=='string'||!Array.isArray(bank)||bank.length>WORD_BANK_SYMBOLS.length)return NaN;
    const normalized=value.trim().normalize('NFKC').replace(/[ぁ-ゖ]/g,c=>String.fromCharCode(c.charCodeAt(0)+0x60));
    if(normalized.length!==1)return NaN;
    const index=WORD_BANK_SYMBOLS.indexOf(normalized);
    return index>=0&&index<bank.length?index+1:NaN;
  };
  const numericParser = q => isSymbolBank(q)?(v=>parseWordBankSymbol(v,q.wordBank)):q.numericInputFormat==='wordbank-index-v1'?(v=>parseWordBank(v,q.wordBank)): q.numericInputFormat==='grouped-decimal-v1'?parseStrictNumber:parseNumber;
  function updateNumericFeedback(q,value){
    const invalid=String(value).trim()!=='' && !Number.isFinite(numericParser(q)(String(value)));
    $p('prNumberInput').setAttribute('aria-invalid',String(invalid));
    $p('prNumberFeedback').textContent=invalid?'数字で入力してください。カンマは3桁区切り（例：1,234.5）で使えます。単位は入力欄の右側を確認してください。':'';
  }
  const isMulti = q => q.kind==='multi_numeric' || q.kind==='multi_choice' || q.kind==='wordbank_number';
  const blank = a => a===null || a===undefined || a==='';
  const completeAnswer = (q,a) => isMulti(q) ? Array.isArray(a) && a.length===q.subAnswers.length && a.every((v,i)=>!blank(v)&&(q.subAnswers[i].kind==='numeric'?Number.isFinite(numericParser(q.subAnswers[i])(String(v))):Number.isInteger(v)&&v>=0&&v<q.subAnswers[i].choices.length)) : q.kind==='numeric' ? !blank(a) && Number.isFinite(numericParser(q)(String(a))) : q.kind==='choice' ? Number.isInteger(a) && a>=0 && a<q.choices.length : !blank(a);
  const grade = (q,a) => {
    if(isMulti(q))return Array.isArray(a) && a.length===q.subAnswers.length && q.subAnswers.every((part,i)=>grade(part,a[i]));
    if (a===null||a===undefined||a==='') return false;
    if (q.kind==='choice') return a===q.answer;
    const num=numericParser(q)(String(a));
    return Number.isFinite(num) && Math.abs(num-q.answer) <= (q.tolerance||0)+1e-9;
  };
  const answerStr = (q,a) => {
    if(isMulti(q))return q.subAnswers.map((part,i)=>`${part.label}：${answerStr(part,Array.isArray(a)?a[i]:null)}`).join(' ／ ');
    if (a===null||a===undefined||a==='')return '未回答';
    if(isSymbolBank(q)){const n=parseWordBankSymbol(String(a),q.wordBank);return Number.isFinite(n)?`${WORD_BANK_SYMBOLS[n-1]}（${q.wordBank[n-1]}）`:`${a}（無効な記号）`;}
    if(q.numericInputFormat==='wordbank-index-v1'){const n=parseWordBank(String(a),q.wordBank);return Number.isFinite(n)?`${n}番（${q.wordBank[n-1]}）`:`${a}（無効な番号）`;}
    return q.kind==='choice' ? (Number.isInteger(a)&&a>=0&&a<q.choices.length?q.choices[a]:'無効な選択') : Number.isFinite(numericParser(q)(String(a))) ? `${a} ${q.unit||''}` : `${a}（無効な入力）`;
  };
  const correctStr = q => isMulti(q)?q.subAnswers.map(part=>`${part.label}：${correctStr(part)}`).join(' ／ '):q.kind==='choice' ? q.choices[q.answer] : isSymbolBank(q)?`${WORD_BANK_SYMBOLS[q.answer-1]}（${q.wordBank[q.answer-1]}）`:q.numericInputFormat==='wordbank-index-v1'?`${q.answer}番（${q.wordBank[q.answer-1]}）`:`${readableNum(q.answer)} ${q.unit||''}`;
  const label = tr => `FP${tr.level}級｜${tr.org}｜${tr.name}`;
  const modeLabel = mode => mode==='set-1'?'第1回':mode==='set-2'?'第2回':mode==='mistakes'?'要復習':mode==='retry'?'再受験':'';
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
        const btn=document.createElement('button');btn.type='button';btn.textContent=available?'この科目を練習する':'準備中';btn.disabled=!available;
        if(available){
          btn.className='primary';
          if(tr.id.startsWith('kinzai') && qsFor(tr.id).length>=30){
            btn.textContent='第1回（15問）を練習';
            btn.addEventListener('click',()=>start(tr.id,1));
            const second=document.createElement('button');second.type='button';
            second.className='secondary pr-second-set';second.textContent='第2回（15問）を練習';
            second.addEventListener('click',()=>start(tr.id,2));
            box.append(org,title,p,btn,second);listing.append(box);continue;
          }
          btn.addEventListener('click',()=>start(tr.id));
        }
        box.append(org,title,p,btn);listing.append(box);
      }
      group.append(groupHead,desc,listing);cards.append(group);
    }
    const d=read(DRAFT,null);
    const okay=validDraft(d);
    $p('prResumeBox').classList.toggle('hidden',!okay);
    if(okay){const mode=modeLabel(d.mode);$p('prResume').textContent=`FP${trackFor(d.track).level}級｜${trackFor(d.track).name}${mode?'｜'+mode:''}の続きから再開`;}
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
      const details=document.createElement('span');details.className='muted small';const setLabel=modeLabel(a.mode);details.textContent=`${setLabel?setLabel+'｜':''}${Number.isFinite(a.finishedAt)&&Number.isFinite(new Date(a.finishedAt).getTime())?new Date(a.finishedAt).toLocaleDateString('ja-JP'):'日付不明'}｜${a.correct}/${a.questions.length}問正解`;
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
    const list=sourceQuestions.map(q=>({...q,choices:Array.isArray(q.choices)?q.choices.slice():[],...(isMulti(q)?{subAnswers:q.subAnswers.map(part=>({...part,...(Array.isArray(part.choices)?{choices:part.choices.slice()}:{} ),...(Array.isArray(part.wordBank)?{wordBank:part.wordBank.slice()}:{} )}))}:{}),...(q.kind==='numeric' && mode.startsWith('set-')?{numericInputFormat:'grouped-decimal-v1'}:{})}));
    const previousToken=expectedDraftToken;
    expectedDraftToken=originalDraftToken;
    const nextAttempt={version:20,track:trackId,mode,questions:list,answers:list.map(q=>isMulti(q)?q.subAnswers.map(()=>null):null),pos:0,startedAt:Date.now()};
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
    // startFromQuestions handles the existing-draft confirmation once.
    const source=qsFor(id);
    const selected=(id.startsWith('kinzai') && source.length>=30) ? source.slice((setNumber-1)*15,setNumber*15) : source;
    startFromQuestions(id,selected,`set-${setNumber}`);
  }
  function updateSubmitReadiness(){
    if(!attempt)return;
    const remaining=attempt.answers.filter((a,i)=>!completeAnswer(attempt.questions[i],a)).length;
    $p('prSubmitReadiness').textContent=remaining?`未回答が${remaining}問あります。採点前に確認できます。`:'全問回答済みです。採点できます。';
    $p('prSubmitJumpUnanswered').classList.toggle('hidden',remaining===0);
    $p('prReviewAnswered').classList.toggle('hidden',remaining===attempt.questions.length);
  }
  // Use the complete attempt (not the filtered review list) to number a scenario.
  function scenarioPosition(questions,index){
    const q=questions[index];if(!q)return '';
    let start=index,end=index;
    while(start>0 && questions[start-1].caseTitle===q.caseTitle)start--;
    while(end+1<questions.length && questions[end+1].caseTitle===q.caseTitle)end++;
    return end===start?'':`（設例内 ${index-start+1}/${end-start+1}問）`;
  }
  function renderQuestion(){
    if(!attempt)return;
    const tr=trackFor(attempt.track),q=attempt.questions[attempt.pos];
    $p('prLabel').textContent=`FP${tr.level}級｜${tr.name}`;
    $p('prProgress').textContent=`${attempt.pos+1}/${attempt.questions.length}問`;
    $p('prBar').style.width=`${attempt.answers.filter((v,i)=>completeAnswer(attempt.questions[i],v)).length/attempt.questions.length*100}%`;
    const casePosition=tr.id.startsWith('kinzai')?scenarioPosition(attempt.questions,attempt.pos):'';
    $p('prCaseTitle').textContent=`${tr.id.startsWith('kinzai')?'設例':''} ${q.caseTitle}${casePosition}`.trim();
    if(window.__fpMaterialView)window.__fpMaterialView.render($p('prCaseText'),q);
    else $p('prCaseText').textContent=String(q.caseText).replaceAll('【2026年4月1日基準の独自演習】','')+`\n（注）法令基準日：${q.lawReferenceDate||'未登録'}。`;
    $p('prTopic').textContent=`学習テーマ：${q.topic}｜この問題の法令基準日：${q.lawReferenceDate || "未登録"}（数値条件は設例指定）`;
    $p('prQuestion').textContent=q.question;
    $p('prChoices').replaceChildren();
    const number=q.kind==='numeric',multi=isMulti(q);
    $p('prAutoNextLabel').classList.toggle('hidden',number||multi);
    $p('prMultiNumeric').classList.toggle('hidden',!multi);
    $p('prMultiNumeric').replaceChildren();
    $p('prChoices').classList.toggle('hidden',number||multi);
    $p('prNumeric').classList.toggle('hidden',!number);
    if(number){
      $p('prNumberUnit').textContent=q.unit||'';
      $p('prNumberInput').value=attempt.answers[attempt.pos]??'';
      updateNumericFeedback(q,$p('prNumberInput').value);
    }else if(multi){
      if(q.kind==='wordbank_number'){
        const table=document.createElement('table');table.className='material-table';const caption=document.createElement('caption');caption.textContent=isSymbolBank(q.subAnswers[0])?'語群（入力するのは記号です）':'語群（入力するのは番号です）';table.append(caption);
        q.subAnswers[0].wordBank.forEach((word,i)=>{const row=document.createElement('tr');const code=document.createElement('th');code.scope='row';code.textContent=isSymbolBank(q.subAnswers[0])?WORD_BANK_SYMBOLS[i]:String(i+1);const value=document.createElement('td');value.textContent=word;row.append(code,value);table.append(row);});$p('prMultiNumeric').append(table);
      }
      q.subAnswers.forEach((part,i)=>{
        const group=document.createElement('div');group.className='pr-sub-answer';
        if(part.kind==='choice'){
          const fieldset=document.createElement('fieldset');const legend=document.createElement('legend');legend.textContent=part.label;fieldset.append(legend);
          part.choices.forEach((value,j)=>{
            const button=document.createElement('button');button.type='button';button.className='wide';button.textContent=value;
            const active=Array.isArray(attempt.answers[attempt.pos])&&attempt.answers[attempt.pos][i]===j;
            button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));
            button.setAttribute('aria-label',`${part.label}：${value}`);
            button.addEventListener('click',()=>{
              if(!Array.isArray(attempt.answers[attempt.pos]))attempt.answers[attempt.pos]=q.subAnswers.map(()=>null);
              attempt.answers[attempt.pos][i]=j;if(!save(DRAFT,attempt))return;renderQuestion();
            });fieldset.append(button);
          });group.append(fieldset);$p('prMultiNumeric').append(group);return;
        }
        const label=document.createElement('label');label.className='field-label';label.textContent=part.label;label.setAttribute('for',`prSubInput${i}`);
        const wrap=document.createElement('div');wrap.className='pr-num-wrap';
        const input=document.createElement('input');input.id=`prSubInput${i}`;input.type='text';input.inputMode=isSymbolBank(part)?'text':part.numericInputFormat==='wordbank-index-v1'?'numeric':'decimal';input.autocomplete='off';input.value=Array.isArray(attempt.answers[attempt.pos])?attempt.answers[attempt.pos][i]??'':'';
        input.setAttribute('aria-describedby',`prSubUnit${i} prSubFeedback${i}`);
        const unit=document.createElement('span');unit.id=`prSubUnit${i}`;unit.textContent=part.unit||'';
        const feedback=document.createElement('p');feedback.id=`prSubFeedback${i}`;feedback.className='small';feedback.setAttribute('role','status');feedback.setAttribute('aria-live','polite');
        const check=()=>{const invalid=String(input.value).trim()!==''&&!Number.isFinite(numericParser(part)(String(input.value)));input.setAttribute('aria-invalid',String(invalid));feedback.textContent=invalid?(isSymbolBank(part)?`語群の記号ア〜${WORD_BANK_SYMBOLS[part.wordBank.length-1]}を1文字で入力してください。ひらがな・半角カナも使えます。`:part.numericInputFormat==='wordbank-index-v1'?`語群の番号1〜${part.wordBank.length}を整数で入力してください。`:'数字で入力してください。カンマは3桁区切りで使えます。'):'';};check();
        input.addEventListener('input',()=>{
          if(!Array.isArray(attempt.answers[attempt.pos]))attempt.answers[attempt.pos]=q.subAnswers.map(()=>null);
          attempt.answers[attempt.pos][i]=input.value;check();if(!save(DRAFT,attempt))return;
          const count=attempt.answers.filter((a,j)=>completeAnswer(attempt.questions[j],a)).length;
          $p('prAnswered').textContent=`${count}/${attempt.answers.length}問 回答済`;
          $p('prBar').style.width=`${count/attempt.answers.length*100}%`;
          updateSubmitReadiness();
          $p('prNav').children[attempt.pos]?.classList.toggle('done',completeAnswer(q,attempt.answers[attempt.pos]));
        });
        wrap.append(input,unit);group.append(label,wrap,feedback);$p('prMultiNumeric').append(group);
      });
      const policy=document.createElement('p');policy.className='muted small';policy.textContent='この演習は全欄正解で1問正解です。公式の配点・部分点には対応していません。';$p('prMultiNumeric').append(policy);
    }else{
      q.choices.forEach((choice,i)=>{
        const b=document.createElement('button');b.type='button';b.className='wide';b.textContent=`${i+1}. ${choice}`;
        const active=attempt.answers[attempt.pos]===i;
        b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));
        b.addEventListener('click',()=>{const pos=attempt.pos,previous=attempt.answers[pos];attempt.answers[pos]=i;if(!save(DRAFT,attempt)){attempt.answers[pos]=previous;return;}if($p('prAutoNext').checked && attempt.pos<attempt.questions.length-1)jump(attempt.pos+1);else renderQuestion();});
        $p('prChoices').append(b);
      });
    }
    $p('prPrev').disabled=attempt.pos===0;
    $p('prNext').disabled=attempt.pos===attempt.questions.length-1;
    $p('prNext').textContent=attempt.pos===attempt.questions.length-1?'最終問題':'次の問題';
    const nav=$p('prNav');nav.replaceChildren();
    for(let i=0;i<attempt.questions.length;i++){
      const b=document.createElement('button');b.type='button';b.textContent=String(i+1);
      const a=attempt.answers[i];const done=completeAnswer(attempt.questions[i],a);
      b.classList.toggle('done',done);b.classList.toggle('current',i===attempt.pos);
      b.setAttribute('aria-label',`第${i+1}問${done?'回答済み':'未回答'}`);
      if(i===attempt.pos)b.setAttribute('aria-current','step');
      b.addEventListener('click',()=>jump(i));nav.append(b);
    }
    $p('prAnswered').textContent=`${attempt.answers.filter((a,i)=>completeAnswer(attempt.questions[i],a)).length}/${attempt.answers.length}問 回答済`;
    updateSubmitReadiness();
  }
  function jump(i){
    if(!attempt || i<0||i>=attempt.questions.length)return;
    const previousPos=attempt.pos;attempt.pos=i;
    if(!save(DRAFT,attempt)){attempt.pos=previousPos;return;}
    renderQuestion();window.scrollTo(0,0);
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
      if(isMulti(q))return Array.isArray(q.subAnswers) && q.subAnswers.length>=2 && q.subAnswers.length<=8 &&
        q.subAnswers.every(part=>part && typeof part.label==='string' && part.label.trim() &&
          (q.kind==='multi_choice' ? part.kind==='choice' && Array.isArray(part.choices) && part.choices.length>=2 && part.choices.every(c=>typeof c==='string') && Number.isInteger(part.answer) && part.answer>=0 && part.answer<part.choices.length :
           part.kind==='numeric' && Number.isFinite(part.answer) && typeof part.unit==='string' && (q.kind==='wordbank_number'?['wordbank-index-v1','wordbank-symbol-v1'].includes(part.numericInputFormat) && part.numericInputFormat===q.subAnswers[0].numericInputFormat && Array.isArray(part.wordBank) && part.wordBank.length>=2 && part.wordBank.length<=30 && part.wordBank.every(w=>typeof w==='string'&&w.trim()) && JSON.stringify(part.wordBank)===JSON.stringify(q.subAnswers[0].wordBank) && Number.isInteger(part.answer) && part.answer>=1 && part.answer<=part.wordBank.length && (part.tolerance===undefined||part.tolerance===0):part.numericInputFormat==='grouped-decimal-v1' && (part.tolerance===undefined || Number.isFinite(part.tolerance)&&part.tolerance>=0)))) &&
        (a===null || Array.isArray(a) && a.length===q.subAnswers.length && a.every((v,j)=>v===null || (q.kind==='multi_choice'?Number.isInteger(v)&&v>=0&&v<q.subAnswers[j].choices.length:typeof v==='string' || typeof v==='number'&&Number.isFinite(v))));
      if(q.kind==='numeric')return (q.numericInputFormat===undefined || q.numericInputFormat==='grouped-decimal-v1') && Number.isFinite(q.answer) &&
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
    const unfilled=attempt.answers.filter((a,i)=>!completeAnswer(attempt.questions[i],a)).length;
    if(!confirm(unfilled?`未回答が${unfilled}問あります。採点しますか？`:'演習を終了して採点しますか？'))return;
    const correct=attempt.questions.filter((q,i)=>grade(q,attempt.answers[i])).length;
    const result={id:`${Date.now()}-${Math.floor(Math.random()*100000)}`,track:attempt.track,mode:attempt.mode,questions:attempt.questions,answers:attempt.answers.slice(),correct,finishedAt:Date.now()};
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
    $p('prSummary').textContent=`${label(tr)}${modeLabel(r.mode)?'｜'+modeLabel(r.mode):''}｜${total}問中${r.correct}問正解（${ratio}％）`;
    $p('prRetryMistakes').disabled=r.correct===total;
    $p('prRetryMistakes').textContent=r.correct===total?'全問正解（復習不要）':`間違えた${total-r.correct}問だけ再演習`;
    $p('prResultNote').textContent=`これは${total}問のオリジナル体験演習です。本試験は${tr.officialCount}問で配点も異なります。したがって、この正答率から本試験の合否は判定できません。`;
    if(r.questions.some(isMulti)){
      let fields=0,correctFields=0;
      r.questions.forEach((q,i)=>{
        const parts=isMulti(q)?q.subAnswers:[q];
        const values=isMulti(q)?(Array.isArray(r.answers[i])?r.answers[i]:[]):[r.answers[i]];
        parts.forEach((part,j)=>{fields++;if(grade(part,values[j]))correctFields++;});
      });
      $p('prResultNote').textContent+=` 全解答欄の正答：${correctFields}/${fields}欄（参考）。複数欄の問題は全欄正解で1問正解として集計します。欄ごとの正答数は公式の得点・部分点ではありません。`;
    }
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
      const name=document.createElement('span');name.textContent=`第${i+1}問｜${q.caseTitle}${r.track.startsWith('kinzai')?scenarioPosition(r.questions,i):''}`;
      const status=document.createElement('strong');status.className=good?'correct':'wrong';status.textContent=good?'正解':!completeAnswer(q,r.answers[i])?'未回答':'不正解';heading.append(name,status);
      const body=document.createElement('div');body.className='review-details-body';
      const material=document.createElement('div');
      if(window.__fpMaterialView)window.__fpMaterialView.render(material,q);else material.textContent='設例：'+q.caseText;
      body.append(material);
      [['問題：',q.question],['あなたの回答：',answerStr(q,r.answers[i])],['正解：',correctStr(q)],['解説：',q.explanation]].forEach(([k,v])=>{const p=document.createElement('p');p.textContent=k+v;body.append(p);});
      if(q.kind==='choice' && typeof appendChoiceExplanations==='function')appendChoiceExplanations(body,q);
      if(isMulti(q)){
        q.subAnswers.forEach((part,j)=>{const detail=document.createElement('p');const value=Array.isArray(r.answers[i])?r.answers[i][j]:null;detail.textContent=`${part.label}：${blank(value)?'未回答':grade(part,value)?'正解':'不正解'}（あなたの回答：${answerStr(part,value)}／正解：${correctStr(part)}）`;body.append(detail);});
        const policy=document.createElement('p');policy.textContent='全欄正解で1問正解として集計しています。公式の配点・部分点には対応していません。';body.append(policy);
      }
      const note=document.createElement('p');note.className='muted small';
      note.textContent=`独自作成の演習問題です。資料の法令基準日：${q.lawReferenceDate||'未登録'}。全問の専門家監修は未完了です。`;
      body.append(note);
      d.append(heading,body);list.append(d);
    });
  }
  for(const level of ['3','2'])$p(`prSelectLevel${level}`).addEventListener('click',()=>{selectedPracticalLevel=level;renderCourses();});
  $p('prClearHistory').addEventListener('click',clearPracticalHistory);
  $p('openPractical').addEventListener('click',()=>navigate('practicalHome'));
  $p('openPracticalTop').addEventListener('click',()=>navigate('practicalHome'));
  $p('prBackHome').addEventListener('click',()=>navigate('home'));
  $p('prResume').addEventListener('click',resume);
  // Optional UI preference only; no change to draft/result storage format.
  try {$p('prAutoNext').checked=localStorage.getItem(AUTO_NEXT_PREF)==='1';}catch{$p('prAutoNext').checked=false;}
  $p('prAutoNext').addEventListener('change',()=>{
    try {localStorage.setItem(AUTO_NEXT_PREF,$p('prAutoNext').checked?'1':'0');}
    catch { /* auto-next remains usable in this tab without persisted preference */ }
  });
  $p('prPrev').addEventListener('click',()=>attempt&&jump(attempt.pos-1));
  $p('prNext').addEventListener('click',()=>attempt&&jump(attempt.pos+1));
  $p('prJumpUnanswered').addEventListener('click',()=>{
    if(!attempt)return;
    const n=attempt.questions.length;
    for(let offset=1;offset<=n;offset++){
      const i=(attempt.pos+offset)%n;
      if(!completeAnswer(attempt.questions[i],attempt.answers[i])){jump(i);return;}
    }
  });
  $p('prSubmitJumpUnanswered').addEventListener('click',()=>{$p('prJumpUnanswered').click();});
  $p('prReviewAnswered').addEventListener('click',()=>{
    if(!attempt)return;
    const n=attempt.questions.length;
    for(let offset=1;offset<=n;offset++){
      const i=(attempt.pos+offset)%n;
      if(completeAnswer(attempt.questions[i],attempt.answers[i])){jump(i);return;}
    }
  });
  $p('prNumberInput').addEventListener('input',e=>{
    if(!attempt)return;
    attempt.answers[attempt.pos]=e.target.value;
    updateNumericFeedback(attempt.questions[attempt.pos],e.target.value);
    if(!save(DRAFT,attempt))return;
    $p('prAnswered').textContent=`${attempt.answers.filter((a,i)=>completeAnswer(attempt.questions[i],a)).length}/${attempt.answers.length}問 回答済`;
    $p('prNav').children[attempt.pos]?.classList.toggle('done',completeAnswer(attempt.questions[attempt.pos],attempt.answers[attempt.pos]));
    updateSubmitReadiness();
    $p('prBar').style.width=`${attempt.answers.filter((a,i)=>completeAnswer(attempt.questions[i],a)).length/attempt.answers.length*100}%`;
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
  window.__fpPracticalTest = {parseNumber,parseStrictNumber,grade,trackFor,qsFor,read,openPractical:()=>navigate('practicalHome')};
})();
