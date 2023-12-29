const name = "John Doe"
const repoCount = 50

console.log(name + " " + repoCount + " Value");     // Instead of using this use string interpolation

// String interpolation -> can be changed on the go
console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`);

const gameName = new String('John-Doe')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));     // -1 as 't' is not present in string gameName
console.log(gameName.indexOf('D')); 

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-6,3)
console.log(anotherString);