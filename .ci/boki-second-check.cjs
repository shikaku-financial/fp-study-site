'use strict';
const assert=require('node:assert/strict');
const D=require('../boki-data.js'),E=require('../boki-extra.js'),C=require('../boki-core.js');
for(const level of ['2','3'])D[level].forms={'2':E[level]};
const ids=new Set();
for(const level of ['3','2'])for(const form of ['1','2']){
 const exam=C.examFor(D,level,form),items=C.allItems(exam);
 assert.equal(items.length,level==='3'?18:12);
 assert.deepEqual(exam.sections.map(s=>s.items.reduce((n,i)=>n+C.points(i),0)),level==='3'?[45,20,35]:[20,20,20,28,12]);
 const answers={};
 for(const item of items){
  assert.ok(!ids.has(item.id),'unique ID '+item.id);ids.add(item.id);
  assert.equal(C.grade(item,undefined).earned,0);
  if(item.type==='journal'){
   assert.equal(item.debit.reduce((n,r)=>n+r[1],0),item.credit.reduce((n,r)=>n+r[1],0),item.id+' balanced');
   answers[item.id]=Object.fromEntries(['debit','credit'].map(side=>[side,item[side].map(([account,n])=>[account,String(n)])]));
   for(const [account,n]of[...item.debit,...item.credit]){assert.ok(item.options.includes(account));assert.ok(Number.isSafeInteger(n)&&n>0);}
  }else{
   answers[item.id]=Object.fromEntries(item.fields.map(f=>[f.id,String(f.answer)]));
   const fields=item.tables.flatMap(t=>t.rows.flat().filter(c=>typeof c==='object').map(c=>c.id));
   assert.equal(fields.length,item.fields.length);assert.deepEqual(new Set(fields),new Set(item.fields.map(f=>f.id)));
   for(const f of item.fields){assert.ok(Number.isSafeInteger(f.answer)&&f.answer>=0);assert.ok(f.explanation.length>0);}
  }
 }
 assert.equal(C.result(items,answers).earned,100);
 const s={revision:C.revision,id:'test',level,form,mode:'exam',ids:items.map(i=>i.id),index:0,answers,checked:{},flags:{},started:1,deadline:5000};
 assert.ok(C.validSession(s,D));assert.equal(C.validSession({...s,form:'unknown'},D),false);
 assert.equal(C.validSession({...s,form:form==='1'?'2':'1'},D),false,'cross-form IDs must fail validation');
}
assert.equal(ids.size,60);
const fields=level=>Object.fromEntries(C.allItems(E[level]).filter(i=>i.fields).flatMap(i=>i.fields).map(f=>[f.id,f.answer]));
const a=fields('3'),b=fields('2');
// FIFO: reconstruct inventory lots and both issues without relying on the answer table.
let lots=[[80,400],[120,450]];function issue(qty){let cost=0;while(qty){const take=Math.min(qty,lots[0][0]);cost+=take*lots[0][1];qty-=take;lots[0][0]-=take;if(!lots[0][0])lots.shift();}return cost;}
assert.equal(a.v1,issue(150));assert.equal(a.v2,lots.reduce((n,r)=>n+r[0],0));assert.equal(a.v3,lots.reduce((n,r)=>n+r[0]*r[1],0));lots.push([100,480]);assert.equal(a.v4,issue(100));assert.equal(a.v5,lots.reduce((n,r)=>n+r[0]*r[1],0));
const entries=[[['現金',52000],['売掛金',52000]],[['通信費',18000],['現金',18000]],[['仕入',72000],['買掛金',72000]],[['現金',96000],['売上',96000]],[['買掛金',45000],['現金',45000]],[['売掛金',84000],['売上',84000]],[['仕入',48000],['買掛金',48000]]];
const totals=[new Map(),new Map()];for(const entry of entries)entry.forEach(([account,n],side)=>totals[side].set(account,(totals[side].get(account)||0)+n));
assert.equal(a.t1,totals[0].get('現金'));assert.equal(a.t2,totals[1].get('現金'));assert.equal(a.t3,totals[0].get('売掛金'));assert.equal(a.t4,totals[0].get('仕入'));assert.equal(a.t5,totals[1].get('売上'));assert.equal([...totals[0].values()].reduce((a,b)=>a+b,0),415000);assert.equal([...totals[1].values()].reduce((a,b)=>a+b,0),415000);
assert.ok(C.allItems(E['3']).every(item=>!item.title?.includes('銀行勘定調整')),'bank reconciliation is outside level 3');
for(const level of ['3','2']){
 const trial=C.allItems(E[level]).find(i=>i.id==='b'+level+'-r2-financial').tables[0].rows;
 const sums=[1,2].map(col=>trial.slice(0,-1).reduce((n,r)=>n+Number(r[col].replace(/,/g,'')||0),0));assert.equal(sums[0],sums[1]);assert.equal(sums[0],Number(trial.at(-1)[1].replace(/,/g,'')));
}
const cost3=240000+2600000-280000,dep3=1800000/30+600000/5,insurance3=96000*4/12,allowance3=(600000+80000)*.01,returns3=8000-allowance3;
const loss3=cost3+720000+25000+360000+insurance3+24000+6000+dep3-(3500000+80000)-returns3;
assert.equal(a.g1,cost3);assert.equal(a.g2,allowance3);assert.equal(a.g3,1800000-360000-1800000/30);assert.equal(a.g4,96000-insurance3);assert.equal(a.g6,loss3);
const assets3=150000+900000+680000-allowance3+280000+(1800000-360000-60000)+(600000-120000-120000)+a.g4;
assert.equal(a.g7,assets3);assert.equal(assets3,540000+1000000+25000+6000+2000000+562000-loss3);
// Consolidation: acquisition, equity movement, downstream inventory and income attribution.
const acquiredNet=1000000+500000,goodwill=1400000-acquiredNet*.8,nci=acquiredNet*.2,nciProfit=240000*.2,nciDiv=60000*.2,unrealized=160000*.25;
assert.equal(b.k1,goodwill);assert.equal(b.k2,nci);assert.equal(b.k3,goodwill-goodwill/10);assert.equal(b.k4,nciProfit);assert.equal(b.k5,nciDiv);assert.equal(b.k6,nci+nciProfit-nciDiv);assert.equal(b.k7,unrealized);assert.equal(b.k8,4000000+2000000-600000);
const groupProfit=800000+240000-60000*.8-goodwill/10-unrealized;assert.equal(b.k9,groupProfit);assert.equal(b.k10,groupProfit-nciProfit);
const cost2=600000+4000000-650000,expenses2=900000+360000+90000+360000+10000,operatingLoss=expenses2-(5200000-cost2),netLoss=operatingLoss+80000+160000;
assert.equal(b.h2,cost2);assert.equal(b.h3,5200000-cost2);assert.equal(b.h7,operatingLoss);assert.equal(b.h9,operatingLoss+80000);assert.equal(b.h10,netLoss);
const assets2=2000000+(1800000+200000)-(1800000+200000)*.02+650000+(3600000-720000-120000)+(1200000-480000-240000)+90000;
assert.equal(assets2,1400000+2000000+20000+(160000-100000)+4000000+1170000-netLoss);
const rate=9000000/6000,appliedA=160*rate,appliedB=80*rate;assert.equal(b.w1,rate);assert.equal(b.w2,appliedA);assert.equal(b.w3,appliedB);assert.equal(b.w4,240000+180000+appliedA);assert.equal(b.w5,160000+120000+appliedB);assert.equal(b.w6,380000-appliedA-appliedB);assert.equal(b.w7,b.w5);assert.equal(b.w8,1000000-b.w4);
assert.equal(b.z1,(520-500)*2500);assert.equal(b.z2,(2500-600*4)*500);assert.equal(b.z3,2500*520-600*4*500);assert.equal(b.z3,b.z1+b.z2);assert.equal(b.z4,(1240-1200)*1250);assert.equal(b.z5,(1250-600*2)*1200);assert.equal(b.z6,1250*1240-600*2*1200);assert.equal(b.z6,b.z4+b.z5);
console.log('PASS: four 100-point exams, 60 distinct items, form-scoped IDs, second-exam trial/financial/FIFO/voucher/consolidation/job-cost/standard-cost independent calculations');
