let score = "33abc"
let temp = null
let unknown = undefined
let booleanValue = true

console.log(typeof (score));
console.log(typeof(temp));
console.log(typeof(unknown));
console.log(typeof(booleanValue));

let valueInNumber = Number(score)
let changeTemp = Number(temp)
let changeUnknown = Number(unknown)
let changeBoolean = Number(booleanValue)

console.log(typeof(valueInNumber));
console.log(valueInNumber);

console.log(typeof(changeTemp));
console.log(changeTemp);

console.log(typeof(changeUnknown));
console.log(changeUnknown);

console.log(typeof(changeBoolean));
console.log(changeBoolean);


// conversion to number
// "33" => 33
// "33abc" => Nan
// true => 1; false => 0 


let isLoggedIn = 1
// let isLoggedIn = ""  => after conversion will return false
// let isLoggedIn = "Dev" => after conversion will return true

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof(booleanIsLoggedIn));
console.log(booleanIsLoggedIn);

// conversion to boolean
// 1 => true; 0 => false
// "" => false
// "dev" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof(stringNumber))
console.log(stringNumber);



// ************************************* Operations *************************************

let value = 3
let negValue = -value
console.log(value);

let str1 = "hello"
let str2 = " world"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 3);
console.log(1 + "3");
console.log("1" + 4 + 5);
console.log(1 + 4 + "5");

console.log(+true);
//console.log(true+);   // will throw an error

console.log(+"");