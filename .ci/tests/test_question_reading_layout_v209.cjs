'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(process.argv[2]||path.resolve(__dirname,'../..'));
const html=fs.readFileSync(path.join(root,'index.html'),'utf8'),css=fs.readFileSync(path.join(root,'style.css'),'utf8');
assert.match(css,/#quiz \.question-text,#practicalExam \.question-text\{line-height:1\.75;overflow-wrap:anywhere\}/);
assert.match(css,/#quiz \.wide,#practicalExam \.wide\{line-height:1\.65;text-align:left;overflow-wrap:anywhere\}/);
assert.match(css,/\.material-table-wrap\[tabindex="0"\]:focus-visible\{outline:3px solid #f0ad4e/);
assert.match(css,/@media\(max-width:470px\)\{#quiz \.question-text,#practicalExam \.question-text\{font-size:20px/);
// Mobile comparison tables must retain horizontal scroll and readable widths.
assert.match(css,/\.material-table-wrap\{padding:14px 16px;max-width:100%;overflow-x:auto/);
assert.match(css,/\.material-table\.material-table-matrix\{min-width:540px;table-layout:auto\}/);
assert.match(css,/\.material-table\.material-table-matrix:has\(thead tr > :nth-child\(5\)\)\{min-width:680px\}/);
assert.match(css,/\.material-table\.material-table-matrix:has\(thead tr > :nth-child\(7\)\)\{min-width:860px\}/);
assert.match(css,/\.material-table-matrix tbody th:first-child\{position:sticky;left:0/);
assert.match(css,/\.material-table-wrap\[tabindex="0"\]\{scroll-padding-inline:12px\}/);
assert.match(html,/style\.css\?v=[a-f0-9]{14}/);
assert.match(html,/id="prQuestion"/);assert.match(html,/id="question"/);
console.log('PASS: consistent academic/practical reading layout, keyboard focus indicator and stylesheet cache update.');
