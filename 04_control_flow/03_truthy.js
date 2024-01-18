const userEmail = "random@gmail.com";

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

// falsey values
// values where condition will be false
// false , 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// values where condition will be true
// "0",'false', " ", [], {}, function(){}

// how to check empty array

const vowel = [];

if (vowel.length === 0) {
  console.log("Array is empty");
}

const consonants = {};

if (Object.keys(consonants).length === 0) {
  console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null, undefined
// a type of fallback if the function don't return a value the the null or undefined will come according to nullish coalscing operator
// nullish coalescing operator is alwaus takes first value which returns from function instead of null

let val1;
// val1 = 5 ?? 10;      :-> 5
// val1 = null ?? 10;      // :-> 10
// val1 = undefined ?? 15; // :-> 15
val1 = null ?? 10 ?? 15; // :-> 10
console.log(val1);

// Ternary Operator

// condition ? true : false

const icedTeaPrice = 100;
icedTeaPrice >= 80
  ? console.log("greater than 80")
  : console.log("less than 80");
