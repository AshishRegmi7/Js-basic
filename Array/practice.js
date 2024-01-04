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

const str = String(prompt("Enter a word or number:"));
const checkPalindrome = (word) => {
  return word.split("").reverse().join("");
};
let a = checkPalindrome(str);
if (str === a) {
  console.log("Entered word or number is palindrome");
} else {
  console.log("Not a palindrome");
}
