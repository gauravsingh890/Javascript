const hello = setInterval(function () {
  console.log("Hello World!", Date.now());
}, 1000);

clearInterval(hello);
// const sayHello = function () {
//   console.log("No stopping!", Date.now());
// };

// setInterval(sayHello, 2000);

// it also takes a third parameter

const sayHello = function (str) {
  console.log(str, Date.now());
};

const intervalId = setInterval(sayHello, 2000, "No stopping!");

// clearInterval(intervalId);

const start = document
  .querySelector("#start")
  .addEventListener("click", function () {
    intervalId;
    console.log("Printing started");
  });

const stop = document
  .querySelector("#stop")
  .addEventListener("click", function () {
    clearInterval(intervalId);
    console.log("Printing stopped");
  });
