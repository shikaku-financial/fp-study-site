'use strict';
// Execute the production jump handler with a failing/successful draft writer.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),vm=require('node:vm');
const root=path.resolve(process.argv[2]||path.join(__dirname,'../..'));
const src=fs.readFileSync(path.join(root,'practical.js'),'utf8');
const start=src.indexOf('function jump(i){'),end=src.indexOf('function validDraft(',start);
assert.ok(start>=0&&end>start,'production jump function found');
const code=src.slice(start,end);
for(const saved of [false,true]){
  const attempt={pos:0,questions:[{id:'a'},{id:'b'}],answers:[0,null]};
  const calls={save:0,render:0,scroll:0},DRAFT='draft';
  const context={attempt,DRAFT,save:(key,obj)=>{assert.equal(key,DRAFT);assert.equal(obj,attempt);calls.save++;return saved;},renderQuestion:()=>{calls.render++;},window:{scrollTo:()=>{calls.scroll++;}}};
  vm.runInNewContext(code+';jump(1);',context);
  assert.equal(attempt.pos,saved?1:0,'position commits only on successful save');
  assert.deepEqual(calls,{save:1,render:saved?1:0,scroll:saved?1:0});
  assert.deepEqual(attempt.answers,[0,null],'navigation never changes answers');
  vm.runInNewContext(code+';jump(99);jump(-1);',context);
  assert.equal(calls.save,1,'invalid navigation does not write');
}
assert.match(src,/attempt\.answers\[pos\]=i;if\(!save\(DRAFT,attempt\)\)\{attempt\.answers\[pos\]=previous;return;\}if\(\$p\('prAutoNext'\)\.checked && attempt\.pos<attempt\.questions\.length-1\)jump\(attempt\.pos\+1\);else renderQuestion\(\)/,'choice auto-next must only run after successful answer save');
console.log('PASS: practical navigation save success/failure, invalid destinations and auto-next ordering');
