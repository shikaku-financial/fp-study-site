'use strict';
// Keep history labels aligned with the mode persisted by each exam start path.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(process.argv[2]||path.join(__dirname,'../..'));
const app=fs.readFileSync(path.join(root,'practical.js'),'utf8');
assert.match(app,/const modeLabel = mode => mode==='set-1'\?'第1回':mode==='set-2'\?'第2回':mode==='mistakes'\?'要復習':mode==='retry'\?'再受験':'';/,'Both screens must share the same exam mode labels');
assert.match(app,/const setLabel=modeLabel\(a\.mode\);details\.textContent=/,'History must show mode label alongside the date');
assert.match(app,/modeLabel\(r\.mode\)/,'Result summary must identify the exam mode');
assert.match(app,/const mode=modeLabel\(d\.mode\);\$p\('prResume'\)\.textContent=/,'Resume button must identify the saved attempt mode');
assert.match(app,/track:attempt\.track,mode:attempt\.mode,questions:attempt\.questions/,'Finished result must persist mode for history and result labels');
assert.match(app,/startFromQuestions\(lastResult\.track,lastResult\.questions,'retry'\)/,'Full retry must persist retry mode');
assert.match(app,/startFromQuestions\(lastResult\.track,wrong,'mistakes'\)/,'Mistake retry must persist mistakes mode');
assert.match(app,/startFromQuestions\(id,selected,\x60set-\$\{setNumber\}\x60\)/,'Regular sets must persist numbered set mode');
console.log('PASS: practical history mode labels match persisted exam modes.');
