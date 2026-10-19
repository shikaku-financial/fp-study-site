'use strict';
// Regression guard for four previously audited 2026 academic tax questions.
// Source: https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1180.htm
// Source: https://www.nta.go.jp/publication/pamph/gensen/2026kaisei.pdf
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(process.argv[2]||path.join(__dirname,'../..'));
const ctx=vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(root,'questions.js'),'utf8')+';this.academic=QUESTIONS;',ctx);
const get=id=>{const q=ctx.academic.find(x=>x.id===id);assert.ok(q,'Missing '+id);assert.equal(q.lawReferenceDate,'2026-04-01',id);return q};
const spouse=get('fp2-048');
assert.equal(spouse.answer,1);
assert.equal(spouse.choices[spouse.answer],'26万円');
assert.match(spouse.question,/62万円超95万円以下/);
assert.match(spouse.explanation,/62万円超95万円以下/);
assert.match(spouse.choiceExplanations[1],/62万円超95万円以下/);
const spouse3=get('fp3-076');
assert.equal(spouse3.answer,1);
assert.match(spouse3.explanation,/62万円超95万円以下/);
const relative=get('fp2-097');
assert.equal(relative.answer,1);
assert.match(relative.choices[1],/親族関係書類、送金関係書類および留学ビザ等書類/);
assert.match(relative.question,/提出・提示しておらず/);
assert.match(relative.explanation,/既に所定の書類を提出・提示している場合/);
const threshold=get('fp3-106');
assert.equal(threshold.answer,1);
assert.equal(threshold.choices[1],'62万円');
assert.match(threshold.explanation,/2026年12月1日/);
assert.match(threshold.explanation,/2026年分の所得税から適用/);
console.log('PASS: four 2026 academic tax questions retain audited answers, legal thresholds and filing assumptions.');
