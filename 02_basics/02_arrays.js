const marvel_heroes = ["thor", "Ironman", "Spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)   // [ 'thor', 'Ironman', 'Spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);   // flash

const allHeroes = marvel_heroes.concat(dc_heroes)   //[ 'thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]
console.log(allHeroes);


// Spread Operator 
const all_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_heroes);    //[ 'thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const usable_another_array = another_array.flat(3);     // 3 is the depth for the flat value to unpack the array    :-> can use infinity too
console.log(usable_another_array);


console.log(Array.isArray("John"));
console.log(Array.from("John"));
console.log(Array.from({nam: "John"}));     // we have to assign if the array should be formed with keys or values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));