'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),read=n=>fs.readFileSync(path.join(root,n),'utf8');
const hub=read('index.html'),fp=read('fp.html'),bk=read('boki.html');
assert.ok(hub.includes('id="labs"')&&hub.includes('href="fp.html"')&&hub.includes('href="boki.html"'));
assert.ok(!hub.includes('id="quiz"'),'parent home must not be an FP exam');
assert.ok(hub.includes('href="fp.html?level=2"')&&hub.includes('href="fp.html?level=3"'));
for(const file of ['fp.html','boki.html','guide.html','fp2-study.html','fp3-study.html','fp-level-comparison.html','fp-calculation-guide.html','practical-tracks.html','fp2-nonlife-practical.html','fp3-mock-exam.html','about.html','privacy.html','contact.html']){
 const html=read(file);assert.ok(html.includes('class="fll-header"')&&html.includes('class="fll-footer"'),file+' common brand shell');
 assert.ok(html.includes('href="index.html"')&&html.includes('href="brand.css?v=20261023d"'),file+' parent entry and theme');
}
for(const id of ['home','quiz','exam','finish','examResult','practicalHome','practicalExam','practicalResult','siteHomeLink'])assert.ok(fp.includes('id="'+id+'"'),'FP control retained '+id);
for(const script of ['questions.js','app.js','practical-loader.js'])assert.ok(fp.includes('src="'+script+'?'),'FP entry script retained');
for(const file of ['practical-questions.js','practical-materials.js','practical.js'])assert.ok(!fp.includes('src="'+file+'?'),'practical bundle must be lazy-loaded');
const loader=read('practical-loader.js');
for(const file of ['practical-questions.js','practical-materials.js','practical.js'])assert.ok(loader.includes(file+'?'),'missing lazy module '+file);
assert.ok(loader.indexOf('practical-questions.js?')<loader.indexOf('practical-materials.js?')&&loader.indexOf('practical-materials.js?')<loader.indexOf('practical.js?'),'practical module ordering');
assert.ok(fp.includes('id="practicalLoadStatus"')&&fp.includes('aria-live="polite"'),'lazy module status required');
assert.ok(bk.includes('boki-data.js?')&&bk.includes('boki-extra.js?')&&bk.includes('boki-core.js?')&&bk.includes('boki.js?'));
// Public trust disclosures must not claim unperformed human expert review or hide enabled analytics.
const about=read('about.html');
assert.ok(about.includes('id="review-policy"'),'review process must have a public anchor');
assert.ok(about.includes('FP技能検定および日商簿記検定の合格者'),'operator may state verified self-reported qualification category');
assert.ok(about.includes('ChatGPTなどの生成AI'),'explain AI-assisted creation and checking');
assert.ok(about.includes('自動テストだけを、独立した人間の専門家による監修と扱うことはありません'),'AI alone cannot claim professional review');
assert.ok(about.includes('全問について、運営者による人手の内容確認・監修が完了したとは表示していません'),'no false review-complete claim');
for(const page of [fp,bk])assert.ok(page.includes('href="about.html#review-policy"'),'both labs link to audit transparency');
assert.ok(about.includes('Cloudflare Web Analyticsによるアクセス解析を有効にしています'),'about reflects active analytics');
assert.ok(fp.includes('Cloudflare Web Analyticsを有効にしています'),'FP reflects active analytics');
assert.ok(!fp.includes('広告配信タグやアクセス解析タグを設置していません'),'remove outdated FP analytics claim');
assert.ok(fp.includes('href="https://tally.so/r/e5qgKJ"'),'FP guidance uses the shared no-login form');
assert.ok(!fp.includes('GitHubへのログインが必要です'),'remove obsolete GitHub-only support guidance');
const contact=read('contact.html'),privacy=read('privacy.html');
assert.ok(contact.includes('href="https://tally.so/r/e5qgKJ"'),'no-login Tally form is primary contact entry');
assert.ok(contact.includes('class="info-cta" href="https://tally.so/r/e5qgKJ"'),'primary contact button must link to live Tally form');
assert.ok(contact.includes('お問い合わせ・不具合を報告する ↗'),'primary CTA must use concise reporting language');
assert.ok(!contact.includes('登録不要で')&&!contact.includes('報告にGitHubアカウントやサイトへの会員登録は不要です。'),'contact page must omit redundant registration explanation');
assert.ok(contact.includes('issues/new?template=question-report.md'),'GitHub issue reporting remains an optional developer fallback');
assert.ok(!contact.includes('GitHubへのログインが必要です。投稿内容は公開されます。'),'old GitHub-only contact warning must be replaced');
assert.ok(privacy.includes('https://tally.so/help/privacy-policy'),'Tally data processor privacy information disclosed');
assert.ok(privacy.includes('ChatGPTのTally連携'),'AI-assisted triage disclosed to respondents');
assert.ok(privacy.includes('Cloudflare PagesでCloudflare Web Analyticsを有効にしています'),'analytics enabled status is accurately documented');
const script=read('fll.js');
for(const [search,hash,expected]of[['','',''],['?utm_source=demo','#labs',''],['?level=2','','fp.html?level=2'],['?view=practical&level=3','','fp.html?view=practical&level=3'],['','#home','fp.html#home'],['','#examResult','fp.html#examResult'],['?level=3&utm_source=old','#practicalHome','fp.html?level=3&utm_source=old#practicalHome']]){
 const replaced=[];vm.runInNewContext(script,{URLSearchParams,window:{location:{search,hash,replace:s=>replaced.push(s)}}});assert.deepEqual(replaced,expected?[expected]:[],'legacy route '+search+hash);
}
assert.ok(!/localStorage|sessionStorage/.test(script),'parent navigation must not alter study records');
const manifest=JSON.parse(read('fll.webmanifest'));assert.equal(manifest.short_name,'FLL');assert.equal(manifest.start_url,'./');assert.equal(JSON.parse(read('site.webmanifest')).start_url,'./fp.html');
function luminance(hex){const c=hex.match(/\w\w/g).map(x=>parseInt(x,16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4);return c[0]*.2126+c[1]*.7152+c[2]*.0722;}
for(const [foreground,background]of[['147e78','ffffff'],['526a7a','f6f8f5'],['092b43','ffffff'],['0c5e5a','e3f1ee']]){const a=luminance(foreground),b=luminance(background);assert.ok((Math.max(a,b)+.05)/(Math.min(a,b)+.05)>=4.5,'brand text contrast');}
console.log('PASS: FLL parent entry, shared branding, preserved FP/Boki controls, legacy FP routes, bookmarks and 4.5:1 brand text contrast');
