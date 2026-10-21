'use strict';
// Execute production practical finish with failed draft removal/history writes.
// An orphan draft must not duplicate a successfully saved result on another finish.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(process.argv[2]||path.join(__dirname,'../..'));
const source=fs.readFileSync(path.join(root,'practical.js'),'utf8');
const section=(a,b)=>{const start=source.indexOf(a),end=source.indexOf(b,start+a.length);assert.ok(start>=0&&end>start);return source.slice(start,end)};
const helpers=section('const attemptKey =','function renderPracticalHistory(){');
const actualFinish=section('function finish(){','function renderResult(){');
function scenario({failRemoval=false,failHistoryOnce=false}){
  const DRAFT='draft',HISTORY='history';
  const storage=new Map();
  const base={attemptId:'pr-fixed-attempt-42',startedAt:1000,track:'jafp3',mode:'set-1',
    questions:[{id:'q1'}],answers:[0],pos:0};
  storage.set(DRAFT,JSON.parse(JSON.stringify(base)));
  let renders=0,updates=0,alerts=0,historyWrites=0;
  const context=vm.createContext({
    attempt:JSON.parse(JSON.stringify(base)),DRAFT,HISTORY,Date,Math,
    grade:()=>true,completeAnswer:()=>true,confirm:()=>true,
    save:(key,data)=>{
      if(key===HISTORY){
        historyWrites++;
        if(failHistoryOnce){failHistoryOnce=false;return false;}
      }
      storage.set(key,JSON.parse(JSON.stringify(data)));return true;
    },
    read:(key,fallback)=>storage.has(key)?storage.get(key):fallback,
    remove:(key)=>{if(!failRemoval)storage.delete(key);},
    navigate:(to)=>{assert.equal(to,'practicalResult');updates++;},
    renderResult:()=>{renders++;},
    alert:()=>{alerts++;},
  });
  vm.runInContext(helpers+';this.isFinished=alreadyFinished;this.keyFor=attemptKey;',context);
  assert.equal(context.isFinished(storage.get(DRAFT)),false,'new draft is not complete');
  vm.runInContext(actualFinish+';finish();',context);
  if(failHistoryOnce)throw Error('mutated flag should be false');
  const firstCount=(storage.get(HISTORY)?.attempts||[]).length;
  if(!firstCount){
    assert.equal(renders,0,'failed history save must not show result');
    assert.equal(updates,0,'failed history save must not navigate');
    assert.ok(context.attempt,'failed history save must keep attempt active');
    vm.runInContext('finish();',context);
  }
  assert.equal(storage.get(HISTORY).attempts.length,1,'one saved result');
  assert.equal(storage.get(HISTORY).attempts[0].id,base.attemptId,'stable attempt key');
  if(failRemoval){
    assert.ok(storage.has(DRAFT),'failed removal leaves an orphan');
    assert.equal(context.isFinished(storage.get(DRAFT)),true,'orphan is marked completed in history');
    context.attempt=JSON.parse(JSON.stringify(storage.get(DRAFT)));
    vm.runInContext('finish();',context);
    assert.equal(storage.get(HISTORY).attempts.length,1,'repeated finish may not duplicate result');
    assert.equal(historyWrites,1,'no second successful history write for same attempt');
  }else{
    assert.equal(storage.has(DRAFT),false,'normal final save clears draft');
  }
  assert.ok(renders>=1);
  assert.equal(alerts,0);
}
scenario({failRemoval:true});
scenario({failHistoryOnce:true});
scenario({});
assert.match(source,/const okay=validDraft\(d\) && !alreadyFinished\(d\)/,'completed orphan hidden from Resume');
assert.match(source,/if\(!validDraft\(d\) \|\| alreadyFinished\(d\)\)/,'completed orphan cannot resume');
console.log('PASS: practical finish idempotent after failed draft removal, retry after history-save failure, normal finish, completed orphan hidden.');
