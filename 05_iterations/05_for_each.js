// Higher Order Function

// for each

const coding = ["js", "ruby", "python", "java", "cpp"];

coding.forEach(function (item) {
  console.log(`for each with function :-> ${item}`);
});

// Note:-> callback function doesn't have a name

// For Each with arrow function
coding.forEach((val) => {
  console.log(`for each with arrow function :-> ${val}`);
});

function printMe(item) {
  console.log(item);
}

coding.forEach(printMe);

//`for each` contains more than just the value of an array, such as :-> index and arr itself

coding.forEach((item, index, arr) => {
  console.log(`The value at iteration ${index} is ${item} of array `, arr);
});

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
  {
    languageName: "kotlin",
    languageFileName: "kt",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
  console.log(item.languageFileName);
});
