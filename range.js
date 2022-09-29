const range = function (start,end,step) {
  var array = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step < 0) {
    array = [];
  } else {
    for (let counter = start; counter <= end; counter += step){
      array.push(counter);
    }
  }
  return array;
}
console.log(range(1,100,2));