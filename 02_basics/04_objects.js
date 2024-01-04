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

// const obj3 = {obj1, obj2}   
// console.log(obj3);          //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj3 = Object.assign(obj1, obj2)
console.log(obj3);