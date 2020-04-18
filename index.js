const naturalComparator = require('natural-compare');
module.exports = function(key){
  return function (a, b){

    // Default Values
    let A = undefined;
    let B = undefined;

    if(a[key] !== undefined) A = a[key];
    if(b[key] !== undefined) B = b[key];

    return naturalComparator(A, B);
  }
}
