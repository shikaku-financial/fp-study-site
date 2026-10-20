#!/usr/bin/env node
// Run: node tests/check-academic-exact-duplicates.cjs
// Existing duplicates are documented as technical debt, not silently removed.
const fs = require('node:fs');
const path = require('node:path');
const file = fs.readFileSync(path.join(__dirname, '..', 'questions.js'), 'utf8');
const match = file.match(/const QUESTIONS\s*=\s*(\[[\s\S]*?\n\]);/);
if (!match) throw new Error('Cannot locate QUESTIONS array in questions.js');
const questions = JSON.parse(match[1]);
const known = new Set(); // All previously identified exact duplicates have been resolved.
const groups = new Map();
for (const q of questions) {
  const signature = JSON.stringify([q.question, q.choices, q.answer, q.explanation]);
  if (!groups.has(signature)) groups.set(signature, []);
  groups.get(signature).push(q.id);
}
const duplicates = [...groups.values()].filter(ids => ids.length > 1);
const actual = new Set(duplicates.map(ids => [...ids].sort().join('|')));
const unexpected = [...actual].filter(key => !known.has(key));
const resolved = [...known].filter(key => !actual.has(key));
console.log('Exact academic duplicates:', duplicates.length);
for (const key of [...actual].sort()) console.log('  ' + key);
if (resolved.length) console.log('Resolved baseline entries (remove from known): ' + resolved.join(', '));
if (unexpected.length) {
  console.error('Unexpected exact duplicates: ' + unexpected.join(', '));
  process.exitCode = 1;
}
