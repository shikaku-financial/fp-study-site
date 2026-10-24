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
assert.match(html,/収録問題は2026年度（2026年4月1日～2027年3月31日）の出題区分/);
assert.match(html,/2027年度の出題区分改定への対応は未完了/);
assert.match(html,/boki-data\.js\?v=20261024j/);
assert.match(html,/boki-extra\.js\?v=20261024h/);
// Safeguard exact fiscal-year communication: the current papers retain 2026 section weights.
assert.match(html,/2026年度の第1問45点・第2問20点・第3問35点/);
assert.match(html,/2027年4月1日以降の3級本試験は第1問45点・第2問25点・第3問30点/);
assert.match(html,/当サイトの模試配点は自動で切り替わりません/);
assert.match(html,/https:\/\/www\.kentei\.ne\.jp\/51504/);
// For the grade-3 second paper, learners should see both debit/credit logic.
for(const id of ["b3-r2-j04","b3-r2-j05","b3-r2-j06","b3-r2-j07","b3-r2-j08","b3-r2-j09","b3-r2-j12","b3-r2-j14"]){
 const journal=get(id);
 assert.equal(journal.type,'journal',id+' remains a journal');
 assert.match(journal.explanation,/借方/,id+' must explain debit');
 assert.match(journal.explanation,/貸方/,id+' must explain credit');
 for(const amount of [...journal.debit,...journal.credit].map(row=>row[1])){
  if(amount>=1000) assert.ok(journal.explanation.includes(amount.toLocaleString('en-US')),id+' explains '+amount);
 }
}

// Keep the practice-friendly input policy explicit without changing existing grading.
assert.match(html,/id="boki-official-input-guide"/);
assert.match(html,/本試験に向けて半角数字のみ・同じ側の科目重複なし/);
assert.match(html,/当サイトは練習しやすいように全角数字と桁区切りカンマ/);
assert.match(html,/公式試験のすべての解答形式を再現したものではありません/);
// Learning-oriented journal explanations must show the calculation or account classification.
for(const [id,required] of [
 ['b2-j01',['1,800,000円＋据付費120,000円','機械装置','普通預金']],
 ['b2-j02',['4,000ドル×143円','12,000円','為替差損益']],
 ['b2-j03',['380,000円−期末時価352,000円','有価証券評価損']],
 ['b2-j05',['960,000円','非支配株主持分','160,000円']],
 ['b2-i01',['160,000＋24,000＝184,000円','仕掛品','製造間接費']],
 ['b3-j06',['240,000−8,000＝232,000円','所得税預り金']],
 ['b3-j08',['600,000円×2%×6/12＝6,000円','貸付金']],
 ['b3-j09',['現金過不足','雑損']],
 ['b3-j10',['82,000−20,000＝62,000円','前受金']],
 ['b3-j12',['9,000−4,500＝4,500円','差額補充法']],
 ['b3-j13',['60,000円×2/6＝20,000円','前払保険料']],
 ['b3-j14',['50,000円×10%＝5,000円','仮払消費税']]
]){
 const journal=get(id);
 for(const phrase of required) assert.ok(journal.explanation.includes(phrase),id+' explanatory step missing: '+phrase);
}
// Derive representative journal calculations from their problem source values.
const lookup=(id,side,name)=>get(id)[side].find(r=>r[0]===name)[1];
assert.equal(lookup('b2-j01','debit','機械装置'),1800000+120000);
assert.equal(lookup('b2-j02','debit','売掛金'),4000*(143-140));
assert.equal(lookup('b2-j03','debit','有価証券評価損'),380000-352000);
assert.equal(lookup('b2-j05','debit','のれん'),1120000-(800000+400000)*80/100);
assert.equal(lookup('b2-j05','credit','非支配株主持分'),(800000+400000)*20/100);
assert.equal(lookup('b2-i01','credit','材料'),160000+24000);
assert.equal(lookup('b3-j06','credit','普通預金'),240000-8000);
assert.equal(lookup('b3-j08','debit','普通預金'),600000+600000*2/100*6/12);
assert.equal(lookup('b3-j10','debit','売掛金'),82000-20000);
assert.equal(lookup('b3-j12','debit','貸倒引当金繰入'),450000*2/100-4500);
assert.equal(lookup('b3-j13','debit','前払保険料'),60000*2/6);
assert.equal(lookup('b3-j14','credit','買掛金'),50000+50000*10/100);
console.log('PASS: authentic CBT instructions distinguished from study-site conveniences; 12 journal lessons independently checked');

// Verify that categorical answer slots are inside all four original 100-point mocks.
for(const [id,fid,correctAnswer] of [
 ['b3-ledger','l6','3/31 損益'],['b3-asset','a6','固定資産売却益'],
 ['b3-r2-inventory','v6','4/5仕入分と4/20仕入分'],['b3-r2-vouchers','t6','売掛金'],
 ['b2-cvp','c7','貢献利益率'],['b2-r2-job','w9','不利差異']
]){
 const item=get(id),f=item.fields.find(x=>x.id===fid);
 assert.ok(f&&f.type==='choice',id+' choice field exists');
 assert.equal(f.answer,correctAnswer);
 assert.ok(f.options.includes(correctAnswer)&&f.options.length>=3,'valid choice options');
 assert.equal(new Set(f.options).size,f.options.length,'unique choice options');
 assert.equal(item.tables.flatMap(t=>t.rows.flat()).filter(c=>c&&typeof c==='object'&&c.id===fid).length,1,'choice rendered once');
 const C=require('../boki-core.js');const good=Object.fromEntries(item.fields.map(x=>[x.id,String(x.answer)]));
 assert.equal(C.grade(item,good).earned,C.points(item));
 good[fid]=f.options.find(x=>x!==f.answer);
 assert.equal(C.grade(item,good).earned,C.points(item)-f.points,'wrong choice loses only its points');
 good[fid]='';assert.equal(C.grade(item,good).earned,C.points(item)-f.points);
}
assert.match(html,/4回分の模試に勘定科目・語句選択の空欄/);
console.log('PASS: six original categorical select fields embedded across four full-length mocks; mixed grading validated');

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


{
// Separate fixture-based tests for form 1 use the printed case facts and accounting identities.
const original2=D['2'],original3=D['3'];
const item=id=>[...original2.sections,...original3.sections].flatMap(s=>s.items).find(i=>i.id===id);
const val=(id,key)=>item(id).fields.find(x=>x.id===key).answer;
const journal2=id=>item(id),debitTotal=q=>q.debit.reduce((n,[,v])=>n+v,0),creditTotal=q=>q.credit.reduce((n,[,v])=>n+v,0);
const fx=journal2('b2-j02');
assert.equal(debitTotal(fx),4000*(143-140));
assert.equal(creditTotal(fx),debitTotal(fx));
const tax=journal2('b2-j04');
assert.match(tax.prompt,/将来の貸倒処理時に損金算入/);
assert.match(tax.prompt,/回収可能性/);
assert.equal(tax.debit.find(([name])=>name==='繰延税金資産')[1],80000*30/100);
const share=journal2('b2-j05');
assert.equal(share.debit.find(([name])=>name==='のれん')[1],1120000-(800000+400000)*80/100);
assert.equal(share.credit.find(([name])=>name==='非支配株主持分')[1],(800000+400000)*20/100);
const labor=journal2('b2-i02'),overhead=journal2('b2-i03');
assert.match(overhead.prompt,/独立した別の事例/);
assert.equal(labor.debit.find(([name])=>name==='仕掛品')[1],240*1600);
assert.equal(labor.debit.find(([name])=>name==='製造間接費')[1],30*1600);
assert.equal(overhead.debit[0][1],12000000/6000*450);
const process=item('b2-process');
const table=process.tables.find(t=>t.caption==='生産・原価データ');
const sourceRows=Object.fromEntries(table.rows);
const monthStart=Number(sourceRows['月初仕掛品'].match(/\d+/)[0]);
const monthInput=Number(sourceRows['当月投入'].replace(/,/g,'').match(/\d+/)[0]);
const finished=Number(sourceRows['完成品'].replace(/,/g,'').match(/\d+/)[0]);
const monthEnd=Number(sourceRows['月末仕掛品'].replace(/,/g,'').match(/\d+/)[0]);
const progress=Number(sourceRows['月末仕掛品'].match(/進捗(\d+)%/)[1]);
assert.equal(monthStart+monthInput,finished+monthEnd,'process quantity continuity');
const totalMaterials=200000+2300000,totalConversion=60000+1260000;
const materialsPerUnit=totalMaterials/(finished+monthEnd),equiv=finished+monthEnd*progress/100;
const conversionPerUnit=totalConversion/equiv,closing=monthEnd*materialsPerUnit+monthEnd*progress/100*conversionPerUnit;
assert.equal(val('b2-process','p1'),materialsPerUnit);
assert.equal(val('b2-process','p2'),equiv);
assert.equal(val('b2-process','p3'),conversionPerUnit);
assert.equal(val('b2-process','p8'),closing);
assert.equal(val('b2-process','p6'),totalMaterials+totalConversion-closing);
assert.match(process.fields.find(x=>x.id==='p2').explanation,/先入先出法と異なり/);
const finance2=item('b2-financial'),trial=finance2.tables.find(t=>t.caption==='決算整理前残高試算表');
const records=Object.fromEntries(trial.rows.map(r=>[r[0],r.slice(1).map(v=>Number(String(v).replace(/,/g,''))||0)]));
const inventory=450000-(450000-440000)-(440000-420000);
const receivables=records['売掛金'][0]*(1-2/100);
const equipment=records['備品'][0]-records['備品減価償却累計額'][1]-records['備品'][0]/10;
const valuation=860000-records['その他有価証券'][0],deferred=valuation*30/100,equity=valuation-deferred;
const assets=records['現金預金'][0]+receivables+inventory+equipment+860000+30000;
const liabilities=records['買掛金'][1]+records['借入金'][1]+10000+(120000-records['仮払法人税等'][0])+deferred;
const retained=assets-liabilities-records['資本金'][1]-equity;
assert.equal(val('b2-financial','f22'),inventory);
assert.equal(val('b2-financial','f24'),860000);
assert.equal(val('b2-financial','f27'),deferred);
assert.equal(val('b2-financial','f28'),retained);
assert.equal(val('b2-financial','f210'),assets);
assert.match(finance2.notes.join(''),/当期純損益に算入しない/);
const fiscal3=item('b3-financial'),t3=fiscal3.tables.find(t=>t.caption.includes('決算整理前残高試算表'));
const map3=Object.fromEntries(t3.rows.map(r=>[r[0],r.slice(1).map(v=>Number(String(v).replace(/,/g,''))||0)]));
const expense3=map3['繰越商品'][0]+map3['仕入'][0]-190000+(map3['給料'][0]+30000)+72000*4/6+map3['支払家賃'][0]+(map3['支払利息'][0]+6000)+(map3['売掛金'][0]*2/100-map3['貸倒引当金'][1])+map3['備品'][0]/5;
const loss3=expense3-map3['売上'][1];
assert.equal(val('b3-financial','f36'),loss3);
assert.equal(298000-loss3,50000,'3rd-grade retained earnings balance');
assert.match(fiscal3.fields.find(f=>f.id==='f36').explanation,/貸借対照表とも一致/);
console.log('PASS: form-one FX, tax effect, investment elimination, distinct industrial cases, process quantity flow, FS tax/equity and grade-three net income reconciliation');
}


// Additional source-derived audits: first-form ledger/assets/CVP, second-form FIFO/vouchers.
// Each expected value is reconstructed from the displayed source terms, not a copied answer key.
{
 const num=s=>Number(String(s).replace(/,/g,''));
 const loan=get('b3-ledger');
 const previous=num(loan.prompt.match(/前期X4年8月1日に([\d,]+)円/)[1]);
 const next=num(loan.prompt.match(/同年8月1日に([\d,]+)円/)[1]);
 const rate=Number(loan.prompt.match(/年([\d.]+)%/)[1])/100;
 const paid=previous*rate,priorAccrual=previous*rate*8/12,newAccrual=next*rate*8/12;
 expect(loan.id,'l1',priorAccrual);
 expect(loan.id,'l2',paid);
 expect(loan.id,'l3',newAccrual);
 expect(loan.id,'l4',paid-priorAccrual+newAccrual);
 expect(loan.id,'l5',newAccrual);
 assert.match(loan.fields.find(f=>f.id==='l4').explanation,/前期計上済み/);

 const asset=get('b3-asset');
 const a=asset.prompt.match(/備品AはX3年4月1日に([\d,]+)円で取得し、耐用年数(\d+)年/);
 const b=asset.prompt.match(/備品BはX5年10月1日に([\d,]+)円で取得し、耐用年数(\d+)年/);
 assert.ok(a&&b,'asset acquisition terms exist');
 const aAnnual=num(a[1])/num(a[2]),bAnnual=num(b[1])/num(b[2]);
 const salePrice=num(asset.fields.find(f=>f.id==='a5').label.match(/([\d,]+)円で売却/)[1]);
 expect(asset.id,'a1',aAnnual);
 expect(asset.id,'a2',aAnnual*3);
 expect(asset.id,'a3',bAnnual*6/12);
 expect(asset.id,'a4',num(b[1])-bAnnual*6/12);
 expect(asset.id,'a5',salePrice-(num(a[1])-aAnnual*3));

 const cvp=get('b2-cvp');
 const conditions=cvp.prompt.match(/販売単価([\d,]+)円、単位当たり変動費([\d,]+)円、月間固定費([\d,]+)円/);
 const quantity=num(cvp.prompt.match(/当月販売数量は([\d,]+)個/)[1]);
 assert.ok(conditions,'CVP factors must be presented');
 const [,unitPrice,unitVariable,fixed]=conditions.map(num);
 const contribution=unitPrice-unitVariable;
 const targetProfit=num(cvp.fields.find(f=>f.id==='c5').label.match(/目標営業利益([\d,]+)円/)[1]);
 const newPrice=num(cvp.fields.find(f=>f.id==='c6').label.match(/([\d,]+)円へ変更/)[1]);
 expect(cvp.id,'c1',contribution);
 expect(cvp.id,'c2',contribution*quantity);
 expect(cvp.id,'c3',contribution*quantity-fixed);
 expect(cvp.id,'c4',fixed/contribution);
 expect(cvp.id,'c5',(fixed+targetProfit)/contribution);
 expect(cvp.id,'c6',(newPrice-unitVariable)*quantity-fixed);
}

{
 const inv=get('b3-r2-inventory'),rows=inv.tables.find(t=>t.caption.includes('商品有高帳')).rows;
 const row=date=>{const r=rows.find(r=>r[0]===date);assert.ok(r,date);return r;};
 const num=s=>Number(String(s).replace(/,/g,''));
 const layers=[];
 const accept=date=>{const r=row(date),qty=num(r[1]),total=num(r[2]);assert.ok(qty>0&&total%qty===0);layers.push({qty,unit:total/qty});};
 const issue=date=>{let remaining=num(row(date)[3]),cost=0;
   while(remaining>0){const l=layers[0];assert.ok(l&&l.qty>0,'FIFO has inventory');const used=Math.min(l.qty,remaining);
     cost+=used*l.unit;l.qty-=used;remaining-=used;if(l.qty===0)layers.shift();}
   return cost;
 };
 const balance=()=>layers.reduce((sum,l)=>sum+l.qty*l.unit,0);
 accept('4/1');accept('4/5');
 expect(inv.id,'v1',issue('4/10'));
 expect(inv.id,'v2',layers.reduce((s,l)=>s+l.qty,0));
 expect(inv.id,'v3',balance());
 accept('4/20');
 expect(inv.id,'v4',issue('4/25'));
 expect(inv.id,'v5',balance());
 assert.equal(balance(),num(row('4/25')[6].id?field(inv.id,'v5'):row('4/25')[6]));

 const voucher=get('b3-r2-vouchers');
 const source=voucher.tables.find(t=>t.caption.includes('伝票一覧')).rows;
 const debit={},credit={};
 const add=(side,account,amount)=>side[account]=(side[account]||0)+amount;
 for(const [,type,action,raw] of source){
  const amount=num(raw);
  if(type==='入金伝票'){
   add(debit,'現金',amount);
   if(action.includes('売掛金')) add(credit,'売掛金',amount);
   else if(action.includes('売上げ')) add(credit,'売上',amount);
   else throw Error('Unknown incoming voucher: '+action);
  }else if(type==='出金伝票'){
   add(credit,'現金',amount);
   if(action.includes('通信費')) add(debit,'通信費',amount);
   else if(action.includes('買掛金')) add(debit,'買掛金',amount);
   else throw Error('Unknown outgoing voucher: '+action);
  }else if(type==='振替伝票'){
   if(action.includes('仕入れ')){add(debit,'仕入',amount);add(credit,'買掛金',amount);}
   else if(action.includes('売上げ')){add(debit,'売掛金',amount);add(credit,'売上',amount);}
   else throw Error('Unknown transfer voucher: '+action);
  }else throw Error('Unknown voucher type: '+type);
 }
 expect(voucher.id,'t1',debit['現金']);
 expect(voucher.id,'t2',credit['現金']);
 expect(voucher.id,'t3',debit['売掛金']);
 expect(voucher.id,'t4',debit['仕入']);
 expect(voucher.id,'t5',credit['売上']);
 assert.equal(Object.values(debit).reduce((a,b)=>a+b,0),Object.values(credit).reduce((a,b)=>a+b,0),'voucher debit-credit conservation');
 assert.equal(Object.values(debit).reduce((a,b)=>a+b,0),415000,'source voucher total');
 const standard=get('b2-r2-standard');
 expect(standard.id,'z3',field(standard.id,'z1')+field(standard.id,'z2'));
 expect(standard.id,'z6',field(standard.id,'z4')+field(standard.id,'z5'));
 console.log('PASS: source-derived ledger, fixed assets, CVP, FIFO layers, vouchers and variance totals');
}

console.log('PASS: all 60 items/100-point forms retained; 2026-vs-2027 scope; editorial clarity, reserve limit, securities, inventory, tax-loss and independent trial/statement calculations');
