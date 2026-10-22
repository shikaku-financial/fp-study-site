'use strict';
// Standalone static search-entry checks; no npm dependencies.
const fs=require('node:fs');
const assert=require('node:assert/strict');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const site='https://fll-fp-lab.pages.dev/';
const pages=['index.html','guide.html','fp3-study.html','fp3-mock-exam.html','fp2-study.html','fp-level-comparison.html','fp-calculation-guide.html','practical-tracks.html','fp2-nonlife-practical.html','about.html','privacy.html','contact.html'];
const urls=new Set();
for(const file of pages){
 const html=fs.readFileSync(path.join(root,file),'utf8');
 const normal=(s)=>s.replace(/\s+/g,' ').trim();
 const title=html.match(/<title>([^<]+)<\/title>/i)?.[1];
 const description=html.match(/<meta\s+name="description"\s+content="([^"]+)"/i)?.[1];
 const canonical=html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i)?.[1];
 const h1s=[...html.matchAll(/<h1(?:\s[^>]*)?>([^<]*)<\/h1>/gi)];
 assert.equal(h1s.length,1,file+' must have one clear h1');
 assert.ok(normal(h1s[0][1]).length>=4,file+' h1 too short');
 assert.ok(title&&normal(title).length>=12,file+' title absent');
 assert.ok(description&&normal(description).length>=35,file+' meta description absent');
 const expected=file==='index.html'?site:site+file.replace(/\.html$/,'');
 assert.equal(canonical,expected,file+' canonical unexpected');
 assert.ok(!urls.has(canonical),'duplicate canonical '+canonical);
 urls.add(canonical);
 for(const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)){
   const href=match[1].split('?')[0].split('#')[0];
   if(!href||/^(https?:|mailto:|tel:|data:)/i.test(href))continue;
   assert.ok(!href.startsWith('/'),'absolute local ref should not escape /fp-study-site/: '+file+' '+href);
   assert.ok(fs.existsSync(path.join(root,href)),file+' has broken local link '+href);
 }
}
for(const grade of ['fp2-study.html','fp3-study.html']){
 const html=fs.readFileSync(path.join(root,grade),'utf8');
 assert.ok(html.includes('href="fp-level-comparison.html"'),grade+' must link to the level comparison guide');
}
const comparison=fs.readFileSync(path.join(root,'fp-level-comparison.html'),'utf8');
assert.ok(comparison.includes('class="comparison-table-scroll" role="region"')&&comparison.includes('tabindex="0"'),'comparison table must have accessible scroll region');
const styles=fs.readFileSync(path.join(root,'info.css'),'utf8');
assert.ok(styles.includes('.comparison-table-scroll{max-width:100%;overflow-x:auto'),'comparison table must scroll on narrow viewports');
const practicalGuide=fs.readFileSync(path.join(root,'practical-tracks.html'),'utf8');
for(const grade of ['2','3']) assert.ok(practicalGuide.includes('href="index.html?view=practical&amp;level='+grade+'"'),'practical study entry missing for FP'+grade);
assert.ok(practicalGuide.includes('事例形式5題（15問）')&&practicalGuide.includes('class="comparison-table-scroll" role="region"'),'official practical format comparison missing');
const notFound=fs.readFileSync(path.join(root,'404.html'),'utf8');
assert.match(notFound,/<meta\s+name="robots"\s+content="noindex,follow">/i,'404 page must be noindex');
assert.match(notFound,/<h1>お探しのページが見つかりません<\/h1>/,'404 page missing readable heading');
assert.ok(!/<link\s+rel="canonical"/i.test(notFound),'404 page must not declare a canonical');
for(const route of ['','guide','fp2-study','fp3-study','contact']) {
  assert.ok(notFound.includes('href="'+site+route+'"'),'404 page missing valid recovery link: '+route);
}
const xml=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');
const mapped=[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(x=>x[1]);
assert.equal(mapped.length,pages.length,'sitemap must enumerate each public HTML once');
assert.equal(new Set(mapped).size,mapped.length,'duplicate sitemap URL');
assert.deepEqual(new Set(mapped),urls,'sitemap and canonical URLs disagree');
assert.ok(mapped.every(url=>!url.endsWith('.html')),'Cloudflare canonical sitemap URLs must be extensionless');
const robots=fs.readFileSync(path.join(root,'robots.txt'),'utf8');
assert.match(robots,/^User-agent:\s*\*/m,'robots.txt must state user-agent');
assert.ok(robots.includes('Sitemap: '+site+'sitemap.xml'),'robots.txt points to incorrect sitemap URL');
assert.ok(!robots.includes('Disallow: /'),'production crawl disallowed');
for(const file of ['fp3-study.html','fp2-study.html','fp-level-comparison.html','fp-calculation-guide.html','practical-tracks.html']){
  assert.ok(fs.readFileSync(path.join(root,'index.html'),'utf8').includes('href="'+file+'"'),file+' not discoverable from home');
}
for(const grade of ['2','3']){
 const guide=fs.readFileSync(path.join(root,'fp'+grade+'-study.html'),'utf8');
 assert.ok(guide.includes('class="info-cta" href="index.html?level='+grade+'"'), 'grade-specific practice link missing for FP'+grade);
 const compare=fs.readFileSync(path.join(root,'fp-level-comparison.html'),'utf8');
 assert.ok(compare.includes('class="info-cta" href="index.html?level='+grade+'"'), 'comparison must offer FP'+grade+' direct entry');
}
for(const [file,entry] of [['fp3-mock-exam.html','index.html?level=3'],['fp2-nonlife-practical.html','index.html?view=practical&amp;level=2']]) {
 const html=fs.readFileSync(path.join(root,file),'utf8');
 assert.ok(html.includes('href="'+entry+'"'),file+' must link to working exam entry');
 assert.ok(html.includes('独自')&&html.includes('非公式'),file+' must identify its unofficial original exercises');
 assert.ok(fs.readFileSync(path.join(root,'index.html'),'utf8').includes('href="'+file+'"'),file+' must be reachable from homepage');
}
const home=fs.readFileSync(path.join(root,'index.html'),'utf8');
const publisher=home.match(/<meta\s+name="google-adsense-account"\s+content="ca-(pub-\d{16})"/i)?.[1];
assert.ok(publisher,'AdSense publisher metadata missing');
const ads=fs.readFileSync(path.join(root,'ads.txt'),'utf8');
assert.equal(ads,'google.com, '+publisher+', DIRECT, f08c47fec0942fa0\n','ads.txt must match verified AdSense publisher ID');
console.log('PASS: ads.txt seller authorization matches homepage publisher metadata');
console.log('PASS: '+pages.length+' page SEO canonicals, metadata, internal links, sitemap and home entry links');
