'use strict';
// Independent 2025/2026 tax-year boundary guards for previously under-tested questions.
// Confirmed primary sources (2026-04-01 law basis):
// NTA https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1140.htm
// NTA https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1199.htm
// NTA https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1177.htm
// NTA https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1180_qa.htm
// NTA https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1195.htm
// NTA https://www.nta.go.jp/users/gensen/2026kiso/
// Scope: selected exam facts only, NOT a claim of complete professional supervision.
const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(process.argv[2]||path.join(__dirname,'../..'));
const sandbox=vm.createContext({});
for(const [filename,alias] of [['questions.js','academic'],['practical-questions.js','practical']]){
  vm.runInContext(fs.readFileSync(path.join(root,filename),'utf8')+';this.'+alias+'=JSON.parse(JSON.stringify('+(alias==='academic'?'QUESTIONS':'PRACTICAL_QUESTIONS')+'));',sandbox);
}
const questions=[...sandbox.academic,...sandbox.practical];
function get(id){const q=questions.find(x=>x.id===id);assert.ok(q,'missing '+id);assert.equal(q.lawReferenceDate,'2026-04-01',id);return q;}
function selected(id){const q=get(id);assert.ok(Array.isArray(q.choices)&&q.choices.length,id);return q.choices[q.answer];}
function selection(id,expected){assert.equal(selected(id),expected,id);}
function ordinaryNewPremium(p){
  if(p<=20000)return p;
  if(p<=40000)return p*.5+10000;
  if(p<=80000)return p*.25+20000;
  return 40000;
}
function childGeneralPremium(p){
  if(p<=30000)return p;
  if(p<=60000)return p*.5+15000;
  if(p<=120000)return p*.25+30000;
  return 60000;
}
function oldPremium(p){
  if(p<=25000)return p;
  if(p<=50000)return p*.5+12500;
  if(p<=100000)return p*.25+25000;
  return 50000;
}
// The 2026 under-23 new-life premium ceiling (60k) does not change the
// overall three-section income-deduction ceiling (120k).
assert.equal(childGeneralPremium(100000),55000);
assert.equal(childGeneralPremium(130000),60000);
assert.equal(Math.min(120000,childGeneralPremium(100000)+ordinaryNewPremium(60000)+ordinaryNewPremium(30000)),115000);
selection('fp2-094','11万5,000円');
assert.equal(Math.min(120000,childGeneralPremium(130000)+ordinaryNewPremium(90000)*2),120000);
selection('fp3-078','× 誤り');
assert.match(get('fp3-078').explanation,/12万円/);
assert.equal(oldPremium(80000),45000);
assert.equal(ordinaryNewPremium(80000),40000);
selection('fp2-153','4万5,000円');
assert.equal(Math.min(40000,ordinaryNewPremium(30000)+oldPremium(20000)),40000);
selection('fp3-079','× 誤り');
assert.equal(ordinaryNewPremium(60000)+ordinaryNewPremium(80000)+ordinaryNewPremium(40000),105000);
selection('pr-jafp2-014','10.5万円');
// 2026 deduction legislation generally applies from December 1 to FY2026 income tax.
selection('fp3-106','62万円');
selection('fp3-108','67万円');
selection('fp3-160','126');
assert.equal(200-74,126);
selection('fp2-096','51万円'); // 2026 relative income >90 <=95; NTA No.1177
selection('fp3-155','× 誤り'); // 15-year-old: income <=62 but too young for dependent deduction
const spouses=[
 ['pr-kinzai3_insurance-012',120,'配偶者控除額は38万円である'],
 ['pr-kinzai3_insurance-v16-012',140,'配偶者控除の対象外だが、配偶者特別控除38万円の対象となる']
];
for(const [id,income,expected] of spouses){
 const q=get(id);assert.match(q.caseText,/2026年分/);
 const spouseIncome=income-74;
 assert.equal(spouseIncome<=62,income===120,'spouse threshold '+id);
 selection(id,expected);
}
selection('pr-kinzai3_personal-009','給与所得6万円で扶養要件を満たし、特定扶養控除63万円を受けられる');
assert.equal(80-74,6);
// Prior-year 2025 scenario intentionally must not apply the 2026 74/62 minima.
const prior=get('pr-kinzai2_personal-v16-008');
assert.match(prior.question,/2025年分/);
assert.match(prior.caseText,/最低額65万円/);
assert.match(prior.caseText,/所得要件58万円/);
assert.deepEqual(prior.subAnswers.map(x=>x.answer),[754,800]);
assert.equal(960-195-(960-850)*.1,754);
assert.equal(754+46,800);
const priorRights=get('pr-kinzai2_personal-v16-009');
assert.match(priorRights.question,/2025年分/);
assert.deepEqual(priorRights.subAnswers.map(p=>p.choices[p.answer]),['×','○','×']);
assert.equal(115-65,50);
assert.equal(800+465,1265);
assert.ok(1265>1000);
// In a separate FY2026 scenario, the individual with 820万円 total income
// receives 62万円 basic deduction, not the FY2025 58万円 amount.
const current=get('pr-kinzai2_personal-009');
assert.match(current.question,/2026年分/);
assert.deepEqual(current.subAnswers.map(p=>p.choices[p.answer]),['×','○','×']);
assert.match(current.explanation,/62万円/);
assert.match(current.explanation,/58万円/);
console.log('PASS: 16 selected academic/practical 2025→2026 tax-year and 2026 insurance/relative guards; NTA primary source cross-check. Not comprehensive legal supervision.');
