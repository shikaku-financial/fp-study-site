'use strict';
// Scoped regression for Kinzai FP2 nonlife practical scenario arithmetic and answer mapping.
// These are deterministic checks of the authored given figures, not comprehensive legal review.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(process.argv[2]||path.join(__dirname,'../..'));
const ctx=vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(root,'practical-questions.js'),'utf8')+';this.items=PRACTICAL_QUESTIONS;',ctx);
const get=n=>{const id='pr-kinzai2_nonlife-'+String(n).padStart(3,'0');const q=ctx.items.find(x=>x.id===id);assert.ok(q,id);assert.equal(q.track,'kinzai2_nonlife');assert.equal(q.lawReferenceDate,'2026-04-01');return q};
const round=x=>Math.floor(x+0.5);
assert.equal(get(1).answer,round(847300*420/480));
assert.equal(get(2).answer,round(250000*7.125/1000*24+440000*5.481/1000*276));
assert.equal(get(3).choices[get(3).answer],'①×・②○・③○');
assert.equal(get(4).answer,3200*.5);
assert.equal(get(5).choices[get(5).answer],'①○・②○・③×');
assert.equal(get(6).choices[get(6).answer],'42,000円');
assert.equal(get(7).answer,800+70*(25-20));
assert.equal(get(8).answer,(2300-get(7).answer)/2);
assert.equal(get(9).choices[get(9).answer],'①×・②○・③○');
assert.equal(get(10).answer,(20-10)+40-10);
assert.equal(get(11).answer,(800-(800*.1+110))+(660-550-50)/2);
assert.equal(get(12).choices[get(12).answer],'①×・②○・③○');
assert.equal(get(13).answer,(550-110)*.2-30);
assert.equal(get(14).answer,500*3);
assert.equal(get(15).choices[get(15).answer],'①○・②○・③×');
console.log('PASS: Kinzai FP2 nonlife scenarios 001-015 arithmetic and answer mapping.');
