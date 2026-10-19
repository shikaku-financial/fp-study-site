'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(process.argv[2]||path.join(__dirname,'../..'));
const context=vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(root,'questions.js'),'utf8')+';this.auditQuestions=QUESTIONS;',context);
const questions=context.auditQuestions;
function q(id){const found=questions.find(x=>x.id===id);assert.ok(found,id);return found;}
function basicDeduction2026(incomeMan){
 if(incomeMan<=489)return 104;
 if(incomeMan<=655)return 67;
 if(incomeMan<=2350)return 62;
 if(incomeMan<=2400)return 48;
 if(incomeMan<=2450)return 32;
 if(incomeMan<=2500)return 16;
 return 0;
}
// Independent boundary table from NTA No.1199 (2026-04-01).
for(const [income,expected] of [[132,104],[300,104],[400,104],[489,104],[489.01,67],[600,67],[655,67],[655.01,62],[700,62],[2350,62],[2350.01,48],[2400,48],[2400.01,32],[2450,32],[2450.01,16],[2500,16],[2500.01,0]]){
 assert.equal(basicDeduction2026(income),expected,'NTA boundary '+income);
}
for(const [id,income] of [['fp2-004',600],['fp2-019',700],['fp2-022',400],['fp2-046',300]]){
 const item=q(id),expected=basicDeduction2026(income);
 assert.equal(item.lawReferenceDate,'2026-04-01');
 assert.equal(item.format,'four_choice');
 assert.equal(item.choices[item.answer],expected+'万円',id+' wrong selected deduction');
 assert.ok(item.explanation.includes(expected+'万円'),id+' wrong explanation');
}
// Spousal special deduction: NTA No.1195 for year 2026, spouse 62万円超95万円以下.
const spouse=q('fp2-048');
assert.equal(spouse.choices[spouse.answer],'26万円');
assert.match(spouse.question,/920万円/);assert.match(spouse.question,/80万円/);
assert.match(spouse.explanation,/26万円/);
console.log('PASS: NTA 2026 basic deduction boundaries (17 cases), four academic answers and spouse special deduction fp2-048.');
