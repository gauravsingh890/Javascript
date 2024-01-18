// Switch case:->

//Syntax for switch case

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const month = 3;

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
  case 12:
    console.log("December");
  default:
    console.log("Not a valid month");
    break;
}

// Note :-> break : is helpful when a condition is met and the code for that case is executed then instead of going to next case and executing it without checking the condition it will exit the control flow of switch

// Note :-> default : this condition is met when there is no other condition got matched

// For string condition

const day = "mon";
switch (day) {
  case "mon":
    console.log(`Day is ${day}`);
    break;

  default:
    console.log("!!!No day found!!!");
    break;
}
