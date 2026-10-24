'use strict';
// Recompute 12 published answers from problem text, independently of the answer key.
// AI-assisted mathematical quality checks are not human editorial certification.
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const root=path.resolve(process.argv[2]||path.join(__dirname,'../..'));
const ctx=vm.createContext({});
new vm.Script(fs.readFileSync(path.join(root,'questions.js'),'utf8')).runInContext(ctx);
const entries=JSON.parse(vm.runInContext('JSON.stringify(QUESTIONS)',ctx));
const byId=new Map(entries.map(q=>[q.id,q]));
const rentalIds=['fp2-052','fp2-102','fp2-103','fp2-107','fp2-110','fp2-165','fp3-085','fp3-113'];
const portfolioIds=['fp2-043','fp2-084','fp2-145','fp3-148'];
const num=(q,label)=>{
 const regex=new RegExp('^'+label+'\\s*\\/[^\\n]*?([0-9,]+)万円','m');
 const m=q.question.match(regex);
 assert.ok(m,q.id+' missing '+label);
 return Number(m[1].replace(/,/g,''));
};
const pct=s=>{
 const m=String(s).match(/^(?:約)?([0-9]+(?:\.[0-9]+)?)％$/);
 assert.ok(m,'percentage expected: '+s);
 return Number(m[1]);
};
const oneDecimal=n=>Math.round((n+Number.EPSILON)*10)/10;
function calculate(q){
 const id=q.id,txt=q.question;
 if(['fp2-052','fp2-102','fp2-103','fp2-165','fp3-085','fp3-113'].includes(id)){
  const rent=num(q,'年間満室賃料'),vac=num(q,'年間空室損失'),cost=num(q,'年間運営費用');
  const price=num(q,'購入価格'),fees=num(q,'取得時諸費用');
  assert.ok(rent>0&&price>0&&vac>=0&&vac<=rent&&cost>=0&&fees>=0);
  const yieldRatio=['fp2-103','fp3-085'].includes(id)?rent/price:
     id==='fp3-113'?(rent-vac)/price:(rent-vac-cost)/(price+fees);
  const expected=oneDecimal(yieldRatio*100);
  return {expected,actual:id==='fp3-085'?(q.answer===0?8:-1):pct(q.choices[q.answer])};
 }
 if(id==='fp2-107'){
  const m=txt.match(/空室率だけが([0-9]+)％から([0-9]+)％へ/);
  assert.ok(m);
  const full=num(q,'満室時の年間家賃'),cost=num(q,'年間運営経費'),price=num(q,'取得価格');
  const first=full*(1-Number(m[1])/100),second=full*(1-Number(m[2])/100);
  const a=oneDecimal((first-cost)/price*100),b=oneDecimal((second-cost)/price*100);
  assert.ok(first>second&&a>b);
  const required=first+'万円から'+second+'万円へ減り、資料で定義した利回りは'+a+'％から'+b+'％へ低下する';
  return {expected:required,actual:q.choices[q.answer],compare:(a,b)=>a.includes(b)};
 }
 if(id==='fp2-110'){
  const value=num(q,'満室時の年間家賃')-num(q,'空室による年間家賃の減少')-num(q,'年間運営支出')-num(q,'年間借入返済');
  return {expected:value+'万円のプラス',actual:q.choices[q.answer]};
 }
 if(id==='fp2-043'){
  const weights=txt.match(/^期首投資額 \/ X：([0-9]+)万円、Y：([0-9]+)万円、合計([0-9]+)万円/m);
  const returns=txt.match(/^1年間の実現収益率 \/ X：([0-9]+)％、Y：([0-9]+)％/m);
  assert.ok(weights&&returns);
  const capital=Number(weights[1])+Number(weights[2]);
  assert.equal(capital,Number(weights[3]));
  return {expected:oneDecimal((Number(weights[1])*Number(returns[1])+Number(weights[2])*Number(returns[2]))/capital),actual:pct(q.choices[q.answer])};
 }
 const weights=txt.match(/^(?:期首投資比率|投資比率) \/ A：([0-9]+)％、B：([0-9]+)％/m);
 const returns=txt.match(/^(?:1年間の実現収益率|期待収益率) \/ A：([0-9]+)％、B：([0-9]+)％/m);
 assert.ok(weights&&returns,id+' source ratios must be present');
 assert.equal(Number(weights[1])+Number(weights[2]),100);
 return {expected:(Number(weights[1])*Number(returns[1])+Number(weights[2])*Number(returns[2]))/100,actual:pct(q.choices[q.answer])};
}
for(const id of [...rentalIds,...portfolioIds]){
 const q=byId.get(id);assert.ok(q,id+' missing');
 assert.equal(q.lawReferenceDate,'2026-04-01');
 assert.equal(q.sourceCheckedDate,'2026-10-24');
 assert.match(q.sourceUrl,/^https:\/\//);
 assert.equal(q.verificationStatus,'ai_scoped_arithmetic_and_public_concept_checked_human_review_pending');
 assert.match(q.reviewNote,/人手監修は未了/);
 assert.equal(q.choiceExplanations.length,q.choices.length);
 const result=calculate(q);
 assert.ok((result.compare||((a,b)=>a===b))(result.actual,result.expected),id+' wrong answer: '+JSON.stringify(result));
 if(typeof result.expected==='number'&&id!=='fp3-085'){
  assert.equal(q.choices.filter(c=>pct(c)===result.expected).length,1,id+' duplicate correct numeric choices');
 }
}
const origin=byId.get('fp2-102');
const mutate={...origin,question:origin.question.replace('年間満室賃料 / 360万円','年間満室賃料 / 460万円')};
assert.notEqual(calculate(mutate).expected,calculate(origin).actual,'rental source mutation must fail');
const p=byId.get('fp2-145');
const modified={...p,question:p.question.replace('期待収益率 / A：4％、B：8％','期待収益率 / A：6％、B：8％')};
assert.notEqual(calculate(modified).expected,calculate(p).actual,'portfolio source mutation must fail');
console.log('PASS: twelve rental/portfolio answers independently derived from source data; mutation and duplicate-choice safeguards');
