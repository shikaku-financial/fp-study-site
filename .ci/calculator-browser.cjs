'use strict';
const assert=require('node:assert/strict'),{chromium,webkit}=require('playwright');
const BASE=process.env.FLL_TEST_URL||'http://127.0.0.1:8766/';
async function run(name){
 const browser=await(name==='webkit'?webkit:chromium).launch({headless:true,...(name==='chromium'?{args:['--no-sandbox']}: {})});
 const ctx=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,locale:'ja-JP'});
 const page=await ctx.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('dialog',d=>d.accept());
 const key=k=>page.locator('#fll-calc-panel button[data-calc="'+k+'"]').click();
 const storage=()=>page.evaluate(()=>Object.fromEntries(Object.keys(localStorage).sort().map(k=>[k,localStorage.getItem(k)])));
 const result=()=>page.locator('#fll-calc-display').innerText();
 async function fits(width,height){
  await page.setViewportSize({width,height});
  const b=await page.locator('#fll-calculator').boundingBox();assert.ok(b.x>=0&&b.y>=0&&b.x+b.width<=width+1&&b.y+b.height<=height+1,'calculator stays in viewport');
  assert.ok(await page.locator('#fll-calc-toggle').isVisible());
  for(const button of await page.locator('#fll-calculator button:visible').all()){const box=await button.boundingBox();assert.ok(box.height>=44&&box.width>=44,'calculator touch targets');}
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2),'no document overflow');
 }
 try{
  for(const lab of ['fp.html','boki.html']){
   await page.goto(new URL(lab,BASE).href,{waitUntil:'load'});
   const toggle=page.locator('#fll-calc-toggle'),panel=page.locator('#fll-calc-panel');
   assert.equal(await toggle.getAttribute('aria-expanded'),'false');assert.equal(await panel.isVisible(),false);
   const initial=await storage();await toggle.click();
   for(const [w,h]of[[320,568],[390,844],[768,600],[1440,900]])await fits(w,h);
   await page.setViewportSize({width:390,height:844});
   for(const k of ['0','.','1','+','0','.','2','equals'])await key(k);
   assert.equal(await result(),'0.3');
   await toggle.click();assert.equal(await panel.isVisible(),false);await toggle.click();assert.equal(await result(),'0.3','result retained on close/reopen');
   for(const k of ['clear','9','/','0','equals'])await key(k);assert.match(await result(),/0では割れません/);await key('7');assert.equal(await result(),'7');
   for(const k of ['clear','5','+','sign','2','equals'])await key(k);
   assert.equal(await result(),'3','sign after operator must negate the right operand');
   for(const k of ['clear','5','-','sign','2','equals'])await key(k);
   assert.equal(await result(),'7','subtracting a negative right operand');
   await panel.focus();await panel.press('Escape');assert.equal(await panel.isVisible(),false);assert.equal(await toggle.evaluate(el=>el===document.activeElement),true);
   assert.deepEqual(await storage(),initial,'calculator never changes learning records');
   if(lab==='fp.html'){
    await page.locator('#openPracticalTop').click();await page.locator('#prSelectLevel2').click();
    await page.locator('.pr-track').filter({hasText:'損保顧客資産相談業務'}).getByRole('button',{name:'第1回（15問）を練習',exact:true}).click();
    await page.locator('#practicalExam').waitFor({state:'visible'});
   }else await page.locator('button[data-action="practice"]').click();
   const input=page.locator(lab==='fp.html'?'#practicalExam input[type="text"]:visible':'#boki-app input[data-side="debit"]:visible').first();
   assert.ok(await input.isVisible(),'numeric answer field available');
   await input.fill('123');
   await toggle.click();await key('clear');await key('8');
   // Scroll the answer above the dock, as a learner does while the calculator is open.
   await input.evaluate(el=>el.scrollIntoView({block:'start'}));await input.press('End');await input.press('4');
   assert.equal(await input.inputValue(),'1234');assert.equal(await result(),'8','answer keystrokes do not operate calculator');
   const before=await storage();await key('+');await key('2');await key('equals');assert.equal(await result(),'10');
   assert.equal(await input.inputValue(),'1234','calculator never overwrites an answer');assert.deepEqual(await storage(),before);
   const next=page.locator(lab==='fp.html'?'#prNext':'button[data-action="next"]');
   await next.evaluate(el=>el.scrollIntoView({block:'start'}));await next.click();assert.equal(await panel.isVisible(),true,'calculator remains open across question rendering');assert.equal(await result(),'10');
   await toggle.click();
   console.log('PASS '+name+' '+lab+': exact decimal UI, on/off, preserved result, 320–1440px, answer/storage isolation and question navigation');
  }
  assert.deepEqual(errors,[]);
 }finally{await ctx.close();await browser.close();}
}
(async()=>{await run('chromium');await run('webkit');})().catch(e=>{console.error(e.stack||e);process.exitCode=1;});
