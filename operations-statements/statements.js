// Statements
// Switch case statements

//calculator
const a = parseFloat(prompt("Enter the value of a"));
const b = parseFloat(prompt("Enter the value of b"));
const c = prompt("Enter the operator +,-,*,/");
if (isNaN(a)) {
  alert("Invalid number");
}

// if (65 <= a <= 90 && 65 <= b <= 90 && 97 <= a <= 122 && 97 <= b <= 122) {
//   console.log("please dont enter alphabet");
// }
switch (c) {
  //if(c == +)
  case "+":
    let add = a + b;
    console.log(add);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b);
    break;
  case "/":
    if (a == 0 && b == 0) {
      console.log("Invalid");
    }
    console.log(a / b);
    break;
  default:
    console.log("Invalid operator");
    break;
}

//switch case week

// let day = prompt("Enter the day");
// switch (day) {
//   case "Sunday":
//     console.log("We are going to kathmandu in bus");
//     break;

//   case "Monday":
//     console.log("We are going to visit Pashupatinath");
//     break;

//   case "Tuesday":
//     console.log("We are going to Bhaktapur Durbar Square");
//     break;

//   case "Wednesday":
//     console.log("We are going to swayambhunath stupa");
//     break;

//   case "Thursday":
//     console.log("We are going to Chandragiri hills");
//     break;

//   case "Friday":
//     console.log("We are going to Visit different places in the valley");
//     break;

//   case "Saturday":
//     console.log("We are going to return from kathmandu");
//     break;
//   case "default":
//     console.log("Invalid day");
// }
