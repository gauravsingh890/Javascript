// singleton    :-> Object which is created using constructor
// Object.create

// object literals

const mySym = Symbol("key1")


const jsUser = {
    name: "John",
    "full name" : "John Doe",
    // mySym : "myKey1",
    [mySym] : "myKey1",         // correct syntax of using Symbol in objects
    age: 18,
    location: "AM",
    email: "random@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
// console.log(jsUser.mySym);
console.log(jsUser[mySym]);         
console.log(typeof jsUser[mySym]);

jsUser.email = "random@yahoo.com"
// Object.freeze(jsUser)       // freezes the object for any further changes after this point
jsUser.email = "random@microsoft.com"
console.log(jsUser);        
//{
//   name: 'John',
//   'full name': 'John Doe',
//   age: 18,
//   location: 'AM',
//   email: 'random@yahoo.com',
//   isLoggedIn: false,
//   lastLoginDays: [ 'Monday', 'Saturday' ],
//   [Symbol(key1)]: 'myKey1'
// }


jsUser.greeting = function() {
    console.log("Hello Js User");
}

jsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`);
}

console.log(jsUser.greeting);       //[Function (anonymous)]
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());