// setTimeout(callback, timeInMilliSeconds) : it runs the task after the specified duration

// First way to use function in setTimeout
setTimeout(function () {
  console.log("hello world!");
}, 2000);

const sayHello = function () {
  console.log("Hello, world!");
};
setTimeout(sayHello, 1000);

const changeText = function () {
  document.querySelector("h1").innerHTML = "Javascript Practice";
};

// setTimeout(changeText, 2000);

// it does not work like setTimeout you have to pass the reference of the setTimeout

const changetxt = setTimeout(changeText, 2000);
// clearTimeout(changeText);

const changeTxt = document
  .querySelector("#stop")
  .addEventListener("click", function () {
    clearTimeout(changetxt);
    console.log("STOPPED");
  });
