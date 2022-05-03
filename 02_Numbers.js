console.log('Hi, snova');

console.log(10e3);
console.log(parseFloat((0.4 + 0.2).toFixed(3)));
console.log(parseInt(10n - 4n));
console.log(10n);
console.log(Math.sqrt(525));
console.log(Math.abs(-42.6));
console.log(Math.max(42,11,20));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.9));
console.log(Math.round(4.9));
console.log(Math.round(4.4));
console.log(Math.trunc(4.9));
console.log(Math.random());

function getRandomBetween(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

console.log(getRandomBetween(30, 35));
