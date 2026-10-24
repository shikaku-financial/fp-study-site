'use strict';
const assert=require('node:assert/strict');
const {loadQuestions,fingerprint,reasonsFor,audit,renderMarkdown,questionLink,displayAnswer,renderReviewPacket,selectReviewEntries}=require('./editorial-audit.cjs');
const all=loadQuestions();
assert.equal(all.length,660,'360 academic + 240 practical + 60 bookkeeping');
assert.equal(all.filter(q=>q.bank==='FP学科').length,360);
assert.equal(all.filter(q=>q.bank==='FP実技').length,240);
assert.equal(all.filter(q=>q.bank.startsWith('簿記')).length,60);
// Answer keys are validated with separate rules for academic, numeric and multi-field exams.
const {structureIssues,checkChoices,checkNumeric}=require('./editorial-answer-structure.cjs');
assert.equal(all.flatMap(q=>structureIssues(q)).length,0,'all 600 FP questions have structurally valid answers');
const academic=all.find(e=>e.bank==='FP学科');
const practical=all.find(e=>e.bank==='FP実技'&&e.q.kind==='choice');
const numeric=all.find(e=>e.bank==='FP実技'&&e.q.kind==='numeric');
const multiple=all.find(e=>e.bank==='FP実技'&&e.q.kind==='multi_choice');
const wordbank=all.find(e=>e.bank==='FP実技'&&e.q.kind==='wordbank_number');
assert.ok(academic&&practical&&numeric&&multiple&&wordbank,'all FP formats exist');
assert.deepEqual(checkChoices(['○','×'],0,'test'),[]);
assert.ok(checkChoices([' A','Ａ '],0,'test').some(m=>m.includes('重複')),'NFKC equivalent options detected');
assert.ok(checkChoices(['ア','イ'],2,'test').some(m=>m.includes('範囲外')),'out-of-range answer rejected');
assert.ok(checkNumeric(Infinity,'test').some(m=>m.includes('不正')),'nonfinite answer rejected');
assert.ok(structureIssues({...academic,q:{...academic.q,answer:99}}).some(s=>s.includes('範囲外')),'academic answer-range mutation detected');
assert.ok(structureIssues({...academic,q:{...academic.q,lawReferenceDate:'2025-04-01'}}).some(s=>s.includes('法令基準日')),'academic law date mutation detected');
assert.ok(structureIssues({...practical,q:{...practical.q,choices:[...practical.q.choices.slice(0,-1),practical.q.choices[0]]}}).some(s=>s.includes('重複')),'choice repetition mutation detected');
assert.ok(structureIssues({...numeric,q:{...numeric.q,answer:NaN}}).some(s=>s.includes('数値')),'numeric answer mutation detected');
assert.ok(structureIssues({...multiple,q:{...multiple.q,subAnswers:multiple.q.subAnswers.map((x,i)=>i===0?{...x,answer:x.choices.length}:x)}}).some(s=>s.includes('範囲外')),'multi-choice sub-answer mutation detected');
assert.ok(structureIssues({...wordbank,q:{...wordbank.q,subAnswers:wordbank.q.subAnswers.map((x,i)=>i===0?{...x,answer:0}:x)}}).some(s=>s.includes('1始まり')),'wordbank one-based answer contract enforced');
const mutated=all.map(e=>e===academic?{...academic,q:{...academic.q,answer:99}}:e);
assert.throws(()=>audit(mutated,{schemaVersion:1,records:[]}),/answer contract must be corrected/,'invalid answer blocks review and deployment');
const r=audit(all,{schemaVersion:1,records:[]});
assert.equal(r.reviewedCount,0,'no human reviews may be fabricated');
assert.equal(r.findings.length,660);
assert.ok(r.flagged.length>0,'real pending review candidates should be visible');
assert.ok(r.flagged.some(e=>e.reasons.includes('根拠資料の確認日未登録')));
assert.ok(r.flagged.some(e=>e.reasons.includes('設問別の根拠URL未登録')));
assert.ok(r.flagged.every(e=>!e.isReviewed));
const report=renderMarkdown(r,{limit:8});
assert.ok(report.includes('660')&&report.includes('0/660')&&report.includes('専門家による人手監修ではありません'));
assert.equal((report.match(/^\| \[\`(?:fp|pr|b)/gm)||[]).length,8,'summary list respects size cap');
assert.match(report,/github.com\/shikaku-financial\/fp-study-site\/blob\//,'source code anchor shown in report');
const mixed={...r,flagged:[...r.flagged.slice(0,8),{...all.find(e=>e.id==='b2-financial'),reasons:['要確認'],priority:1,isReviewed:false}]};
assert.match(renderMarkdown(mixed,{limit:8}),/b2-financial/,'bookkeeping issue must remain visible despite larger FP backlog');
assert.match(report,/FP学科の要確認候補/);
assert.match(report,/簿記2級の要確認候補/);
const target=all.find(e=>e.id==='fp2-001');
assert.match(questionLink(target),/^https:\/\/github.com\/shikaku-financial\/fp-study-site\/blob\/.+\/questions\.js#L\d+$/);
assert.ok(!report.includes('<script'),'markdown data must be sanitized');
const mk=(id,q)=>({bank:'FP学科',form:'学科',id,q});
const example={id:'sample001',question:'A',format:'true_false',lawReferenceDate:'2026-04-01',choices:['甲','乙'],answer:0,explanation:'Aについて',sourceUrl:'https://example.org/a',sourceCheckedDate:'2026-10-01'};
assert.deepEqual(reasonsFor(mk(example.id,example)),['選択肢別解説の登録状況を確認']);
const edited={...example,question:'B'};
assert.notEqual(fingerprint(example),fingerprint(edited),'changing question invalidates supervision hash');
const sourceOnly={...example,sourceUrl:undefined};
assert.ok(reasonsFor(mk(example.id,sourceOnly)).includes('設問別の根拠URL未登録'));

// New triage ranks explicitly pending law/source reviews above missing metadata.
const flagsFor=(q,today='2026-10-24')=>reasonsFor(mk(q.id||'sample001',q),{today});
assert.ok(flagsFor({...example,verificationStatus:'arithmetic_reviewed_law_not_audited'}).includes('法令適用の人手確認が未了（算術のみ点検）'));
assert.ok(flagsFor({...example,verificationStatus:'selected_points_checked_historical_full_text_pending'}).includes('参照した旧資料の本文確認待ち'));
assert.ok(flagsFor({...example,sourceUrl:'http://insecure.example/a'}).includes('根拠URLの形式不備（HTTPSを確認）'));
assert.ok(flagsFor({...example,sourceCheckedDate:'2026-11-01'}).includes('根拠資料の確認日が不正または未来'));
assert.ok(flagsFor({...example,sourceCheckedDate:'2026-02-31'}).includes('根拠資料の確認日が不正または未来'));
assert.ok(flagsFor({...example,sourceCheckedDate:'2026-03-01',lawReferenceDate:'2026-04-01'}).includes('資料確認日が法令基準日より前（適用条件を再確認）'));
assert.ok(flagsFor({...example,sourceCheckedDate:'2024-09-01'}).includes('根拠資料の確認から1年超（更新の要否を確認）'));
assert.ok(!flagsFor({...example,sourceCheckedDate:'2025-10-24'}).includes('根拠資料の確認から1年超（更新の要否を確認）'),'exactly 365 days is not older than a year');
assert.ok(flagsFor({...example,lawReferenceDate:'2026-02-31'}).includes('法令基準日の形式不備'));
assert.ok(!flagsFor({...example,lawReferenceDate:'2026-04-01'}).some(x=>/確認日が不正|1年超|基準日より前/.test(x)),'valid recent references not treated as stale');
assert.throws(()=>reasonsFor(mk(example.id,example),{today:'2026-02-31'}),/reference date must be valid/);
const risks=audit(all,{schemaVersion:1,records:[]},{today:'2026-10-24'});
const datedRisk=risks.flagged.find(f=>f.reasons.includes('参照した旧資料の本文確認待ち'));
assert.ok(datedRisk&&datedRisk.priority>=7,'outstanding original source-text review receives a high-priority weight');
assert.deepEqual(flagsFor({...example,sourceUrl:undefined,choiceExplanations:['甲','乙']}),['設問別の根拠URL未登録'],'plain metadata gap remains distinct from law verification');
assert.match(renderMarkdown(risks,{limit:8}),/法令適用・旧資料本文の未確認/);
const boki={id:'b2-test',type:'table',fields:[{id:'f1',answer:100},{id:'f2',answer:100}],tables:[{caption:'資料',rows:[['売上','100']]},{caption:'解答',rows:[['売上',{id:'f1'}],['原価',{id:'f2'}]]}]};
const bokiFlags=reasonsFor({bank:'簿記2級',form:'第1回',id:boki.id,q:boki});
assert.ok(bokiFlags.includes('資料表に正答と同額あり（転記可能性を目視確認）'));
assert.ok(bokiFlags.includes('複数の解答欄が同額（出題意図を確認）'));
assert.deepEqual(reasonsFor({bank:'簿記2級',form:'第1回',id:'safe',q:{...boki,fields:[{id:'f1',answer:300},{id:'f2',answer:400}]}}),[]);
// The real bookkeeping source tables frequently print currency with a suffix.
// Match a full monetary cell but not composite rates, multiplication, or dates.
const currencyCase={id:'currency-sample',type:'table',
 fields:[{id:'amount',label:'売上高',answer:100000}],
 tables:[{caption:'問題資料',rows:[['期首','100,000円']]},
  {caption:'解答欄',rows:[['売上高',{id:'amount'}]]}]};
const currencyEntry=q=>({bank:'簿記2級',form:'第1回',id:'currency-sample',q});
assert.ok(reasonsFor(currencyEntry(currencyCase)).includes('資料表に正答と同額あり（転記可能性を目視確認）'),'100,000円 must be compared as 100000');
for(const literal of ['100,000 円','100000円','100000','100,000']){
 assert.ok(reasonsFor(currencyEntry({...currencyCase,tables:[{caption:'資料',rows:[['残高',literal]]},currencyCase.tables[1]]})).includes('資料表に正答と同額あり（転記可能性を目視確認）'),'full monetary source cell '+literal);
}
for(const literal of ['100,000円/個','100,000×2','1,00,000円','2026/10/24']){
 assert.ok(!reasonsFor(currencyEntry({...currencyCase,tables:[{caption:'資料',rows:[['参考',literal]]},currencyCase.tables[1]]})).includes('資料表に正答と同額あり（転記可能性を目視確認）'),'compound/malformed source must not become a comparable amount '+literal);
}
const bsTotals={...boki,fields:[
 {id:'a',label:'資産合計',answer:5546000},
 {id:'b',label:'負債・純資産合計',answer:5546000}
 ],tables:[{caption:'決算整理前残高試算表',rows:[['現金','100']]},{caption:'貸借対照表',rows:[['資産合計',{id:'a'},'負債・純資産合計',{id:'b'}]]}]};
assert.deepEqual(reasonsFor({bank:'簿記2級',form:'第1回',id:'balanced',q:bsTotals}),[],'B/S identity must not be flagged as duplicate');
const coincidental={...bsTotals,fields:[...bsTotals.fields,{id:'c',label:'その他費用',answer:5546000}]};
assert.ok(reasonsFor({bank:'簿記2級',form:'第1回',id:'accidental',q:coincidental}).includes('複数の解答欄が同額（出題意図を確認）'),'unrelated coincident amounts must still flag');
assert.ok(!r.flagged.some(x=>x.id==='b2-financial'),'corrected tax payable and normal B/S identity must no longer be flagged');

const valid={id:all[0].id,status:'verified',contentHash:fingerprint(all[0].q),checkedOn:'2026-10-24',reviewer:'運営者',references:['https://example.org/cited-primary-source']};
assert.equal(audit(all,{schemaVersion:1,records:[valid]}).reviewedCount,1);
assert.throws(()=>audit(all,{schemaVersion:1,records:[{...valid,contentHash:fingerprint({...all[0].q,explanation:'new explanation'})}]}),/content changed/);
assert.throws(()=>audit(all,{schemaVersion:1,records:[{...valid,references:[]}]}),/HTTPS references/);
assert.throws(()=>audit(all,{schemaVersion:1,records:[valid,valid]}),/duplicate review/);
assert.throws(()=>audit(all,{schemaVersion:1,records:[{...valid,id:'missing'}]}),/unknown question/);
assert.throws(()=>audit(all,{schemaVersion:1,records:[{...valid,checkedOn:'2026-02-31'}]}),/invalid review date/);
assert.throws(()=>audit(all,{schemaVersion:1,records:[{...valid,checkedOn:'2999-01-01'}]}),/cannot be in the future/,'review dates may not falsely be set in the future');

// A review preview helps the human see the existing answer, not mark it as reviewed.
const packet=renderReviewPacket(r,{limit:8});
assert.match(packet,/設問・解説プレビュー/);
assert.match(packet,/未監修/);
assert.match(packet,/登録済み正答（未検証）/);
assert.match(packet,/現行問題データのSHA-256/);
assert.match(packet,/github.com\/shikaku-financial\/fp-study-site\/blob\//);
assert.equal((packet.match(/^### \[/gm)||[]).length,8,'review preview has a strict size limit');
const packetIds=selectReviewEntries(r.flagged,8).map(x=>x.id);
assert.equal(new Set(packetIds).size,8,'preview uses distinct ID per entry');
assert.deepEqual(selectReviewEntries(r.flagged,8).map(x=>x.id),packetIds,'preview selection deterministic');
assert.ok(!packet.includes('<script'),'untrusted HTML must not render');
assert.equal(displayAnswer({choices:['ア','イ'],answer:1}),'選択肢2：イ');
assert.match(displayAnswer({subAnswers:[{label:'①',answer:0,choices:['○','×']},{label:'②',answer:250,unit:'円'}]}),/②：250 円/);
assert.match(displayAnswer({subAnswers:[{label:'③',answer:1,wordBank:['甲','乙']}]}),/語群：甲/,'word-bank keys start at 1, first symbol is 甲');
assert.match(displayAnswer({subAnswers:[{label:'③',answer:2,wordBank:['甲','乙']}]}),/語群：乙/,'last word-bank symbol selects 乙');
const liveWordbankSub=wordbank.q.subAnswers.find(sub=>Array.isArray(sub.wordBank));
assert.ok(liveWordbankSub&&liveWordbankSub.answer>=1,'a real 1-based FP word-bank answer exists');
assert.ok(displayAnswer({subAnswers:[liveWordbankSub]}).includes('語群：'+liveWordbankSub.wordBank[liveWordbankSub.answer-1]),'real word-bank preview displays the keyed correct option');
assert.match(displayAnswer({fields:[{id:'f1',label:'売上高',answer:100}]}),/売上高：100/);
assert.match(displayAnswer({type:'journal',debit:[['現金',100]],credit:[['売上',100]]}),/借方 現金 100/);
const dangerous={...r,flagged:[{...r.flagged[0],q:{question:'<script>alert(1)</script>',explanation:'<iframe src=bad>',answer:12,sourceUrl:'https://example.org/ref'},hash:fingerprint({question:'<script>alert(1)</script>'})}]};
const safePacket=renderReviewPacket(dangerous,{limit:1});
assert.ok(!safePacket.includes('<script')&&!safePacket.includes('<iframe'),'review excerpt cannot inject HTML');
assert.ok(!safePacket.includes('監修完了です'),'preview must never attest a human review');
assert.equal(renderReviewPacket({...r,flagged:[]},{limit:8}).match(/候補はありません/g)?.length,1,'empty queue is handled');
assert.throws(()=>renderReviewPacket(r,{limit:0}),/limit/);

// Scope-limited official cross-checks, never human expert certification.
// Academic and practical formats use 0-based answer indexes, including true/false.
{
 const cases=[
  ['fp2-162','https://laws.e-gov.go.jp/law/129AC0000000089?occasion_date=20260401','300万円',/民法第557条第1項.*150万円.*300万円.*450万円/s],
  ['fp3-168','https://laws.e-gov.go.jp/law/129AC0000000089?occasion_date=20260401','200万円',/民法第557条第1項.*100万円.*200万円.*300万円/s],
  ['fp2-163','https://www.mlit.go.jp/jutakukentiku/house/jutakukentiku_house_tk3_000060.html',null,/借地借家法第38条第1項.*第29条第1項.*事前|借地借家法第38条第1項.*第29条第1項.*契約前/s],
  ['fp3-162','https://www.mlit.go.jp/jutakukentiku/house/jutakukentiku_house_tk3_000060.html','〇 正しい',/借地借家法第38条第1項.*第29条第1項.*契約前/s],
  ['fp2-166','https://laws.e-gov.go.jp/law/337AC0000000069?occasion_date=20260401','毎年1回',/第34条第2項.*毎年1回.*下限/s],
  ['fp3-169','https://laws.e-gov.go.jp/law/337AC0000000069?occasion_date=20260401','年に1回',/第34条第2項.*毎年1回.*下限/s]
 ];
 for(const [id,primary,correct,pattern] of cases){
  const record=all.find(x=>x.id===id);
  assert.ok(record,id+' still in academic question bank');
  const q=record.q;
  assert.equal(q.lawReferenceDate,'2026-04-01',id+' law baseline retained');
  assert.equal(q.sourceUrl,primary,id+' official reference');
  assert.ok(/^https:\/\//.test(primary));
  assert.ok(q.additionalSourceUrls?.length>0&&q.additionalSourceUrls.every(url=>url.startsWith('https://')),id+' retains supplementary sources');
  assert.equal(q.verificationStatus,'ai_scoped_primary_rule_checked_human_review_pending',id+' is AI-supported only');
  assert.match(q.reviewNote,/人手監修は未了/,id+' human review must remain pending');
  assert.match(q.explanation,pattern,id+' teaches the source-specific distinction');
  assert.ok(!reasonsFor(record,{today:'2026-10-24'}).includes('参照した旧資料の本文確認待ち'),id+' scoped check resolves only its historical source flag');
  if(correct!==null)assert.equal(q.choices[q.answer],correct,id+' correct answer preserved');
 }
 for(const id of ['fp2-163','fp3-162']){
  const q=all.find(x=>x.id===id).q;
  assert.match(q.explanation,/1年未満なら満了の終了通知は不要/,id+' short-term tenancy notice distinction');
  assert.match(q.explanation,/契約前の説明義務まで免除されるわけではありません/,id+' safeguards statutory pre-contract explanation');
 }
 const mortgage=all.find(x=>x.id==='fp2-114');
 assert.ok(mortgage&&reasonsFor(mortgage,{today:'2026-10-24'}).includes('法令適用の人手確認が未了（算術のみ点検）'),
  'unrelated arithmetic-only questions must not be falsely certified by this limited review');
 const after=audit(all,{schemaVersion:1,records:[]},{today:'2026-10-24'});
 assert.equal(after.reviewedCount,0,'no human review records added by source investigation');
 assert.equal(after.flagged.length,44,'five more historical source issues resolved; other 44 editorial candidates remain');
}
console.log('PASS: six property-law question pairs have current primary citations, tested rule contrasts and no fabricated human review.');

// Registration, agricultural conversion and licensed property disclosure: scoped 2026-04-01 baseline.
// Content review is AI-assisted. The 660-question human review register must remain untouched.
{
 const registration=[
  ['fp2-104',0,/甲区.*所有権.*乙区.*抵当権.*地役権.*地目・地積.*表題部/s],
  ['fp3-083',0,/抵当権.*乙区.*甲区.*表題部/s]
 ];
 const farmland=[
  ['fp2-167',1,/農地法第4条.*自己転用.*あらかじめ.*農業委員会.*第5条/s],
  ['fp3-163',0,/農地法第4条.*あらかじめ.*届出.*第5条/s]
 ];
 const disclosure=[
  ['fp3-164',1,/第35条第1項.*契約成立.*宅地建物取引士.*買主.*第37条/s]
 ];
 const expectedRoot={
  'fp2-104':'https://www.moj.go.jp/MINJI/minji02',
  'fp3-083':'https://www.moj.go.jp/MINJI/minji02',
  'fp2-167':'https://www.maff.go.jp/j/nousin/noukei/totiriyo/ihan_tenyo.html',
  'fp3-163':'https://www.maff.go.jp/j/nousin/noukei/totiriyo/ihan_tenyo.html',
  'fp3-164':'https://www.mlit.go.jp/totikensangyo/const/1_6_bt_000268.html'
 };
 for(const [id,answer,pattern] of [...registration,...farmland,...disclosure]){
  const record=all.find(e=>e.id===id);
  assert.ok(record && record.bank==='FP学科',id+' is a published academic item');
  const q=record.q;
  assert.equal(q.answer,answer,id+' original keyed answer remains unchanged');
  assert.equal(q.lawReferenceDate,'2026-04-01',id+' baseline remains fixed');
  assert.equal(q.sourceCheckedDate,'2026-10-24',id+' accurate date of AI-assisted research');
  assert.equal(q.sourceUrl,expectedRoot[id],id+' official source link');
  assert.ok(Array.isArray(q.additionalSourceUrls)&&q.additionalSourceUrls.every(u=>/^https:\/\//.test(u)),id+' supplemental official links');
  assert.equal(q.verificationStatus,'ai_scoped_primary_rule_checked_human_review_pending',id+' not human reviewed');
  assert.match(q.reviewNote,/人手監修は未了/,id+' retains disclosure of verification limit');
  assert.match(q.explanation,pattern,id+' teaches applicable legal distinction');
  assert.ok(!reasonsFor(record,{today:'2026-10-24'}).includes('参照した旧資料の本文確認待ち'),
   id+' replaces missing old source text with scoped primary guidance');
  assert.equal(structureIssues(record).length,0,id+' answer contract unchanged');
 }
 const afterFive=audit(all,{schemaVersion:1,records:[]},{today:'2026-10-24'});
 assert.equal(afterFive.reviewedCount,0,'automated legal citations must not certify human review');
 assert.equal(afterFive.flagged.length,44,'five scoped legal items removed from prior 49-candidate queue');
 assert.ok(afterFive.flagged.some(e=>e.id==='fp2-114'),'unrelated arithmetic/legal item still pending');
 assert.ok(afterFive.flagged.some(e=>e.id==='b3-ledger'),'bookkeeping follow-up remains pending');
}
console.log('PASS: five FP legal cases use official guidance, original answer keys, scoped AI audit status and zero human certification.');

console.log('PASS: 660 records, time-aware evidence freshness and source review priority, 600 FP answer contracts, mutational guards, reviewer-ready previews, source hashes and honest human review boundary.');
