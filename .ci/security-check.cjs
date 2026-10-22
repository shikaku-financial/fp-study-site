'use strict';
// Run on every PR before the static site is shipped.
// Cloudflare Pages applies /_headers; GitHub Pages cannot, so the meta CSP is intentional.
const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');
const pages=[
  'index.html','guide.html','fp3-study.html','fp3-mock-exam.html','fp2-study.html',
  'fp-level-comparison.html','fp-calculation-guide.html','practical-tracks.html',
  'fp2-nonlife-practical.html','about.html','privacy.html','contact.html','404.html'
];
const rules=fs.readFileSync(path.join(root,'_headers'),'utf8');
assert.ok(rules.startsWith('/*\n'),'Pages custom security headers must apply to all paths');
assert.match(rules,/^\s+X-Content-Type-Options:\s+nosniff\s*$/m);
assert.match(rules,/^\s+X-Frame-Options:\s+DENY\s*$/m);
assert.match(rules,/^\s+Referrer-Policy:\s+strict-origin-when-cross-origin\s*$/m);
for(const feature of ['camera=()','microphone=()','geolocation=()','payment=()','usb=()']){
 assert.ok(rules.includes(feature),'Permissions-Policy missing '+feature);
}
const headerPolicy=rules.match(/^\s+Content-Security-Policy:\s+(.+)$/m)?.[1];
assert.ok(headerPolicy,'Cloudflare security policy missing');
assert.ok(headerPolicy.includes("frame-ancestors 'none'"),'Cloudflare must deny external framing');
const metaPolicy=headerPolicy.replace(/;\s*frame-ancestors 'none'/,'');
for(const term of [
 "default-src 'self'","base-uri 'none'","object-src 'none'","frame-src 'none'",
 "form-action 'self'","script-src 'self'","connect-src 'self'","upgrade-insecure-requests"
]){
 assert.ok(metaPolicy.split(';').map(s=>s.trim()).includes(term),'CSP clause missing '+term);
}
assert.ok(!/script-src[^;]*(?:'unsafe-inline'|'unsafe-eval'|\*)/.test(metaPolicy),'script CSP must not allow unsafe execution');
const expectedHead='<meta http-equiv="Content-Security-Policy" content="'+metaPolicy+'">';
for(const page of pages){
 const html=fs.readFileSync(path.join(root,page),'utf8');
 const head=html.split(/<\/head>/i)[0];
 assert.ok(head.includes(expectedHead),'meta CSP is missing or differs from headers: '+page);
 assert.equal((head.match(/http-equiv="Content-Security-Policy"/g)||[]).length,1,'duplicate CSP meta '+page);
 assert.ok(!/<base\b/i.test(html),'base href is not compatible with CSP: '+page);
 assert.ok(!/\son(?:click|load|error|submit|change|input)\s*=/i.test(html),'inline event handler is blocked by CSP: '+page);
 for(const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)){
   const attrs=match[1],code=match[2];
   const src=attrs.match(/\bsrc=["']([^"']+)["']/i)?.[1];
   assert.ok(src && !/^https?:|^\/\//i.test(src),'scripts must be local external files: '+page);
   assert.equal(code.trim(),'','inline script would violate CSP: '+page);
   assert.ok(fs.existsSync(path.join(root,src.split(/[?#]/)[0])),'script missing: '+page+' '+src);
 }
 for(const match of html.matchAll(/<a\b[^>]*target=["']_blank["'][^>]*>/gi)){
   assert.match(match[0],/rel=["'][^"']*\bnoopener\b/i,'external new tab needs noopener: '+page);
 }
}
const output=fs.readFileSync(path.join(root,'.ci/build-static.cjs'),'utf8');
assert.ok(output.includes("'_headers'"),'security headers must be in the published dist');
const regression=fs.readFileSync(path.join(root,'.github/workflows/regression.yml'),'utf8');
assert.ok(regression.includes('node .ci/security-check.cjs'),'security checks must run on PRs');
const deploy=fs.readFileSync(path.join(root,'.github/workflows/pages.yml'),'utf8');
assert.ok(deploy.includes("'_headers'"),'production pages should deploy on security policy changes');
for(const match of deploy.matchAll(/uses:\s+([^\s]+)/g)){
 assert.match(match[1],/^[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+@[a-f0-9]{40}$/,'action must be pinned by immutable SHA');
}
assert.ok(deploy.includes('persist-credentials: false'),'checkout must not keep repository credentials');
console.log('PASS: 13 HTML pages enforce compatible CSP, no inline scripts, Cloudflare security headers, CI checks and SHA-pinned deployment actions');
