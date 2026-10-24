'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs');
const {chromium,webkit}=require('playwright');
const BASE=process.env.FLL_TEST_URL||'http://127.0.0.1:8766/';
async function run(name){
 const browser=await(name==='webkit'?webkit:chromium).launch({headless:true,...(name==='chromium'?{args:['--no-sandbox']}: {})});
 const ctx=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,locale:'ja-JP'});
 const page=await ctx.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('dialog',d=>d.accept());
 async function fits(){const d=await page.evaluate(()=>({w:innerWidth,scroll:document.documentElement.scrollWidth}));assert.ok(d.scroll<=d.w+2,name+' page overflow '+JSON.stringify(d));}
 try{
  await page.goto(BASE,{waitUntil:'load'});assert.equal(await page.locator('#labs').count(),1);
  await page.evaluate(()=>{localStorage.setItem('fll-hub-test-sentinel','keep');});
  for(const width of [320,390,768,1440]){
   await page.setViewportSize({width,height:width===1440?1000:844});await fits();
   assert.equal(await page.locator('h1').count(),1);assert.equal(await page.locator('.hub-course').count(),2);
   for(const logo of await page.locator('.fll-logo img').all())assert.ok(await logo.evaluate(img=>img.complete&&img.naturalWidth>0),'logo loaded');
   for(const a of await page.locator('.fll-nav a,.hub-cta,.hub-quick-links a').all()){const box=await a.boundingBox();assert.ok(box.height>=44,'touch target');}
   const guides=await page.locator('.hub-guide-grid a').allTextContents();
   assert.equal(guides.filter(t=>t.includes('簿記')).length,1,'one bookkeeping guide entry');
   if(width===1440){const rows=await page.locator('.hub-guide-grid a').evaluateAll(links=>links.map(a=>Math.round(a.getBoundingClientRect().top)));assert.equal(rows[0],rows[1]);assert.equal(rows[2],rows[3]);assert.ok(rows[2]>rows[0],'four guides occupy two complete rows');}
   if(width===390||width===1440){fs.mkdirSync('brand-qa',{recursive:true});await page.screenshot({path:'brand-qa/'+name+'-fll-'+width+'.png',fullPage:true});}
  }
  await page.setViewportSize({width:390,height:844});
  await page.locator('a[href="fp.html?level=2"]').click();await page.locator('#level2[aria-pressed="true"]').waitFor();await fits();
  assert.equal(await page.locator('.fll-nav #siteHomeLink').count(),1,'FP local home handler retained');
  await page.locator('.fll-logo').click();await page.locator('#labs').waitFor();
  assert.equal(await page.evaluate(()=>localStorage.getItem('fll-hub-test-sentinel')),'keep');
  await page.locator('.hub-course a[href="boki.html"]').click();await page.locator('#boki-form').waitFor();await fits();
  await page.screenshot({path:'brand-qa/'+name+'-boki-390.png',fullPage:true});
  await page.locator('.fll-logo').click();await page.locator('#labs').waitFor();
  await page.goto(new URL('index.html?view=practical&level=2',BASE).href,{waitUntil:'load'});await page.locator('#prSelectLevel2[aria-pressed="true"]').waitFor();assert.ok(page.url().includes('fp.html?view=practical'));
  await page.screenshot({path:'brand-qa/'+name+'-fp-390.png',fullPage:true});
  await page.goto(new URL('index.html?level=3',BASE).href,{waitUntil:'load'});await page.locator('#level3[aria-pressed="true"]').waitFor();assert.ok(page.url().includes('fp.html?level=3'));
  await page.goto(new URL('index.html#home',BASE).href,{waitUntil:'load'});await page.locator('#home').waitFor({state:'visible'});assert.ok(page.url().includes('fp.html#home'));
  for(const file of ['guide.html','about.html','privacy.html','contact.html','fp3-study.html','fp2-study.html']){await page.goto(new URL(file,BASE).href,{waitUntil:'load'});await fits();assert.equal(await page.locator('.fll-header').count(),1);assert.equal(await page.locator('.fll-footer').count(),1);}
  await page.goto(new URL('contact.html',BASE).href,{waitUntil:'load'});
  assert.equal(await page.locator('a.info-cta').getAttribute('href'),'https://tally.so/r/e5qgKJ','contact CTA must open live no-login form');
  assert.equal(await page.locator('a[href*="issues/new?template=question-report.md"]').count(),1,'developer fallback retained');
  for(const width of [320,390]){await page.setViewportSize({width,height:844});await fits();}
  assert.deepEqual(errors,[]);console.log('PASS '+name+': FLL 320–1440px, hub/lab navigation, legacy FP links, shared headers and brand screenshots');
 }finally{await ctx.close();await browser.close();}
}
(async()=>{await run('chromium');await run('webkit');})().catch(e=>{console.error(e.stack||e);process.exitCode=1;});
