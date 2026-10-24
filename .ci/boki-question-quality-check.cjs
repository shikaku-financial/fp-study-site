'use strict';
// Content audit independent from the ordinary "answer key grades 100" test.
// Guard ambiguous facts, bridge accounting calculations and scope-year statements.
const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path');
const D=require('../boki-data.js'),E=require('../boki-extra.js');
const root=path.resolve(__dirname,'..');
const exams={'3-1':D['3'],'3-2':E['3'],'2-1':D['2'],'2-2':E['2']};
const all=Object.values(exams).flatMap(e=>e.sections.flatMap(s=>s.items));
assert.equal(all.length,60,'all four full mock papers should be accounted for');
const unique=new Set(all.map(x=>x.id));
assert.equal(unique.size,60,'every full-paper question ID unique');
const get=id=>{const q=all.find(x=>x.id===id);assert.ok(q,id+' exists');return q;};
const field=(id,fid)=>{const q=get(id),f=q.fields.find(x=>x.id===fid);assert.ok(f,id+'/'+fid);return f.answer;};
const expect=(id,fid,actual)=>assert.equal(field(id,fid),actual,id+'/'+fid+' independent account calculation');
// 2026 scope: do not prematurely remove the promissory-note topics included in the 2026 syllabus.
const html=fs.readFileSync(path.join(root,'boki.html'),'utf8');
assert.match(html,/2026年度に適用される出題区分/);
assert.match(html,/2027年度の出題区分改定への対応は未完了/);
assert.match(html,/boki-data\.js\?v=20261024f/);
assert.match(html,/boki-extra\.js\?v=20261024f/);
// A trading security is not described using the merchandise accounting "分記法".
const securities=get('b2-securities');
assert.ok(!securities.prompt.includes('分記法'),'product-sales journal method must not describe securities');
assert.match(securities.prompt,/取得原価/);
expect('b2-securities','s1',1000*1200+20000);
expect('b2-securities','s4',400*((1000*1200+20000)/1000));
expect('b2-securities','s6',400*1350-10000-field('b2-securities','s4'));
expect('b2-securities','s9',field('b2-securities','s8')-600*1100);
// The timing of the 3rd-grade full-year rent must be explicit in the question.
const rent=get('b3-r2-j15');
assert.match(rent.prompt,/4月1日から翌年3月31日/);
assert.match(rent.prompt,/当期12か月分/);
assert.deepEqual(rent.debit,[['支払家賃',120000]]);
assert.deepEqual(rent.credit,[['前払家賃',120000]]);
assert.match(rent.explanation,/前払家賃（資産）/);
// Reserve ceiling requires a separate computation, not only 10% of the dividend.
const reserve=get('b2-r2-j04');
const ceiling=5000000/4-(500000+50000),dividend=300000,appropriation=Math.min(dividend*.1,ceiling);
assert.equal(appropriation,30000);
assert.deepEqual(reserve.debit,[['繰越利益剰余金',dividend+appropriation]]);
assert.deepEqual(reserve.credit,[['未払配当金',dividend],['利益準備金',appropriation]]);
assert.match(reserve.explanation,/700,000円/);
// Rebuild the 2nd-grade trial-balance cost of sales using separate shrinkage and write-down.
const opening=600000,purchases=4000000,bookInventory=700000,actualInventory=680000,netRealizable=650000;
const shrink=bookInventory-actualInventory,writeDown=actualInventory-netRealizable;
const cogs=opening+purchases-bookInventory+shrink+writeDown;
assert.equal(shrink,20000);assert.equal(writeDown,30000);
expect('b2-r2-financial','h2',cogs);
assert.match(get('b2-r2-financial').fields.find(f=>f.id==='h2').explanation,/棚卸減耗損.*商品評価損/);
const sales=5000000+200000,gross=sales-cogs;
expect('b2-r2-financial','h1',sales);
expect('b2-r2-financial','h3',gross);
const expenses=900000+360000+(180000-90000)+(3600000/30+1200000/5)+((1800000+200000)*.02-30000);
const operatingLoss=expenses-gross,interest=60000+20000,taxGiven=160000,netLoss=operatingLoss+interest+taxGiven;
expect('b2-r2-financial','h7',operatingLoss);
expect('b2-r2-financial','h9',operatingLoss+interest);
expect('b2-r2-financial','h10',netLoss);
assert.match(get('b2-r2-financial').notes.join(' '),/税額は所与の金額/);
assert.match(get('b2-r2-financial').fields.find(f=>f.id==='h10').explanation,/会計上の損失と税務上の課税所得/);
// Independently rebuild the second grade-3 year-end profit and net balance sheet.
const g3=get('b3-r2-financial');
expect(g3.id,'g1',240000+2600000-280000);
const sales3=3500000+80000,badDebt3=(600000+80000)*.01;
expect(g3.id,'g2',badDebt3);
const depreciation3=1800000/30+600000/5,insurance3=96000*(4/12);
const cost3=240000+2600000-280000,exp3=cost3+(720000+25000)+360000+insurance3+(24000+6000)+depreciation3;
const netLoss3=exp3-(sales3+(8000-badDebt3));
expect(g3.id,'g6',netLoss3);
const assets3=150000+900000+680000-badDebt3+280000+(1800000-360000-1800000/30)+(600000-120000-600000/5)+(96000-insurance3);
expect(g3.id,'g7',assets3);
// Prevent content edits from silently changing question identity, score or lesson integrity.
for(const [name,exam] of Object.entries(exams)){
 assert.equal(exam.sections.reduce((total,s)=>total+s.items.reduce((v,q)=>v+(q.type==='journal'?q.points:q.fields.reduce((a,f)=>a+f.points,0)),0),0),100,name+' must remain 100 points');
 for(const q of exam.sections.flatMap(s=>s.items)){
  assert.ok(q.prompt.length>=30,q.id+' too short to independently understand');
  if(q.type==='journal'){
   assert.ok(q.explanation.length>=20,q.id+' explanation too terse');
   assert.equal(q.debit.reduce((n,r)=>n+r[1],0),q.credit.reduce((n,r)=>n+r[1],0),q.id+' not balanced');
  }else for(const f of q.fields)assert.ok(f.explanation.length>=18,q.id+'/'+f.id+' explanation too short');
 }
}

{
// Source-table-based independent audit: check totals from the displayed case facts.
const con=get('b2-r2-consolidated'),source=con.tables.find(t=>t.caption.includes('個別財務情報'));
const facts=Object.fromEntries(source.rows.map(r=>[r[0],r.slice(1).map(v=>Number(String(v).replace(/,/g,'')))]));
assert.deepEqual(source.rows.find(r=>r[0]==='支払配当金').slice(1),['0','60,000']);
const parent=.8,netAtBuy=1000000+500000,goodwill=1400000-netAtBuy*parent;
const gross=160000*25/100,minority=facts['当期純利益'][1]*20/100;
const profit=facts['当期純利益'][0]+facts['当期純利益'][1]-facts['支払配当金'][1]*parent-goodwill/10-gross;
expect(con.id,'k4',minority);expect(con.id,'k6',netAtBuy*20/100+minority-facts['支払配当金'][1]*20/100);
expect(con.id,'k7',gross);expect(con.id,'k8',facts['売上高'][0]+facts['売上高'][1]-600000);
expect(con.id,'k9',profit);expect(con.id,'k10',profit-minority);
assert.match(con.fields.find(f=>f.id==='k9').explanation,/社外株主への配当12,000円は当期純利益から重ねて控除しない/);
const job=get('b2-r2-job'),table=job.tables.find(t=>t.caption.includes('指図書別データ'));
const rows=Object.fromEntries(table.rows.map(r=>[r[0],r.slice(1).map(v=>Number(v.replace(/[^0-9]/g,'')))]));
const rate=9000000/6000;
const allocation=rows['直接作業時間'].map(t=>t*rate);
const manufacturing=allocation.map((x,i)=>x+rows['直接材料費'][i]+rows['直接労務費'][i]);
expect(job.id,'w1',rate);expect(job.id,'w2',allocation[0]);expect(job.id,'w3',allocation[1]);
expect(job.id,'w4',manufacturing[0]);expect(job.id,'w5',manufacturing[1]);
expect(job.id,'w6',380000-allocation[0]-allocation[1]);
expect(job.id,'w7',manufacturing[1]);expect(job.id,'w8',1000000-manufacturing[0]);
assert.match(job.prompt,/配賦差異は各指図書に再配分しない/);
const std=get('b2-r2-standard');
expect(std.id,'z1',(520-500)*2500);
expect(std.id,'z2',(2500-600*4)*500);
expect(std.id,'z4',(1240-1200)*1250);
expect(std.id,'z5',(1250-600*2)*1200);
assert.match(std.prompt,/実際消費数量にもとづいて計算/);
assert.match(std.fields.find(f=>f.id==='z4').explanation,/実際作業時間/);
const f3=get('b3-r2-financial');
const allowance=(600000+80000)*.01,returned=8000-allowance;
expect(f3.id,'g2',allowance);
const fullRevenue=3500000+80000+returned;
const fullExpenses=(240000+2600000-280000)+(720000+25000)+360000+96000*4/12+(24000+6000)+1800000/30+600000/5;
expect(f3.id,'g6',fullExpenses-fullRevenue);
const assets3=150000+900000+680000-allowance+280000+(1800000-360000-1800000/30)+(600000-120000-600000/5)+(96000*8/12);
expect(f3.id,'g7',assets3);
console.log('PASS: source-derived consolidation, job-cost allocations, standard variance and grade-3 closing explanations');
}

console.log('PASS: all 60 items/100-point forms retained; 2026-vs-2027 scope; editorial clarity, reserve limit, securities, inventory, tax-loss and independent trial/statement calculations');
