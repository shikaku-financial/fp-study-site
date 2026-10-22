'use strict';
// One-shot public fetch audit. Does NOT access Search Console or test Google indexing.
// Uses only public GET requests, no API tokens, cookies, or visitor tracking.
const assert = require('node:assert/strict');
const BASE = 'https://fll-fp-lab.pages.dev/';
const expectedAds = 'google.com, pub-9028316286727677, DIRECT, f08c47fec0942fa0';
async function fetchText(path) {
  const url = new URL(path, BASE);
  const started = Date.now();
  let response;
  try {
    response = await fetch(url, {
      method: 'GET', redirect: 'follow',
      headers: { 'Accept': path.endsWith('.xml') ? 'application/xml,text/xml,*/*' : '*/*' },
      signal: AbortSignal.timeout(15000)
    });
  } catch (error) {
    throw new Error('PUBLIC_FETCH_FAILED ' + url.href + ': ' + error.message);
  }
  const body = await response.text();
  const info = {path: url.pathname, status: response.status, mime: response.headers.get('content-type') || '(none)', finalUrl: response.url, bytes: Buffer.byteLength(body), elapsedMs: Date.now()-started};
  console.log('HTTP ' + JSON.stringify(info));
  assert.equal(response.status, 200, 'non-200 response at '+url.href);
  assert.equal(new URL(response.url).origin, new URL(BASE).origin, 'cross-origin redirect at '+url.href);
  assert.equal(response.url, url.href, 'canonical URL must resolve without redirection: '+url.href);
  return body;
}
async function verifyReal404() {
  const bad = new URL('__fll_missing_page_audit_404__', BASE);
  let last = '';
  for (let attempt = 1; attempt <= 24; attempt++) {
    try {
      const r = await fetch(bad, {redirect:'follow',signal:AbortSignal.timeout(15000)});
      const body = await r.text();
      const robots = r.headers.get('x-robots-tag') || '';
      last = 'status='+r.status+', url='+r.url+', custom404='+body.includes('お探しのページが見つかりません');
      if (r.status === 404 && body.includes('お探しのページが見つかりません')) {
        console.log('PASS: unknown URL returns HTTP 404 with a helpful error page; '+last);
        return;
      }
      console.log('WAIT: production 404 deployment not yet visible (attempt '+attempt+'); '+last);
    } catch(error) {
      last = String(error);
      console.log('WAIT: 404 probe unavailable (attempt '+attempt+'): '+last);
    }
    await new Promise(resolve=>setTimeout(resolve,5000));
  }
  throw new Error('Production must return an actual HTTP 404 for missing paths; last='+last);
}
async function main() {
  const [xml, robots, ads] = await Promise.all([fetchText('sitemap.xml'),fetchText('robots.txt'),fetchText('ads.txt')]);
  assert.match(xml, /^<\?xml version="1\.0" encoding="UTF-8"\?>/);
  assert.match(xml, /<urlset xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9">/);
  assert.match(xml, /<\/urlset>\s*$/);
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
  assert.equal(locs.length, 10, 'expected exactly 10 published pages in the sitemap');
  assert.equal(new Set(locs).size, locs.length, 'sitemap contains duplicate URLs');
  for (const loc of locs) {
    const url = new URL(loc);
    assert.equal(url.origin, new URL(BASE).origin, 'cross-domain sitemap entry');
    assert.ok(!url.search && !url.hash, 'sitemap should list canonical URLs only: '+loc);
  }
  assert.match(robots, /^User-agent:\s*\*/m);
  assert.ok(robots.includes('Sitemap: '+BASE+'sitemap.xml'),'robots.txt sitemap declaration incorrect');
  assert.ok(!/^Disallow:\s*\/\s*$/m.test(robots),'all crawling disallowed');
  assert.equal(ads.trim(), expectedAds, 'published ads.txt does not match reviewed publisher');
  const pages = await Promise.all(locs.map(async loc => {
    const url = new URL(loc);
    const html = await fetchText(url.pathname);
    const expected = loc;
    assert.match(html, /<html\s+lang="ja"/i, 'not expected Japanese HTML: '+loc);
    const canonical = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i)?.[1];
    assert.equal(canonical, expected, 'live canonical mismatch at '+loc);
    assert.ok(/<h1(?:\s[^>]*)?>/.test(html),'h1 missing at '+loc);
    return {url:loc,hasH1:true};
  }));
  const home = await fetchText('');
  await verifyReal404();
  assert.match(home, /name="google-adsense-account" content="ca-pub-9028316286727677"/);
  console.log('PASS: public sitemap XML, 10 live canonical pages, robots.txt and ads.txt; ' + pages.length + ' pages audited.');
  console.log('NOTE: Live HTTP checks do not prove Search Console sitemap processing, indexing, or AdSense approval.');
}
main().catch(error => { console.error('FAIL: '+(error.stack || error)); process.exitCode=1; });
