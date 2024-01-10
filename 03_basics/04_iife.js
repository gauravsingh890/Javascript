// Immediately Invoked Function Expressions (IIFE)
// why use IIFE :-> To prevent from global scope pollution we use iife

// normal functions
function normalFunction() {
    console.log(`DB CONNECTED`);
}
normalFunction();

//iife functions
(function iife(){
    //named IIFE
    console.log(`IIFE DB CONNECTED`);
})();

// iife with arrow
( () => {
    console.log(`IIFE WITH ARROW FUNCTION`);
} )()