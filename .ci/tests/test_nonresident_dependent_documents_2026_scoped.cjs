'use strict';
// Scoped source review (2026-04-01 law baseline):
// https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1180_qa.htm
// https://www.nta.go.jp/taxes/shiraberu/shinkoku/tebiki/2025/03/order3/3-3_27.htm
// The tax-return attachment/presentation exception for documents previously
// provided during withholding or year-end adjustment needs a separate content edit.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(process.argv[2]||path.join(__dirname,'../..'));
const ctx=vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(root,'questions.js'),'utf8')+';this.qs=QUESTIONS;',ctx);
const get=id=>{const q=ctx.qs.find(v=>v.id===id);assert.ok(q,id);assert.equal(q.lawReferenceDate,'2026-04-01');return q};
const study=get('fp2-097');
assert.equal(study.answer,1);
assert.equal(study.choices[study.answer],'親族関係書類、送金関係書類および留学ビザ等書類');
assert.match(study.question,/35歳/);
assert.match(study.question,/留学/);
assert.match(study.question,/20万円/);
assert.match(study.explanation,/38万円送金書類/);
const remittance=get('fp3-077');
assert.equal(remittance.answer,0);
assert.match(remittance.question,/35歳/);
assert.match(remittance.question,/40万円/);
assert.match(remittance.explanation,/38万円以上/);
console.log('PASS: nonresident dependent document combinations and 38万円 exception eligibility (2 questions).');
