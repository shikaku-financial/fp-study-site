'use strict';
// Read-only verification of Cloudflare Pages' actual HTTPS response.
const assert=require('node:assert/strict');
const SITE='https://fll-fp-lab.pages.dev';
const paths=['/','/fp','/guide','/app.js','/boki','/boki-extra.js','/brand.css','/about','/privacy','/contact','/calculator.js','/calculator.css'];
async function verify(){
 for(const path of paths){
  const url=SITE+path;
  const isHtml=['/','/fp','/boki'].includes(path);
  const response=await fetch(url,{redirect:'follow',signal:AbortSignal.timeout(12000),
   headers:isHtml?{'Accept':'text/html','User-Agent':'Mozilla/5.0 (compatible; FLL-Analytics-Verification/1.0)'}:undefined});
  assert.equal(response.status,200,'status: '+url+' '+response.status);
  assert.equal(new URL(response.url).origin,SITE,'redirect to different origin');
  const get=key=>(response.headers.get(key)||'').trim();
  assert.equal(get('x-content-type-options').toLowerCase(),'nosniff','missing nosniff '+path);
  assert.equal(get('x-frame-options').toUpperCase(),'DENY','missing frame protection '+path);
  assert.equal(get('referrer-policy').toLowerCase(),'strict-origin-when-cross-origin','referrer policy '+path);
  const permissions=get('permissions-policy').toLowerCase();
  for(const feat of ['camera=()','microphone=()','geolocation=()','payment=()','usb=()'])
   assert.ok(permissions.includes(feat),'missing '+feat+' '+path);
  const csp=get('content-security-policy');
  for(const directive of ["default-src 'self'","base-uri 'none'","object-src 'none'","frame-src 'none'","frame-ancestors 'none'","form-action 'self'","script-src 'self'","connect-src 'self'"])
   assert.ok(csp.includes(directive),'missing '+directive+' '+path);
  assert.ok(!/script-src[^;]*(?:'unsafe-inline'|'unsafe-eval'|\*)/i.test(csp),'unsafe script policy '+path);
  const body=await response.text();
  if(isHtml){
   // Cloudflare Pages injects Web Analytics into deployed HTML after dashboard enablement.
   // Verify the actual public response, not only the repository's static source.
   const matches=[...body.matchAll(/<script\b[^>]*\bsrc=["']https:\/\/static\.cloudflareinsights\.com\/beacon\.min\.js(?:[/?#][^"']*)?["'][^>]*>/gi)];
   assert.equal(matches.length,1,'expected exactly one Cloudflare Web Analytics beacon on '+path);
   assert.ok(csp.includes('https://static.cloudflareinsights.com/beacon.min.js'),'Cloudflare beacon blocked by CSP '+path);
   console.log('PASS '+path+' Cloudflare Web Analytics beacon automatically injected once');
  }
  if(path==='/'){
   assert.ok(body.includes('http-equiv="Content-Security-Policy"'),'homepage meta CSP missing');
   assert.ok(body.includes('id="labs"')&&body.includes('href="fp.html"')&&body.includes('href="boki.html"'),'FLL parent home not published');
  }
  if(path==='/boki'){
   // Follow the repository's actual versioned HTML references, not a stale audit constant.
   const expected=require('node:fs').readFileSync(require('node:path').resolve(__dirname,'../boki.html'),'utf8');
   for(const file of ['boki-data.js','boki-extra.js']){
    const match=expected.match(new RegExp(file.replace('.',String.raw\`\\.\`)+String.raw\`\\?v=[a-zA-Z0-9_-]+\`));
    assert.ok(match&&body.includes(match[0]),'live bookkeeping bundle differs from repository '+file);
   }
   assert.ok(body.includes('各級2回分'),'bookkeeping landing page has changed unexpectedly');
  }
  if(path==='/boki-extra.js') assert.ok(body.includes('const BOKI_SECOND =')&&body.includes('b2-r2-consolidated'),'second mock dataset not published');
  if(path==='/fp') assert.ok(body.includes('id="prUpdatedDate"')&&body.includes('brand.css?v=20261023d'),'FP entry not published');
  if(path==='/brand.css') assert.ok(body.includes('--fll-ink:')&&body.includes('.fll-header'),'shared brand styles not published');
  const policies={'/about':'fll-about-policy','/privacy':'fll-privacy-policy','/contact':'fll-contact-policy'};
  if(policies[path]) assert.ok(body.includes('id="'+policies[path]+'"')&&body.includes('更新日：2026年10月24日'),'updated FLL-wide policy not published: '+path);
  if(path==='/fp'||path==='/boki') assert.ok(body.includes('calculator.js?v=20261024a')&&body.includes('calculator.css?v=20261024a'),'calculator entry not published: '+path);
  if(path==='/calculator.js') assert.ok(body.includes('fll-calc-toggle')&&body.includes('function calculate('),'calculator script not published');
  if(path==='/calculator.css') assert.ok(body.includes('.fll-calc-panel')&&body.includes('--fll-calc-space'),'calculator styles not published');
  if(path==='/guide') assert.ok(body.includes('lang="ja"'),'guide response unexpected');
  if(path==='/app.js') assert.ok(body.includes('EXAM_HISTORY_KEY'),'script response unexpected');
  console.log('PASS '+path+' HTTP 200 and required headers, '+Buffer.byteLength(body)+' bytes');
 }
}
(async()=>{
 let last;
 for(let attempt=1;attempt<=12;attempt++){
  try{await verify();console.log('PASS: all checked public security headers are effective');return;}
  catch(err){
   last=err;console.error('Attempt '+attempt+'/12: '+err.message);
   if(attempt<12)await new Promise(resolve=>setTimeout(resolve,10000));
  }
 }
 throw last;
})().catch(err=>{console.error('FAIL: '+(err.stack||err));process.exitCode=1;});
