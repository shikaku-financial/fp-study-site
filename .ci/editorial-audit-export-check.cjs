'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const {loadQuestions, audit, fingerprint, reasonsFor} = require('./editorial-audit.cjs');
const {issueDetail, buildExport, renderCsv, csvCell, writeExport} = require('./editorial-audit-export.cjs');

const entries = loadQuestions();
const records = {schemaVersion:1, records:[]};
const date = '2026-10-24';
const auditResult = audit(entries, records, {today:date});
const exported = buildExport(auditResult, {today:date, commit:'a'.repeat(40)});
assert.equal(exported.schemaVersion, 1);
assert.equal(exported.rows.length, 660);
assert.equal(exported.counts.academic, 360);
assert.equal(exported.counts.practical, 240);
assert.equal(exported.counts.bookkeeping, 60);
assert.equal(exported.humanReviewedCount, 0);
assert.equal(exported.flaggedCount, auditResult.flagged.length);
assert.equal(exported.commit, 'a'.repeat(40));
assert.equal(new Set(exported.rows.map(x=>x.id)).size, 660);
assert.deepEqual(new Set(exported.rows.map(x=>x.id)), new Set(entries.map(x=>x.id)));
assert.ok(exported.rows.every(x=>/^[a-f0-9]{64}$/.test(x.contentHash)));
assert.ok(exported.rows.every(x=>x.reviewStatus==='人手確認記録なし'));
assert.ok(exported.rows.every(x=>/github.com\/shikaku-financial\/fp-study-site\/blob\//.test(x.sourceUrl)));
assert.ok(exported.rows.every(x=>['高','中','低','指摘なし'].includes(x.severity)));
assert.ok(exported.rows.every(x=>x.findings.every(f=>f.ruleId&&f.severity&&f.message&&f.evidence)),'every finding must carry specific evidence');
// Current FP data is clean for these gap categories; verify the detector against
// injected problems instead of requiring real educational errors to exist.
assert.equal(exported.rows.filter(x=>x.qualification==='FP学科'&&x.findings.length>0).length,0,'real academic findings have been addressed');
const syntheticGap=entries.find(e=>e.bank==='FP学科');
const injected={...syntheticGap,q:{...syntheticGap.q,sourceUrl:'',sourceCheckedDate:null,verificationStatus:'arithmetic_reviewed_law_not_audited'}};
const reasons=reasonsFor(injected,{today:date});
for(const [reason,rule] of [['法令適用の人手確認が未了（算術のみ点検）','LAW_REVIEW_PENDING'],['設問別の根拠URL未登録','SOURCE_URL_MISSING'],['根拠資料の確認日未登録','SOURCE_CHECK_DATE_MISSING']]){
 assert.ok(reasons.includes(reason),'mutation must produce '+rule);
 assert.equal(issueDetail(injected,reason,date).ruleId,rule,'exporter retains '+rule+' mapping');
}
assert.ok(exported.rows.some(x=>x.actionStatus.startsWith('要確認')));
assert.ok(exported.disclaimer.includes('人手'));
const first = exported.rows[0];
assert.ok(first.actionStatus.startsWith('要確認'),'review queue must precede non-flagged entries');
assert.deepEqual(buildExport(auditResult,{today:date}).rows.map(x=>x.id), exported.rows.map(x=>x.id),'queue order deterministic');
const synthetic = {bank:'FP学科',q:{verificationStatus:'arithmetic_reviewed_law_not_audited',sourceCheckedDate:'2026-03-31',lawReferenceDate:'2026-04-01'}};
assert.deepEqual(issueDetail(synthetic,'法令適用の人手確認が未了（算術のみ点検）',date),
 {ruleId:'LAW_REVIEW_PENDING',severity:'高',message:'法令適用の人手確認が未了（算術のみ点検）',evidence:'verificationStatus=arithmetic_reviewed_law_not_audited'});
assert.match(issueDetail(synthetic,'資料確認日が法令基準日より前（適用条件を再確認）',date).evidence,/2026-03-31.*2026-04-01/);
assert.throws(()=>issueDetail(synthetic,'未知の理由',date),/Unclassified/,'new audit reasons must be mapped explicitly');
assert.equal(csvCell('=2+2'),"\"'=2+2\"");
assert.equal(csvCell(' foo \"bar\"'),'" foo ""bar"""');
assert.equal(csvCell('@SUM(1)'),"\"'@SUM(1)\"");
const csv = renderCsv(exported);
assert.equal(csv.charCodeAt(0), 0xfeff,'Excel-compatible UTF-8 BOM');
assert.ok(csv.includes('BOOKKEEPING_ANSWER_IN_SOURCE')||csv.includes('BOOKKEEPING_REPEATED_AMOUNTS')||csv.includes('SOURCE_URL_MISSING'),'CSV contains actual findings');
assert.ok(csv.split('\r\n').length >= 662,'CSV contains header and at least one row per problem');
assert.ok(!csv.includes('<script'),'CSV cannot include HTML markup from problem text');

const sample = entries[0];
const humanReview = {id:sample.id, status:'verified', contentHash:fingerprint(sample.q), checkedOn:date, reviewer:'運営者', references:['https://example.org/primary']};
const reviewed = audit(entries,{schemaVersion:1,records:[humanReview]},{today:date});
const reviewedExport = buildExport(reviewed,{today:date});
assert.equal(reviewedExport.humanReviewedCount,1);
assert.equal(reviewedExport.rows.filter(r=>r.reviewStatus==='人手確認記録あり').length,1);
assert.equal(reviewedExport.rows.find(r=>r.id===sample.id).actionStatus,'人手確認済み（現在の問題版と照合済み）');
assert.equal(exported.rows.find(r=>r.id===sample.id).reviewStatus,'人手確認記録なし','synthetic review must not mutate the real records');

const temp = fs.mkdtempSync(path.join(os.tmpdir(),'fll-editorial-'));
try {
 const files = writeExport(exported,temp);
 assert.equal(JSON.parse(fs.readFileSync(files.json,'utf8')).rows.length,660);
 assert.equal(fs.readFileSync(files.csv,'utf8'),csv);
 assert.throws(()=>writeExport(exported,path.resolve(__dirname,'../dist/audit')),/Never export/);
} finally {fs.rmSync(temp,{recursive:true,force:true});}
console.log('PASS: 660-question complete editorial export, structured issue evidence, reviewer status, deterministic triage, CSV safety and dist exclusion.');
