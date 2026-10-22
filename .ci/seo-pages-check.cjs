'use strict';
// Standalone static search-entry checks; no npm dependencies.
const fs=require('node:fs');
const assert=require('node:assert/strict');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const site='https://fll-fp-lab.pages.dev/';
const pages=['index.html','guide.html','fp3-study.html','fp2-study.html','fp-level-comparison.html','fp-calculation-guide.html','practical-tracks.html','about.html','privacy.html','contact.html'];
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
 const expected=file==='index.html'?site:site+file;
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
const xml=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');
const mapped=[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(x=>x[1]);
assert.equal(mapped.length,pages.length,'sitemap must enumerate each public HTML once');
assert.equal(new Set(mapped).size,mapped.length,'duplicate sitemap URL');
assert.deepEqual(new Set(mapped),urls,'sitemap and canonical URLs disagree');
const robots=fs.readFileSync(path.join(root,'robots.txt'),'utf8');
assert.match(robots,/^User-agent:\s*\*/m,'robots.txt must state user-agent');
assert.ok(robots.includes('Sitemap: '+site+'sitemap.xml'),'robots.txt points to incorrect sitemap URL');
assert.ok(!robots.includes('Disallow: /'),'production crawl disallowed');
for(const file of ['fp3-study.html','fp2-study.html','fp-level-comparison.html','fp-calculation-guide.html','practical-tracks.html']){
  assert.ok(fs.readFileSync(path.join(root,'index.html'),'utf8').includes('href="'+file+'"'),file+' not discoverable from home');
}
const home=fs.readFileSync(path.join(root,'index.html'),'utf8');
const publisher=home.match(/<meta\\s+name="google-adsense-account"\\s+content="ca-(pub-\\d{16})"/i)?.[1];
assert.ok(publisher,'AdSense publisher metadata missing');
const ads=fs.readFileSync(path.join(root,'ads.txt'),'utf8');
assert.equal(ads,'google.com, '+publisher+', DIRECT, f08c47fec0942fa0\\n','ads.txt must match verified AdSense publisher ID');
console.log('PASS: ads.txt seller authorization matches homepage publisher metadata');
console.log('PASS: '+pages.length+' page SEO canonicals, metadata, internal links, sitemap and home entry links');
