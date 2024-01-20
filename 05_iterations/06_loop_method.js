const coding = ["js", "ruby", "python", "java", "cpp"];

const values = coding.forEach((item) => {
  console.log(item);
});

console.log(values); // undefined

// Note:-> forEach does not return any value

// to return something from an array we use "filter"
// filter is used the same way as "forEach" which means it also takes callback function

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// basics for filters
const myNums = numbers.filter((num) => num > 4);
console.log(myNums); // [5, 6, 7, 8, 9, 10 ]

// const nums = numbers.filter( (num) => {
//     num > 4;
// })
// it won't return anything as in function {} -> this states a `scope` which means it won't retun anything without the return keyword
// because if you open a scope you have to use return
// and if you don't want to use return keyword write the condition in one line without scope

const nums = numbers.filter((num) => {
  return num > 4;
});
console.log(nums); //[5, 6, 7, 8, 9, 10 ]

// How to achieve the same result in "for each"
const newNums = [];

myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num);
  }
});

console.log(newNums);

// More about filter

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((book) => book.genre === "History");

userBooks = books.filter((book) => {
  return book.publish >= 1995 && book.genre === "History";
});
console.log(userBooks);
