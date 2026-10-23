'use strict';
// Shared learning calculator. It never reads or writes question answers or study records.
(()=>{
 const symbols={'+':'+','-':'−','*':'×','/':'÷'};
 const pow=n=>10n**BigInt(n);
 function decimal(text){
  const negative=text.startsWith('-'),parts=text.replace('-','').split('.');
  return {n:BigInt((parts[0]||'0')+(parts[1]||''))*(negative?-1n:1n),d:pow((parts[1]||'').length)};
 }
 function calculate(a,operator,b){
  const x=decimal(a),y=decimal(b);let n,d;
  if(operator==='+'){n=x.n*y.d+y.n*x.d;d=x.d*y.d;}
  else if(operator==='-'){n=x.n*y.d-y.n*x.d;d=x.d*y.d;}
  else if(operator==='*'){n=x.n*y.n;d=x.d*y.d;}
  else {if(y.n===0n)throw Error('0では割れません');n=x.n*y.d;d=x.d*y.n;}
  if(d<0n){n=-n;d=-d;}
  const negative=n<0n,absolute=negative?-n:n,scale=pow(12);
  // Exact decimal arithmetic; round to 12 decimal places, half away from zero.
  let scaled=absolute*scale/d;
  if((absolute*scale%d)*2n>=d)scaled++;
  const integer=scaled/scale;
  if(integer>=pow(16))throw Error('表示できる桁数を超えました');
  const fraction=(scaled%scale).toString().padStart(12,'0').replace(/0+$/,'');
  return (negative&&scaled!==0n?'-':'')+integer.toString()+(fraction?'.'+fraction:'');
 }
 function create(){
  let display='0',left=null,pending=null,replace=false,repeat=null,expression='',error=false;
  function clear(){display='0';left=null;pending=null;replace=false;repeat=null;expression='';error=false;}
  function apply(a,op,b){try{return calculate(a,op,b);}catch(e){display=e.message;error=true;left=null;pending=null;repeat=null;return null;}}
  function press(key){
   if(key==='clear'){clear();return state();}
   if(/^\d$/.test(key)||key==='.'){
    if(error)clear();
    if(replace){display='0';replace=false;if(!pending)expression='';}
    repeat=null;
    if(key==='.') {if(!display.includes('.'))display+='.';}
    else {
     const digits=display.replace(/[-.]/g,'').length,fraction=display.split('.')[1];
     if(digits<16&&(fraction===undefined||fraction.length<12))display=display==='0'?key:display==='-0'?'-'+key:display+key;
    }
   }else if(key==='sign'){
    if(!error){display=replace&&pending?'-0':display.startsWith('-')?display.slice(1):'-'+display;replace=false;repeat=null;if(!pending)expression='';}
   }else if(key==='back'){
    if(error)clear();else{display=replace?'0':display.slice(0,-1);if(!display||display==='-')display='0';replace=false;repeat=null;if(!pending)expression='';}
   }else if(Object.hasOwn(symbols,key)&&!error){
    if(pending&&!replace){const result=apply(left,pending,display);if(result===null)return state();display=result;}
    left=display;pending=key;replace=true;repeat=null;expression=left+' '+symbols[key];
   }else if(key==='equals'&&!error){
    const op=pending||repeat?.op;
    if(op){const a=pending?left:display,b=pending?(replace?left:display):repeat.b,result=apply(a,op,b);if(result===null)return state();display=result;expression=a+' '+symbols[op]+' '+b+' =';repeat={op,b};left=null;pending=null;replace=true;}
   }
   return state();
  }
  function state(){return {display,expression,error};}
  return {press,state};
 }
 if(typeof module!=='undefined'&&module.exports)module.exports={create,calculate};
 if(typeof document==='undefined')return;
 if(document.getElementById('fll-calculator'))return;
 const model=create(),dock=document.createElement('div');dock.id='fll-calculator';dock.className='fll-calc';
 dock.innerHTML='<section id="fll-calc-panel" class="fll-calc-panel" role="region" aria-labelledby="fll-calc-title" tabindex="-1" hidden><div class="fll-calc-heading"><strong id="fll-calc-title">電卓</strong><button type="button" data-calc="close" aria-label="電卓を閉じる">閉じる</button></div><p id="fll-calc-expression" class="fll-calc-expression" aria-label="計算式"></p><output id="fll-calc-display" class="fll-calc-display" aria-label="計算結果" aria-live="polite" aria-atomic="true">0</output><div class="fll-calc-keys" role="group" aria-label="電卓のキー"></div><p class="fll-calc-help">順次計算／小数12桁で四捨五入。解答欄への自動入力は行いません。</p></section><button type="button" id="fll-calc-toggle" class="fll-calc-toggle" aria-controls="fll-calc-panel" aria-expanded="false">電卓 OFF</button>';
 const keys=[['clear','AC','すべてクリア'],['back','⌫','1桁削除'],['sign','±','正負切替'],['/','÷','割る'],['7','7'],['8','8'],['9','9'],['*','×','掛ける'],['4','4'],['5','5'],['6','6'],['-','−','引く'],['1','1'],['2','2'],['3','3'],['+','＋','足す'],['0','0'],['.','.','小数点'],['equals','=','計算する']];
 const keypad=dock.querySelector('.fll-calc-keys');
 for(const [key,label,name]of keys){const b=document.createElement('button');b.type='button';b.dataset.calc=key;b.textContent=label;if(name)b.setAttribute('aria-label',name);if(key==='equals')b.className='fll-calc-equals';if(Object.hasOwn(symbols,key))b.className='fll-calc-operator';keypad.append(b);}
 document.body.append(dock);
 const panel=dock.querySelector('#fll-calc-panel'),toggle=dock.querySelector('#fll-calc-toggle'),output=dock.querySelector('#fll-calc-display'),expression=dock.querySelector('#fll-calc-expression');
 const reserve=()=>document.documentElement.style.setProperty('--fll-calc-space',(dock.getBoundingClientRect().height+28)+'px');
 function open(show){panel.hidden=!show;toggle.setAttribute('aria-expanded',String(show));toggle.textContent='電卓 '+(show?'ON':'OFF');reserve();(show?panel:toggle).focus({preventScroll:true});}
 function press(key){const s=model.press(key);output.textContent=s.display;expression.textContent=s.expression;output.classList.toggle('fll-calc-error',s.error);}
 toggle.addEventListener('click',()=>open(panel.hidden));
 dock.addEventListener('click',event=>{const b=event.target.closest('button[data-calc]');if(!b)return;if(b.dataset.calc==='close')open(false);else press(b.dataset.calc);});
 // Keyboard shortcuts apply only while focus is inside the calculator panel.
 panel.addEventListener('keydown',event=>{
  if(event.ctrlKey||event.metaKey||event.altKey)return;
  if(event.key==='Escape'){event.preventDefault();open(false);return;}
  let key=/^[\d.+*/-]$/.test(event.key)?event.key:({Backspace:'back',Delete:'clear','=':'equals'})[event.key];
  if(event.key==='Enter'&&event.target.tagName!=='BUTTON')key='equals';
  if(key){event.preventDefault();press(key);}
 });
 window.addEventListener('resize',reserve);
 if(typeof ResizeObserver!=='undefined')new ResizeObserver(reserve).observe(dock);
 reserve();
})();
