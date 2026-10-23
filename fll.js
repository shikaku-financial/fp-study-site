'use strict';
// Keep historical FP deep links working after the parent home becomes the root page.
(()=>{
 const params=new URLSearchParams(window.location.search);
 const fpHashes=new Set(['#home','#quiz','#exam','#result','#finish','#examResult','#practicalHome','#practicalExam','#practicalResult']);
 if(params.has('level')||params.get('view')==='practical'||fpHashes.has(window.location.hash)){
  window.location.replace('fp.html'+window.location.search+window.location.hash);
 }
})();
