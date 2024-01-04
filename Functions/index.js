// write the function to add two numbers
const a = Number(prompt("Enter first number"));
const b = Number(prompt("Enter second number"));

// Define the function
//es5
function add(a, b) {
  return a + b;
}

//call the function
const c = add(a, b);
console.log(c); //prints the value

function checkEven(a) {
  let e =
    a % 2 == 0 ? console.log(a + "is even") : console.log(a + "isnot even");
}
checkEven(a);

function mul(a, b) {
  return a * b;
}

const d = mul(a, b);
console.log(d);
//Types of function

//Nameless function
// Default function
// Parameterized function
// Inline function
// Closure function
// Implicit function
// Explicit function

//ES6

const add = (a, b) => {
  return a + b;
};
const c = add(a, b);
console.log(c);

const iseven = (a) => {
  let e =
    a % 2 == 0 ? console.log(a + "is even") : console.log(a + "isnot even");
};
const f = iseven(a);
console.log(f);

// Write a multiplication table 0f 3 using function and loop
let a = Number(prompt("Enter the value of a:"));
const mult = (num, i) => {
  return i * num;
};
for (let num = 1; num <= 10; num++) {
  let res = mult(num, a);
  console.log(res);
// }

// Division Table .
const divis = (num1, num2) => {
  return num1 / num2;
};

let a = Number(prompt("Enter the value of numerator:"));
let b = Number(prompt("Enter the value of denominator:"));

console.log(a + "/" + b + "=" + divis(a, b));

// Write a function to find mean of 5 numbers
let a;
let b;
let c;
let d;
let e;
const mean = (a, b, c, d, e) => {
  return (a + b + c + d + e) / 5;
};
console.log(mean(1, 2, 3, 4, 5));
*/

// Nameless funtion
const d = function () {
  console.log ("Hello");
};
d();
// Default Function
const mult = (a = 3, b) => {
  return a * b;
};
console.log("", 2);

const pagination = (page = 1, size = 5) => {
  for (i = page; i <= size; i++) {
    console.log(i);
  }
};
console.log(pagination());

//Closure Function
//Function that return a hardcoded variable stored inside the function.
//Write a function that returns a secret password used in the system

const secret = () => {
  const password = "password";
  return password;
};
console.log(secret());

//implicit function
//if we dont use return function to return the function,its called implicit function
const add = (a, b) => a + b;
console.log(add(2, 3));

//Explicit function
//if we use return inside functon.

//IIFE=Immediately Invoked Functional Expression
(function () {
  console.log("It is it");
})();
//Usecase Scripts to add the dummy data inside the application during first run