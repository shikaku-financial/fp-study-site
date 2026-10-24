'use strict';
/**
 * Mechanical FP answer-format contract. Verifies representability of answer keys,
 * not whether an answer is factually or legally correct or reviewed by a human.
 * Return actionable messages; the audit blocks publishing on these errors.
 */
const normalizeOption=v=>String(v).normalize('NFKC').replace(/\s+/g,'').trim();
const isChoiceIndex=(v,n)=>Number.isInteger(v)&&v>=0&&v<n;
function checkChoices(options,answer,label,expected){
 const errors=[];
 if(!Array.isArray(options)||options.length<2){
  return [label+'：選択肢が不足'];
 }
 if(expected!==undefined&&options.length!==expected)errors.push(label+'：選択肢数が形式と不一致');
 if(options.some(x=>typeof x!=='string'||!x.trim()))errors.push(label+'：空または不正な選択肢');
 if(new Set(options.map(normalizeOption)).size!==options.length)errors.push(label+'：選択肢の表示が重複');
 if(!isChoiceIndex(answer,options.length))errors.push(label+'：正答番号が選択肢の範囲外');
 return errors;
}
function checkNumeric(answer,label){
 return typeof answer==='number'&&Number.isFinite(answer)?[]:[label+'：数値の正答が不正'];
}
function structureIssues(entry){
 const {bank,q}=entry,errors=[];
 if(!['FP学科','FP実技'].includes(bank))return errors;
 if(q.lawReferenceDate!=='2026-04-01')errors.push('法令基準日が2026年4月1日と不一致');
 if(typeof q.question!=='string'||!q.question.trim())errors.push('問題文が未登録');
 if(typeof q.explanation!=='string'||!q.explanation.trim())errors.push('共通解説が未登録');
 if(bank==='FP学科'){
  const expected={true_false:2,three_choice:3,four_choice:4}[q.format];
  if(!expected)errors.push('学科の解答形式が未対応');
  errors.push(...checkChoices(q.choices,q.answer,'学科の正答',expected));
  return errors;
 }
 if(q.kind==='choice'){
  errors.push(...checkChoices(q.choices,q.answer,'実技の選択式正答'));
 }else if(q.kind==='numeric'){
  errors.push(...checkNumeric(q.answer,'実技の数値解答'));
 }else if(['multi_choice','multi_numeric','wordbank_number'].includes(q.kind)){
  if(!Array.isArray(q.subAnswers)||q.subAnswers.length<2){
   errors.push('複数解答欄が不足');
   return errors;
  }
  for(const [i,sub] of q.subAnswers.entries()){
   const label='解答欄'+(i+1);
   if(sub.choices){
    errors.push(...checkChoices(sub.choices,sub.answer,label));
   }else if(sub.wordBank){
    if(!Array.isArray(sub.wordBank)||sub.wordBank.length<2||sub.wordBank.some(v=>typeof v!=='string'||!v.trim())){
     errors.push(label+'：語群が不正');
    }else if(new Set(sub.wordBank.map(normalizeOption)).size!==sub.wordBank.length){
     errors.push(label+'：語群が重複');
    }
    // The wordbank-symbol-v1 data contract uses 1-based indices, unlike 0-based choices.
    if(!Number.isInteger(sub.answer)||sub.answer<1||sub.answer>sub.wordBank.length){
     errors.push(label+'：語群番号が範囲外（1始まり）');
    }
   }else{
    errors.push(...checkNumeric(sub.answer,label));
   }
  }
 }else errors.push('実技の解答形式が未対応');
 return errors;
}
module.exports={structureIssues,checkChoices,checkNumeric};
