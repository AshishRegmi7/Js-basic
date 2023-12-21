// Statements
// Switch case statements

//calculator
const a = prompt("Enter the value of a");
const b = prompt("Enter the value of b");
const c = prompt("Enter the operator +,-*,/");
switch (c) {
  //if(c == +)
  case "+":
    let add = parseFloat(a) + parseFloat(b);
    console.log(add);
    break;
  case "-":
    console.log(parsefloat(a) - parsefloat(b));
    break;
  case "*":
    console.log(parsefloat(a) * parsefloat(b));
    break;
  case "/":
    console.log(a / b);
    break;
  default:
    console.log("Invalid operator");
    break;
}
