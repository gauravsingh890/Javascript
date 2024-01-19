// for

for (let i = 0; i < 10; i++) {
  const element = i;
  console.log(element);
}

for (let i = 0; i < 10; i++) {
  const element = i;
  if (element == 5) {
    console.log("you got number 5");
  }
  console.log(element);
}

for (let i = 1; i <= 10; i++) {
  console.log(`Outer loop value ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(
      `Inner loop value ${j} and value for outer loop in inner loop ${i}`
    );
    console.log(i + " * " + j + " = " + i * j);
  }
}

let myArray = ["flash", "arrow", "superman", "batman"];
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}

//  break    :-> exit the loops when the condition is reached
//  continue :-> when the condition is met it will skip the loop for once only for that condition

for (let i = 0; i < 20; i++) {
  if (i == 5) {
    console.log(`Detected 5`);
    break;
  }
  console.log(`Value of i is ${i}`);
}

for (let i = 0; i < 20; i++) {
  if (i == 5) {
    console.log(`Detected 5`);
    continue;
  }
  console.log(`Value of i is ${i}`);
}
