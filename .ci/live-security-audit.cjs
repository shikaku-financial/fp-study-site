'use strict';
// Read-only verification of Cloudflare Pages' actual HTTPS response.
const assert=require('node:assert/strict');
const SITE='https://fll-fp-lab.pages.dev';
const paths=['/','/guide','/app.js','/boki','/boki-extra.js'];
async function verify(){
 for(const path of paths){
  const url=SITE+path;
  const response=await fetch(url,{redirect:'follow',signal:AbortSignal.timeout(12000)});
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
  if(path==='/'){
   assert.ok(body.includes('http-equiv="Content-Security-Policy"'),'homepage meta CSP missing');
   assert.ok(body.includes('id="prUpdatedDate"'),'site HTML not latest');
  }
  if(path==='/boki') assert.ok(body.includes('boki-extra.js?v=20261023b')&&body.includes('各級2回分'),'bookkeeping page is not the current published content');
  if(path==='/boki-extra.js') assert.ok(body.includes('const BOKI_SECOND =')&&body.includes('b2-r2-consolidated'),'second mock dataset not published');
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
