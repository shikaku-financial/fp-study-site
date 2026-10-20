'use strict';
// Verify all Kinzai practical tracks preserve three-question scenario blocks.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(process.argv[2]||path.join(__dirname,'../..'));
const ctx=vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(root,'practical-questions.js'),'utf8')+';this.items=PRACTICAL_QUESTIONS;',ctx);
const tracks=[...new Set(ctx.items.map(q=>q.track))].filter(track=>track.startsWith('kinzai'));
assert.equal(tracks.length,6,'Expected all six Kinzai practical tracks');
for(const track of tracks){
  const questions=ctx.items.filter(q=>q.track===track);
  assert.equal(questions.length,30,`${track}: expected 30 questions`);
  for(let i=0;i<questions.length;i+=3){
    const group=questions.slice(i,i+3);
    assert.equal(new Set(group.map(q=>q.caseTitle)).size,1,`${track} group ${i/3+1}: mismatched case titles`);
    assert.equal(new Set(group.map(q=>q.caseText)).size,1,`${track} group ${i/3+1}: mismatched shared case conditions`);
    if(i>0)assert.notEqual(group[0].caseTitle,questions[i-1].caseTitle,`${track} group ${i/3+1}: same title as preceding scenario would merge position counters`);
    assert.ok(group.every(q=>typeof q.caseTitle==='string'&&q.caseTitle.trim()&&typeof q.caseText==='string'&&q.caseText.trim()),`${track} group ${i/3+1}: missing case material`);
  }
}
// Material snapshots (tables, numeric conditions, diagrams and paragraphs) must
// remain identical for every question in the same three-question Kinzai case.
ctx.window=ctx;
vm.runInContext(fs.readFileSync(path.join(root,'practical-materials.js'),'utf8')+';this.caseMaterials=PRACTICAL_MATERIALS;',ctx);
let verifiedCases=0;
for(const track of tracks){
 const items=ctx.items.filter(q=>q.track===track);
 for(let i=0;i<items.length;i+=3){
  const group=items.slice(i,i+3);
  const sheets=group.map(q=>ctx.caseMaterials[q.id]);
  assert.ok(sheets.every(Boolean),track+' case '+(i/3+1)+': missing material');
  for(const key of ['sourceText','sentences','inputRows','tables','diagram']){
   const values=sheets.map(m=>JSON.stringify(m[key]??null));
   assert.equal(new Set(values).size,1,track+' case '+(i/3+1)+': inconsistent '+key);
  }
  for(let j=0;j<3;j++)assert.equal(sheets[j].sourceText,group[j].caseText,'material/source mismatch: '+group[j].id);
  verifiedCases++;
 }
}
assert.equal(verifiedCases,60);
for(const id of ['pr-kinzai2_personal-013','pr-kinzai2_personal-014','pr-kinzai2_personal-015']){
 const rows=ctx.caseMaterials[id].inputRows;
 assert.equal(rows.length,10,id+': the shared scenario sheet must contain ten conditions');
 assert.ok(!rows.some(([key])=>['基礎控除額','子1人の法定相続分に応ずる税額','相続税の総額（個別税額控除前）'].includes(key)));
}
// The answer-sheet mapping is unique to question 15, not to the shared case.
const inheritance=ctx.items.find(q=>q.id==='pr-kinzai2_personal-015');
assert.ok(inheritance);
assert.match(inheritance.question,/（ア）は法定相続人3人の基礎控除額/);
assert.match(inheritance.question,/（イ）は子1人の法定相続分に応ずる税額/);
assert.match(inheritance.question,/（ウ）は法定相続分で計算する相続税の総額/);
const app=fs.readFileSync(path.join(root,'practical.js'),'utf8');
assert.match(app,/casePosition=tr\.id\.startsWith\('kinzai'\)/,'Scenario position must be limited to Kinzai');
assert.match(app,/while\(start>0 && questions\[start-1\]\.caseTitle===q\.caseTitle/,'Scenario position must scan the previous questions');
assert.match(app,/while\(end\+1<questions\.length && questions\[end\+1\]\.caseTitle===q\.caseTitle/,'Scenario position must scan the next questions');
assert.match(app,/scenarioPosition\(r\.questions,i\)/,'Review must use the original full attempt for scenario position');
assert.match(app,/return end===start\?'':/,'Singleton scenarios in mistake-only retry must omit redundant 1/1 position');
// Navigator must preserve direct-index buttons used by save/answer logic while
// announcing the shared scenario and marking actual case boundaries.
assert.match(app,/const scenarioStart=isKinzai && i>0 && attempt\.questions\[i-1\]\.caseTitle!==attempt\.questions\[i\]\.caseTitle/);
assert.match(app,/b\.classList\.toggle\('scenario-start',scenarioStart\)/);
assert.match(app,/scenarioPosition\(attempt\.questions,i\)/);
assert.match(app,/b\.setAttribute\('aria-label',`第\$\{i\+1\}問/);
assert.match(app,/nav\.append\(b\)/);
const css=fs.readFileSync(path.join(root,'style.css'),'utf8');
assert.match(css,/#prNav button\.scenario-start\{box-shadow:inset 4px 0 0 #9db7c7\}/);
// Only case boundaries get a new marker; no extra elements may shift button indexes.
for(const track of tracks){
 const questions=ctx.items.filter(q=>q.track===track);
 const boundaries=questions.flatMap((q,i)=>i>0&&q.caseTitle!==questions[i-1].caseTitle?[i]:[]);
 assert.equal(boundaries.length,9,track+': expected nine transitions between ten cases');
 for(const index of boundaries)assert.equal(index%3,0,track+': case boundary must align to the next three-question block');
}
console.log('PASS: six Kinzai tracks retain 10 contiguous three-question scenario groups each.');
