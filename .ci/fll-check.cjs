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
for(const script of ['questions.js','app.js','practical.js','practical-questions.js','practical-materials.js'])assert.ok(fp.includes('src="'+script+'?'),'FP exam script retained');
assert.ok(bk.includes('boki-data.js?')&&bk.includes('boki-extra.js?')&&bk.includes('boki-core.js?')&&bk.includes('boki.js?'));
const contact=read('contact.html'),privacy=read('privacy.html');
assert.ok(contact.includes('href="https://tally.so/r/e5qgKJ"'),'no-login Tally form is primary contact entry');
assert.ok(contact.includes('class="info-cta" href="https://tally.so/r/e5qgKJ"'),'primary contact button must link to live Tally form');
assert.ok(contact.includes('issues/new?template=question-report.md'),'GitHub issue reporting remains an optional developer fallback');
assert.ok(!contact.includes('GitHubへのログインが必要です。投稿内容は公開されます。'),'old GitHub-only contact warning must be replaced');
assert.ok(privacy.includes('https://tally.so/help/privacy-policy'),'Tally data processor privacy information disclosed');
assert.ok(privacy.includes('ChatGPTのTally連携'),'AI-assisted triage disclosed to respondents');
const script=read('fll.js');
for(const [search,hash,expected]of[['','',''],['?utm_source=demo','#labs',''],['?level=2','','fp.html?level=2'],['?view=practical&level=3','','fp.html?view=practical&level=3'],['','#home','fp.html#home'],['','#examResult','fp.html#examResult'],['?level=3&utm_source=old','#practicalHome','fp.html?level=3&utm_source=old#practicalHome']]){
 const replaced=[];vm.runInNewContext(script,{URLSearchParams,window:{location:{search,hash,replace:s=>replaced.push(s)}}});assert.deepEqual(replaced,expected?[expected]:[],'legacy route '+search+hash);
}
assert.ok(!/localStorage|sessionStorage/.test(script),'parent navigation must not alter study records');
const manifest=JSON.parse(read('fll.webmanifest'));assert.equal(manifest.short_name,'FLL');assert.equal(manifest.start_url,'./');assert.equal(JSON.parse(read('site.webmanifest')).start_url,'./fp.html');
function luminance(hex){const c=hex.match(/\w\w/g).map(x=>parseInt(x,16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4);return c[0]*.2126+c[1]*.7152+c[2]*.0722;}
for(const [foreground,background]of[['147e78','ffffff'],['526a7a','f6f8f5'],['092b43','ffffff'],['0c5e5a','e3f1ee']]){const a=luminance(foreground),b=luminance(background);assert.ok((Math.max(a,b)+.05)/(Math.min(a,b)+.05)>=4.5,'brand text contrast');}
console.log('PASS: FLL parent entry, shared branding, preserved FP/Boki controls, legacy FP routes, bookmarks and 4.5:1 brand text contrast');
