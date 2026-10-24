'use strict';
// Source-level integration test in CI; real desktop browser engines with mobile viewports.
// Does not represent physical iPhone Safari testing.
const assert=require('node:assert/strict');
const {chromium,webkit}=require('playwright');
const D=require('../boki-data.js'),E=require('../boki-extra.js'),C=require('../boki-core.js');
for(const level of ['3','2'])D[level].forms={'2':E[level]};
const BASE=process.env.BOKI_TEST_URL||'http://127.0.0.1:8766/boki.html',KEY='fll-boki-progress';
async function run(engineName){
 const engine=engineName==='webkit'?webkit:chromium;
 const browser=await engine.launch({headless:true,...(engineName==='chromium'?{args:['--no-sandbox']}: {})});
 const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,locale:'ja-JP'});
 const page=await context.newPage(),errors=[];
 page.on('pageerror',e=>errors.push(e.message));page.on('dialog',d=>d.accept().catch(e=>errors.push(e.message)));
 const click=action=>page.locator('button[data-action="'+action+'"]').click();
 const saved=()=>page.evaluate(key=>JSON.parse(localStorage.getItem(key)),KEY);
 async function choose(level,form){
  await page.locator('button[data-action="level"][data-level="'+level+'"]').click();
  assert.equal(await page.locator('button[data-action="level"][data-level="'+level+'"]').evaluate(el=>el===document.activeElement),true,'level selection retains keyboard focus');
  await page.locator('#boki-form').selectOption(form);
  assert.equal(await page.locator('#boki-form').evaluate(el=>el===document.activeElement),true,'form selection retains keyboard focus');
  assert.equal(await page.locator('#boki-form').inputValue(),form);
 }
 async function assertFits(width){
  await page.setViewportSize({width,height:844});
  const size=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth}));
  assert.ok(size.scroll<=size.width+2,engineName+' document overflow '+JSON.stringify(size));
  for(const region of await page.locator('.boki-scroll').all()){
   assert.equal(await region.getAttribute('tabindex'),'0');
   const metrics=await region.evaluate(el=>({client:el.clientWidth,scroll:el.scrollWidth,viewport:innerWidth}));
   assert.ok(metrics.client<=metrics.viewport,'table must stay inside viewport');
  }
 }
 async function fillItem(item){
  if(item.type==='journal'){
   for(const side of ['debit','credit'])for(let row=0;row<item[side].length;row++){
    const [account,amount]=item[side][row];
    await page.locator('select[data-side="'+side+'"][data-row="'+row+'"]').selectOption(account);
    await page.locator('input[data-side="'+side+'"][data-row="'+row+'"]').fill(String(amount));
   }
  }else for(const f of item.fields)await page.locator('input[data-field="'+f.id+'"]').fill(String(f.answer));
 }
 try{
  await page.goto(BASE,{waitUntil:'load'});
  assert.equal(await page.locator('h1').count(),1);
  assert.equal(await page.locator('#boki-form option').count(),2);
  assert.equal(await page.locator('button[data-action="review"]').count(),0,'review hidden before any mistakes');
  await assertFits(320);await assertFits(390);
  for(const level of ['3','2'])for(const form of ['1','2']){
   await choose(level,form);await click('exam');
   const exam=C.examFor(D,level,form),items=C.allItems(exam);
   assert.equal((await saved()).active.form,form);
   const firstDeadline=(await saved()).active.deadline;
   assert.ok(await page.locator('.boki-scroll-hint').isVisible(),'mobile table scroll hint');
   const heading=await page.locator('#boki-heading').boundingBox(),toolbar=await page.locator('.boki-session-top').boundingBox();
   assert.ok(heading.y>=toolbar.y+toolbar.height,'question heading must not be hidden behind sticky toolbar');
   for(let i=0;i<items.length;i++){
    const item=items[i];
    assert.equal(await page.locator('.boki-solution').count(),0,'exam must not reveal answers early');
    await fillItem(item);
    if(item.type==='table'){
     await assertFits(320);await assertFits(390);
     for(const f of item.fields)assert.equal(await page.locator('input[data-field="'+f.id+'"]').inputValue(),String(f.answer));
    }
    if(i===0){
     await click('flag');assert.equal(await page.locator('#boki-flag').getAttribute('aria-pressed'),'true');
     assert.equal(await page.locator('#boki-flag').evaluate(el=>el===document.activeElement),true,'keyboard focus retained after flag');
    }
    // Resume a populated table from the exact published assets and saved session.
    if(item===items.find(q=>q.type==='table')){
     await click('pause');await page.reload({waitUntil:'load'});await click('resume');
     const state=await saved();assert.equal(state.active.level,level);assert.equal(state.active.form,form);assert.equal(state.active.index,i);assert.equal(state.active.deadline,firstDeadline);
     for(const f of item.fields)assert.equal(await page.locator('input[data-field="'+f.id+'"]').inputValue(),String(f.answer));
    }
    if(i<items.length-1)await click('next');
   }
   await click('finish');assert.match(await page.locator('.boki-summary').innerText(),/100\s*\/\s*100点/);
   assert.equal(await page.locator('button[data-action="result-review"]').count(),0,'perfect score must not offer empty review');
   const state=await saved();assert.equal(state.active,null);assert.equal(state.history[0].form,form);assert.equal(state.history[0].level,level);
   await page.locator('.boki-result details').first().locator('summary').click();assert.ok(await page.locator('.boki-solution').count()>0);
   await assertFits(320);await assertFits(390);
   await click('home');assert.equal(await page.locator('button[data-action="review"]').count(),0,'perfect form has no review target');console.log('PASS '+engineName+': level '+level+' form '+form+' all inputs, table resume, deadline, grading and responsive layout');
  }
  // Legacy records lack the form discriminator; their answer review must still work.
  await page.evaluate(key=>{const s=JSON.parse(localStorage.getItem(key));const h=s.history.find(h=>h.level==='3'&&h.form==='1');s.history=[h];delete h.form;localStorage.setItem(key,JSON.stringify(s));},KEY);
  await page.reload({waitUntil:'load'});await click('history');assert.match(await page.locator('.boki-summary').innerText(),/100\s*\/\s*100点/);await click('home');
  // Empty attempt and wrong-only retry keep the selected form.
  await choose('3','2');await click('exam');await click('finish');assert.match(await page.locator('.boki-summary').innerText(),/0\s*\/\s*100点/);assert.equal(await page.locator('button[data-action="result-review"]').count(),1,'incorrect result must offer review');await click('result-review');
  assert.equal((await saved()).active.form,'2');assert.equal((await saved()).active.ids.length,18);await click('pause');await click('discard');
  assert.equal(await page.locator('button[data-action="review"]').count(),1,'wrong answers enable review on the selected form');
  // Expired drafts grade once on resume, using the saved answers.
  await choose('2','2');await click('exam');await fillItem(E['2'].sections[0].items[0]);await click('pause');
  await page.evaluate(key=>{const s=JSON.parse(localStorage.getItem(key));s.active.deadline=Date.now()-1;localStorage.setItem(key,JSON.stringify(s));},KEY);
  await page.reload({waitUntil:'load'});await click('resume');assert.match(await page.locator('.boki-summary').innerText(),/4\s*\/\s*100点/);assert.equal((await saved()).active,null);
  await click('home');
  // A second mobile tab's newer saved session must not be overwritten.
  await choose('3','1');await click('practice');
  const otherTab=await context.newPage();await otherTab.goto(BASE,{waitUntil:'load'});
  await otherTab.evaluate(key=>{const s=JSON.parse(localStorage.getItem(key));s.active.flags['b3-j01']=true;localStorage.setItem(key,JSON.stringify(s));},KEY);
  await otherTab.close();const newer=await saved();
  await page.locator('input[data-side="debit"][data-row="0"]').fill('48000');
  assert.deepEqual(await saved(),newer,'stale tab must not overwrite another tab');
  assert.match(await page.locator('#boki-notice').innerText(),/別のタブ/);
  await page.reload({waitUntil:'load'});await click('resume');assert.equal((await saved()).active.flags['b3-j01'],true);
  await click('pause');await click('discard');
  // Exercise a storage quota error without a false "saved" claim.
  await choose('3','1');await click('practice');
  const before=(await saved()).active.answers;
  await page.evaluate(()=>{const original=Storage.prototype.setItem;Storage.prototype.setItem=function(k,v){if(k==='fll-boki-progress')throw new DOMException('quota','QuotaExceededError');return original.call(this,k,v);};});
  await page.locator('input[data-side="debit"][data-row="0"]').fill('48000');
  assert.match(await page.locator('#boki-notice').innerText(),/保存に失敗/);
  assert.deepEqual((await saved()).active.answers,before,'failed writes must not modify durable answers');
  assert.deepEqual(errors,[],'uncaught browser errors');
  console.log('PASS '+engineName+': legacy history, form-isolated wrong-only review, expired resume and quota failure');
 }finally{await context.close();await browser.close();}
}
(async()=>{for(const name of ['chromium','webkit'])await run(name);})().catch(e=>{console.error(e.stack||e);process.exitCode=1;});
