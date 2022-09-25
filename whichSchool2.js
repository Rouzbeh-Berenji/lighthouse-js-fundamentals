let selectedSchool ;
let age = 30;
const whichSchool = function(age){
  //for ages 1 to 12 returns Elementary School
  for (let i = 1; i < 12; i++) {
    selectedSchool = "Elementary School";
  }
  //For ages 13 to 18 returns Secondary School
  for (let i = 13; i < 18; i++) {
    selectedSchool = "Secondary School";
  }
  //For ages 19 to let's say 100 returns Lighthouse Labs
  for (let i = 19; i < 100; i++) {
    selectedSchool = "Lighthouse Labs";
  } }
console.log(`I am ${age}. Which school should I go to?`);
console.log(`You should go to ${selectedSchool}.`);