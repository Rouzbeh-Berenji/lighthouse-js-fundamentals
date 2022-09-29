// var j = 90;
// var y = "Batty";
// var z = "Beacon";
const loopyLighthouse = function ([k, j], [a, b], [y, z]){
  for (let i = k; i <= j; i++){
    if (((i % a) === 0) && ((i % b) === 0)){
      console.log("BattyBeacon");
    }else if ((i % a) === 0){
      console.log(y);
    }else if ((i % b) === 0){
      console.log(z);
    }else{
      console.log(i);
    }
    }
  }
console.log(loopyLighthouse([15, 90],[2, 5],["Batty", "Beacon"]));