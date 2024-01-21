const myNums = [1, 2, 3];

// function
const total = myNums.reduce(function (accumulator, currentValue) {
  console.log(`acc : ${accumulator} and currValue : ${currentValue}`);
  return accumulator + currentValue;
}, 0);

console.log(total);

// arrow function

const myTotal = myNums.reduce((acc, curValue) => acc + curValue, 0);

console.log(myTotal);

const shoppingCart = [
  {
    itemName: "JS Course",
    price: 2999,
  },
  {
    itemName: "Mobile Development",
    price: 5999,
  },
  {
    itemName: "Data Science",
    price: 12999,
  },
  {
    itemName: "Web Development",
    price: 3999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);
