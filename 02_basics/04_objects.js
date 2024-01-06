const user = new Object()       // singleton Object
const tinderUser = {}           // non - singleton object

console.log(user);      // {}
console.log(tinderUser); // {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email : "regular@google.com",
    fullName : {
        userFullName : {
            firstName : "John",
            lastName : "Doe"
        }
    }
}

console.log(regularUser.fullName);      // { userFullName: { firstName: 'John', lastName: 'Doe' } }
console.log(regularUser.fullName.userFullName.firstName);   // John

// console.log(regularUser.fullName?.userFullName.firstName);  // ? :=> this suggest that the method will only proceed when the fullName exist

const obj1 = {
    1 : "a",
    2 : "b"
}

const obj2 = {3 : "a", 4 : "b"}
const obj4 = {5 : "a", 6 : "b"}
// const obj3 = {obj1, obj2}   
// console.log(obj3);          //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj3 = Object.assign({}, obj1, obj2, obj4)       // in this method '{}' this is optional which will because as the target for the assign method
console.log("obj3",obj3);          // obj3 { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj5 = {...obj1, ...obj2, ...obj3}    // spread operator use to combine
console.log("obj5", obj5);          //obj5 { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// concept will be used in database and loop

const users = [
    {
        id : 1,
        email: "john@doe.com"
    },
    {
        id : 2,
        email: "john@doe2.com"
    },
    {
        id : 3,
        email: "john@doe3.com"
    }
]

console.log(users[1].email);    // john@doe2.com

console.log(tinderUser);        //  { id: '123abc', name: 'Sammy', isLoggedIn: false }
console.log(Object.keys(tinderUser));   // [ 'id', 'name', 'isLoggedIn' ] 
// object.keys() returns a list which we can use for loop
console.log(Object.values(tinderUser));     // [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser));    // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]     :-> values return in key value pair

// when loopin an object if the values is not present or is null and the case is not handled properly its chances to crash increases, to solve that issues we use hasOwnProperty()
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true
console.log(tinderUser.hasOwnProperty('isLoggedOut')); // false