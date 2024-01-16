//      IF

const isUserLoggedIn = true;

if (isUserLoggedIn) {
  console.log("YES");
}

// Operators :->  >, <, <=, >=, !=, ==,
// Strict Operators :-> `they check datatypes too`   ===, !==

const temperature = 45;

if (temperature === 45) {
  console.log(`Today's temperature is ${temperature}`);
} else {
  console.log(`Today's temperature is unconfirmed`);
}

const score = 200;

if (score > 100) {
  const power = "fly";
  console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`)  // :-> this will give a reference error as power is not defined, it exists only for if scope

const balance = 2000;

// Implicit scope :-> it executes in one line
if (balance > 1000) console.log("test");

// Don'ts for implicit
// if (balance > 1000) console.log("test"), console.log("bad code to write");

if (balance < 1000) {
  console.log("less than 1000");
} else if (balance < 1400) {
  console.log("less than 1400");
} else if (balance < 1639) {
  console.log("less than 1639");
} else {
  console.log("less than 2400");
}
