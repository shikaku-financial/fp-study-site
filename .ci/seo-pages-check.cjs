'use strict';
// Standalone static search-entry checks; no npm dependencies.
const fs=require('node:fs');
const assert=require('node:assert/strict');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const site='https://shikaku-financial.github.io/fp-study-site/';
const pages=['index.html','guide.html','fp3-study.html','practical-tracks.html','about.html','privacy.html','contact.html'];
const urls=new Set();
for(const file of pages){
 const html=fs.readFileSync(path.join(root,file),'utf8');
 const normal=(s)=>s.replace(/\s+/g,' ').trim();
 const title=html.match(/<title>([^<]+)<\/title>/i)?.[1];
 const description=html.match(/<meta\s+name="description"\s+content="([^"]+)"/i)?.[1];
 const canonical=html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i)?.[1];
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
for(const file of ['fp3-study.html','practical-tracks.html']){
  assert.ok(fs.readFileSync(path.join(root,'index.html'),'utf8').includes('href="'+file+'"'),file+' not discoverable from home');
}
console.log('PASS: '+pages.length+' page SEO canonicals, metadata, internal links, sitemap and home entry links');
