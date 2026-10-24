'use strict';
/**
 * Operational export of the existing non-certifying FLL editorial audit.
 * No new grading checks, no problem-data writes, and no review records created.
 * The export is retained as CI-only evidence; never put it in dist/.
 */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {loadQuestions, audit, questionLink} = require('./editorial-audit.cjs');
const ROOT = path.resolve(__dirname, '..');
const SEVERITY_ORDER = {'高': 3, '中': 2, '低': 1, '指摘なし': 0};
const RULES = Object.freeze({
  '設問別の根拠URL未登録': ['SOURCE_URL_MISSING', '低', 'sourceUrl'],
  '根拠資料の確認日未登録': ['SOURCE_CHECK_DATE_MISSING', '低', 'sourceCheckedDate'],
  '選択肢別解説の登録状況を確認': ['CHOICE_EXPLANATION_GAP', '低', 'choiceExplanations'],
  '法令適用の人手確認が未了（算術のみ点検）': ['LAW_REVIEW_PENDING', '高', 'verificationStatus'],
  '参照した旧資料の本文確認待ち': ['HISTORICAL_SOURCE_PENDING', '高', 'verificationStatus'],
  '根拠URLの形式不備（HTTPSを確認）': ['SOURCE_URL_FORMAT', '中', 'sourceUrl'],
  '根拠資料の確認日が不正または未来': ['SOURCE_DATE_INVALID', '高', 'sourceCheckedDate'],
  '資料確認日が法令基準日より前（適用条件を再確認）': ['SOURCE_BEFORE_LAW_DATE', '中', 'sourceCheckedDate'],
  '根拠資料の確認から1年超（更新の要否を確認）': ['SOURCE_STALE', '中', 'sourceCheckedDate'],
  '法令基準日の形式不備': ['LAW_REFERENCE_INVALID', '高', 'lawReferenceDate'],
  '資料表に正答と同額あり（転記可能性を目視確認）': ['BOOKKEEPING_ANSWER_IN_SOURCE', '中', 'tables, fields'],
  '複数の解答欄が同額（出題意図を確認）': ['BOOKKEEPING_REPEATED_AMOUNTS', '低', 'fields']
});

function issueDetail(entry, message, today) {
  const q = entry.q;
  if (message.startsWith('解答形式の要修正：')) return {
    ruleId: 'ANSWER_FORMAT_INVALID', severity: '高', message,
    evidence: 'editorial-answer-structure.cjs: ' + message.slice('解答形式の要修正：'.length)
  };
  const rule = RULES[message];
  assert.ok(rule, 'Unclassified audit reason: ' + message);
  const [ruleId, severity, field] = rule;
  let evidence;
  switch (ruleId) {
    case 'CHOICE_EXPLANATION_GAP':
      evidence = 'choices=' + (q.choices?.length ?? '未登録') + '; choiceExplanations=' + (q.choiceExplanations?.length ?? '未登録');
      break;
    case 'SOURCE_BEFORE_LAW_DATE':
      evidence = 'sourceCheckedDate=' + (q.sourceCheckedDate ?? '未登録') + '; lawReferenceDate=' + (q.lawReferenceDate ?? '未登録');
      break;
    case 'SOURCE_STALE':
    case 'SOURCE_DATE_INVALID':
      evidence = 'sourceCheckedDate=' + (q.sourceCheckedDate ?? '未登録') + '; auditDate=' + today;
      break;
    case 'BOOKKEEPING_ANSWER_IN_SOURCE':
      evidence = 'tables の入力欄以外の単独金額と fields の正答額を比較（転記の可否は未確定）';
      break;
    case 'BOOKKEEPING_REPEATED_AMOUNTS':
      evidence = 'fields の複数の正答額が一致（B/Sの資産・負債純資産の正常な一致は除外）';
      break;
    default:
      evidence = field + '=' + String(q[field] ?? '未登録').slice(0,200);
  }
  return {ruleId, severity, message, evidence};
}

function buildExport(auditResult, {today = new Date().toISOString().slice(0,10), commit = null} = {}) {
  assert.match(today, /^\d{4}-\d{2}-\d{2}$/, 'audit date must be ISO');
  const rows = auditResult.findings.map(entry => {
    const findings = entry.reasons.map(message => issueDetail(entry, message, today));
    const severity = findings.reduce((best, item) =>
      SEVERITY_ORDER[item.severity] > SEVERITY_ORDER[best] ? item.severity : best, '指摘なし');
    return {
      id: entry.id, qualification: entry.bank, form: entry.form,
      severity, priority: entry.priority, sourceUrl: questionLink(entry),
      contentHash: entry.hash, reviewStatus: entry.isReviewed ? '人手確認記録あり' : '人手確認記録なし',
      actionStatus: entry.isReviewed ? '人手確認済み（現在の問題版と照合済み）' :
        findings.length ? '要確認（自動検出・誤り未確定）' : '自動指摘なし（人手確認未了）',
      findings
    };
  });
  // A stable, complete queue enables comparison by ID and contentHash between runs.
  rows.sort((a,b) =>
    Number(b.actionStatus.startsWith('要確認')) - Number(a.actionStatus.startsWith('要確認')) ||
    SEVERITY_ORDER[b.severity] - SEVERITY_ORDER[a.severity] ||
    b.priority - a.priority || a.qualification.localeCompare(b.qualification, 'ja') || a.id.localeCompare(b.id));
  assert.equal(rows.length, 660, 'export must include all FP and bookkeeping questions');
  assert.equal(new Set(rows.map(row => row.id)).size, rows.length, 'export IDs must be unique');
  return {
    schemaVersion: 1, auditDate: today, commit: commit && /^[a-f0-9]{40}$/.test(commit) ? commit : null,
    disclaimer: '自動監査の確認候補であり、正答の保証・人手による専門家監修の完了証明ではありません。',
    counts: auditResult.counts, humanReviewedCount: auditResult.reviewedCount,
    flaggedCount: auditResult.flagged.length, rows
  };
}

const COLUMNS = ['id','qualification','form','severity','priority','ruleId','finding','evidence','actionStatus','reviewStatus','sourceUrl','contentHash'];
function csvCell(value) {
  const raw = String(value ?? '');
  // Defend spreadsheet users from CSV formula injection when evidence changes.
  const safe = /^[\s]*[=+\-@]/.test(raw) ? "'" + raw : raw;
  return '"' + safe.replace(/"/g, '""') + '"';
}
function renderCsv(report) {
  const lines = [COLUMNS.map(csvCell).join(',')];
  for (const row of report.rows) {
    const issues = row.findings.length ? row.findings : [{ruleId:'NO_MACHINE_FINDING',message:'機械的指摘なし',evidence:'専門家確認済みという意味ではありません'}];
    for (const issue of issues) {
      const record = {...row, ruleId:issue.ruleId, finding:issue.message, evidence:issue.evidence};
      lines.push(COLUMNS.map(key => csvCell(record[key])).join(','));
    }
  }
  return '\ufeff' + lines.join('\r\n') + '\r\n'; // UTF-8 BOM for iPhone/Excel Japanese display.
}
function writeExport(report, directory) {
  const out = path.resolve(directory);
  const dist = path.resolve(ROOT, 'dist');
  assert.ok(out !== dist && !out.startsWith(dist + path.sep), 'Never export audit materials into dist');
  fs.mkdirSync(out, {recursive:true});
  const json = path.join(out, 'fll-editorial-audit.json');
  const csv = path.join(out, 'fll-editorial-audit.csv');
  fs.writeFileSync(json, JSON.stringify(report, null, 2) + '\n');
  fs.writeFileSync(csv, renderCsv(report));
  return {json, csv};
}
function main() {
  const arg = process.argv.find(s => s.startsWith('--out-dir='));
  assert.ok(arg && arg.slice(10), 'Usage: node .ci/editorial-audit-export.cjs --out-dir=/path/to/reports');
  const reviewRecords = JSON.parse(fs.readFileSync(path.join(ROOT, 'EDITORIAL_REVIEW_RECORDS.json'), 'utf8'));
  const result = audit(loadQuestions(), reviewRecords);
  const exportData = buildExport(result, {commit:process.env.GITHUB_SHA});
  const files = writeExport(exportData, arg.slice(10));
  console.log('PASS: exported ' + exportData.rows.length + ' questions, ' + exportData.flaggedCount + ' candidates. Human review records: ' + exportData.humanReviewedCount + '.');
  console.log(files.json + '\n' + files.csv);
}
if (require.main === module) main();
module.exports = {issueDetail, buildExport, renderCsv, csvCell, writeExport};
