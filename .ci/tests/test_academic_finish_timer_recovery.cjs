'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(process.argv[2]||path.join(__dirname,'../..'));
const src=fs.readFileSync(path.join(root,'app.js'),'utf8');
const begin=src.indexOf('function finishExam(timeOver = false) {');
const end=src.indexOf('// 保存済みの問題文',begin);
assert.ok(begin>=0&&end>begin);
const finish=src.slice(begin,end);
const helper=finish.match(/const recoverTimer = (\(\) => \{[^\n]+\});/);
assert.ok(helper,'timer recovery closure is defined');
for(const [timeOver,deadlineFuture,expected] of [
  [false,true,1],[true,true,0],[false,false,0],[true,false,0]
]){
  let restarted=0;
  const ctx={timeOver,exam:{deadline:deadlineFuture?Date.now()+60000:Date.now()-60000},Date,startTimer:()=>{restarted++;}};
  vm.runInNewContext('const recoverTimer = '+helper[1]+';recoverTimer();',ctx);
  assert.equal(restarted,expected,'manual-only timer recovery respects remaining deadline');
}
assert.match(finish,/if \(!saveExamDraft\(\)\) \{ recoverTimer\(\); return; \}/,'draft failure must recover');
for(const key of ['STORAGE','EXAM_DETAILS_KEY','EXAM_HISTORY_KEY']){
  const re=new RegExp('if \\(!writeJSON\\('+key+',[^\\n]+\\)\\) \\{ recoverTimer\\(\\); return; \\}');
  assert.match(finish,re,key+' failure must recover');
}
console.log('PASS: manual exam finish save failures recover timer; expiry remains stopped.');
