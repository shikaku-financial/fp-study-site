'use strict';
// Production UI flow with small DOM/storage doubles. This is not a real browser test.
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const root=path.resolve(__dirname,'..'),KEY='fll-boki-progress';
function env(saved){
 const data=new Map(saved||[]),events={},nodes={};let now=1000000,fail=false;
 function node(id){return nodes[id]??={innerHTML:'',textContent:'',value:'all',dataset:{},classList:{toggle(){}},addEventListener:(type,fn)=>{events[id+':'+type]=fn;},replaceChildren(){},focus(){},scrollIntoView(){}};}
 class Clock extends Date{constructor(...args){super(...(args.length?args:[now]));}static now(){return now;}}
 const context=vm.createContext({module:undefined,Date:Clock,Math,JSON,Number,String,Array,Object,Map,Set,console,
  document:{hidden:false,getElementById:node,createTextNode:t=>t,addEventListener:(type,fn)=>{events['document:'+type]=fn;}},
  window:{confirm:()=>true,addEventListener:(type,fn)=>{events['window:'+type]=fn;}},
  localStorage:{getItem:k=>data.get(k)??null,setItem:(k,v)=>{if(fail)throw Error('quota');data.set(k,v);}},setInterval:()=>1,clearInterval(){}});
 for(const file of ['boki-data.js','boki-core.js','boki.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context);
 return {data,nodes,click:(action,extra={})=>events['boki-app:click']({target:{closest:()=>({disabled:false,dataset:{action,...extra}})}}),input:dataset=>events['boki-app:input']({target:{dataset,value:dataset.value}}),state:()=>JSON.parse(data.get(KEY)),fail:v=>{fail=v;},advance:ms=>{now+=ms;events['document:visibilitychange']?.();}};
}
let e=env();e.data.set('fp-lab-progress','FP sentinel');e.click('exam');let s=e.state();assert.equal(s.active.ids.length,18);assert.equal(s.active.deadline-s.active.started,3600000);
for(const [side,account]of[['debit','仕入'],['credit','買掛金']]){e.input({side,row:'0',part:'0',value:account});e.input({side,row:'0',part:'1',value:'４８，０００'});}
e.click('next');assert.equal(e.state().active.index,1);e.click('prev');assert.ok(e.nodes['boki-app'].innerHTML.includes('４８，０００'));
e.click('flag');assert.equal(e.state().active.flags['b3-j01'],true);e.click('pause');assert.ok(e.nodes['boki-app'].innerHTML.includes('中断した学習を再開'));
e=env(e.data);e.click('resume');assert.ok(e.nodes['boki-app'].innerHTML.includes('４８，０００'));e.click('finish');assert.equal(e.state().active,null);assert.equal(e.state().history.length,1);assert.ok(e.nodes['boki-app'].innerHTML.includes('3 <span'));
e.click('result-review');assert.equal(e.state().active.ids.length,17);assert.equal(e.state().active.mode,'review');e.click('pause');e.click('clear');assert.equal(e.state().history.length,0);assert.equal(e.data.get('fp-lab-progress'),'FP sentinel');
e=env();e.click('level',{level:'2'});e.click('exam');assert.equal(e.state().active.deadline-e.state().active.started,5400000);e.advance(5400001);assert.equal(e.state().history.length,1);assert.equal(e.state().history[0].expired,true);assert.equal(e.state().active,null);assert.ok(e.nodes['boki-notice'].textContent.includes('制限時間'));
e=env();e.click('practice');e.input({side:'debit',row:'0',part:'0',value:'仕入'});const saved=e.data.get(KEY);e.fail(true);e.input({side:'debit',row:'0',part:'1',value:'48000'});assert.equal(e.data.get(KEY),saved);assert.ok(e.nodes['boki-notice'].textContent.includes('保存に失敗'));e=env(e.data);e.click('resume');assert.equal(e.state().active.answers['b3-j01'].debit[0][1],'');e.fail(false);e.click('check');assert.equal(e.state().active.checked['b3-j01'],true);assert.ok(e.nodes['boki-app'].innerHTML.includes('正しい仕訳'));
// Stored expired attempts must finish once on resume, not start a new timer.
e=env();e.click('exam');const stale=e.state();stale.active.deadline=1;e=env([[KEY,JSON.stringify(stale)]]);e.click('resume');assert.equal(e.state().history.length,1);assert.equal(e.state().active,null);
e=env([[KEY,'{broken']]);assert.ok(e.nodes['boki-notice'].textContent.includes('読み込めません'));assert.equal(e.data.get(KEY),'{broken');
console.log('PASS: bookkeeping production UI event flows; navigation, selection/numeric persistence, reload/resume, isolated FP records, wrong-only review, exam timeout, expired resume, corrupt storage and quota failure');
