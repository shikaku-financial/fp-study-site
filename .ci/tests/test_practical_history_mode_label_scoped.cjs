'use strict';
// Keep history labels aligned with the mode persisted by each exam start path.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(process.argv[2]||path.join(__dirname,'../..'));
const app=fs.readFileSync(path.join(root,'practical.js'),'utf8');
assert.match(app,/const setLabel=a\.mode==='set-1'\?'第1回｜':a\.mode==='set-2'\?'第2回｜':a\.mode==='mistakes'\?'要復習｜':a\.mode==='retry'\?'再受験｜':'';/,'History must distinguish both sets, mistake retry and full retry');
assert.match(app,/details\.textContent=\x60\$\{setLabel\}\$\{Number\.isFinite\(a\.finishedAt\)/,'History must show mode label alongside the date');
assert.match(app,/startFromQuestions\(lastResult\.track,lastResult\.questions,'retry'\)/,'Full retry must persist retry mode');
assert.match(app,/startFromQuestions\(lastResult\.track,wrong,'mistakes'\)/,'Mistake retry must persist mistakes mode');
assert.match(app,/startFromQuestions\(id,selected,\x60set-\$\{setNumber\}\x60\)/,'Regular sets must persist numbered set mode');
console.log('PASS: practical history mode labels match persisted exam modes.');
