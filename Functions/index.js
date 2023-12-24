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
}
