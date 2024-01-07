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
