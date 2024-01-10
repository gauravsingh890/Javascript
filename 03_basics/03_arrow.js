const user = {
    userName : "john",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.userName} , welcome to website`);
        console.log(this);
    }
}


user.welcomeMessage();      // john , welcome to website
// {
//     userName: 'john',
//     price: 999,
//     welcomeMessage: [Function: welcomeMessage]
//   }
user.userName  = "sam"
user.welcomeMessage();      // sam , welcome to website
// {
//     userName: 'sam',
//     price: 999,
//     welcomeMessage: [Function: welcomeMessage]
//   }

console.log(this);          // {}

function onlyThis() {
    console.log(this);
}

onlyThis();
//Expected Output :->
// <ref *1> Object [global] {
//   global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   structuredClone: [Getter/Setter],
//   atob: [Getter/Setter],
//   btoa: [Getter/Setter],
//   performance: [Getter/Setter],
//   fetch: [Function: fetch],
//   crypto: [Getter]
// }


function withUsername() {
    let userName = "doe"
    console.log(this.userName);
}

withUsername();
//Expected Output :-> undefined

const simple = function () {
    let userName = "johnDoe"
    console.log(this.userName);
}

simple();       // undefined


const arrowFunctionThis = () => {
    let userName = "johnDoe"
    console.log(this.userName);
    console.log(this);
}

arrowFunctionThis();        // output : ->    undefined
                        //  :-> {}

const addTwo = (a,b) => {
    return a+b;
}
console.log(addTwo(3,5));  // 8


// ****** IMPLICIT RETURN ****** //
const add = (a,b) => a + b
console.log(add(1, 6));     // 7
     
// we can write the abouve add arrow function like this , when we use paranthesis we don't use user
const sum = (a,b) => (a + b)

const myArray = [2, 5, 6, 7, 8, 9]
// looping in array with functions
myArray.forEach(function () {})      //normal functions use
myArray.forEach(() => {})           // arrow function use
// myArray.forEach(() => ())