function sayHello() {
    console.log("h");
    console.log("e");
    console.log("l");
    console.log("l");
    console.log("o");
}

sayHello        // here is only the reference of function so it won't execute
sayHello();     // here this function will be executed 

function addTwoNumbers(a, b){
    console.log(a + b);
}

addTwoNumbers();        // will return NaN
addTwoNumbers(3,4);     // 7
addTwoNumbers(3, "4")   // 34
addTwoNumbers(3, "a")   // 3a
addTwoNumbers(3, null)  // 3

const result = addTwoNumbers(3, 6)
console.log("Result: ", result);        // Result: undefined    :-> because function addTwoNumbers is not returning anything, it just printing values

function sumTwoNumbers(a, b){
    return a + b;
}

const sum = sumTwoNumbers(3, 6);
console.log("Sum: ", sum);          // Sum: 9


function loginUserMessage(username) {
    return `${username} just logged in`
}

console.log(loginUserMessage("john"));  // john just logged in
console.log(loginUserMessage());    // undefined just logged in

// functions with objects and array

function calculateCartPrice(...num){        // ...num in parameter is rest operator
    return num
}

console.log(calculateCartPrice(200,300,400));

const user = {
    username : "Sam",
    price    : 9922
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)  // Username is Sam and price is 9922
handleObject({
    username: "John",   
    price : 2323
})          // Username is John and price is 2323

const arr = [100, 500, 600 , 700]

function returnArray(getArray) {
    return getArray[2]
}

console.log(returnArray(arr));     //   600
console.log(returnArray([100,300,500,600,700,900]));       // 500