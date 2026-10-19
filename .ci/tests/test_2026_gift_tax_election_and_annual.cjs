'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(process.argv[2]||path.join(__dirname,'../..'));
const ctx=vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(root,'questions.js'),'utf8')+';this.audit=QUESTIONS;',ctx);
function get(id){const q=ctx.audit.find(x=>x.id===id);assert.ok(q,id);return q}
const annual=get('fp2-115'),settlement=get('fp2-116');
const gifts=[100,100],deduction=110;
assert.equal(Math.max(0,gifts.reduce((a,b)=>a+b,0)-deduction),90);
assert.equal(annual.choices[annual.answer],'90万円');
assert.match(annual.question,/父から100万円、母から100万円/);
assert.match(annual.explanation,/受贈者Aさんについて年110万円/);
assert.equal(settlement.answer,1);
assert.match(settlement.question,/贈与年1月1日に60歳以上/);
assert.match(settlement.question,/同日に18歳以上/);
assert.match(settlement.question,/暦年課税へ戻せない/);
assert.match(settlement.explanation,/2024年1月1日以後の贈与には年110万円/);
for(const q of [annual,settlement])assert.equal(q.lawReferenceDate,'2026-04-01');
console.log('PASS: 2026 gift tax annual recipient deduction and settlement election criteria match NTA No.4402/4103.');
