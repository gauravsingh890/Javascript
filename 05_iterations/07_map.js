// map
// map return everything : which means filter is condition based but maps not
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const nums = myNumbers.map((num) => num + 10);
console.log(nums);

// how to use above condition in forEach
const list = [];
myNumbers.forEach((num) => {
  num = num + 10;
  list.push(num);
});
console.log(list);

// Chaining : use of multiple methods together

const newNums = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

console.log(newNums);
