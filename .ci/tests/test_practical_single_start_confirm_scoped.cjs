'use strict';
// Guard the practical start flow against duplicate draft-discard prompts.
const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const root=path.resolve(process.argv[2]||path.join(__dirname,'../..'));
const source=fs.readFileSync(path.join(root,'practical.js'),'utf8');
const section=(start,end)=>{const a=source.indexOf(start),b=source.indexOf(end,a+start.length);assert.ok(a>=0&&b>a,`Missing start-flow section: ${start}`);return source.slice(a,b)};
const shared=section('function startFromQuestions(', 'function retrySameSet(');
const direct=section('function start(id, setNumber=1)', 'function updateSubmitReadiness(');
const retry=section('function retrySameSet(', 'function start(id, setNumber=1)');
const prompt='保存している実技演習を終了し、新しく始めますか？';
assert.equal(source.split(prompt).length-1,1,'The discard prompt must have a single implementation');
assert.match(shared,/if\(draft && !confirm\(/,'Shared start path must request confirmation');
assert.doesNotMatch(direct,/\bconfirm\(/,'Direct course start must not prompt a second time');
assert.match(direct,/startFromQuestions\(id,selected,/,'Direct start must use the shared path');
assert.match(retry,/startFromQuestions\(lastResult\.track,lastResult\.questions,/,'Retry must use the shared path');
assert.match(retry,/startFromQuestions\(lastResult\.track,wrong,/,'Mistake review must use the shared path');
console.log('PASS: practical start confirms draft discard only once across entry points.');
