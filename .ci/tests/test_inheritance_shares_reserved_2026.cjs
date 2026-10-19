'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(process.argv[2]||path.join(__dirname,'../..'));
const ctx=vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(root,'questions.js'),'utf8')+';this.audit=QUESTIONS;',ctx);
const get=id=>{const q=ctx.audit.find(x=>x.id===id);assert.ok(q,'missing '+id);return q};
const cases=[
 ['fp3-006',1,'4分の1'],
 ['fp2-027',null,'4,800万円'],
 ['fp2-028',null,'6,000万円'],
 ['fp2-057',null,'9,000万円']
];
assert.equal(9600*1/2,4800);
assert.equal(9000*2/3,6000);
assert.equal(12000*3/4,9000);
for(const [id,answer,expected] of cases){
 const q=get(id);assert.equal(q.lawReferenceDate,'2026-04-01');
 if(answer!==null)assert.equal(q.answer,answer);
 assert.ok(q.explanation.includes(expected),id+' explanation does not match statutory-share calculation');
}
const noSibling=get('fp3-027');
assert.equal(noSibling.answer,0);
assert.match(noSibling.question,/兄弟姉妹には、遺留分が認められない/);
const monetary=get('fp3-056');
assert.equal(monetary.answer,0);
assert.match(monetary.question,/金銭の支払を請求できる/);
const reserved=get('fp2-029');
assert.match(reserved.explanation,/金銭/);
assert.equal(reserved.lawReferenceDate,'2026-04-01');
console.log('PASS: three statutory inheritance shares plus reserved portions and monetary claims match NTA and courts rules.');
