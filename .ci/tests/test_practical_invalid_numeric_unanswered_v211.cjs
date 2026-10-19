'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(process.argv[2]||path.resolve(__dirname,'../..'));
const js=fs.readFileSync(path.join(root,'practical.js'),'utf8');
assert.match(js,/q\.kind==='numeric' \? !blank\(a\) && Number\.isFinite\(numericParser\(q\)\(String\(a\)\)\)/);
assert.match(js,/const invalid=String\(value\)\.trim\(\)!=='' && !Number\.isFinite\(numericParser\(q\)\(String\(value\)\)\)/);
assert.match(js,/function updateSubmitReadiness\(\)/);
assert.match(js,/const unfilled=attempt\.answers\.filter\(\(a,i\)=>!completeAnswer\(attempt\.questions\[i\],a\)\)\.length/);
console.log('PASS: malformed numeric answers remain unanswered consistently in navigation and grading readiness.');
