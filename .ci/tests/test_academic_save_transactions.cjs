'use strict';
// Exercise production academic handlers against successful and failed storage writes.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(process.argv[2]||path.join(__dirname,'../..'));
const src=fs.readFileSync(path.join(root,'app.js'),'utf8');
assert.doesNotMatch(src,/archiveOldRevisionResults|REVISION_ARCHIVE_KEY/,'legacy archive must not be reintroduced');
function section(start,end){
  const a=src.indexOf(start),b=src.indexOf(end,a+start.length);
  assert.ok(a>=0 && b>a,'Missing production section: '+start);
  return src.slice(a,b);
}
const submit=section('function submitAnswer() {','function nextQuestion() {');
const move=section('function moveExam(newPos) {','function jumpToUnanswered() {');
const flag=section('function toggleExamFlag() {','function jumpToFlagged() {');
for(const saved of [false,true]){
  const q={id:'q1',answer:1,choices:['wrong','right'],explanation:'reason'};
  const nodes=new Map();
  const el=id=>{
    if(!nodes.has(id)) nodes.set(id,{
      classList:{remove(){},add(){}},replaceChildren(){},append(){},
      style:{},children:[],disabled:false
    });
    return nodes.get(id);
  };
  const ctx={
    answered:false,selected:1,index:0,correct:0,session:[q],
    $:el,load:()=>({}),STORAGE:'storage',writeJSON:(key,data)=>{
      assert.equal(key,'storage');assert.equal(data.q1.selected,1);return saved;
    },
    questionRevision:()=>1,
    document:{createElement:()=>({className:'',textContent:''})},
    appendChoiceExplanations:()=>{},appendQuestionSource:()=>{},
    Date,Math
  };
  vm.runInNewContext(submit+';submitAnswer();',ctx);
  assert.equal(ctx.answered,saved,'academic answer finalized only if saved');
  assert.equal(ctx.correct,saved?1:0,'correct count must not change if save fails');
}
for(const saved of [false,true]){
  const exam={pos:0,ids:['a','b'],answers:[null,null],flags:[false,false]};
  const calls={save:0,render:0,scroll:0};
  const ctx={
    exam,saveExamDraft:()=>{calls.save++;return saved;},
    renderExam:()=>{calls.render++;},window:{scrollTo:()=>{calls.scroll++;}},
  };
  vm.runInNewContext(move+';moveExam(1);',ctx);
  assert.equal(exam.pos,saved?1:0,'failed navigation rolls back');
  assert.deepEqual(calls,{save:1,render:saved?1:0,scroll:saved?1:0});
  exam.pos=0;
  vm.runInNewContext(flag+';toggleExamFlag();',ctx);
  assert.equal(exam.flags[0],saved,'failed flag write rolls back');
}
// Execute the actual callback supplied to the exam choice buttons, rather than only
// checking its source code. Cover both a new answer and changing a saved answer.
const render=section('function renderExam() {','function moveExam(newPos) {');
const callback=render.match(/makeOptionButtons\(\$\('examChoices'\), q, exam\.answers\[exam\.pos\], \(answer\) => \{([\s\S]*?)\n  \}\);/);
assert.ok(callback,'exam choice callback present');
for(const saved of [false,true]){
  for(const previous of [null,0]){
    const exam={pos:0,answers:[previous, null]};
    let savedCalls=0,renderCalls=0;
    const ctx={
      exam,
      saveExamDraft:()=>{savedCalls++;return saved;},
      renderExam:()=>{renderCalls++;}
    };
    vm.runInNewContext('(function(answer){'+callback[1]+'\n})(1)',ctx);
    assert.equal(exam.answers[0],saved?1:previous,'only saved exam answer may be retained');
    assert.equal(savedCalls,1,'answer selection should attempt one draft save');
    assert.equal(renderCalls,saved?1:0,'failed save must not render an unsaved answer');
  }
}
console.log('PASS: academic practice and exam save-failure transactions.');
