'use strict';
// Regression guard: a failed draft write must not advance or report an answer as saved.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(process.argv[2]||path.join(__dirname,'../..'));
const src=fs.readFileSync(path.join(root,'practical.js'),'utf8');
const section=(start,end)=>{const a=src.indexOf(start),b=src.indexOf(end,a+start.length);assert.ok(a>=0&&b>a,`Missing section: ${start}`);return src.slice(a,b)};
const render=section('function renderQuestion(){','function jump(i){');
const jump=section('function jump(i){','function validDraft(');
const handlers=section("$p('prNumberInput').addEventListener('input',","$p('prSaveExit').addEventListener");
assert.match(render,/const pos=attempt\.pos,previous=attempt\.answers\[pos\];attempt\.answers\[pos\]=i;if\(!save\(DRAFT,attempt\)\)\{attempt\.answers\[pos\]=previous;return;\}if\(\$p\('prAutoNext'\)/,'Single choice must roll back its in-memory answer if save fails');
assert.match(render,/attempt\.answers\[pos\]=Array\.isArray\(previous\)\?previous\.slice\(\):q\.subAnswers\.map\(\(\)=>null\);\s*attempt\.answers\[pos\]\[i\]=j;if\(!save\(DRAFT,attempt\)\)\{attempt\.answers\[pos\]=previous;return;\}renderQuestion\(\)/,'Multi-choice must clone and restore answer array on failed save');
assert.match(render,/attempt\.answers\[pos\]\[i\]=input\.value;check\(\);if\(!save\(DRAFT,attempt\)\)\{attempt\.answers\[pos\]=previous;return;\}/,'Multi-numeric must restore previous answer on failed save');
assert.match(handlers,/attempt\.answers\[pos\]=e\.target\.value;[\s\S]*?if\(!save\(DRAFT,attempt\)\)\{attempt\.answers\[pos\]=previous;return;\}/,'Single numeric must restore previous answer on failed save');
assert.match(jump,/const previousPos=attempt\.pos;attempt\.pos=i;/,'Jump must retain the previous position');
assert.match(jump,/if\(!save\(DRAFT,attempt\)\)\{attempt\.pos=previousPos;return;\}/,'Jump must restore the previous position on failed save');
console.log('PASS: practical choice, numeric and navigation save-failure guards.');
