'use strict';
// Conservative gzip-size budgets for initial assets referenced by each entrance page.
// This is NOT a substitute for Lighthouse or measured user Core Web Vitals.
const fs=require('node:fs'),path=require('node:path'),zlib=require('node:zlib'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');
const fpEntry=fs.readFileSync(path.join(root,'fp.html'),'utf8');
for(const f of ['practical-questions.js','practical-materials.js','practical.js'])
 assert.ok(!fpEntry.includes('src="'+f+'?'),'academic page eagerly loads practical data: '+f);
const limits={
 'index.html':100*1024,
 'fp.html':360*1024,
 'boki.html':180*1024
};
for(const [page,limit] of Object.entries(limits)){
 const html=fs.readFileSync(path.join(root,page),'utf8');
 const refs=[
  ...Array.from(html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/g),m=>m[1]),
  ...Array.from(html.matchAll(/<link\b[^>]*\brel="stylesheet"[^>]*\bhref="([^"]+)"/g),m=>m[1])
 ];
 const files=[page,...new Set(refs.map(x=>x.split(/[?#]/)[0]).filter(x=>/\.(?:js|css)$/.test(x)))];
 let total=0;const detail=[];
 for(const f of files){
  assert.ok(/^[\w.-]+$/.test(f),'unexpected external or nested asset '+f);
  const data=fs.readFileSync(path.join(root,f));
  const compressed=zlib.gzipSync(data,{level:9}).length;
  total+=compressed;detail.push(f+': '+compressed+' bytes');
 }
 console.log('Initial compressed assets '+page+': '+Math.round(total/1024)+' KiB (budget '+Math.round(limit/1024)+' KiB)');
 assert.ok(total<=limit,page+' initial transfer budget exceeded: '+detail.join(', '));
}
console.log('PASS: FLL initial gzip asset budgets on all three learning entries');
