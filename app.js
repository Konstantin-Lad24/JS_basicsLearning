console.log('Stroki bleat');

let nameTest = 'Kostyan';
let ageTest = 29;

function getAge() {
  return ageTest;
}

let output = `Hi, my name is ${nameTest} and my age is ${getAge() > 20 ? 'Pezduk' : 'Maybe'} years`;
console.log(output);

console.log(nameTest.trim());