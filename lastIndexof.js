function lastIndexOf(array, value) {
  for (var i = (array.length - 1); i >= 0; i--) {
    if (array[i] === value) {
      var match = true
      var Index = i
      break
    }
  }
  if (match) {
    return Index
  } else {
    return -1
  }
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2));
// console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
// console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
// console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
// console.log(lastIndexOf([3], 3), "=?", -1);