const name = "John Doe"
const repoCount = 50

console.log(name + " " + repoCount + " Value");     // Instead of using this use string interpolation

// String interpolation -> can be changed on the go
console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`);

const gameName = new String('John-Doe')

console.log(`gameName at 0 ${gameName[0]}`);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));     // -1 as 't' is not present in string gameName
console.log(gameName.indexOf('D')); 

const newString = gameName.substring(0, 4)
console.log("new String",newString);

const anotherString = gameName.slice(-6,4)
console.log("anotherString",anotherString);

const newStringOne = "    john Doe    "
console.log(`newStringOne is ${newStringOne}`);
console.log(`newStringOne.trim() is ${newStringOne.trim()}`);

const url = "https://johnDoe.com/john%20%doe"
console.log(`url.replace('%20%', '-') will replace %20 with '-' ${url.replace('%20%','-')}`);
console.log(`url.includes('john') ${url.includes('john')}`);

console.log(gameName.split('-'));