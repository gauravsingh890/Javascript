// const buttons = document.querySelectorAll(".button");
// const body = document.querySelector("body");

// buttons.forEach(function (button) {
//   console.log(button);
//   button.addEventListener("click", function (e) {
//     console.log(e);
//     console.log(e.target);
//     if (e.target.id === "grey") {
//       body.style.background = e.target.id;
//     }
//     if (e.target.id === "white") {
//       body.style.background = e.target.id;
//     }
//     if (e.target.id === "yellow") {
//       body.style.background = e.target.id;
//     }
//     if (e.target.id === "blue") {
//       body.style.background = e.target.id;
//     }
//     if (e.target.id === "black") {
//       body.style.background = e.target.id;
//     }
//     if (e.target.id === "purple") {
//       body.style.background = e.target.id;
//     }
//   });
// });

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    switch (e.target.id) {
      case "grey":
        body.style.background = e.target.id;
        break;
      case "blue":
        body.style.background = e.target.id;
        break;
      case "white":
        body.style.background = e.target.id;
        break;
      case "yellow":
        body.style.background = e.target.id;
        break;
      case "purple":
        body.style.background = e.target.id;
        break;
      case "black":
        body.style.background = e.target.id;
        break;
      default:
        body.style.background = "orange";
        break;
    }
  });
});
