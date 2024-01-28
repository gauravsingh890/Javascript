const clock = document.getElementById("clock");
// document.querySelector("#clock");

setInterval(function () {
  let date = new Date();
  //   console.log(date.toLocaleTimeString);  // we don't have to update it in console we need it in html
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
