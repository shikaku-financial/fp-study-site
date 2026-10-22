'use strict';

// One self-contained, static publishing artifact for GitHub Pages and Cloudflare Pages.
// Never expose source maps, private config, CI data or repository documentation.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'dist');
const publicHtml = [
  'index.html',
  'guide.html',
  'fp3-study.html',
  'fp2-study.html',
  'fp-level-comparison.html',
  'practical-tracks.html',
  'about.html',
  'privacy.html',
  'contact.html',
];
const publicAssets = [
  'style.css',
  'info.css',
  'app.js',
  'questions.js',
  'practical.js',
  'practical-questions.js',
  'practical-materials.js',
  'financial-license-lab-logo.png',
  'sitemap.xml',
  'robots.txt',
];
const allowed = [...publicHtml, ...publicAssets];

assert.equal(new Set(allowed).size, allowed.length, 'duplicate published filename');
assert.ok(!output.startsWith(path.join(root, '.ci') + path.sep), 'invalid output directory');
fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });
for (const name of allowed) {
  assert.equal(path.basename(name), name, 'publish only filenames from the root');
  const source = path.join(root, name);
  assert.ok(fs.statSync(source).isFile(), 'missing public asset ' + name);
  fs.copyFileSync(source, path.join(output, name));
}
fs.writeFileSync(path.join(output, '.nojekyll'), '');
const actual = fs.readdirSync(output).sort();
const expected = [...allowed, '.nojekyll'].sort();
assert.deepEqual(actual, expected, 'output contains unexpected or missing files');
for (const prohibited of ['README.md', 'MONETIZATION_PLAN.md', 'HOSTING_MIGRATION_CHECKLIST.md',
  'new-questions.json', '.github', '.ci', 'tests']) {
  assert.ok(!fs.existsSync(path.join(output, prohibited)), 'private/dev file published: ' + prohibited);
}
console.log('PASS: dist/ generated with ' + allowed.length + ' public files; no repository-only files');
