const score = 400
console.log(score);

const balance = new Number(999);
console.log("balance value is ",balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4));    // return string :-> round off the value   "123.9"

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));      // 10,00,000 :-> Indian number system   default set to us.

// +++++++++++++++++++++++++ Maths +++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-5));      // 5
console.log(Math.round(5.5));   // 6
console.log(Math.ceil(5.6));    // 6
console.log(Math.floor(5.3));   // 5
console.log(Math.min(4,3,6,7,9));   // 3
console.log(Math.max(4,3,6,7,9));   // 9

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);