let a = [];
let b = [];
const merge = function (a, b){
  var c = a.concat(b);
  var d = c.sort()
  return d;
}
console.log(merge([ 1, 7, 3 ], [ 8, 5, 6]));