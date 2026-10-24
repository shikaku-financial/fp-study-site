'use strict';
const BOKI_CORE = (()=>{
 const revision='2026-10-24-financial-choices';
 const examFor=(data,level,form='1')=>form==='1'?data[String(level)]:data[String(level)]?.forms?.[form];
 const allItems=exam=>exam.sections.flatMap(s=>s.items);
 const points=item=>item.type==='journal'?item.points:item.fields.reduce((n,f)=>n+f.points,0);
 function number(value){
  if(typeof value!=='string')return null;
  const text=value.normalize('NFKC').trim();
  if(!/^(?:\d+|\d{1,3}(?:,\d{3})+)$/.test(text))return null;
  const n=Number(text.replace(/,/g,''));
  return Number.isSafeInteger(n)&&n>=0?n:null;
 }
 function side(rows){
  if(!Array.isArray(rows))return null;
  const sums=new Map();
  for(const row of rows){
   if(!Array.isArray(row)||row.length!==2)return null;
   const [account,raw]=row;
   if(account===''&&raw==='')continue;
   const n=number(raw);
   if(typeof account!=='string'||!account||n===null||n===0)return null;
   const total=(sums.get(account)||0)+n;
   if(!Number.isSafeInteger(total))return null;
   sums.set(account,total);
  }
  return [...sums].sort((a,b)=>a[0].localeCompare(b[0]));
 }
 function journalCorrect(item,answer){
  if(!answer)return false;
  const expected=rows=>side(rows.map(([account,n])=>[account,String(n)]));
  return ['debit','credit'].every(key=>{
   const actual=side(answer[key]),correct=expected(item[key]);
   return actual!==null&&correct!==null&&JSON.stringify(actual)===JSON.stringify(correct);
  });
 }
 function fieldCorrect(f,raw){return f.type==='choice'?typeof raw==='string'&&f.options.includes(raw)&&raw===f.answer:number(raw)===f.answer;}
 function grade(item,answer){
  const max=points(item);
  if(item.type==='journal'){const correct=journalCorrect(item,answer);return {earned:correct?max:0,max,correct,fields:[]};}
  const fields=item.fields.map(f=>({id:f.id,correct:fieldCorrect(f,answer?.[f.id]),points:f.points}));
  const earned=fields.reduce((n,f)=>n+(f.correct?f.points:0),0);
  return {earned,max,correct:earned===max,fields};
 }
 function result(items,answers){const grades=items.map(item=>({id:item.id,...grade(item,answers[item.id])}));return {grades,earned:grades.reduce((n,g)=>n+g.earned,0),max:grades.reduce((n,g)=>n+g.max,0)};}
 function touched(answer){return !!answer&&Object.values(answer).some(v=>Array.isArray(v)?v.some(r=>r.some(x=>x!=='')):v!=='');}
 function validSession(s,data){
  if(!s||s.revision!==revision||!['2','3'].includes(String(s.level))||!['exam','practice','review'].includes(s.mode)||!Array.isArray(s.ids)||!s.ids.length||s.ids.length>50)return false;
  const exam=examFor(data,s.level,s.form??'1');
  if(!exam||!Array.isArray(exam.sections))return false;
  const ids=new Set(allItems(exam).map(i=>i.id));
  if(new Set(s.ids).size!==s.ids.length||!s.ids.every(id=>ids.has(id)))return false;
  if(!Number.isInteger(s.index)||s.index<0||s.index>=s.ids.length||!s.answers||typeof s.answers!=='object'||!s.checked||typeof s.checked!=='object'||!s.flags||typeof s.flags!=='object')return false;
  if(s.mode==='exam'&&(!Number.isFinite(s.deadline)||s.deadline<=0))return false;
  if(!Number.isFinite(s.started)||typeof s.id!=='string')return false;
  for(const id of s.ids){
   const a=s.answers[id];if(a===undefined)continue;
   if(!a||typeof a!=='object'||Array.isArray(a))return false;
   const item=allItems(exam).find(i=>i.id===id);
   if(item.type==='journal'){
    if(!['debit','credit'].every(k=>Array.isArray(a[k])&&a[k].length<=5&&a[k].every(r=>Array.isArray(r)&&r.length===2&&r.every(v=>typeof v==='string'&&v.length<100))))return false;
   }else if(Object.values(a).some(v=>typeof v!=='string'||v.length>100))return false;
  }
  return true;
 }
 return {revision,examFor,allItems,points,number,fieldCorrect,grade,result,touched,validSession};
})();
if(typeof module!=='undefined')module.exports=BOKI_CORE;
