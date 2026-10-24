'use strict';
// Production UI flow with small DOM/storage doubles. This is not a real browser test.
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const root=path.resolve(__dirname,'..'),KEY='fll-boki-progress';
function env(saved){
 const data=new Map(saved||[]),events={},nodes={};let now=1000000,fail=false;
 function node(id){return nodes[id]??={innerHTML:'',textContent:'',value:'all',dataset:{},classList:{toggle(){}},addEventListener:(type,fn)=>{events[id+':'+type]=fn;},replaceChildren(){},focus(){},scrollIntoView(){},closest(){return null;},querySelector:selector=>node(selector)};}
 class Clock extends Date{constructor(...args){super(...(args.length?args:[now]));}static now(){return now;}}
 const context=vm.createContext({module:undefined,Date:Clock,Math,JSON,Number,String,Array,Object,Map,Set,console,
  document:{hidden:false,getElementById:node,createTextNode:t=>t,addEventListener:(type,fn)=>{events['document:'+type]=fn;}},
  window:{confirm:()=>true,addEventListener:(type,fn)=>{events['window:'+type]=fn;}},
  localStorage:{getItem:k=>data.get(k)??null,setItem:(k,v)=>{if(fail)throw Error('quota');data.set(k,v);}},setInterval:()=>1,clearInterval(){}});
 for(const file of ['boki-data.js','boki-extra.js','boki-core.js','boki.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context);
 return {data,nodes,click:(action,extra={})=>events['boki-app:click']({target:{closest:()=>({disabled:false,dataset:{action,...extra}})}}),input:dataset=>events['boki-app:input']({target:{dataset,value:dataset.value}}),changeForm:value=>events['boki-app:change']({target:{id:'boki-form',value}}),state:()=>JSON.parse(data.get(KEY)),fail:v=>{fail=v;},advance:ms=>{now+=ms;events['document:visibilitychange']?.();}};
}
let e=env();assert.ok(!e.nodes['boki-app'].innerHTML.includes('data-action="review"'),'review should be hidden before any mistakes');e.data.set('fp-lab-progress','FP sentinel');e.click('exam');let s=e.state();assert.equal(s.active.ids.length,18);assert.equal(s.active.deadline-s.active.started,3600000);
for(const [side,account]of[['debit','仕入'],['credit','買掛金']]){e.input({side,row:'0',part:'0',value:account});e.input({side,row:'0',part:'1',value:'４８，０００'});}
e.click('next');assert.equal(e.state().active.index,1);e.click('prev');assert.ok(e.nodes['boki-app'].innerHTML.includes('４８，０００'));
e.click('flag');assert.equal(e.state().active.flags['b3-j01'],true);e.click('pause');assert.ok(e.nodes['boki-app'].innerHTML.includes('中断した学習を再開'));
e=env(e.data);e.click('resume');assert.ok(e.nodes['boki-app'].innerHTML.includes('４８，０００'));e.click('finish');assert.equal(e.state().active,null);assert.equal(e.state().history.length,1);assert.ok(e.nodes['boki-app'].innerHTML.includes('3 <span'));
e.click('result-review');assert.equal(e.state().active.ids.length,17);assert.equal(e.state().active.mode,'review');e.click('pause');e.click('clear');assert.equal(e.state().history.length,0);assert.equal(e.data.get('fp-lab-progress'),'FP sentinel');
e=env();e.click('level',{level:'2'});e.click('exam');assert.equal(e.state().active.deadline-e.state().active.started,5400000);e.advance(5400001);assert.equal(e.state().history.length,1);assert.equal(e.state().history[0].expired,true);assert.equal(e.state().active,null);assert.ok(e.nodes['boki-notice'].textContent.includes('制限時間'));
e=env();e.click('practice');e.input({side:'debit',row:'0',part:'0',value:'仕入'});const saved=e.data.get(KEY);e.fail(true);e.input({side:'debit',row:'0',part:'1',value:'48000'});assert.equal(e.data.get(KEY),saved);assert.ok(e.nodes['boki-notice'].textContent.includes('保存に失敗'));e=env(e.data);e.click('resume');assert.equal(e.state().active.answers['b3-j01'].debit[0][1],'');e.fail(false);e.click('check');assert.equal(e.state().active.checked['b3-j01'],true);assert.ok(e.nodes['boki-app'].innerHTML.includes('正しい仕訳'));e.fail(true);e.click('flag');assert.ok(e.nodes['boki-notice'].textContent.includes('保存に失敗'));e.fail(false);e.click('flag');assert.equal(e.nodes['boki-notice'].textContent,'','successful save clears stale storage-failure warning');
// Save-and-exit must keep the visible answers on screen when durable save fails.
e=env();e.click('practice');e.input({side:'debit',row:'0',part:'0',value:'仕入'});
const pauseBefore=e.data.get(KEY);
e.fail(true);e.input({side:'debit',row:'0',part:'1',value:'48000'});e.click('pause');
assert.equal(e.data.get(KEY),pauseBefore,'failed save and exit cannot change durable draft');
assert.ok(e.nodes['boki-app'].innerHTML.includes('data-action="pause"'),'failed save and exit must stay on question screen');
assert.match(e.nodes['boki-notice'].textContent,/保存に失敗/);
e.fail(false);e.click('pause');
assert.ok(e.nodes['boki-app'].innerHTML.includes('中断した学習を再開'),'recovered save returns to home');
assert.equal(e.state().active.answers['b3-j01'].debit[0][1],'48000','answers persisted after successful retry');
// Stored expired attempts must finish once on resume, not start a new timer.
e=env();e.click('exam');const stale=e.state();stale.active.deadline=1;e=env([[KEY,JSON.stringify(stale)]]);e.click('resume');assert.equal(e.state().history.length,1);assert.equal(e.state().active,null);
e=env([[KEY,'{broken']]);assert.ok(e.nodes['boki-notice'].textContent.includes('読み込めません'));assert.equal(e.data.get(KEY),'{broken');
// Exam form is retained through reload, history and wrong-only review.
e=env();e.changeForm('2');e.click('exam');assert.equal(e.state().active.form,'2');assert.ok(e.state().active.ids.every(id=>id.includes('-r2-')));
e.input({side:'debit',row:'0',part:'0',value:'売掛金'});e.input({side:'debit',row:'0',part:'1',value:'95000'});e.input({side:'credit',row:'0',part:'0',value:'売上'});e.input({side:'credit',row:'0',part:'1',value:'95000'});
e.click('pause');e=env(e.data);e.click('resume');assert.ok(e.nodes['boki-app'].innerHTML.includes('第2回'));e.click('finish');assert.equal(e.state().history[0].form,'2');e.click('result-review');assert.equal(e.state().active.form,'2');assert.equal(e.state().active.ids.length,17);assert.ok(!e.state().active.ids.includes('b3-r2-j01'));
e.click('pause');e.click('discard');e.changeForm('1');assert.ok(!e.nodes['boki-app'].innerHTML.includes('data-action="review"'),'review unavailable for untouched first form');
// Historical first-exam sessions without a form discriminator remain valid.
e=env();e.click('exam');const legacy=e.state();delete legacy.active.form;e=env([[KEY,JSON.stringify(legacy)]]);e.click('resume');assert.ok(e.nodes['boki-app'].innerHTML.includes('第1回'));assert.equal(e.state().active.ids[0],'b3-j01');
// A second tab must not be overwritten by a stale session's next input.
e=env();e.click('practice');const original=e.data.get(KEY);const other=JSON.parse(original);other.active.flags['b3-j01']=true;e.data.set(KEY,JSON.stringify(other));const external=e.data.get(KEY);
e.input({side:'debit',row:'0',part:'1',value:'48000'});assert.equal(e.data.get(KEY),external,'stale tab must not overwrite newer saved records');assert.match(e.nodes['boki-notice'].textContent,/別のタブ/);
e=env(e.data);e.click('resume');assert.equal(e.state().active.flags['b3-j01'],true,'reload should recover the other tab\'s record');
// A perfect result must not offer an action that has no questions to review.
e=env();e.click('practice');const single=e.state();single.active.ids=['b3-j01'];single.active.index=0;
single.active.answers={'b3-j01':{debit:[['仕入','48000'],['','']],credit:[['買掛金','48000'],['','']]}};
e=env([[KEY,JSON.stringify(single)]]);e.click('resume');e.click('finish');
assert.ok(e.nodes['boki-app'].innerHTML.includes('3 <span'),'single-item correct result');
assert.ok(!e.nodes['boki-app'].innerHTML.includes('data-action="result-review"'),'no empty review action after all correct');
e.click('home');assert.ok(!e.nodes['boki-app'].innerHTML.includes('data-action="review"'),'no home review after perfect attempt');
e=env();e.click('practice');e.click('finish');
assert.ok(e.nodes['boki-app'].innerHTML.includes('data-action="result-review"'),'review remains available for wrong answers');
e.click('home');assert.ok(e.nodes['boki-app'].innerHTML.includes('data-action="review"'),'home review becomes available after wrong answers');
e.click('review');assert.equal(e.state().active.mode,'review');
console.log('PASS: bookkeeping production UI event flows; navigation, selection/numeric persistence, reload/resume, isolated FP records, wrong-only review, exam timeout, expired resume, corrupt storage and quota failure');
