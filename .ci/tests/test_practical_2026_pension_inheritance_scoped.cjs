'use strict';
// Scoped 2026-04-01 primary-source audit; not a comprehensive question review.
// Japan Pension Service: https://www.nenkin.go.jp/oshirase/taisetu/kojin/2026/202604/0401.html
// Japan Pension Service: https://www.nenkin.go.jp/service/yougo/hagyo/hoshuhirei.html
// NTA: https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4152.htm
// NTA: https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4124.htm
// NTA: https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4132.htm
// NTA: https://www.nta.go.jp/taxes/shiraberu/taxanswer/zoyo/4408.htm
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(process.argv[2]||path.join(__dirname,'../..'));
const ctx=vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(root,'practical-questions.js'),'utf8')+';this.audited=PRACTICAL_QUESTIONS;',ctx);
const get=id=>{const q=ctx.audited.find(x=>x.id===id);assert.ok(q,'Missing '+id);assert.equal(q.lawReferenceDate,'2026-04-01',id);return q};
const halfUp=(n,d)=>Number((n+d/2n)/d);
const basic=[
 ['pr-kinzai2_business-001',420],['pr-kinzai2_life-001',432],['pr-kinzai2_nonlife-001',420],
 ['pr-kinzai2_business-v16-001',444],['pr-kinzai2_life-v16-001',420],['pr-kinzai2_nonlife-v16-001',450]
];
for(const [id,months] of basic){
 const q=get(id),i=q.calculationInputs;
 assert.equal(i.formula,'basic',id);assert.equal(i.full,847300,id);assert.equal(i.months,months,id);
 assert.match(q.caseText,/847,300円/);assert.match(q.question,/老齢基礎年金/);
 assert.equal(q.answer,halfUp(847300n*BigInt(months),480n),id);
}
const proportional=[
 'pr-kinzai2_business-002','pr-kinzai2_life-002','pr-kinzai2_nonlife-002',
 'pr-kinzai2_business-v16-002','pr-kinzai2_life-v16-002','pr-kinzai2_nonlife-v16-002'
];
for(const id of proportional){
 const q=get(id),i=q.calculationInputs;
 assert.equal(i.formula,'proportional',id);assert.match(q.caseText,/7\.125\/1000/);
 assert.match(q.caseText,/5\.481\/1000/);
 const num=BigInt(i.preSalary)*7125n*BigInt(i.preMonths)+BigInt(i.postSalary)*5481n*BigInt(i.postMonths);
 assert.equal(q.answer,halfUp(num,1000000n),id);
 assert.match(q.question,/報酬比例部分/);
}
const selected=(id)=>{const q=get(id);assert.equal(q.kind,'choice',id);return q.choices[q.answer]};
const estateBasic=n=>3000+600*n,insuranceExempt=n=>500*n;
assert.equal(selected('pr-kinzai3_personal-013'),'相続開始を知った日の翌日から4カ月以内／10カ月以内');
assert.equal(selected('pr-kinzai3_personal-014'),`${estateBasic(4).toLocaleString('ja-JP')}万円／${insuranceExempt(4).toLocaleString('ja-JP')}万円／${7500*.2}万円`);
const estateTax=(6000*.30-700)+3*(2000*.15-50);
assert.equal(estateTax,1850);
assert.equal(selected('pr-kinzai3_personal-015'),'1,850.0万円');
assert.match(get('pr-kinzai3_personal-015').explanation,/1100.*250/);
assert.equal(selected('pr-kinzai3_insurance-013'),estateBasic(3).toLocaleString('ja-JP')+'万円');
assert.equal(selected('pr-kinzai3_insurance-014'),'2分の1');
assert.equal((310-110)*.10,20);
assert.equal(selected('pr-kinzai3_insurance-015'),'20.0万円');
for(const [prefix,gift,heirs,area,value] of [
 ['pr-kinzai2_nonlife-',550,3,240,4800],
 ['pr-kinzai2_nonlife-v16-',750,4,360,9000]
]){
 const giftTax=gift===550?(gift-110)*.20-30:(gift-110)*.30-90;
 const qGift=get(prefix+'013');assert.equal(qGift.answer,giftTax);
 assert.match(qGift.caseText,/暦年課税/);
 assert.equal(get(prefix+'014').answer,insuranceExempt(heirs));
 const taxable=value-value*Math.min(area,330)/area*.8;
 const qEstate=get(prefix+'015');
 assert.equal(qEstate.choices[qEstate.answer],area<=330?'①○・②○・③×':'①○・②×・③×');
 assert.ok(qEstate.explanation.includes(estateBasic(heirs).toLocaleString('ja-JP')+'万円'));
 assert.ok(qEstate.explanation.includes(taxable.toLocaleString('ja-JP')+'万円'));
 assert.match(qEstate.caseText,/配偶者が敷地全体を取得/);
}
console.log('PASS: 24 practical questions (12 pension, 12 inheritance/gift) match independently calculated 2026 statutory examples.');
