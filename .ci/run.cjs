'use strict';
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),vm=require('node:vm'),assert=require('node:assert/strict'),{spawnSync}=require('node:child_process');
const root=path.resolve(__dirname,'..');
const publicFiles=['fp.html','style.css','app.js','questions.js','practical-questions.js','practical-materials.js','practical.js','financial-license-lab-logo.png'];
const suites=JSON.parse(fs.readFileSync(path.join(__dirname,'suites.json'),'utf8'));
const temp=fs.mkdtempSync(path.join(os.tmpdir(),'fp-lab-regression-'));
try {
  // Historical regression fixtures call the FP document index.html; supply the current FP entry.
  for(const file of publicFiles) fs.copyFileSync(path.join(root,file),path.join(temp,file==='fp.html'?'index.html':file));
  fs.cpSync(path.join(__dirname,'fixtures'),path.join(temp,'development-notes'),{recursive:true});
  const ctx=vm.createContext({});
  for(const file of ['questions.js','practical-questions.js']) vm.runInContext(fs.readFileSync(path.join(temp,file),'utf8'),ctx);
  const contract=JSON.parse(fs.readFileSync(path.join(__dirname,'contract.json'),'utf8'));
  const ids=expr=>JSON.parse(vm.runInContext('JSON.stringify('+expr+'.map(q=>q.id))',ctx));
  assert.deepEqual(ids('QUESTIONS'),contract.academic_ids);
  assert.deepEqual(ids('PRACTICAL_QUESTIONS'),contract.practical_ids);
  assert.equal(contract.academic_ids.length,360);assert.equal(contract.practical_ids.length,240);
  assert.equal(new Set([...contract.academic_ids,...contract.practical_ids]).size,600);
  for(const file of ['app.js','questions.js','practical.js','practical-questions.js','practical-materials.js']) {
    const result=spawnSync(process.execPath,['--check',path.join(temp,file)],{encoding:'utf8',timeout:30000});
    assert.equal(result.status,0,result.stderr||String(result.error));
  }
  for(const name of suites) {
    assert.match(name,/^test_[A-Za-z0-9_]+$/);
    const result=spawnSync(process.execPath,[path.join(__dirname,'tests',name+'.cjs'),temp],{encoding:'utf8',timeout:30000,maxBuffer:4*1024*1024});
    if(result.status!==0) throw new Error(name+'\n'+result.stdout+'\n'+result.stderr+'\n'+(result.error||''));
    console.log('PASS '+name);
  }
  console.log('PASS '+suites.length+' suites;5 syntax files;600 unique IDs and exact order. VM/DOM simulations;no real-browser or iPhone claim.');
} finally { fs.rmSync(temp,{recursive:true,force:true}); }
