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
    assert.ok(group.every(q=>typeof q.caseTitle==='string'&&q.caseTitle.trim()&&typeof q.caseText==='string'&&q.caseText.trim()),`${track} group ${i/3+1}: missing case material`);
  }
}
const app=fs.readFileSync(path.join(root,'practical.js'),'utf8');
assert.match(app,/casePosition=tr\.id\.startsWith\('kinzai'\)/,'Scenario position must be limited to Kinzai');
assert.match(app,/while\(caseStart>0 && sameCase/,'Scenario position must scan the previous questions');
assert.match(app,/while\(caseEnd\+1<attempt\.questions\.length && sameCase/,'Scenario position must scan the next questions');
console.log('PASS: six Kinzai tracks retain 10 contiguous three-question scenario groups each.');
