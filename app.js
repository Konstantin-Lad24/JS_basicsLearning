console.log('Stroki bleat');

let nameTest = 'Kostyan';
let ageTest = 29;

function getAge() {
  return ageTest;
}

let output = `Hi, my name is ${nameTest} and my age is ${getAge() > 20 ? 'Pezduk' : 'Maybe'} years`;
console.log(output);

let peoples = [
  { name: 'Vladilen', budget: 4200 },
  { name: 'Elena', budget: 3500 },
  {name: 'Victoria', budget:1700}
];

let indexBudgetIndex = peoples.findIndex(function(person) {
  return person.budget === 3500;
})
console.log(indexBudgetIndex);

let indexBudgetPerson = peoples.find(function(person) {
  return person.budget === 3500;
})
let personBudgetNameArrowWay = peoples.find((person) => person.budget === 3500);
console.log(personBudgetNameArrowWay.name);
let cars = ['Mazda','Mersedes'];
console.log(cars.includes('Mazda'));

let upperCaseCars = cars.map(car => car.toUpperCase());
console.log(upperCaseCars);
