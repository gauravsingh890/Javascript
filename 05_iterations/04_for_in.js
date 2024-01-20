// High Order Array Loops

// for in

const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

// to get keys
for (const key in myObject) {
  console.log(key);
}

// to get key, value
for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "cpp", "python", "rust", "ruby"];

for (const key in programming) {
  console.log(key); // 0, 1, 2, 3, 4
  console.log(programming[key]); // js, cpp, python, rust, ruby
}

// Output: in arrays 'for in' gives the index values

// For in map
const map = new Map();
map.set("IN", "INDIA");
map.set("USA", "United States Of America");
map.set("FR", "FRANCE");
map.set("FR", "FRANCE");

for (const key in map) {
  console.log(key);
} // Output:-> map is not iterable so it won't give any output
