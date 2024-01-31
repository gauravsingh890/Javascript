// try to avoid events in body directly because it is not feasible to inject javascript directly in html {we can do it in react but not in javascript}
// <img onclick='alert('owl')' >

// we don't use this approach : we use addEventListener
// document.getElementById('owl').onclick = function(){
//   alert('owl clicked')
// }

// default = false :-> third parameter in eventListener
// it is eventPropagation which we don't get in onclick
// it has two use Event Bubbling and Event Catching
// false :-> Event Bubbling   : it travels from inner element to outer element
// for e.g, if both click event is false then owl will be executed first
// true :-> Event Catching    : it travels from top to bottom or outer to inner
// for e.g, if both click event is true then image will be executed before owl
document.getElementById("images").addEventListener(
  "click",
  function (e) {
    console.log("clicked inside the ul");
  },
  false
);
document.getElementById("owl").addEventListener(
  "click",
  function (e) {
    console.log("owl clicked");
    e.stopPropagation(); // if we don't want to execute the outer event after
    // executing the inner one we use stopPropagation method
  },
  false
);

document.getElementById("google").addEventListener("click", function (e) {
  console.log("google clicked");
  e.preventDefault();
});

/*
        To study in event: -> type, timestamp, defaultPrevented
        target, toElement, srcElement, currentTarget
        interview:-> clientX, clientY, screenX, screenY
        altkey, ctrlkey, shiftkey, keyCode
        */

// another method :-> attachEvent()
// In jquery :-> on

// how to remove item with the help of events
document.querySelector("#images").addEventListener(
  "click",
  function (e) {
    console.log(e.target.parentNode);
    console.log(e.target.tagName);
    if (e.target.tagName === "IMG") {
      console.log(e.target.id);
      let removeIt = e.target.parentNode;
      removeIt.remove();
      // removeIt.parentNode.removeChild(removeIt);
    }
  },
  false
);
