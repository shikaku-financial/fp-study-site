'use strict';
// Node-only simulation: a mid-stream script failure must not replay successful global scripts.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const source=fs.readFileSync(path.join(__dirname,'../practical-loader.js'),'utf8');
function makeScenario({search='',failOn='',failCount=0,exposeController=true}={}){
 const loaded=[],removed=[];let opened=0,failures=0;
 const status={textContent:''};
 const controls=Object.fromEntries(['openPractical','openPracticalTop'].map(id=>{
  const handlers=new Set(),attrs=new Map();
  const control={disabled:false,addEventListener:(type,handler)=>{if(type==='click')handlers.add(handler);},
   removeEventListener:(type,handler)=>{if(type==='click')handlers.delete(handler);},
   setAttribute:(key,value)=>attrs.set(key,value),removeAttribute:key=>attrs.delete(key),
   getAttribute:key=>attrs.get(key),
   click:()=>Promise.all([...handlers].map(handler=>handler({preventDefault(){}})))};
  return [id,control];
 }));
 const window={location:{search}};
 const doc={
  getElementById:id=>id==='practicalLoadStatus'?status:controls[id],
  createElement:()=>({remove(){removed.push(this.src);}}),
  body:{append(script){
   loaded.push(script.src);
   queueMicrotask(()=>{
    if(script.src.startsWith(failOn)&&failures<failCount){failures++;script.onerror();return;}
    if(exposeController&&script.src.startsWith('practical.js?')) window.__fpPracticalTest={openPractical(){opened++;}};
    script.onload();
   });
  }}
 };
 vm.runInNewContext(source,{document:doc,window,URLSearchParams,queueMicrotask});
 return {loaded,removed,status,controls,window,get opened(){return opened;}};
}
(async()=>{
 const normal=makeScenario();
 assert.equal(normal.loaded.length,0,'academic entry must not eager-load practical modules');
 await Promise.all([normal.controls.openPractical.click(),normal.controls.openPracticalTop.click()]);
 assert.deepEqual(normal.loaded.map(s=>s.split('?')[0]),['practical-questions.js','practical-materials.js','practical.js'],'classic modules load in dependency order');
 assert.equal(normal.opened,1,'concurrent taps must only open practical once');
 assert.equal(normal.status.textContent,'');
 assert.equal(normal.controls.openPractical.disabled,false);
 const broken=makeScenario({failOn:'practical-materials.js?',failCount:1});
 await broken.controls.openPractical.click();
 assert.equal(broken.opened,0);
 assert.match(broken.status.textContent,/もう一度実技試験を選んでください/);
 assert.equal(broken.controls.openPractical.disabled,false);
 assert.equal(broken.controls.openPractical.getAttribute('aria-busy'),undefined);
 assert.deepEqual(broken.loaded.map(s=>s.split('?')[0]),['practical-questions.js','practical-materials.js']);
 assert.equal(broken.removed.length,1,'remove failed tag');
 await broken.controls.openPractical.click();
 assert.deepEqual(broken.loaded.map(s=>s.split('?')[0]),['practical-questions.js','practical-materials.js','practical-materials.js','practical.js'],'retry must resume after successful globals');
 assert.equal(broken.opened,1);
 assert.equal(broken.status.textContent,'');
 const direct=makeScenario({search:'?view=practical&level=2'});
 await new Promise(resolve=>setImmediate(resolve));
 assert.equal(direct.loaded.length,3,'direct link triggers practical loading');
 assert.equal(direct.opened,0,'direct links are handled by the practical controller');
 const corrupted=makeScenario({exposeController:false});
 await corrupted.controls.openPractical.click();
 assert.match(corrupted.status.textContent,/ページを再読み込み/,'permanent init error must not promise click-only recovery');
 console.log('PASS: practical bundle is lazy, ordered, single-flight, retry-safe, direct-link compatible and error states accessible');
})().catch(e=>{console.error(e.stack||e);process.exitCode=1;});