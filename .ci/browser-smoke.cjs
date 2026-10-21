'use strict';
// RC1 browser smoke: real Chromium/WebKit DOM, touch/mobile viewport. Not iPhone Safari hardware.
const assert = require('node:assert/strict');
const {chromium, webkit} = require('playwright');
const BASE = process.env.FP_LAB_TEST_URL || 'http://127.0.0.1:8765/';
async function main(){
  const engineName = process.env.FP_LAB_BROWSER || 'chromium';
  assert.ok(['chromium','webkit'].includes(engineName),'unknown browser engine');
  const engine = engineName==='webkit'?webkit:chromium;
  const browser = await engine.launch({headless:true,...(engineName==='chromium'?{args:['--no-sandbox']}: {})});
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
    await step('FP2 JAFP mixed-choice, numeric and multi-numeric inputs persist and grade',async()=>{
      // FP2 Japan FP Association practice: q1=4-part multi_choice, q4=numeric, q5=multi_numeric.
      await visible('#practicalHome');
      await page.locator('#prSelectLevel2').click();
      await page.locator('#prTracks .pr-track').first().locator('button.primary').click();
      await visible('#practicalExam');
      assert.equal(await page.locator('#prMultiNumeric .pr-sub-answer').count(),4,'four answer fields in JAFP2 q1');
      for(const [i,correctIndex] of [1,0,0,1].entries()){
        // The partial answer rerenders the fieldset after each click.
        await page.locator('#prMultiNumeric .pr-sub-answer').nth(i).locator('button').nth(correctIndex).click();
        assert.equal(await page.locator('#prMultiNumeric .pr-sub-answer').nth(i).locator('button').nth(correctIndex).getAttribute('aria-pressed'),'true','q1 choice '+i);
      }
      await page.locator('#prSaveExit').click();
      await visible('#practicalHome');
      await page.reload({waitUntil:'load'});
      await page.locator('#openPractical').click();
      await page.locator('#prResume').click();
      await visible('#practicalExam');
      assert.match(await page.locator('#prProgress').innerText(),/^1\/40問/);
      for(const [i,correctIndex] of [1,0,0,1].entries()){
        assert.equal(await page.locator('#prMultiNumeric .pr-sub-answer').nth(i).locator('button').nth(correctIndex).getAttribute('aria-pressed'),'true','saved choice '+i);
      }
      for(let i=0;i<3;i++)await page.locator('#prNext').click();
      assert.match(await page.locator('#prProgress').innerText(),/^4\/40問/);
      await visible('#prNumberInput');
      await page.locator('#prNumberInput').fill('12,34');
      assert.equal(await page.locator('#prNumberInput').getAttribute('aria-invalid'),'true','malformed grouped number rejected');
      await page.locator('#prNumberInput').fill('２．１４２');
      assert.equal(await page.locator('#prNumberInput').getAttribute('aria-invalid'),'false','fullwidth decimal accepted');
      await page.locator('#prNext').click();
      assert.match(await page.locator('#prProgress').innerText(),/^5\/40問/);
      assert.equal(await page.locator('#prMultiNumeric .pr-sub-answer input').count(),2);
      await page.locator('#prSubInput0').fill('３８．１');
      await page.locator('#prSubInput1').fill('１．６４');
      assert.equal(await page.locator('#prSubInput0').getAttribute('aria-invalid'),'false');
      assert.equal(await page.locator('#prSubInput1').getAttribute('aria-invalid'),'false');
      await page.locator('#prSaveExit').click();
      await page.reload({waitUntil:'load'});
      await page.locator('#openPractical').click();
      await page.locator('#prResume').click();
      await visible('#practicalExam');
      assert.match(await page.locator('#prProgress').innerText(),/^5\/40問/);
      assert.equal(await page.locator('#prSubInput0').inputValue(),'３８．１');
      assert.equal(await page.locator('#prSubInput1').inputValue(),'１．６４');
      await page.locator('#prPrev').click();
      assert.equal(await page.locator('#prNumberInput').inputValue(),'２．１４２');
      await page.locator('#prNext').click();
      await page.locator('#prSubmit').click();
      await visible('#practicalResult');
      assert.match(await page.locator('#prSummary').innerText(),/40問中3問正解/);
      await page.locator('#prAll').click();
      await page.locator('#prReviews details').first().locator('summary').first().click();
      assert.match(await page.locator('#prReviews details').first().innerText(),/正解/);
      await page.locator('#prResultHome').click();
      await visible('#practicalHome');
    });
    await step('FP2 Kinzai kana wordbank supports hiragana and survives reload',async()=>{
      await page.locator('#prSelectLevel2').click();
      // Japan FP Association is first; Kinzai individual consultation is second.
      await page.locator('#prTracks .pr-track').nth(1).locator('button.primary').click();
      await visible('#practicalExam');
      assert.match(await page.locator('#prQuestion').innerText(),/語群/);
      assert.equal(await page.locator('#prMultiNumeric .pr-sub-answer input').count(),3);
      // Word-bank codes: ア=1, エ=4, キ=7.
      for(const [i,val] of ['あ','え','き'].entries()){
        await page.locator('#prSubInput'+i).fill(val);
        assert.equal(await page.locator('#prSubInput'+i).getAttribute('aria-invalid'),'false','kana input '+i);
      }
      await page.locator('#prSaveExit').click();
      await page.reload({waitUntil:'load'});
      await page.locator('#openPractical').click();
      await page.locator('#prResume').click();
      await visible('#practicalExam');
      for(const [i,val] of ['あ','え','き'].entries())assert.equal(await page.locator('#prSubInput'+i).inputValue(),val);
      await page.locator('#prSubmit').click();
      await visible('#practicalResult');
      assert.match(await page.locator('#prSummary').innerText(),/15問中1問正解/);
      await page.locator('#prResultHome').click();
      await visible('#practicalHome');
    });
    await step('practical finish does not offer an already-graded orphan draft or duplicate history',async()=>{
      await visible('#practicalHome');
      await page.locator('#prSelectLevel3').click();
      await page.locator('#prTracks .pr-track').first().locator('button.primary').click();
      await visible('#practicalExam');
      // Simulate a storage error that occurs only after the final result has been stored.
      await page.evaluate(()=>{
        const original=Storage.prototype.removeItem;
        Storage.prototype.removeItem=function(key){
          if(key==='fp-training-practical-v12-draft')throw new Error('simulated draft cleanup failure');
          return original.call(this,key);
        };
      });
      await page.locator('#prSubmit').click();
      await visible('#practicalResult');
      const before=await page.evaluate(()=>({
        orphan:!!localStorage.getItem('fp-training-practical-v12-draft'),
        results:JSON.parse(localStorage.getItem('fp-training-practical-v12-results')).attempts.length,
      }));
      assert.equal(before.orphan,true,'simulated cleanup failure leaves draft');
      await page.locator('#prResultHome').click();
      await visible('#practicalHome');
      assert.equal(await page.locator('#prResume').isVisible(),false,'completed attempt must not appear as resumable');
      await page.reload({waitUntil:'load'});
      await page.locator('#openPractical').click();
      await visible('#practicalHome');
      assert.equal(await page.locator('#prResume').isVisible(),false,'completed attempt stays hidden after reload');
      await page.locator('#prSelectLevel3').click();
      await page.locator('#prTracks .pr-track').first().locator('button.primary').click();
      await visible('#practicalExam');
      await page.locator('#prSubmit').click();
      await visible('#practicalResult');
      const after=await page.evaluate(()=>JSON.parse(localStorage.getItem('fp-training-practical-v12-results')).attempts);
      assert.equal(after.length,before.results+1,'new attempt creates exactly one more history record');
      assert.notEqual(after[0].id,after[1].id,'attempt IDs remain distinct');
    });
    assert.deepEqual(jsErrors,[],'uncaught JS errors');
    console.log('PASS: mobile '+engineName+' RC1 smoke (not Safari hardware)');
  } catch(error){
    try { await page.screenshot({path:'.ci/browser-failure.png',fullPage:true}); } catch {}
    if(jsErrors.length)console.error('JS errors:',jsErrors);
    throw error;
  } finally{
    await browser.close();
  }
}
main().catch(err=>{console.error(err.stack||err);process.exitCode=1;});
