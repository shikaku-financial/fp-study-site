'use strict';

// 旧版の解答履歴の保存形式を維持します。履歴の自動削除・初期化はしません。
const CATEGORIES = ['すべての分野', 'ライフプランニングと資金計画', 'リスク管理', '金融資産運用', 'タックスプランニング', '不動産', '相続・事業承継'];
const STORAGE = 'fp-training-v1';
const EXAM_HISTORY_KEY = 'fp-training-exam-history-v2';
const EXAM_DRAFT_KEY = 'fp-training-exam-draft-v2';
const MINI_EXAM_MINUTES = 10;
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
  const verified = pool.filter(q => q.verified === true);
  if (targetLevel === '3') {
    const tf = verified.filter(q => q.format === 'true_false').length;
    const tri = verified.filter(q => q.format === 'three_choice').length;
    return { ready: tf >= 30 && tri >= 30, message: `本番形式は検証済みの正誤式 ${tf}/30問・三答択一式 ${tri}/30問が必要です。` };
  }
  const four = verified.filter(q => q.format === 'four_choice').length;
  return { ready: four >= 60, message: `本番形式は検証済みの四答択一式 ${four}/60問が必要です。` };
}
function updateHome() {
  const pool = validQuestions(level);
  $('count').textContent = `現在の収録問題：${pool.length}問（問題増量版）`;
  const old = $('category').value;
  $('category').replaceChildren();
  for (const c of CATEGORIES) {
    const opt = document.createElement('option'); opt.value = c; opt.textContent = c; $('category').append(opt);
  }
  $('category').value = CATEGORIES.includes(old) ? old : CATEGORIES[0];
  const data = load();
  const previous = pool.filter(q => data[q.id] && typeof data[q.id].correct === 'boolean');
  const c = previous.filter(q => data[q.id].correct).length;
  $('stats').textContent = `FP${level}級：解答済み ${previous.length}問 ／ 正解 ${c}問 ／ 正答率 ${previous.length ? Math.round(c / previous.length * 100) : 0}％`;
  const categoryStats = $('categoryStats'); categoryStats.replaceChildren();
  for (const cat of CATEGORIES.slice(1)) {
    const group = pool.filter(q => q.category === cat);
    const done = group.filter(q => data[q.id] && typeof data[q.id].correct === 'boolean');
    const hits = done.filter(q => data[q.id].correct).length;
    const row = document.createElement('div'); row.className = 'stat-row';
    const name = document.createElement('span'); name.textContent = cat;
    const count = document.createElement('strong'); count.textContent = `${hits}/${done.length}問 正解`;
    row.append(name, count); categoryStats.append(row);
  }
  const availability = fullExamAvailability(level);
  $('fullExamStatus').textContent = availability.message;
  $('startFull').disabled = !availability.ready;
  $('startFull').textContent = availability.ready ? '60問模試を開始' : '準備中';
  const draft = readJSON(EXAM_DRAFT_KEY, null);
  const canResume = draft && ['3', '2'].includes(draft.level) && Array.isArray(draft.ids) && draft.ids.length > 0;
  $('resumeExam').classList.toggle('hidden', !canResume);
  if (canResume) $('resumeExam').textContent = `中断したFP${draft.level}級 ${draft.kind === 'full' ? '60問' : '6問'}模試を再開`;
  const h = readJSON(EXAM_HISTORY_KEY, { attempts: [] });
  const attempts = (Array.isArray(h.attempts) ? h.attempts : []).filter(x => x.level === level);
  $('examHistory').textContent = attempts.length ? `直近の模試：${attempts[0].total}問中 ${attempts[0].correct}問正解（${new Date(attempts[0].finishedAt).toLocaleDateString('ja-JP')}）` : '模試の受験履歴はまだありません。';
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

// 分野別演習と誤答復習（解答ごとに旧版の保存先へ記録）。
function startQuiz(onlyWrong) {
  if (exam) { alert('進行中の模試があります。先にホームで再開してください。'); return; }
  const cat = $('category').value;
  const data = load();
  session = validQuestions(level).filter(q => (cat === CATEGORIES[0] || q.category === cat) &&
    (!onlyWrong || (data[q.id] && data[q.id].correct === false)));
  if (!session.length) { alert(onlyWrong ? '復習する問題はありません。' : 'この条件の問題はまだありません。'); return; }
  if ($('shuffle').checked) session = shuffle(session);
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
  const data = load(); data[q.id] = { correct: isCorrect, selected, at: Date.now() }; writeJSON(STORAGE, data);
  const fb = $('feedback'); fb.replaceChildren(); fb.classList.remove('hidden');
  const head = document.createElement('strong'); head.className = isCorrect ? 'correct' : 'wrong'; head.textContent = isCorrect ? '正解です！' : '不正解です';
  const answer = document.createElement('p'); answer.textContent = `正解：${q.choices[q.answer]}`;
  const explanation = document.createElement('p'); explanation.textContent = q.explanation;
  fb.append(head, answer, explanation);
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
  const pool = kind === 'full' ? validQuestions(level).filter(q => q.verified === true) : validQuestions(level);
  if (kind === 'full' && !fullExamAvailability(level).ready) { alert('本番形式の出題数がまだ不足しています。'); return; }
  const draft = readJSON(EXAM_DRAFT_KEY, null);
  if (draft && !confirm('中断中の模試があります。新しく始めると前回の途中経過は失われます。開始しますか？')) return;
  let questions;
  if (kind === 'full' && level === '3') questions = [...shuffle(pool.filter(q => q.format === 'true_false')).slice(0, 30), ...shuffle(pool.filter(q => q.format === 'three_choice')).slice(0, 30)];
  else if (kind === 'full') questions = shuffle(pool.filter(q => q.format === 'four_choice')).slice(0, 60);
  else {
    // 各分野から必ず1問選び、ミニ模試のバランスを保ちます。
    const perCategory = CATEGORIES.slice(1).map(cat => shuffle(pool.filter(q => q.category === cat))[0]).filter(Boolean);
    questions = shuffle(perCategory.length === 6 ? perCategory : shuffle(pool).slice(0, 6));
  }
  if (!questions.length) { alert('模試用の問題がありません。'); return; }
  const duration = kind === 'mini' ? MINI_EXAM_MINUTES : level === '3' ? 90 : 120;
  exam = { version: 2, kind, level, ids: questions.map(q => q.id), answers: questions.map(() => null), pos: 0, deadline: Date.now() + duration * 60000 };
  writeJSON(EXAM_DRAFT_KEY, exam);
  show('exam'); renderExam(); startTimer();
}
function getExamQuestions() {
  const map = new Map(QUESTIONS.map(q => [q.id, q]));
  return exam.ids.map(id => map.get(id));
}
function saveExamDraft() { if (exam) writeJSON(EXAM_DRAFT_KEY, exam); }
function resumeExam() {
  const draft = readJSON(EXAM_DRAFT_KEY, null);
  if (!draft || !Array.isArray(draft.ids) || !Array.isArray(draft.answers) || draft.ids.length !== draft.answers.length ||
    !draft.ids.every(id => QUESTIONS.some(q => q.id === id)) || !Number.isFinite(draft.deadline)) {
    alert('再開できる模試データがありません。'); return;
  }
  exam = draft;
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
  $('examAnswered').textContent = `回答済 ${exam.answers.filter(a => a !== null).length}問`;
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
    b.textContent = String(i + 1); b.setAttribute('aria-label', `第${i + 1}問${exam.answers[i] === null ? ' 未回答' : ' 回答済み'}`);
    b.classList.toggle('done', exam.answers[i] !== null);
    b.classList.toggle('current', i === exam.pos);
    if (i === exam.pos) b.setAttribute('aria-current', 'step');
    b.addEventListener('click', () => moveExam(i)); nav.append(b);
  }
  updateTimer();
}
function moveExam(newPos) { if (!exam) return; exam.pos = newPos; saveExamDraft(); renderExam(); window.scrollTo(0, 0); }
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
  const history = load();
  qs.forEach((q, i) => {
    if (a[i] !== null) history[q.id] = { correct: a[i] === q.answer, selected: a[i], at: Date.now() };
  });
  writeJSON(STORAGE, history);
  const log = readJSON(EXAM_HISTORY_KEY, { attempts: [] });
  const attempts = Array.isArray(log.attempts) ? log.attempts : [];
  attempts.unshift({ level: currentExam.level, kind: currentExam.kind, total: qs.length, correct: points, finishedAt: Date.now(), timeOver });
  writeJSON(EXAM_HISTORY_KEY, { attempts: attempts.slice(0, 30) });
  try { localStorage.removeItem(EXAM_DRAFT_KEY); } catch { /* 保存できない環境でも結果を表示 */ }
  exam = null;
  $('examResultTitle').textContent = currentExam.kind === 'mini' ? 'ミニ模試・採点結果' : '60問模試・採点結果';
  $('examSummary').textContent = `${qs.length}問中 ${points}問正解｜正答率 ${pct}％`;
  $('examNote').textContent = `${timeOver ? '制限時間が終了したため自動採点しました。' : '模試を採点しました。'} 未回答：${unanswered}問。${currentExam.kind === 'mini' ? 'これは6問の体験用模試のため、合否判定はありません。' : `参考判定：${points >= 36 ? '36問以上正解' : '36問未満'}（実際の合否は公式判定に従います）。`}`;
  const container = $('examReview'); container.replaceChildren();
  qs.forEach((q, i) => {
    const item = document.createElement('article'); item.className = 'review-item';
    const h = document.createElement('h3'); h.textContent = `第${i + 1}問｜${q.category}`;
    const question = document.createElement('p'); question.textContent = q.question;
    const judge = document.createElement('p'); judge.className = a[i] === q.answer ? 'correct' : 'wrong';
    judge.textContent = a[i] === q.answer ? '○ 正解' : a[i] === null ? '— 未回答' : '× 不正解';
    const yours = document.createElement('p'); yours.textContent = `あなたの回答：${a[i] === null ? '未回答' : q.choices[a[i]]}`;
    const right = document.createElement('p'); right.textContent = `正解：${q.choices[q.answer]}`;
    const why = document.createElement('p'); why.className = 'muted'; why.textContent = `解説：${q.explanation}`;
    item.append(h, question, judge, yours, right, why); container.append(item);
  });
  show('examResult');
}
function clearStats() {
  if (!confirm('この端末のすべての解答履歴、模試履歴、模試の途中経過を削除しますか？')) return;
  try { [STORAGE, EXAM_HISTORY_KEY, EXAM_DRAFT_KEY].forEach(k => localStorage.removeItem(k)); } catch { alert('履歴の削除に失敗しました。'); }
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
  $('examFinish').addEventListener('click', () => finishExam(false));
  $('examResultHome').addEventListener('click', goHome);
  $('examRetry').addEventListener('click', () => { setLevel(lastExamLevel); show('home'); createExam('mini'); });
  document.addEventListener('visibilitychange', () => { if (!document.hidden && exam) updateTimer(); });
  updateHome();
}
init();
