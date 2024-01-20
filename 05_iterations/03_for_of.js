//  High Order Array Loops

// for of

//  ["", "", ""]
//  [{},{},{}]

const arr = [1, 2, 3, 4, 5];

//for of loop
for (const num of arr) {
  console.log(num);
}

const greetings = "Hello World!";
for (const greet of greetings) {
  if (greet === " ") {
    break;
  }
  console.log(`Each char id ${greet}`);
}

// Maps

const map = new Map();
map.set("IN", "INDIA");
map.set("USA", "United States Of America");
map.set("FR", "FRANCE");
map.set("FR", "FRANCE");

console.log(map);

for (const key of map) {
  console.log(key);
}

for (const [key] of map) {
  console.log(key);
}

for (const [key, value] of map) {
  console.log(key, ":-", value);
}

const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

// for (const [key, value] of myObject) {
//   console.log(key, ":-", value);
// }                //:-> Output:-> myObject is not iterable
