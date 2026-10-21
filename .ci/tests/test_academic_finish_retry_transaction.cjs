'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(process.argv[2]||path.join(__dirname,'../..'));
const src=fs.readFileSync(path.join(root,'app.js'),'utf8');
const begin=src.indexOf('function finishExam(timeOver = false) {');
const end=src.indexOf('// 保存済みの問題文',begin);
assert.ok(begin>=0&&end>begin,'production finishExam section');
const code=src.slice(begin,end);
for(const failAt of ['draft','storage','details','history']){
  for(const timedOut of [false,true]){
    const deadline=Date.now()+(timedOut?-60000:60000);
    const q={id:'q',answer:1,level:'3',category:'x',format:'three_choice',question:'Q',
      choices:['no','yes','other'],explanation:'E'};
    const exam={kind:'mini',level:'3',answers:[1],deadline,ids:['q'],resultId:null};
    const store={},writes={draft:0,storage:0,details:0,history:0};
    let timerStarts=0,finished=0,failed=false;
    const keyToStage={STORAGE:'storage',EXAM_DETAILS_KEY:'details',EXAM_HISTORY_KEY:'history'};
    const nodes=new Map();
    const ctx={
      exam,Date,Math,STORAGE:'STORAGE',EXAM_DETAILS_KEY:'EXAM_DETAILS_KEY',
      EXAM_HISTORY_KEY:'EXAM_HISTORY_KEY',EXAM_DRAFT_KEY:'EXAM_DRAFT_KEY',
      confirm:()=>true,stopTimer:()=>{},startTimer:()=>{timerStarts++;},
      saveExamDraft:()=>{
        writes.draft++;
        if(failAt==='draft'&&!failed){failed=true;return false;}
        return true;
      },
      writeJSON:(key,val)=>{
        const stage=keyToStage[key];assert.ok(stage);
        writes[stage]++;
        if(stage===failAt&&!failed){failed=true;return false;}
        store[key]=structuredClone(val);return true;
      },
      readJSON:(key,fallback)=>store[key]||fallback,
      load:()=>store.STORAGE||{},
      getExamQuestions:()=>[q],
      questionRevision:()=>1,
      archiveOldRevisionResults:()=>{},
      localStorage:{removeItem:key=>{delete store[key];}},
      $:id=>{
        if(!nodes.has(id))nodes.set(id,{textContent:''});
        return nodes.get(id);
      },
      renderBreakdown:()=>{},renderExamReview:()=>{},show:()=>{finished++;},
      lastExamLevel:null,lastExamKind:null,lastReviewRows:null,reviewFilter:null
    };
    vm.createContext(ctx);
    vm.runInContext(code+';finishExam('+timedOut+');',ctx);
    assert.ok(failed,'test actually injected one failed write');
    assert.ok(ctx.exam,'failed finish retains exam');
    assert.equal(finished,0,'failed finish does not display results');
    assert.equal(timerStarts,timedOut?0:1,'manual-only timer restart on failed save');
    assert.equal(ctx.exam.resultId,exam.resultId,'result id stable');
    const retainedId=ctx.exam.resultId;
    vm.runInContext('finishExam('+timedOut+');',ctx);
    assert.equal(ctx.exam,null,'retry may complete');
    assert.equal(finished,1,'retry shows results once');
    assert.equal(store.EXAM_HISTORY_KEY.attempts.length,1,'one summary record');
    assert.equal(store.EXAM_DETAILS_KEY.attempts.length,1,'one detail record');
    assert.equal(store.EXAM_HISTORY_KEY.attempts[0].id,retainedId,'same result id after retry');
    assert.equal(store.EXAM_DETAILS_KEY.attempts[0].id,retainedId,'same detail id after retry');
    assert.equal(store.STORAGE.q.correct,true,'result history written');
  }
}
console.log('PASS: 8 manual/timeout exam finish scenarios, each with failed save then retry.');
