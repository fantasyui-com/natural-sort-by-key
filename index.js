const naturalComparator = require('natural-compare');
module.exports = function(key){
  return function (a,b){
    let A = a[key].toUpperCase();
    let B = b[key].toUpperCase();
    return naturalComparator(A, B);
  }
}
