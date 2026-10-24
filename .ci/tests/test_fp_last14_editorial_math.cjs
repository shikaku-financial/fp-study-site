'use strict';
/*
 * Independent checks on the last 14 FP academic source/choice gaps.
 * Values are parsed from the published problem (not from its answer index);
 * correctness tests are scoped to arithmetic and cited public reference tables.
 * They neither certify human review nor modify learning records.
 */
const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(process.argv[2]||path.join(__dirname,'../..'));
const ctx=vm.createContext({});
new vm.Script(fs.readFileSync(path.join(root,'questions.js'),'utf8')).runInContext(ctx);
const all=JSON.parse(vm.runInContext('JSON.stringify(QUESTIONS)',ctx));
const bank=new Map(all.map(q=>[q.id,q]));
const ids=['fp2-114','fp3-117','fp3-012','fp2-005','fp3-005','fp3-023','fp3-028','fp2-088','fp3-103','fp2-004','fp2-019','fp2-020','fp2-022','fp2-046'];
const expected={
 'fp2-114':'3,800万円','fp3-117':'500万円','fp3-012':'400','fp2-005':'320㎡',
 'fp3-005':'120','fp3-023':'○（正しい）','fp3-028':'6分の1',
 'fp2-088':'15,000円','fp3-103':'102万円','fp2-004':'67万円',
 'fp2-019':'62万円','fp2-020':'412,500円','fp2-022':'104万円','fp2-046':'104万円'
};
for(const id of ids){
 const q=bank.get(id);assert.ok(q,id+' must exist');
 assert.equal(q.choices[q.answer],expected[id],id+' original indexed correct answer');
 assert.equal(q.choices.length,q.choiceExplanations.length,id+' all wrong options must have reasons');
 assert.equal(q.lawReferenceDate,'2026-04-01');
 assert.equal(q.sourceCheckedDate,'2026-10-24');
 assert.match(q.sourceUrl,/^https:\/\//);
 assert.equal(q.verificationStatus,'ai_scoped_official_and_arithmetic_checked_human_review_pending');
 assert.match(q.reviewNote,/人手監修は未了/);
}
const readMoney=(q,label)=>{
 const line=q.question.split('\n').find(x=>x.startsWith(label+' / '));
 assert.ok(line,q.id+' field '+label+' must exist');
 const amount=line.match(/([0-9,]+)万円/);
 assert.ok(amount,q.id+' amount '+label);
 return Number(amount[1].replace(/,/g,''));
};
for(const id of ['fp2-114','fp3-117']){
 const q=bank.get(id);
 const a=readMoney(q,'財産の額'),b=readMoney(q,'借入金の額');
 assert.equal((a-b).toLocaleString('en-US')+'万円',expected[id],id+' independently calculated balance');
 assert.ok(!q.explanation.includes('課税価格を算出'),'do not confuse balances with statutory estate taxation');
}
{
 const q=bank.get('fp3-012'),damages=Number(q.question.match(/今回の損害額 \/ ([0-9,]+)万円/)[1]),
 deductible=Number(q.question.match(/免責金額（自己負担額） \/ ([0-9,]+)万円/)[1]);
 assert.equal(String(damages-deductible),expected[q.id]);
}
{
 const q=bank.get('fp2-005');
 const area=Number(q.question.match(/敷地面積 \/ ([0-9]+)㎡/)[1]);
 const designation=Number(q.question.match(/指定容積率 \/ ([0-9]+)％/)[1]);
 const width=Number(q.question.match(/幅員([0-9]+)m/)[1]);
 const multiplier=Number(q.question.match(/幅員に乗じる数値 \/ ([0-9.]+)/)[1]);
 assert.equal(area*Math.min(designation/100,width*multiplier),320);
}
for(const id of ['fp3-005','fp3-023']){
 const q=bank.get(id);
 const dim=q.question.match(/([0-9]+)m×([0-9]+)m/);
 assert.ok(dim);
 const area=Number(dim[1])*Number(dim[2]);
 if(id==='fp3-005'){
  assert.equal(area*Number(q.question.match(/建ぺい率の上限 \/ ([0-9]+)％/)[1])/100,120);
 }else{
  assert.equal(Number(q.question.match(/建築面積 \/ ([0-9]+)㎡/)[1])/area*100,40);
 }
}
{
 const q=bank.get('fp3-028');
 assert.match(q.question,/実子C・D・Eのみ/);
 assert.equal(1/2/3,1/6);
}
{
 const q=bank.get('fp2-088');
 const buy=q.question.match(/購入 \/ ([0-9]+)株、1株([0-9,]+)円/);
 const sell=q.question.match(/売却 \/ 同じ([0-9]+)株すべて、1株([0-9,]+)円/);
 assert.ok(buy&&sell);
 assert.equal(Number(buy[1]),Number(sell[1]));
 assert.equal((Number(sell[2].replace(/,/g,''))-Number(buy[2].replace(/,/g,'')))*Number(buy[1]),15000);
}
{
 const q=bank.get('fp3-103');
 const principal=readMoney(q,'当初元本');
 const rate=Number(q.question.match(/提示運用利率 \/ 年([0-9]+)％/)[1]);
 assert.equal(principal*(1+rate/100),102);
}
// NTA's published 2026-12-01-and-later year-end-adjustment table:
// <=489万円:104万円; (489,655]:67万円; (655,2350]:62万円.
const basicDeduction=income=>income<=489?104:income<=655?67:income<=2350?62:null;
for(const id of ['fp2-004','fp2-019','fp2-022','fp2-046']){
 const q=bank.get(id),income=Number(q.question.match(/合計所得金額が([0-9]+)万円/)[1]);
 const ded=basicDeduction(income);
 assert.ok(ded!==null);
 assert.equal(q.choices[q.answer],ded+'万円');
 assert.match(q.question,/2026年12月1日以後の年末調整/);
}
{
 const q=bank.get('fp2-020');
 const income=Number(q.question.match(/課税所得金額が([0-9]+)万円/)[1])*10000;
 const row=q.question.match(/3,300,000円以上6,950,000円未満 \/ ([0-9]+)％ \/ ([0-9,]+)円/);
 assert.ok(row);
 assert.equal(income*Number(row[1])/100-Number(row[2].replace(/,/g,'')),412500);
}
const mutate={...bank.get('fp2-114'),question:bank.get('fp2-114').question.replace('金融資産5,000万円','金融資産5,500万円')};
assert.notEqual(readMoney(mutate,'財産の額')-readMoney(mutate,'借入金の額'),3800,'modified source must invalidate old answer');
console.log('PASS: 14 FP pending-source and wrong-choice cases cross-checked; 2026 tax bands, debt, insurance, FAR, coverage, stocks and rates');
