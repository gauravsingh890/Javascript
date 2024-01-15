/*
run this code in browser -> developer tools -> sources -> new snippet -> code
there is a call stack option which will give the idea of how the execution context works
*/
function one() {
  console.log("one");
  two();
}
function two() {
  console.log("two");
  three();
}
function three() {
  console.log("three");
}

console.log("This is call stack for one", one());
console.log("This is call stack for two", two());
console.log("This is call stack for two", three());
