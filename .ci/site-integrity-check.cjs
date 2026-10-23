'use strict';
// No dependencies: guard all static entry points against broken navigation and
// accidental regressions in keyboard access when new labs/pages are added.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const pages = fs.readdirSync(root).filter(name => name.endsWith('.html')).sort();
const sources = new Map(pages.map(file => [file, fs.readFileSync(path.join(root, file), 'utf8')]));
let linkCount = 0;
let fragmentCount = 0;
assert.ok(pages.includes('index.html') && pages.includes('fp.html') && pages.includes('boki.html') && pages.includes('404.html'));

for (const [file, html] of sources) {
  assert.match(html, /<html\s+lang="ja"/i, file + ' must set Japanese language');
  assert.match(html, /<main\b/i, file + ' needs a main landmark');
  assert.equal([...html.matchAll(/<h1\b/gi)].length, 1, file + ' must have exactly one h1');

  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length, file + ' must not repeat IDs');
  const skip = html.match(/<a\b[^>]*class="skip-link"[^>]*href="#([^"]+)"[^>]*>/i);
  assert.ok(skip, file + ' needs a keyboard skip link');
  assert.ok(ids.includes(skip[1]), file + ' skip link must reach an existing ID');
  const main = html.match(/<main\b[^>]*>/i);
  assert.ok(main[0].includes('id="' + skip[1] + '"'), file + ' skip link must target main content');

  for (const anchor of html.matchAll(/<a\b[^>]*>/gi)) {
    if (!/\btarget="_blank"/i.test(anchor[0])) continue;
    assert.match(anchor[0], /\brel="[^"]*\bnoopener\b/i, file + ' external tab needs noopener');
  }

  for (const match of html.matchAll(/\b(href|src)="([^"]+)"/gi)) {
    const kind = match[1].toLowerCase();
    const reference = match[2];
    if (/^(?:https?:|mailto:|tel:|data:|\/\/)/i.test(reference)) continue;
    assert.ok(!/^\s*javascript:/i.test(reference), file + ' must not use javascript: URLs');
    const hash = reference.indexOf('#');
    const beforeHash = hash < 0 ? reference : reference.slice(0, hash);
    const fragment = hash < 0 ? '' : decodeURIComponent(reference.slice(hash + 1));
    const localPath = decodeURIComponent(beforeHash.split('?')[0]) || file;
    assert.ok(!localPath.startsWith('/'), file + ' must use relative local links: ' + reference);
    const resolved = path.resolve(root, localPath);
    assert.ok(resolved.startsWith(root + path.sep), file + ' local link escapes the site root: ' + reference);
    assert.ok(fs.existsSync(resolved), file + ' broken ' + kind + ': ' + reference);
    linkCount++;
    if (kind === 'href' && fragment && resolved.endsWith('.html')) {
      const targetFile = path.basename(resolved);
      const target = sources.get(targetFile);
      assert.ok(target, file + ' target page missing: ' + reference);
      const targetIds = [...target.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
      assert.ok(targetIds.includes(fragment), file + ' broken fragment: ' + reference);
      fragmentCount++;
    }
  }
}
const notFound = sources.get('404.html');
assert.ok(!/\baria-current="page"/.test(notFound), '404 navigation must not claim to be the current home page');
console.log('PASS: ' + pages.length + ' static pages, ' + linkCount + ' local references and ' +
  fragmentCount + ' fragment links; skip links, unique IDs, landmarks and secure new-tab links');
