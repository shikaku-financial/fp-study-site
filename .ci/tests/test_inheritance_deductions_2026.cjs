'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(process.argv[2]||path.join(__dirname,'../..'));
const ctx=vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(root,'questions.js'),'utf8')+';this.audit=QUESTIONS;',ctx);
const get=id=>{const q=ctx.audit.find(v=>v.id===id);assert.ok(q,'Missing '+id);return q};
const heirs=3,basic=3000+600*heirs,lifeInsuranceExempt=500*heirs;
assert.equal(basic,4800);assert.equal(lifeInsuranceExempt,1500);
const examples=[
 ['fp3-120','4,800万円',basic,'相続税の基礎控除'],
 ['fp2-113','1,500万円',lifeInsuranceExempt,'死亡保険金'],
 ['fp2-117','3,200万円',8000-basic,'課税遺産総額']
];
for(const [id,expected,amount,topic] of examples){
 const q=get(id);
 assert.equal(q.choices[q.answer],expected,id+' wrong answer');
 assert.match(q.question,/配偶者と実子2人/,id+' missing heir conditions');
 assert.equal(q.lawReferenceDate,'2026-04-01');
 assert.ok(q.explanation.includes(amount.toLocaleString('ja-JP')+'万円'),id+' explanation mismatch');
}
assert.match(get('fp2-113').question,/保険料を全額負担/);
assert.match(get('fp2-113').question,/全員存命/);
assert.match(get('fp2-117').question,/8,000万円/);
console.log('PASS: inheritance base deduction, death insurance exclusion and taxable estate totals agree with NTA formulas for 3 heirs.');
