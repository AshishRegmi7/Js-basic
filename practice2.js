// Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

/*const a = prompt("Enter a positive number");
if (a % 3 == 0 || a % 7 == 0) {
  console.log("The given number is a multiple of 3 or 7");
} else {
  console.log("Not a multiple of 3 or 7");
}

// Write a JavaScript program to get the current date.

const today = new Date();
console.log(today);

const date = new Date().toISOString();
console.log(date);
*/
// Write a JavaScript program to calculate multiplication and division of two numbers.(use same function to achieve this)

const calc = (a, b, operation = "M") => {
  if (operation == "M") {
    return a * b;
  } else {
    return a / b;
  }
};
console.log(calc(2, 3, "a"));

// Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum

const sum = (a, b) => {
  if (a == b) {
    return 3 * (a + b);
  } else {
    return a + b;
  }
};
console.log(sum(2, 2));

// Write a JavaScript function that reverses a number.
const reverse = (a) => {
  a = String(a);
  return a.split("").reverse().join("");
};
console.log(reverse(1234));
