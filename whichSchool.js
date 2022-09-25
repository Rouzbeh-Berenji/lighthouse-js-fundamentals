let selectedSchool ;
const whichSchool = function(age){
  if (age < 13){
    selectedSchool = "Elementary School";
  }
  else if (13 <= age && age <= 18){
    selectedSchool = "Secondary School";
  } else {
    selectedSchool = "Lighthouse Labs";
  } }
const age = 30
console.log(`I am ${age}. Which School should I go to?`);
whichSchool (age);
console.log(`You should go to ${selectedSchool}.`);