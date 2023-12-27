//      Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSidetTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);      //false
console.log(id);                //Symbol(123)
console.log(anotherId);         //Symbol(123)


const bigNumber = 33541234562123453435n

// Reference Types (Non-Primitive)

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "John",
    age: 334,
}

const myFunction = function(){
    console.log("Hello World!");
}
console.log(myFunction);

console.log(typeof(bigNumber));
console.log(typeof myFunction);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive values store in stack), Heap (Non-Primitive values store in heap)
// In stack we get a copy of original value
let str = "Hello world!"
let anotherStr = str
anotherStr = "world Hello!"
console.log(str);
console.log(anotherStr);

// In heap we get the direct reference of the original value
let userOne = {
    email : "user@google.com",
    upi   : "user@lbl"
}

let userTwo = userOne

userTwo.email = "hello@google.com"
console.log(userOne.email);
console.log(userTwo.email);