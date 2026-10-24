'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),D=require('../boki-data.js'),C=require('../boki-core.js');
const answer=item=>item.type==='journal'?{debit:item.debit.map(([a,n])=>[a,String(n)]),credit:item.credit.map(([a,n])=>[a,String(n)])}:Object.fromEntries(item.fields.map(f=>[f.id,String(f.answer)]));
const values=id=>Object.fromEntries(C.allItems(D[id]).filter(i=>i.fields).flatMap(i=>i.fields).map(f=>[f.id,f.answer]));
const ids=new Set();
for(const level of ['3','2']){
 const exam=D[level],items=C.allItems(exam);assert.equal(items.length,level==='3'?18:12);assert.equal(exam.sections.length,level==='3'?3:5);
 assert.deepEqual(exam.sections.map(s=>s.items.reduce((n,i)=>n+C.points(i),0)),level==='3'?[45,20,35]:[20,20,20,28,12]);
 for(const item of items){
  assert.ok(!ids.has(item.id));ids.add(item.id);assert.ok(item.prompt.length>20);
  assert.equal(C.grade(item,undefined).earned,0);
  if(item.type==='journal'){
   const sum=rows=>rows.reduce((n,r)=>n+r[1],0);assert.equal(sum(item.debit),sum(item.credit),item.id+' balanced');
   const a=answer(item);a.debit.reverse();a.credit.push(['','']);assert.equal(C.grade(item,a).correct,true,item.id+' unordered rows and spare blanks');
   a.credit[0][1]=String(Number(a.credit[0][1])+1);assert.equal(C.grade(item,a).earned,0,item.id+' reject unbalanced wrong value');
   a.credit[0][1]='';assert.equal(C.grade(item,a).earned,0,item.id+' partial row rejected');
   for(const [account]of[...item.debit,...item.credit])assert.ok(item.options.includes(account));
  }else{
   const rendered=item.tables.flatMap(t=>t.rows.flat().filter(c=>typeof c==='object').map(c=>c.id));
   assert.deepEqual(new Set(rendered),new Set(item.fields.map(f=>f.id)));assert.equal(rendered.length,item.fields.length,'each answer occurs once');
   for(const f of item.fields){if(f.type==='choice'){assert.equal(typeof f.answer,'string');assert.ok(f.options.includes(f.answer));assert.equal(new Set(f.options).size,f.options.length);}else assert.ok(Number.isSafeInteger(f.answer)&&f.answer>=0);assert.ok(f.explanation.length>10);}
   const a=answer(item),f=item.fields[0];a[f.id]=String(f.answer+1);assert.equal(C.grade(item,a).earned,C.points(item)-f.points);
  }
 }
 assert.equal(C.result(items,Object.fromEntries(items.map(i=>[i.id,answer(i)]))).earned,100);
 const s={revision:C.revision,id:'test',level,form:'1',mode:'exam',ids:items.map(i=>i.id),index:0,answers:{},checked:{},flags:{},started:Date.now(),deadline:Date.now()+exam.minutes*60000};
 assert.equal(C.validSession(JSON.parse(JSON.stringify(s)),D),true);
 assert.equal(C.validSession({...s,ids:['unknown']},D),false);
 assert.equal(C.validSession({...s,index:items.length},D),false);
 assert.equal(C.validSession({...s,revision:'old'},D),false);
 assert.equal(C.validSession({...s,form:undefined},D),false,'old histories without form are unsupported');
 assert.equal(C.validSession({...s,answers:{[items[0].id]:{debit:'broken',credit:[]}}},D),false);
}
for(const input of ['',' ','1e3','12,34','12a','-1','3.5','Infinity','0x10','1 000','1,000,','9'.repeat(30)])assert.equal(C.number(input),null,input);
assert.equal(C.number('１２３，４５６'),123456);assert.equal(C.number('0'),0);assert.equal(C.number(' 200 '),200);
// Official CBT: accounts may appear only once on each side of one journal.
const q3=D['3'].sections[0].items[0],acc=q3.debit[0][0],total=q3.debit[0][1],other=q3.credit[0][0];
const duplicateDebit={debit:[[acc,String(total/2)],[acc,String(total/2)]],credit:[[other,String(total)]]};
const duplicateCredit={debit:[[acc,String(total)]],credit:[[other,String(total/2)],[other,String(total/2)]]};
assert.deepEqual(C.journalDuplicateSides(duplicateDebit),['debit']);
assert.deepEqual(C.journalDuplicateSides(duplicateCredit),['credit']);
assert.equal(C.grade(q3,duplicateDebit).earned,0,'split duplicate debit must lose points');
assert.equal(C.grade(q3,duplicateCredit).earned,0,'split duplicate credit must lose points');
const unique={debit:[[acc,String(total)],['','']],credit:[[other,String(total)],['','']]};
assert.equal(C.grade(q3,unique).earned,q3.points,'normal journal and unused rows remain valid');
assert.deepEqual(C.journalDuplicateSides(unique),[]);
const bothSides={type:'journal',points:1,debit:[['現金',100]],credit:[['現金',100]]};
assert.equal(C.grade(bothSides,{debit:[['現金','100']],credit:[['現金','100']]}).earned,1,'one account per side, even if same across sides, is permitted');
console.log('PASS: CBT journal duplicate accounting and current form-only records');

// Two individually safe monetary entries must not silently overflow when summed.
const largeJournal={type:'journal',points:1,debit:[['現金',Number.MAX_SAFE_INTEGER],['現金',1]],credit:[['売上',1]]};
const roundedCollision={debit:[['現金',String(Number.MAX_SAFE_INTEGER)],['現金','2']],credit:[['売上','1']]};
assert.equal(C.grade(largeJournal,roundedCollision).correct,false,'unsafe aggregate must never be graded correct');
assert.equal(C.touched({debit:[['','']],credit:[['','']]}),false);assert.equal(C.touched({debit:[['現金','']]}),true);
// Independent accounting reconstruction from source trial balances, not answer-key arithmetic.
for(const level of ['3','2']){
 const trial=C.allItems(D[level]).find(i=>i.id==='b'+level+'-financial').tables[0].rows;
 const sum=col=>trial.slice(0,-1).reduce((n,row)=>n+Number(row[col].replace(/,/g,'')||0),0);
 assert.equal(sum(1),sum(2),'trial balance '+level);assert.equal(sum(1),Number(trial.at(-1)[1].replace(/,/g,'')));
}
const v3=values('3'),v2=values('2');
const cost3=160000+1400000-190000,dep3=900000/5,bad3=400000*.02-6000,prepaid3=72000*2/6;
const expense3=cost3+420000+30000+(72000-prepaid3)+180000+12000+6000+bad3+dep3;
assert.equal(v3.f31,cost3);assert.equal(v3.f36,expense3-2000000);
const assets3=180000+620000+400000-8000+190000+900000-180000-dep3+prepaid3;
assert.equal(v3.f37,assets3);assert.equal(v3.f39,298000-v3.f36);assert.equal(v3.f310,260000+600000+30000+6000+1000000+v3.f39);assert.equal(assets3,v3.f310);
assert.equal(v3.l4,600000*.03*4/12+800000*.03*8/12);
assert.equal(v3.l7,600000*.03*8/12);
assert.equal(v3.l8,800000*.03*8/12);
assert.equal(v3.l9,v3.l7);
assert.equal(v3.l3,v3.l5);
assert.equal(v3.l5,v3.l8);
assert.equal(v3.a3,360000/5*6/12);assert.equal(v3.a8,v3.a3);
assert.equal(v3.a7,480000-v3.a2);
assert.equal(v3.a4,360000-v3.a8);
assert.equal(v3.a5,320000-v3.a7);
const cost2=400000+3200000-420000,expense2=cost2+600000+240000+(120000-30000)+40000+10000+(1200000*.02-20000)+2400000/10;
assert.equal(v2.f29,expense2-4000000+120000);assert.equal(v2.f28,1040000-v2.f29);
const assets2=1500000+1200000*.98+420000+2400000-600000-240000+860000+30000;
assert.equal(v2.f210,assets2);assert.equal(v2.f212,(860000-800000)*(1-.3));assert.equal(v2.f213,900000+1000000+10000+(120000-60000)+(860000-800000)*.3+3000000+v2.f212+v2.f28);assert.equal(assets2,v2.f213);
const acq=1000*1200+20000,unit=acq/1000,proceeds=400*1350-10000;
assert.equal(v2.s6,proceeds-400*unit);assert.equal(v2.s9,600*unit-600*1100);assert.equal(v2.s10,600*1100);
const totalMaterial=200000+2300000,totalConversion=60000+1260000,eq=4000+1000*.4,matUnit=totalMaterial/5000,convUnit=totalConversion/eq;
assert.equal(v2.p6,4000*(matUnit+convUnit));assert.equal(v2.p8,1000*matUnit+1000*.4*convUnit);assert.equal(v2.p6+v2.p8,totalMaterial+totalConversion);assert.equal(v2.p7,300000+v2.p6-400000);
assert.equal(v2.c4,1200000/(2500-1500));assert.equal(v2.c5,(1200000+900000)/(2500-1500));
const newPrice=2300,adBudget=120000,promotedQuantity=1800*1.1,promotedFixed=1200000+adBudget;
assert.equal(v2.c6,(newPrice-1500)*promotedQuantity-promotedFixed);
assert.equal(v2.c8,1800*2500-v2.c4*2500);
assert.equal(v2.c9,promotedFixed/(newPrice-1500));
assert.ok(v2.c9<promotedQuantity,'projected volume must exceed break-even under promotion');
const html=fs.readFileSync(path.join(root,'boki.html'),'utf8');assert.match(html,/content="簿記ラボ"/);assert.match(html,/href="boki.webmanifest"/);
assert.equal(JSON.parse(fs.readFileSync(path.join(root,'boki.webmanifest'))).short_name,'簿記ラボ');
assert.ok(fs.readFileSync(path.join(root,'index.html'),'utf8').includes('href="boki.html"'));
console.log('PASS: bookkeeping 30 original items; two 100-point exams; journal permutations/invalid input; field partial credit; storage validation; independent trial, financial, securities, process-cost and CVP calculations');
