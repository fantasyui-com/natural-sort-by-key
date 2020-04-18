#!/usr/bin/env -S node

const assert = require('assert');
const byKey = require('./index.js');

const input = [
  {},
  {flarp: '10 Baz'},
  {flarp: '100 Baz'},
  {flarp: '11 Baz'},
  {flarp: null},
  {flarp: undefined},
  {flarp: 0},
  {flarp: 10},
  {flarp: 11},
  {flarp: 100},
  {flarp: ''},
  {flarp: ' '},
  {flarp: '  '},
  {flarp: '20 Baz'},
  {},
];

const expected = [
  { "flarp": "" },
  { "flarp": " " },
  { "flarp": "  " },
  { "flarp": 0 },
  { "flarp": 10 },
  { "flarp": "10 Baz" },
  { "flarp": 11 },
  { "flarp": "11 Baz" },
  { "flarp": "20 Baz" },
  { "flarp": 100 },
  { "flarp": "100 Baz" },
  { "flarp": null },
  {},
  {flarp: undefined},
  {},

];


const actual = input.sort(byKey('flarp'))
assert.deepStrictEqual(actual,expected);
//console.log(JSON.stringify(actual, null, '  '));
