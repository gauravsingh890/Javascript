const requestURL = "https://randomuser.me/api/";
const xhr = new XMLHttpRequest();
xhr.open("GET", requestURL);

// to track status
xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    console.log(this.responseText);
  }
};
// console.log(xhr.readyState);
xhr.send();
