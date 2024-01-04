// //Write a JS function that returns a string that has leetrs in alphabetical order.
const alpha = (word) => {
  return word.split("").sort().join("");
};

console.log(alpha("ashish"));

// //Homework
// //Write a js function that return true if the value is palindrome else false?
// //For eg; mom(true)
// /*Eg Test
// 121,-10,10  */

/*const str = String(prompt("Enter a word or number:"));
const checkPalindrome = (word) => {
  return word.split("").reverse().join("");
};
let a = checkPalindrome(str);
if (str === a) {
  console.log(str + " is palindrome");
}
{
  console.log(str + " Not a palindrome");
}
*/
//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.

const arr = ["the", "quick", "brown", "fox"];
const d = arr.map((word) => {
  return word.toUpperCase();
});
console.log(d);

//Write a function that returns username who has admin access.
const array = [
  { name: "Ashish", roles: ["admin"] },
  { name: "Ram", roles: ["user"] },
  { name: "sita", roles: ["user", "admin"] },
];

const checkRole = (role) => {
  const d = array.map((user) => {
    if (user.roles.includes(role)) return user.name;
  });
};
const result = checkRole("user");
console.log(result);

//Write a function that sum every character of [1,2,3]
const f = [1, 2, 3];
const n = (s) => {
  const fs = f.reduce((a, b) => {
    return a + b;
  }, 0);
  return fs;
};
console.log(n(f));
