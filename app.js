console.log('Hi, govnar');
console.log('Sam govnar');

const myBornYear = new Date("09/11/1992");

//function
function calculatetionAgeInYears(dateCalc = new Date) {
  
  if (typeof (dateCalc) === "string") {
    return dateCalc;
  }

  let currentYear = new Date();
  if (typeof(dateCalc) === "number") {
    return currentYear.getFullYear() - dateCalc;
  }

  let diffDatesInYears = currentYear.getFullYear() - dateCalc.getFullYear();
  return diffDatesInYears;
}

let myAge1 = calculatetionAgeInYears(myBornYear);
console.log(myAge1);

let myAge2 = calculatetionAgeInYears(1975);
console.log(myAge2);

let myAge3 = calculatetionAgeInYears('myBornYear');
console.log(myAge3);

function logInfoAbout(name, year) {
  const age = calculatetionAgeInYears(year);
  if (age <= 0) {
    console.log('Вообще то это уже будущее');
    return;
  }
  console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age);
}
logInfoAbout('Ivan', 1993);
logInfoAbout('Elena', new Date('01/05/1998'));

let cars = ['Мазда', 'Mersedes', 'Ford focus'];
cars[0] = 'Porshe';
cars[cars.length] = 'Mazda';

cars.forEach(element => {
  console.log(element);
});

for (const car of cars) {
  console.log(car);
}

for (const car in cars) {
  if (Object.hasOwnProperty.call(cars, car)) {
    const element = cars[car];
    console.log('Hi ' + element);
  }
}

