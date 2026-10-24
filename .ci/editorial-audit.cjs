'use strict';
/**
 * Editorial triage only: flags data gaps and repeated amounts; it NEVER certifies
 * accounting accuracy, legal compliance, or human expert supervision.
 * This file and its reports are development-only, not published to the site.
 */
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const crypto=require('node:crypto');
const assert=require('node:assert/strict');
const {structureIssues}=require('./editorial-answer-structure.cjs');
const root=path.resolve(__dirname,'..');
const read=name=>fs.readFileSync(path.join(root,name),'utf8');

function loadQuestions(){
 const context=vm.createContext({});
 for(const file of ['questions.js','practical-questions.js','boki-data.js','boki-extra.js']){
  new vm.Script(read(file),{filename:file}).runInContext(context,{timeout:5000});
 }
 const data=JSON.parse(vm.runInContext(
  'JSON.stringify({academic:QUESTIONS,practical:PRACTICAL_QUESTIONS,boki:BOKI_DATA})',
  context,{timeout:5000}));
 const entries=[];
 for(const q of data.academic)entries.push({bank:'FP学科',form:'学科',id:q.id,q});
 for(const q of data.practical)entries.push({bank:'FP実技',form:q.track,id:q.id,q});
 for(const level of ['3','2']){
  const variants=[['第1回',data.boki[level]],['第2回',data.boki[level].forms?.['2']]];
  for(const [form,exam] of variants){
   assert.ok(exam&&Array.isArray(exam.sections),'missing bookkeeping exam '+level+form);
   for(const sec of exam.sections)for(const q of sec.items){
    entries.push({bank:'簿記'+level+'級',form,id:q.id,q});
   }
  }
 }
 return entries;
}

function fingerprint(q){
 return crypto.createHash('sha256').update(JSON.stringify(q)).digest('hex');
}
function numericText(value){
 if(typeof value!=='string')return null;
 const s=value.trim();
 if(!/^[0-9][0-9,]*$/.test(s))return null;
 return Number(s.replace(/,/g,''));
}

function reasonsFor(e){
 const {q,bank}=e;
 const findings=[];
 findings.push(...structureIssues(e).map(issue=>'解答形式の要修正：'+issue));
 if(bank==='FP学科'){
  if(!q.sourceUrl)findings.push('設問別の根拠URL未登録');
  if(!q.sourceCheckedDate)findings.push('根拠資料の確認日未登録');
  if(Array.isArray(q.choices)&&(!Array.isArray(q.choiceExplanations)||q.choiceExplanations.length!==q.choices.length)){
   findings.push('選択肢別解説の登録状況を確認');
  }
 }
 if(bank==='FP実技'){
  if(!q.sourceUrl)findings.push('設問別の根拠URL未登録');
  if(!q.sourceCheckedDate)findings.push('根拠資料の確認日未登録');
  if(q.kind==='choice'&&Array.isArray(q.choices)&&(!Array.isArray(q.choiceExplanations)||q.choiceExplanations.length!==q.choices.length)){
   findings.push('選択肢別解説の登録状況を確認');
  }
 }
 if(bank.startsWith('簿記')&&q.type==='table'){
  const sourceTables=(q.tables||[]).filter(t=>!(t.rows||[]).some(row=>row.some(cell=>cell&&typeof cell==='object'&&'id'in cell)));
  const sourceNumbers=new Set(sourceTables.flatMap(t=>t.rows.flat()).map(numericText).filter(Number.isFinite));
  const leaked=(q.fields||[]).filter(f=>typeof f.answer==='number'&&sourceNumbers.has(f.answer));
  if(leaked.length)findings.push('資料表に正答と同額あり（転記可能性を目視確認）');
  // A balance sheet intentionally asks for equal asset and liability/equity totals.
  // Do not suppress any other repeated answer amount.
  const sameByAmount=new Map();
  for(const f of q.fields||[])if(typeof f.answer==='number'){
   const group=sameByAmount.get(f.answer)||[];
   group.push(f);
   sameByAmount.set(f.answer,group);
  }
  const isBalanceIdentity=group=>group.length===2&&
   group.some(f=>/資産合計/.test(f.label||''))&&
   group.some(f=>/負債・純資産合計/.test(f.label||''));
  if([...sameByAmount.values()].some(group=>group.length>1&&!isBalanceIdentity(group))){
   findings.push('複数の解答欄が同額（出題意図を確認）');
  }
 }
 return findings;
}
function audit(entries,records){
 assert.equal(entries.length,660,'unexpected FP/Boki question count');
 const broken=entries.flatMap(e=>structureIssues(e).map(issue=>e.id+'：'+issue));
 assert.equal(broken.length,0,'FP answer contract must be corrected before publication: '+broken.slice(0,8).join(' / '));
 const ids=new Set();
 for(const e of entries){
  assert.match(e.id,/^[a-z0-9_-]+$/i);
  assert.ok(!ids.has(e.id),'duplicate question ID '+e.id);
  ids.add(e.id);
 }
 assert.equal(records.schemaVersion,1,'review record schema must be 1');
 assert.ok(Array.isArray(records.records),'review records must be a list');
 const byId=new Map(entries.map(e=>[e.id,e]));
 const reviewed=new Set();
 for(const record of records.records){
  assert.ok(record&&typeof record==='object','malformed human review entry');
  assert.ok(byId.has(record.id),'review refers to unknown question '+record.id);
  assert.ok(!reviewed.has(record.id),'duplicate review '+record.id);
  assert.equal(record.status,'verified','only a confirmed human review may be recorded');
  assert.match(record.checkedOn||'',/^\d{4}-\d{2}-\d{2}$/,'review date required');
  assert.equal(new Date(record.checkedOn).toISOString().slice(0,10),record.checkedOn,'invalid review date');
  assert.ok(typeof record.reviewer==='string'&&record.reviewer.trim().length>0,'reviewer required');
  assert.ok(Array.isArray(record.references)&&record.references.length>0&&record.references.every(url=>typeof url==='string'&&/^https:\/\//.test(url)),'human review must list consulted HTTPS references');
  assert.match(record.contentHash||'',/^[a-f0-9]{64}$/,'content fingerprint required');
  assert.equal(record.contentHash,fingerprint(byId.get(record.id).q),'content changed: human review is no longer valid for '+record.id);
  reviewed.add(record.id);
 }
 const findings=entries.map(e=>{
  const reasons=reasonsFor(e),isReviewed=reviewed.has(e.id);
  const weight=reasons.reduce((s,r)=>s+(r.includes('解答形式の要修正')?10:r.includes('根拠')?3:1),0);
  return {...e,hash:fingerprint(e.q),reasons,priority:weight,isReviewed};
 });
 const flagged=findings.filter(x=>x.reasons.length>0&&!x.isReviewed)
  .sort((a,b)=>b.priority-a.priority||a.bank.localeCompare(b.bank,'ja')||a.id.localeCompare(b.id));
 return {findings,flagged,reviewedCount:reviewed.size,counts:{
  academic:entries.filter(x=>x.bank==='FP学科').length,
  practical:entries.filter(x=>x.bank==='FP実技').length,
  bookkeeping:entries.filter(x=>x.bank.startsWith('簿記')).length
 }};
}
const escapeMarkdown=value=>String(value??'').replace(/\|/g,'\\|').replace(/[\r\n<>]/g,' ').slice(0,200);
const fileFor=e=>e.bank==='FP学科'?'questions.js':e.bank==='FP実技'?'practical-questions.js':e.form==='第1回'?'boki-data.js':'boki-extra.js';
const codeLines=new Map();
function questionLink(entry){
 const filename=fileFor(entry);
 if(!codeLines.has(filename))codeLines.set(filename,read(filename).split('\n'));
 const lines=codeLines.get(filename);
 const quoted='"id": "'+entry.id+'"';
 const objectKey="id:'"+entry.id+"'";
 const journalKey="journal('"+entry.id+"'";
 const idx=lines.findIndex(line=>line.includes(quoted)||line.includes(objectKey)||line.includes(journalKey));
 const sha=process.env.GITHUB_SHA;
 const rev=typeof sha==='string'&&/^[0-9a-f]{40}$/.test(sha)?sha:'main';
 return 'https://github.com/shikaku-financial/fp-study-site/blob/'+rev+'/'+filename+(idx>=0?'#L'+(idx+1):'');
}

function renderMarkdown(report,{limit=35}={}){
 const {counts,findings,flagged,reviewedCount}=report;
 const lines=[
 '## FLL 編集・人手監修の優先確認レポート',
 '',
 '> **自動検査は専門家による人手監修ではありません。** 以下はデータ上の未記入項目や同額の注意候補で、法律・会計上の誤りを確定するものではありません。',
 '',
 '| 項目 | 件数 |',
 '| --- | ---: |',
 `| FP学科 | ${counts.academic}問 |`,
 `| FP実技 | ${counts.practical}問 |`,
 `| 簿記ラボ | ${counts.bookkeeping}題 |`,
 `| 人手監修が記録・現行版照合された問題 | ${reviewedCount}/${findings.length} |`,
 `| 追加の編集確認候補（人手監修未記録分） | ${flagged.length} |`,
 ...['FP学科','FP実技','簿記2級','簿記3級'].map(bank=>`| ${bank}の要確認候補 | ${flagged.filter(f=>f.bank===bank).length} |`),
 '',
 '### 優先確認候補（資格別に先頭枠を確保）',
 '| 問題ID | 分野・模試 | 確認事項 |',
 '| --- | --- | --- |'
 ];
 const selected=[],seen=new Set();
 // Do not let a long FP academic metadata queue hide smaller bookkeeping issues.
 const quotas=Math.max(1,Math.floor(limit/4));
 for(const bank of ['FP学科','FP実技','簿記2級','簿記3級']){
  for(const f of flagged.filter(x=>x.bank===bank).slice(0,quotas)){
   if(selected.length>=limit)break;
   selected.push(f);seen.add(f.id);
  }
 }
 for(const f of flagged){
  if(selected.length>=limit)break;
  if(!seen.has(f.id)){selected.push(f);seen.add(f.id);}
 }
 for(const f of selected){
  lines.push(`| [\`${escapeMarkdown(f.id)}\`](${questionLink(f)}) | ${escapeMarkdown(f.bank+' '+f.form)} | ${escapeMarkdown(f.reasons.join('／'))} |`);
 }
 if(!flagged.length)lines.push('| — | — | 追加の機械的な注意候補なし（内容の正確性や監修完了を示すものではありません） |');
 if(flagged.length>selected.length)lines.push('',`残り${flagged.length-selected.length}件。より多く表示するには \`node .ci/editorial-audit.cjs --limit=100\` を実行してください。`);
 lines.push('','### 運用ルール','- 監修済み表示は、運営者が実際に確認し、参照URL・確認日・問題データのハッシュを記録した場合だけ可能。','- 問題を改訂するとハッシュが変わり、古い監修記録をCIが拒否します。','- このレポートはCIのSummaryのみに出力し、閲覧者向けの監修済み表示は自動生成しません。','');
 return lines.join('\n');
}

/**
 * This is an unverified editorial preview, NOT a professional review record.
 * It only formats existing data and never writes the human review register.
 */
function excerpt(value,max=600){
 return String(value??'未登録').replace(/[\r\n\t]+/g,' ').replace(/\s+/g,' ')
  .replace(/[<>|\x00-\x1f]/g,' ').replace(/[*_~{}\[\]\\]/g,' ')
  .split(String.fromCharCode(96)).join(' ').trim().slice(0,max);
}
function displayAnswer(q){
 if(Array.isArray(q.subAnswers)){
  return q.subAnswers.map((a,i)=>{
   const choice=Array.isArray(a.choices)?a.choices[a.answer]:null;
   const bank=Array.isArray(a.wordBank)?a.wordBank[a.answer]:null;
   return (a.label||'欄'+(i+1))+'：'+String(a.answer)+(choice?'（'+choice+'）':bank?'（語群：'+bank+'）':'')+(a.unit?' '+a.unit:'');
  }).join(' ／ ');
 }
 if(Array.isArray(q.fields))return q.fields.map(a=>(a.label||a.id)+'：'+a.answer).join(' ／ ');
 if(q.type==='journal')return '借方 '+(q.debit||[]).map(a=>a.join(' ')).join('、')+' ／ 貸方 '+(q.credit||[]).map(a=>a.join(' ')).join('、');
 if(Array.isArray(q.choices)&&Number.isInteger(q.answer)){
  return '選択肢'+(q.answer+1)+'：'+(q.choices[q.answer]??'選択肢データを確認');
 }
 return q.answer===undefined?'解答欄の構成を確認':String(q.answer);
}
function selectReviewEntries(flagged,limit){
 assert.ok(Number.isInteger(limit)&&limit>=1&&limit<=660,'review preview limit 1..660');
 const chosen=[],used=new Set(),perBank=Math.max(1,Math.floor(limit/4));
 for(const bank of ['FP学科','FP実技','簿記2級','簿記3級']){
  for(const f of flagged.filter(x=>x.bank===bank).slice(0,perBank)){
   if(chosen.length>=limit)break;
   if(!used.has(f.id)){chosen.push(f);used.add(f.id);}
  }
 }
 for(const f of flagged){
  if(chosen.length>=limit)break;
  if(!used.has(f.id)){chosen.push(f);used.add(f.id);}
 }
 return chosen;
}
function renderReviewPacket(report,{limit=8}={}){
 const selected=selectReviewEntries(report.flagged,limit),tick=String.fromCharCode(96);
 const lines=[
  '## 有資格者が確認するための設問・解説プレビュー',
  '',
  '> **以下は人手で未監修の登録内容を自動抽出したものです。正答・解説・根拠の正しさを保証しません。運営者本人が実際に照合するまで「監修済み」と記録しないでください。**',
  '',
  '問題IDから原文へ移動できます。ハッシュは改訂検出用であり、監修完了の証明ではありません。',
  ''
 ];
 if(!selected.length)lines.push('追加の機械的な注意候補はありません（内容の正確性を示すものではありません）。');
 for(const f of selected){
  const q=f.q;
  lines.push('### ['+tick+excerpt(f.id,80)+tick+']('+questionLink(f)+') — '+excerpt(f.bank+' '+f.form,80));
  lines.push('- **要確認理由：** '+excerpt(f.reasons.join('／'),240));
  if(q.caseTitle||q.caseText)lines.push('- **設例・前提：** '+excerpt((q.caseTitle||'')+' '+(q.caseText||''),800));
  lines.push('- **問題文：** '+excerpt(q.question||q.prompt||'',850));
  lines.push('- **登録済み正答（未検証）：** '+excerpt(displayAnswer(q),850));
  lines.push('- **登録済み解説（未検証）：** '+excerpt(q.explanation||(Array.isArray(q.fields)?q.fields.map(x=>x.label+'：'+x.explanation).join(' ／ '):''),900));
  const urls=[q.sourceUrl,...(Array.isArray(q.additionalSourceUrls)?q.additionalSourceUrls:[])].filter(x=>typeof x==='string'&&/^https:\/\//.test(x));
  lines.push('- **問題データの参照URL：** '+(urls.length?urls.slice(0,4).map(x=>excerpt(x,240)).join(' ／ '):'設問別のURL未登録。運営者による一次資料の確認が必要です'));
  lines.push('- **データ上の資料確認日／法令基準日：** '+excerpt(q.sourceCheckedDate||'未登録')+' ／ '+excerpt(q.lawReferenceDate||'設例・試験年度を確認'));
  lines.push('- **現行問題データのSHA-256：** '+tick+f.hash+tick);
  lines.push('');
 }
 return lines.join('\n');
}

function main(){
 const records=JSON.parse(read('EDITORIAL_REVIEW_RECORDS.json'));
 const report=audit(loadQuestions(),records);
 let limit=35,detail=8;
 const argument=process.argv.find(a=>a.startsWith('--limit='));
 if(argument){
  limit=Number(argument.slice(8));
  assert.ok(Number.isInteger(limit)&&limit>=1&&limit<=660,'limit must be 1..660');
 }
 const detailArgument=process.argv.find(a=>a.startsWith('--detail='));
 if(detailArgument){detail=Number(detailArgument.slice(9));assert.ok(Number.isInteger(detail)&&detail>=0&&detail<=35,'detail must be 0..35');}
 const output=renderMarkdown(report,{limit})+(detail?'\n'+renderReviewPacket(report,{limit:detail}):'');
 console.log(output);
 if(process.env.GITHUB_STEP_SUMMARY)fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY,output+'\n');
 console.log('PASS: '+report.findings.length+' unique problems; '+report.reviewedCount+' verifiable human review records; '+report.flagged.length+' flagged editorial candidates. Not expert-certified.');
}
if(require.main===module)main();
module.exports={loadQuestions,fingerprint,reasonsFor,audit,renderMarkdown,questionLink,displayAnswer,renderReviewPacket,selectReviewEntries};
