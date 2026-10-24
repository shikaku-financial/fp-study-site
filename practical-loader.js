'use strict';
// Defer the practical bundle until the visitor requests practical learning.
(() => {
  const scripts = [
    'practical-questions.js?v=b20317f65322',
    'practical-materials.js?v=1726c5125a1c',
    'practical.js?v=8db8c1c91e8117'
  ];
  const buttons = ['openPractical','openPracticalTop'].map(id => document.getElementById(id));
  const status = document.getElementById('practicalLoadStatus');
  let pending = null, ready = false;
  const load = src => new Promise((resolve,reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.async = false;
    s.onload = resolve;
    s.onerror = () => { s.remove(); reject(new Error('load failed')); };
    document.body.append(s);
  });
  async function ensure() {
    if (ready) return true;
    if (pending) return pending;
    status.textContent = '実技演習を読み込んでいます…';
    for (const b of buttons) { b.disabled = true; b.setAttribute('aria-busy','true'); }
    pending = (async () => {
      try {
        for (const src of scripts) await load(src);
        if (typeof window.__fpPracticalTest?.openPractical !== 'function') throw new Error('missing controls');
        ready = true;
        for (const b of buttons) b.removeEventListener('click', onOpen);
        status.textContent = '';
        return true;
      } catch {
        status.textContent = '実技演習を読み込めませんでした。通信環境を確認して、もう一度実技試験を選んでください。';
        return false;
      } finally {
        pending = null;
        for (const b of buttons) { b.disabled = false; b.removeAttribute('aria-busy'); }
      }
    })();
    return pending;
  }
  async function onOpen(e) {
    e.preventDefault();
    if (await ensure()) window.__fpPracticalTest.openPractical();
  }
  for (const b of buttons) b.addEventListener('click', onOpen);
  // Direct links to practical mode keep their existing grade-selection behavior.
  if (new URLSearchParams(window.location.search).get('view') === 'practical') void ensure();
})();