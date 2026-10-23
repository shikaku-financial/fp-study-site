'use strict';
const assert=require('node:assert/strict'),{create,calculate}=require('../calculator.js');
assert.equal(calculate('0.1','+','0.2'),'0.3');
assert.equal(calculate('1','/','3'),'0.333333333333');
assert.equal(calculate('-1','/','6'),'-0.166666666667');
assert.equal(calculate('1000','-','125.5'),'874.5');
assert.equal(calculate('99999999','*','99999999'),'9999999800000001');
assert.throws(()=>calculate('1','/','0'),/0では割れません/);
assert.throws(()=>calculate('9999999999999999','+','1'),/桁数/);
function sequence(keys){const c=create();for(const k of keys)c.press(k);return c;}
assert.equal(sequence(['2','+','3','*','4','equals']).state().display,'20','sequential calculator operations');
let c=sequence(['5','+','2','equals','equals']);assert.equal(c.state().display,'9','repeat equals');
c=sequence(['8','+','*','2','equals']);assert.equal(c.state().display,'16','replace pending operator');
c=sequence(['9','/','0','equals']);assert.equal(c.state().error,true);c.press('7');assert.equal(c.state().display,'7');assert.equal(c.state().error,false);
c=sequence(['5','sign','*','2','equals']);assert.equal(c.state().display,'-10');
c=sequence(['1','2','3','back']);assert.equal(c.state().display,'12');c.press('clear');assert.equal(c.state().display,'0');
c=sequence(['0','.','1','.','2']);assert.equal(c.state().display,'0.12');
c=sequence(['1','+','2','equals','4']);assert.equal(c.state().display,'4');
console.log('PASS: calculator exact decimal arithmetic, rounding, sequential/repeat operations, error recovery, sign, clear and deletion');
