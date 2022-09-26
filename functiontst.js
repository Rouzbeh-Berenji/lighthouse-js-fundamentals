function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}
function builtTriangle(width){
  for (i=1 ; i<width+1 ; i++)
  console.log(makeLine(i))
}
builtTriangle (13);