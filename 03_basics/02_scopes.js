// let a = 10
// const b = 20
// var c = 30

if (true) {
    let a = 10
    const b = 20
    var c = 30

}

// console.log(a);      // a can't be printed because of the scope of 'let'
// console.log(b);      // b can't be printed because of the scope of 'const'
console.log(c);         // 'var' have global scope because of which c will be printed even when we log it outside the if statement


// main difference between var and let, const is its scope

//Nested scope

function one(){
    const username = "John"

    function two() {
        const website = "YouTube"
        console.log(username);
    }
    // console.log(website);   //  website not defined because of block scope 

    two()
}

one()


if (true) {
    const username = "Doe"
    if (username === "Doe") {
        const website = " Twitch"
        console.log(username + website);
    }

    // console.log(website);    // can't be accessed
}

// console.log(username);   //// can't be accessed


// +++++++++++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++++++++

addOne(5)
function addOne(num) {
    return num + 1
}

// addOne(5)


// addTwo(5)        // this will give error because const addTwo can't be accessed before initialization

// Expression :-> variable which holds functions known as expressions
const addTwo = function(num) {
    return num + 2
}

addTwo(5)