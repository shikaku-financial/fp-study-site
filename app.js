'use strict';

// 公開前の選択肢全面見直しに伴い、Ver.12は新しい学習記録キーを使用します。
const CATEGORIES = ['すべての分野', 'ライフプランニングと資金計画', 'リスク管理', '金融資産運用', 'タックスプランニング', '不動産', '相続・事業承継'];
const STORAGE = 'fp-training-v12';
const EXAM_HISTORY_KEY = 'fp-training-exam-history-v12';
const EXAM_DRAFT_KEY = 'fp-training-exam-draft-v12';
const EXAM_DETAILS_KEY = 'fp-training-exam-details-v12';
const MINI_EXAM_MINUTES = 10;
const REVISION_ARCHIVE_KEY = 'fp-training-revisions-v12';
const questionRevision = (q) => Number.isInteger(q.revision) ? q.revision : 1;
const resultCurrent = (q, r) => r && typeof r.correct === 'boolean' && (Number.isInteger(r.revision) ? r.revision : 1) === questionRevision(q);

// 旧回答は削除せず、改訂設問の旧成績だけ現在の集計から除きます。
function archiveOldRevisionResults() {
  const existing = load();
  const archive = readJSON(REVISION_ARCHIVE_KEY, { items: {} });
  const items = archive.items && typeof archive.items === 'object' ? archive.items : {};
  let modified = false;
  for (const q of QUESTIONS.filter(x => questionRevision(x) > 1)) {
    const record = existing[q.id];
    if (record && !resultCurrent(q, record) && !(q.id in items)) {
      items[q.id] = record; modified = true;
    }
  }
  if (modified) writeJSON(REVISION_ARCHIVE_KEY, { items });
}

function appendQuestionSource(parent, q) {
  // A reference link is not a claim of official supervision or completed legal verification.
  const details = document.createElement('details'); details.className = 'question-source-details';
  const summary = document.createElement('summary'); summary.textContent = '参考情報・確認状況';
  const content = document.createElement('div'); content.className = 'question-source-details-body';
  const status = document.createElement('p');
  status.textContent = '独自作成問題です。正答・解説の全問専門家監修は未完了です。';
  content.append(status);
  if (q.lawReferenceDate) {
    const date = document.createElement('p'); date.textContent = `設問データに登録された法令基準日：${q.lawReferenceDate}（最新制度への照合完了を意味しません）`;
    content.append(date);
  } else {
    const date = document.createElement('p'); date.textContent = '問題固有の法令基準日は登録されていません。制度改正の有無は公式情報をご確認ください。'; content.append(date);
  }
  for (const [url, caption] of [
    [q.themeReferenceUrl, `出題テーマの参考：${q.themeReferenceLabel || '公表問題'}（公式サイト・外部）`],
    [q.sourceUrl, `制度・内容の参考：${q.sourceLabel || '関連資料'}（外部）`]
  ]) {
    if (typeof url !== 'string' || !/^https:\/\//.test(url)) continue;
    const p = document.createElement('p'); const a = document.createElement('a');
    a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer'; a.textContent = caption;
    p.append(a); content.append(p);
  }
  const check = document.createElement('p'); const a = document.createElement('a');
  a.href = 'https://www.kinzai.or.jp/ginou/fp/law.html'; a.target = '_blank'; a.rel = 'noopener noreferrer';
  a.textContent = '現在の試験の法令基準日を確認 ↗'; check.append(a); content.append(check);
  details.append(summary, content); parent.append(details);
}

const $ = (id) => document.getElementById(id);

let level = '3';
let session = [];
let index = 0;
let selected = null;
let answered = false;
let correct = 0;
let exam = null;
let examTimer = null;
let lastExamLevel = '3';
let lastExamKind = 'mini';
let lastReviewRows = [];
let reviewFilter = 'issues';
let lastExamTimeOver = false;

function readJSON(key, fallback) {
  try {
    const s = localStorage.getItem(key);
    if (s === null) return fallback;
    const val = JSON.parse(s);
    return val !== null && typeof val === 'object' && !Array.isArray(val) ? val : fallback;
  } catch { return fallback; }
}
function writeJSON(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); return true; }
  catch { alert('端末の保存容量またはブラウザ設定により記録を保存できません。'); return false; }
}
function load() { return readJSON(STORAGE, {}); }
function validQuestions(targetLevel) {
  return QUESTIONS.filter(q => q.level === targetLevel && ['true_false', 'three_choice', 'four_choice'].includes(q.format) &&
    Array.isArray(q.choices) && q.choices.length === (q.format === 'true_false' ? 2 : q.format === 'three_choice' ? 3 : 4) &&
    Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.choices.length);
}
function shuffle(items) {
  const a = items.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function show(view) {
  ['home', 'quiz', 'finish', 'exam', 'examResult'].forEach(v => $(v).classList.toggle('hidden', v !== view));
  window.scrollTo(0, 0);
}
function setLevel(nextLevel) {
  level = nextLevel;
  $('level3').classList.toggle('active', level === '3');
  $('level2').classList.toggle('active', level === '2');
  $('level3').setAttribute('aria-pressed', String(level === '3'));
  $('level2').setAttribute('aria-pressed', String(level === '2'));
  updateHome();
}
function fullExamAvailability(targetLevel) {
  const pool = validQuestions(targetLevel);
  // 「verified」は専門家監修済みの意味に誤認されやすいため使わず、形式・分野・問題数で実装上の開始条件を判定。
  // コンテンツの法令・内容監修は別途必要です。あくまで学習用オリジナル模試です。
  const subjectOK = CATEGORIES.slice(1).every(cat => pool.filter(q => q.category === cat).length >= 10);
  const balanced3 = CATEGORIES.slice(1).every(cat => pool.filter(q => q.category === cat && q.format === 'true_false').length >= 5 && pool.filter(q => q.category === cat && q.format === 'three_choice').length >= 5);
  if (targetLevel === '3') {
    const tf = pool.filter(q => q.format === 'true_false').length;
    const tri = pool.filter(q => q.format === 'three_choice').length;
    return { ready: tf >= 30 && tri >= 30 && subjectOK && balanced3,
      message: `○× ${tf}/30問・三択 ${tri}/30問｜90分・全60問・36問以上で学習用合格圏判定` };
  }
  const four = pool.filter(q => q.format === 'four_choice').length;
  return { ready: four >= 60 && subjectOK,
    message: `四択 ${four}/60問｜120分・全60問・36問以上で学習用合格圏判定` };
}
// 現在の級・分野に応じて、選択可能な演習問題数だけを表示します。
function updatePracticeCountOptions(pool) {
  const sel = $('practiceCount');
  const current = sel.value;
  const cat = $('category').value;
  const available = pool.filter(q => cat === CATEGORIES[0] || q.category === cat).length;
  const numeric = [10, 20, 30, 60].filter(n => n <= available);
  const permitted = numeric.map(String).concat(available ? ['all'] : []);
  sel.replaceChildren();
  for (const n of numeric) {
    const option = document.createElement('option'); option.value = String(n); option.textContent = `${n}問`;
    sel.append(option);
  }
  if (available) {
    const option = document.createElement('option'); option.value = 'all'; option.textContent = `すべて（全${available}問）`;
    sel.append(option);
  }
  if (permitted.includes(current)) sel.value = current;
  else if (current === 'all' && available) sel.value = 'all';
  else {
    const previous = Number(current);
    const best = Number.isFinite(previous) ? numeric.filter(n => n <= previous).pop() : null;
    sel.value = best ? String(best) : (numeric.length ? String(numeric[0]) : available ? 'all' : '');
  }
  const note = $('practiceCountNotice');
  if (note) note.textContent = cat === CATEGORIES[0]
    ? `全分野の収録問題は${available}問です。`
    : `「${cat}」は全${available}問収録。選べる演習数はこの範囲内です。`;
  sel.disabled = available === 0;
  $('startPractice').disabled = available === 0;
}

function updateHome() {
  const pool = validQuestions(level);
  $('count').textContent = `現在の収録問題：${pool.length}問（Ver.12・学科）`;
  const old = $('category').value;
  $('category').replaceChildren();
  for (const c of CATEGORIES) {
    const opt = document.createElement('option'); opt.value = c; opt.textContent = c; $('category').append(opt);
  }
  $('category').value = CATEGORIES.includes(old) ? old : CATEGORIES[0];
  updatePracticeCountOptions(pool);
  const data = load();
  const previous = pool.filter(q => resultCurrent(q, data[q.id]));
  const staleCount = pool.filter(q => data[q.id] && typeof data[q.id].correct === 'boolean' && !resultCurrent(q, data[q.id])).length;
  $('revisionNotice').classList.toggle('hidden', staleCount === 0);
  $('revisionNotice').textContent = staleCount ? `改訂された${staleCount}問の過去回答は現在の正答率から除外しています。旧記録は端末内に保管しています。再回答すると新しい結果が集計されます。` : '';
  const c = previous.filter(q => data[q.id].correct).length;
  $('stats').textContent = `FP${level}級：解答済み ${previous.length}問 ／ 正解 ${c}問 ／ 正答率 ${previous.length ? Math.round(c / previous.length * 100) : 0}％`;
  const categoryStats = $('categoryStats'); categoryStats.replaceChildren();
  for (const cat of CATEGORIES.slice(1)) {
    const group = pool.filter(q => q.category === cat);
    const done = group.filter(q => resultCurrent(q, data[q.id]));
    const hits = done.filter(q => data[q.id].correct).length;
    const row = document.createElement('div'); row.className = 'stat-row';
    const name = document.createElement('span'); name.textContent = cat;
    const count = document.createElement('strong'); count.textContent = `${hits}/${done.length}問 正解`;
    row.append(name, count); categoryStats.append(row);
  }
  const availability = fullExamAvailability(level);
  $('fullExamStatus').textContent = availability.message;
  $('startFull').disabled = !availability.ready;
  $('startFull').textContent = availability.ready ? '60問模試を開始する' : '準備中';
  const draft = readJSON(EXAM_DRAFT_KEY, null);
  const canResume = draft && ['3', '2'].includes(draft.level) && Array.isArray(draft.ids) && draft.ids.length > 0;
  $('resumeExam').classList.toggle('hidden', !canResume);
  if (canResume) $('resumeExam').textContent = `中断したFP${draft.level}級 ${draft.kind === 'full' ? '60問' : '6問'}模試を再開`;
  const h = readJSON(EXAM_HISTORY_KEY, { attempts: [] });
  const attempts = (Array.isArray(h.attempts) ? h.attempts : []).filter(x => x.level === level);
  $('examHistory').textContent = attempts.length ? `過去の模試：${attempts.length}件（直近30件まで記録）` : '模試の受験履歴はまだありません。';
  const detailStore = readJSON(EXAM_DETAILS_KEY, { attempts: [] });
  const detailed = Array.isArray(detailStore.attempts) ? detailStore.attempts : [];
  const historyList = $('examHistoryList'); historyList.replaceChildren();
  attempts.slice(0, 8).forEach(a => {
    const row = document.createElement('div'); row.className = 'exam-history-entry';
    const summary = document.createElement('p');
    const label = a.kind === 'full' ? '60問模試' : 'ミニ模試';
    const date = Number.isFinite(a.finishedAt) ? new Date(a.finishedAt).toLocaleDateString('ja-JP') : '日付不明';
    summary.textContent = `${date}｜${label}｜${a.correct}/${a.total}問 正解`;
    row.append(summary);
    const details = detailed.find(d => d.id === a.id && d.level === a.level);
    if (details) {
      const button = document.createElement('button'); button.type = 'button';
      button.textContent = '答え合わせを開く';
      button.addEventListener('click', () => openSavedExam(details.id));
      row.append(button);
    } else {
      const note = document.createElement('span'); note.className = 'muted small'; note.textContent = '得点のみ保存'; row.append(note);
    }
    historyList.append(row);
  });
}
function makeOptionButtons(target, q, selectedValue, onSelect, lock = false) {
  target.replaceChildren();
  for (let i = 0; i < q.choices.length; i++) {
    const button = document.createElement('button');
    button.type = 'button'; button.className = 'wide';
    button.textContent = q.choices[i];
    button.classList.toggle('active', selectedValue === i);
    button.setAttribute('aria-pressed', String(selectedValue === i));
    button.disabled = lock;
    button.addEventListener('click', () => onSelect(i));
    target.append(button);
  }
}

// 分野別演習と誤答復習（解答ごとにVer.12の保存先へ記録）。
function startQuiz(onlyWrong) {
  if (exam) { alert('進行中の模試があります。先にホームで再開してください。'); return; }
  const cat = $('category').value;
  const data = load();
  session = validQuestions(level).filter(q => (cat === CATEGORIES[0] || q.category === cat) &&
    (!onlyWrong || (resultCurrent(q, data[q.id]) && data[q.id].correct === false)));
  if (!session.length) { alert(onlyWrong ? '復習する問題はありません。' : 'この条件の問題はまだありません。'); return; }
  if ($('shuffle').checked) session = shuffle(session);
  const maxCount = $('practiceCount').value;
  if (maxCount !== 'all') session = session.slice(0, Number(maxCount));
  index = 0; correct = 0;
  show('quiz'); renderQuiz();
}
function renderQuiz() {
  selected = null; answered = false;
  const q = session[index];
  $('qmeta').textContent = `FP${q.level}級｜${q.category}`;
  $('qprogress').textContent = `${index + 1} / ${session.length}問`;
  $('progressbar').style.width = `${index / session.length * 100}%`;
  $('question').textContent = q.question;
  makeOptionButtons($('choices'), q, null, (i) => {
    selected = i;
    [...$('choices').children].forEach((b, j) => { b.classList.toggle('active', i === j); b.setAttribute('aria-pressed', String(i === j)); });
    $('submit').disabled = false;
  });
  $('feedback').classList.add('hidden'); $('feedback').replaceChildren();
  $('submit').classList.remove('hidden'); $('submit').disabled = true;
  $('next').classList.add('hidden');
  $('next').textContent = index + 1 === session.length ? '結果を見る' : '次の問題';
}
function submitAnswer() {
  if (answered || selected === null) return;
  answered = true;
  const q = session[index], isCorrect = selected === q.answer;
  if (isCorrect) correct++;
  archiveOldRevisionResults();
  const data = load(); data[q.id] = { correct: isCorrect, selected, at: Date.now(), revision: questionRevision(q) }; writeJSON(STORAGE, data);
  const fb = $('feedback'); fb.replaceChildren(); fb.classList.remove('hidden');
  const head = document.createElement('strong'); head.className = isCorrect ? 'correct' : 'wrong'; head.textContent = isCorrect ? '正解です！' : '不正解です';
  const answer = document.createElement('p'); answer.textContent = `正解：${q.choices[q.answer]}`;
  const explanation = document.createElement('p'); explanation.textContent = q.explanation;
  fb.append(head, answer, explanation); appendQuestionSource(fb, q);
  [...$('choices').children].forEach(b => { b.disabled = true; });
  $('submit').classList.add('hidden'); $('next').classList.remove('hidden');
  $('progressbar').style.width = `${(index + 1) / session.length * 100}%`;
}
function nextQuestion() {
  if (!answered) return;
  if (index + 1 < session.length) { index++; renderQuiz(); }
  else { $('summary').textContent = `${session.length}問中 ${correct}問正解（正答率 ${Math.round(correct / session.length * 100)}％）`; show('finish'); }
}

// 模試：採点するまでは正解を表示せず、問題間の移動・訂正を認めます。
function createExam(kind) {
  const pool = validQuestions(level);
  if (kind === 'full' && !fullExamAvailability(level).ready) { alert('本番形式の出題数がまだ不足しています。'); return; }
  const draft = readJSON(EXAM_DRAFT_KEY, null);
  if (draft && !confirm('中断中の模試があります。新しく始めると前回の途中経過は失われます。開始しますか？')) return;
  let questions;
  // 1回分60問：FP3級は分野ごとに○×5問＋三択5問、FP2級は分野ごとに四択10問を無作為抽出。
  if (kind === 'full' && level === '3') {
    questions = [
      ...CATEGORIES.slice(1).flatMap(cat => shuffle(pool.filter(q => q.category === cat && q.format === 'true_false')).slice(0, 5)),
      ...CATEGORIES.slice(1).flatMap(cat => shuffle(pool.filter(q => q.category === cat && q.format === 'three_choice')).slice(0, 5))
    ];
  }
  else if (kind === 'full') questions = shuffle(CATEGORIES.slice(1).flatMap(cat => shuffle(pool.filter(q => q.category === cat && q.format === 'four_choice')).slice(0, 10)));
  else {
    // 各分野から必ず1問選び、ミニ模試のバランスを保ちます。
    const perCategory = CATEGORIES.slice(1).map(cat => shuffle(pool.filter(q => q.category === cat))[0]).filter(Boolean);
    questions = shuffle(perCategory.length === 6 ? perCategory : shuffle(pool).slice(0, 6));
  }
  if (!questions.length) { alert('模試用の問題がありません。'); return; }
  const duration = kind === 'mini' ? MINI_EXAM_MINUTES : level === '3' ? 90 : 120;
  exam = { version: 3, kind, level, ids: questions.map(q => q.id), snapshots: questions.map(q => ({...q, choices: q.choices.slice()})), answers: questions.map(() => null), pos: 0, deadline: Date.now() + duration * 60000, flags: questions.map(() => false) };
  writeJSON(EXAM_DRAFT_KEY, exam);
  $('examNavDetails').open = false;
  show('exam'); renderExam(); startTimer();
}
function getExamQuestions() {
  const map = new Map(QUESTIONS.map(q => [q.id, q]));
  if (Array.isArray(exam.snapshots) && exam.snapshots.length === exam.ids.length && exam.snapshots.every((q,i) => q && q.id === exam.ids[i])) return exam.snapshots;
  return exam.ids.map(id => LEGACY_V6_QUESTIONS[id] || map.get(id));
}
function saveExamDraft() { if (exam) writeJSON(EXAM_DRAFT_KEY, exam); }
function resumeExam() {
  const draft = readJSON(EXAM_DRAFT_KEY, null);
  if (!draft || !Array.isArray(draft.ids) || !Array.isArray(draft.answers) || draft.ids.length !== draft.answers.length ||
    !draft.ids.every(id => QUESTIONS.some(q => q.id === id)) || !Number.isFinite(draft.deadline)) {
    alert('再開できる模試データがありません。'); return;
  }
  exam = draft;
  // Ver.6以前の途中保存は、差し替えた12問だけ旧本文で再構成して固定します。
  if (!Array.isArray(exam.snapshots) || exam.snapshots.length !== exam.ids.length) {
    const map = new Map(QUESTIONS.map(q => [q.id,q]));
    exam.snapshots = exam.ids.map(id => ({ ...(LEGACY_V6_QUESTIONS[id] || map.get(id)) }));
    saveExamDraft();
  }
  if (!Array.isArray(exam.flags) || exam.flags.length !== exam.ids.length) exam.flags = exam.ids.map(() => false);
  $('examNavDetails').open = false;
  if (!Number.isInteger(exam.pos) || exam.pos < 0 || exam.pos >= exam.ids.length) exam.pos = 0;
  show('exam');
  if (exam.deadline <= Date.now()) { finishExam(true); return; }
  renderExam(); startTimer();
}
function renderExam() {
  if (!exam) return;
  const questions = getExamQuestions(); const q = questions[exam.pos];
  $('examLabel').textContent = `FP${exam.level}級｜${exam.kind === 'full' ? '60問模試' : '6問ミニ模試'}`;
  $('examProgress').textContent = `${exam.pos + 1} / ${questions.length}問｜${q.category}`;
  const answeredCount = exam.answers.filter(a => a !== null).length;
  $('examAnswered').textContent = `回答済 ${answeredCount}問`;
  $('examNavStatus').textContent = `${answeredCount}/${questions.length}問 回答済`;
  $('examJumpUnanswered').disabled = answeredCount === questions.length;
  const markedCount = (exam.flags || []).filter(Boolean).length;
  $('examJumpFlagged').disabled = markedCount === 0;
  $('examJumpFlagged').textContent = `★ 見直し問題へ移動（${markedCount}）`;
  $('examFlag').classList.toggle('active', Boolean(exam.flags && exam.flags[exam.pos]));
  $('examFlag').setAttribute('aria-pressed', String(Boolean(exam.flags && exam.flags[exam.pos])));
  $('examFlag').textContent = exam.flags && exam.flags[exam.pos] ? '★ 見直し指定を解除する' : '☆ この問題を見直す';
  $('examBar').style.width = `${exam.answers.filter(a => a !== null).length / questions.length * 100}%`;
  $('examQuestion').textContent = q.question;
  makeOptionButtons($('examChoices'), q, exam.answers[exam.pos], (answer) => {
    if (!exam) return;
    exam.answers[exam.pos] = answer;
    saveExamDraft(); renderExam();
  });
  $('examPrev').disabled = exam.pos === 0;
  $('examNext').textContent = exam.pos + 1 === questions.length ? '最後の問題です' : '次の問題';
  $('examNext').disabled = exam.pos + 1 === questions.length;
  const nav = $('examNav'); nav.replaceChildren();
  for (let i = 0; i < exam.ids.length; i++) {
    const b = document.createElement('button'); b.type = 'button';
    const marked = Boolean(exam.flags && exam.flags[i]);
    b.textContent = `${marked ? '★' : ''}${i + 1}`;
    b.setAttribute('aria-label', `第${i + 1}問${exam.answers[i] === null ? ' 未回答' : ' 回答済み'}${marked ? ' 見直し指定' : ''}`);
    b.classList.toggle('flagged', marked);
    b.classList.toggle('done', exam.answers[i] !== null);
    b.classList.toggle('current', i === exam.pos);
    if (i === exam.pos) b.setAttribute('aria-current', 'step');
    b.addEventListener('click', () => moveExam(i)); nav.append(b);
  }
  updateTimer();
}
function moveExam(newPos) {
  if (!exam || !Number.isInteger(newPos) || newPos < 0 || newPos >= exam.ids.length) return;
  exam.pos = newPos; saveExamDraft(); renderExam(); window.scrollTo(0, 0);
}
function jumpToUnanswered() {
  if (!exam) return;
  const afterCurrent = exam.answers.findIndex((answer, i) => i > exam.pos && answer === null);
  const first = exam.answers.findIndex(answer => answer === null);
  const target = afterCurrent >= 0 ? afterCurrent : first;
  if (target >= 0) moveExam(target);
}

function toggleExamFlag() {
  if (!exam) return;
  if (!Array.isArray(exam.flags) || exam.flags.length !== exam.ids.length) exam.flags = exam.ids.map(() => false);
  exam.flags[exam.pos] = !exam.flags[exam.pos];
  saveExamDraft(); renderExam();
}
function jumpToFlagged() {
  if (!exam || !Array.isArray(exam.flags)) return;
  const next = exam.flags.findIndex((flag, i) => flag && i > exam.pos);
  const first = exam.flags.findIndex(Boolean);
  const target = next >= 0 ? next : first;
  if (target >= 0) moveExam(target);
}
function updateTimer() {
  if (!exam) return;
  const seconds = Math.max(0, Math.ceil((exam.deadline - Date.now()) / 1000));
  const m = Math.floor(seconds / 60), s = seconds % 60;
  $('timer').textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  $('timer').classList.toggle('urgent', seconds <= 60);
  if (seconds <= 0) finishExam(true);
}
function startTimer() {
  stopTimer();
  if (!exam) return;
  updateTimer();
  if (exam) examTimer = setInterval(updateTimer, 1000);
}
function stopTimer() { if (examTimer !== null) { clearInterval(examTimer); examTimer = null; } }
function finishExam(timeOver = false) {
  if (!exam) return;
  const unanswered = exam.answers.filter(a => a === null).length;
  if (!timeOver && !confirm(unanswered ? `未回答が${unanswered}問あります。採点して終了しますか？` : '模擬試験を終了して採点しますか？')) return;
  stopTimer();
  const qs = getExamQuestions(), a = exam.answers.slice();
  const points = qs.reduce((n, q, i) => n + (a[i] === q.answer ? 1 : 0), 0);
  const pct = Math.round(points / qs.length * 100);
  const currentExam = exam;
  lastExamLevel = currentExam.level;
  lastExamKind = currentExam.kind;
  archiveOldRevisionResults();
  const history = load();
  qs.forEach((q, i) => {
    if (a[i] === null) return;
    const prior = history[q.id];
    const priorRevision = prior && Number.isInteger(prior.revision) ? prior.revision : 1;
    // 旧版の途中保存模試を後から採点しても、最新版の問題で回答した結果を上書きしません。
    if (prior && priorRevision > questionRevision(q)) return;
    history[q.id] = { correct: a[i] === q.answer, selected: a[i], at: Date.now(), revision: questionRevision(q) };
  });
  writeJSON(STORAGE, history);
  const log = readJSON(EXAM_HISTORY_KEY, { attempts: [] });
  const attempts = Array.isArray(log.attempts) ? log.attempts : [];
  const finishedAt = Date.now();
  const attemptId = `${finishedAt}-${Math.floor(Math.random()*1000000)}`;
  attempts.unshift({ id: attemptId, level: currentExam.level, kind: currentExam.kind, total: qs.length, correct: points, finishedAt, timeOver });
  // 正解・解説を採点時点のスナップショットとして残す。将来の出題文変更による履歴の取り違えを防ぐ。
  const prior = readJSON(EXAM_DETAILS_KEY, { attempts: [] });
  const detailRows = Array.isArray(prior.attempts) ? prior.attempts : [];
  const detail = { id: attemptId, level: currentExam.level, kind: currentExam.kind, finishedAt, timeOver,
    questions: qs.map(q => ({ id:q.id,level:q.level,category:q.category,format:q.format,question:q.question,choices:q.choices.slice(),answer:q.answer,explanation:q.explanation,sourceUrl:q.sourceUrl||'',sourceLabel:q.sourceLabel||'',themeReferenceUrl:q.themeReferenceUrl||'',themeReferenceLabel:q.themeReferenceLabel||'',lawReferenceDate:q.lawReferenceDate||null,revision:questionRevision(q) })), answers: a };
  writeJSON(EXAM_DETAILS_KEY, { attempts: [detail, ...detailRows].slice(0, 12) });
  writeJSON(EXAM_HISTORY_KEY, { attempts: attempts.slice(0, 30) });
  try { localStorage.removeItem(EXAM_DRAFT_KEY); } catch { /* 保存できない環境でも結果を表示 */ }
  exam = null;
  $('examResultTitle').textContent = currentExam.kind === 'mini' ? 'ミニ模試・採点結果' : '60問模試・採点結果';
  $('examSummary').textContent = `${qs.length}問中 ${points}問正解｜正答率 ${pct}％`;
  $('examNote').textContent = `${timeOver ? '制限時間が終了したため自動採点しました。' : '模試を採点しました。'} 未回答：${unanswered}問。${currentExam.kind === 'mini' ? 'これは6問の体験用模試のため、合否判定はありません。' : `学習用判定：${points >= 36 ? '合格圏（36問以上）' : '要復習（36問未満）'}。本試験の結果を保証するものではありません。`}`;
  renderBreakdown(qs, a);
  // 模試結果はメモリ内に保持。個別レビューの表示切替で既存の回答履歴を変更しない。
  lastReviewRows = qs.map((q, i) => ({ question: q, number: i + 1, selected: a[i], isCorrect: a[i] === q.answer }));
  reviewFilter = 'issues';
  renderExamReview();
  show('examResult');
}

// 保存済みの問題文・正答・解説スナップショットを使って再表示。履歴データは変更しない。
function openSavedExam(attemptId) {
  const data = readJSON(EXAM_DETAILS_KEY, { attempts: [] });
  const detail = (Array.isArray(data.attempts) ? data.attempts : []).find(d => d.id === attemptId);
  if (!detail || !['2','3'].includes(detail.level) || !['mini','full'].includes(detail.kind) ||
      !Array.isArray(detail.questions) || !Array.isArray(detail.answers) ||
      detail.questions.length !== detail.answers.length || detail.questions.length === 0 ||
      !detail.questions.every(q => q && typeof q.question === 'string' && typeof q.explanation === 'string' &&
         Array.isArray(q.choices) && Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.choices.length)) {
    alert('この受験履歴の詳細を表示できません。'); return;
  }
  lastExamLevel = detail.level;
  lastExamKind = detail.kind;
  const qs = detail.questions, a = detail.answers;
  const points = qs.reduce((sum, q, i) => sum + (a[i] === q.answer ? 1 : 0), 0);
  const unanswered = a.filter(value => value === null).length;
  $('examResultTitle').textContent = `過去の${detail.kind === 'mini' ? 'ミニ模試' : '60問模試'}・採点結果`;
  $('examSummary').textContent = `${qs.length}問中 ${points}問正解｜正答率 ${Math.round(points / qs.length * 100)}％`;
  const date = new Date(detail.finishedAt).toLocaleString('ja-JP');
  $('examNote').textContent = `受験日：${date}｜未回答：${unanswered}問。${detail.kind === 'mini' ? 'ミニ模試のため合否判定はありません。' : `学習用判定：${points >= 36 ? '合格圏' : '要復習'}。`}採点時点の問題・解説を表示しています。`;
  renderBreakdown(qs, a);
  lastReviewRows = qs.map((q,i) => ({question:q,number:i+1,selected:a[i],isCorrect:a[i]===q.answer}));
  reviewFilter = 'issues'; renderExamReview(); show('examResult');
}
function renderBreakdown(qs, answers) {
  const breakdown = $('examBreakdown'); breakdown.replaceChildren();
  for (const category of CATEGORIES.slice(1)) {
    const catQs = qs.map((q, i) => ({q,i})).filter(row => row.q.category === category);
    if (!catQs.length) continue;
    const count = catQs.filter(row => answers[row.i] === row.q.answer).length;
    const row = document.createElement('div'); row.className = 'stat-row';
    const name = document.createElement('span'); name.textContent = category;
    const value = document.createElement('strong'); value.textContent = `${count}/${catQs.length}問 正解`;
    row.append(name, value); breakdown.append(row);
  }
}
function setReviewFilter(filter) {
  if (!['issues', 'all'].includes(filter)) return;
  reviewFilter = filter;
  renderExamReview();
}
function renderExamReview() {
  const issues = lastReviewRows.filter(row => !row.isCorrect);
  const rows = reviewFilter === 'issues' ? issues : lastReviewRows;
  $('reviewIssues').textContent = `要復習（${issues.length}問）`;
  $('reviewAll').textContent = `全問表示（${lastReviewRows.length}問）`;
  for (const [id, mode] of [['reviewIssues', 'issues'], ['reviewAll', 'all']]) {
    $(id).classList.toggle('active', reviewFilter === mode);
    $(id).setAttribute('aria-pressed', String(reviewFilter === mode));
  }
  const empty = $('reviewEmpty');
  empty.classList.toggle('hidden', rows.length !== 0);
  if (!rows.length) empty.textContent = '間違い・未回答の問題はありません。全問正解です！「全問表示」で解説を確認できます。';
  const container = $('examReview'); container.replaceChildren();
  rows.forEach(({ question: q, number, selected: answer, isCorrect }) => {
    const item = document.createElement('details'); item.className = 'review-item review-details';
    const heading = document.createElement('summary');
    const summaryText = document.createElement('span'); summaryText.textContent = `第${number}問｜${q.category}`;
    const summaryStatus = document.createElement('strong');
    summaryStatus.className = isCorrect ? 'correct' : 'wrong';
    summaryStatus.textContent = isCorrect ? '正解' : answer === null ? '未回答' : '不正解';
    heading.append(summaryText, summaryStatus);
    const body = document.createElement('div'); body.className = 'review-details-body';
    const question = document.createElement('p'); question.className = 'review-question'; question.textContent = q.question;
    const yours = document.createElement('p'); yours.textContent = `あなたの回答：${answer === null ? '未回答' : q.choices[answer]}`;
    const right = document.createElement('p'); right.textContent = `正解：${q.choices[q.answer]}`;
    const why = document.createElement('p'); why.className = 'muted'; why.textContent = `解説：${q.explanation}`;
    body.append(question, yours, right, why); appendQuestionSource(body, q);
    item.append(heading, body); container.append(item);
  });
}
function clearStats() {
  if (!confirm('この端末のすべての解答履歴、模試履歴、模試の途中経過を削除しますか？')) return;
  try { [STORAGE, EXAM_HISTORY_KEY, EXAM_DRAFT_KEY, EXAM_DETAILS_KEY, REVISION_ARCHIVE_KEY].forEach(k => localStorage.removeItem(k)); } catch { alert('履歴の削除に失敗しました。'); }
  stopTimer(); exam = null; updateHome();
}
function goHome() {
  // 模試から離れる場合は途中経過を残し、演習から離れても過去回答は保持。
  if (exam) { saveExamDraft(); stopTimer(); exam = null; }
  updateHome(); show('home');
}

function init() {
  $('level3').addEventListener('click', () => setLevel('3'));
  $('level2').addEventListener('click', () => setLevel('2'));
  $('category').addEventListener('change', () => updatePracticeCountOptions(validQuestions(level)));
  $('startPractice').addEventListener('click', () => startQuiz(false));
  $('startReview').addEventListener('click', () => startQuiz(true));
  $('startMini').addEventListener('click', () => createExam('mini'));
  $('startFull').addEventListener('click', () => createExam('full'));
  $('resumeExam').addEventListener('click', resumeExam);
  $('clearStats').addEventListener('click', clearStats);
  $('goHomePractice').addEventListener('click', goHome);
  $('submit').addEventListener('click', submitAnswer);
  $('next').addEventListener('click', nextQuestion);
  $('finishHome').addEventListener('click', goHome);
  $('examPrev').addEventListener('click', () => moveExam(exam.pos - 1));
  $('examNext').addEventListener('click', () => moveExam(exam.pos + 1));
  $('examLeave').addEventListener('click', goHome);
  $('examJumpUnanswered').addEventListener('click', jumpToUnanswered);
  $('examFlag').addEventListener('click', toggleExamFlag);
  $('examJumpFlagged').addEventListener('click', jumpToFlagged);
  $('examFinish').addEventListener('click', () => finishExam(false));
  $('examResultHome').addEventListener('click', goHome);
  $('reviewIssues').addEventListener('click', () => setReviewFilter('issues'));
  $('reviewAll').addEventListener('click', () => setReviewFilter('all'));
  $('examRetry').addEventListener('click', () => { setLevel(lastExamLevel); show('home'); createExam(lastExamKind); });
  document.addEventListener('visibilitychange', () => { if (!document.hidden && exam) updateTimer(); });
  archiveOldRevisionResults();
  updateHome();
}
init();
