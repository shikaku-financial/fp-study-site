'use strict';
// RC1 browser smoke: real Chromium DOM, touch/mobile viewport. This is NOT Safari/iPhone hardware.
const assert = require('node:assert/strict');
const {chromium} = require('playwright');
const BASE = process.env.FP_LAB_TEST_URL || 'http://127.0.0.1:8765/';
async function main(){
  const browser = await chromium.launch({headless:true, args:['--no-sandbox']});
  const ctx = await browser.newContext({viewport:{width:390,height:844},deviceScaleFactor:3,isMobile:true,hasTouch:true,locale:'ja-JP'});
  const page = await ctx.newPage();
  const jsErrors = [];
  page.on('pageerror', error => jsErrors.push(error.message));
  page.on('dialog', dialog => { dialog.accept().catch(e => jsErrors.push('dialog: '+e.message)); });
  const visible = async selector => assert.equal(await page.locator(selector).isVisible(),true,selector+' is not visible');
  async function step(name,run){
    await run(); console.log('PASS browser: '+name);
  }
  try{
    await page.goto(BASE,{waitUntil:'load',timeout:45000});
    await step('mobile home and 60-question exam available',async()=>{
      await visible('#home');
      await page.locator('#startFull').waitFor({state:'visible'});
      assert.equal(await page.locator('#startFull').isEnabled(),true,'FP3 60-question exam should be available');
      assert.match(await page.locator('#count').innerText(),/180問/);
    });
    await step('FP3 academic answer and feedback',async()=>{
      await page.locator('#shuffle').uncheck();
      await page.locator('#startPractice').click();
      await visible('#quiz');
      assert.equal(await page.locator('#choices button').count(),2,'first FP3 question is ○×');
      await page.locator('#choices button').first().click();
      await page.locator('#submit').click();
      await visible('#feedback');
      await page.locator('#goHomePractice').click();
      await visible('#home');
    });
    await step('FP2 four-option practice',async()=>{
      await page.locator('#level2').click();
      await page.locator('#startPractice').click();
      await visible('#quiz');
      assert.equal(await page.locator('#choices button').count(),4,'first FP2 question is 4-option');
      await page.locator('#choices button').first().click();
      await page.locator('#submit').click();
      await visible('#feedback');
      await page.locator('#goHomePractice').click();
      await visible('#home');
    });
    await step('FP3 full mock save, reload, resume, grade and retry',async()=>{
      await page.locator('#level3').click();
      await page.locator('#startFull').click();
      await visible('#exam');
      assert.equal(await page.locator('#examNav button').count(),60);
      await page.locator('#examChoices button').first().click();
      await page.locator('#examNext').click();
      assert.match(await page.locator('#examProgress').innerText(),/2 \/ 60/);
      await page.locator('#examLeave').click();
      await visible('#home');
      await page.reload({waitUntil:'load'});
      await visible('#resumeExam');
      await page.locator('#resumeExam').click();
      await visible('#exam');
      assert.match(await page.locator('#examProgress').innerText(),/2 \/ 60/);
      await page.locator('#examFinish').click();
      await visible('#examResult');
      assert.match(await page.locator('#examSummary').innerText(),/60問/);
      await page.locator('#examRetry').click();
      await visible('#exam');
      assert.equal(await page.locator('#examNav button').count(),60);
      await page.locator('#examLeave').click();
      await visible('#home');
    });
    await step('FP2 full mock also starts',async()=>{
      await page.locator('#level2').click();
      await page.locator('#startFull').click();
      await visible('#exam');
      assert.equal(await page.locator('#examChoices button').count(),4);
      assert.equal(await page.locator('#examNav button').count(),60);
      await page.locator('#examFinish').click();
      await visible('#examResult');
      await page.locator('#examResultHome').click();
      await visible('#home');
    });
    await step('all eight practical courses render on mobile',async()=>{
      await page.locator('#openPractical').click();
      await visible('#practicalHome');
      for(const [level,count] of [['3',3],['2',5]]){
        await page.locator('#prSelectLevel'+level).click();
        assert.equal(await page.locator('#prTracks .pr-track').count(),count,'FP'+level+' course count');
        for(let i=0;i<count;i++){
          const title=await page.locator('#prTracks .pr-track').nth(i).locator('h4').innerText();
          await page.locator('#prTracks .pr-track').nth(i).locator('button.primary').click();
          await visible('#practicalExam');
          assert.ok((await page.locator('#prQuestion').innerText()).trim().length>0,'blank question: '+title);
          assert.ok((await page.locator('#prCaseText').innerText()).trim().length>0,'blank case: '+title);
          assert.match(await page.locator('#prProgress').innerText(),/^1\//);
          await page.locator('#prSaveExit').click();
          await visible('#practicalHome');
        }
      }
    });
    await step('practical draft reopens after reload; result and review work',async()=>{
      await page.reload({waitUntil:'load'});
      await page.locator('#openPractical').click();
      await visible('#practicalHome');
      await visible('#prResume');
      await page.locator('#prResume').click();
      await visible('#practicalExam');
      await page.locator('#prSubmit').click();
      await visible('#practicalResult');
      assert.match(await page.locator('#prSummary').innerText(),/問中/);
      await page.locator('#prAll').click();
      assert.ok(await page.locator('#prReviews details').count()>0,'review list empty');
      await page.locator('#prResultHome').click();
      await visible('#practicalHome');
    });
    assert.deepEqual(jsErrors,[],'uncaught JS errors');
    console.log('PASS: mobile Chromium RC1 smoke (not Safari hardware)');
  } catch(error){
    try { await page.screenshot({path:'.ci/browser-failure.png',fullPage:true}); } catch {}
    if(jsErrors.length)console.error('JS errors:',jsErrors);
    throw error;
  } finally{
    await browser.close();
  }
}
main().catch(err=>{console.error(err.stack||err);process.exitCode=1;});
