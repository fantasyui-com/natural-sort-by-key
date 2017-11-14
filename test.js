
//const byKey = require('natural-sort-by-key');
const byKey = require('./index.js');

let list = [
  {flarp: '10 Baz'},
  {flarp: '100 Baz'},
  {flarp: '20 Baz'},
]

console.log(list.sort(byKey('flarp')))
