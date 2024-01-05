/*///Write a JS function that returns a string that has leetrs in alphabetical order.
const alpha = (word) => {
  return word.split("").sort().join("");
};

// console.log(alpha("ashish"));

// //Homework
// //Write a js function that return true if the value is palindrome else false?
// //For eg; mom(true)
// /*Eg Test
// 121,-10,10  

const str = String(prompt("Enter a word or number:"));
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

//Write a function that returns username who has admin access.
const array = [
  { name: "Ashish", roles: ["admin"] },
  { name: "Ram", roles: ["user"] },
  { name: "sita", roles: ["user", "admin"] },
];

const checkRole = (role) => {
  const d = array
    .filter((user) => user.roles.includes(role))
    .map((user) => user.name);
  return d;
};
const result = checkRole("user");
// console.log(result);

//Write a function that sum every character of [1,2,3]
//reduce method reduces an array to a single value

const arry = [6, 7, 2, 4, 5, 3];
const f = arry.reduce((a, b) => a + b);
// console.log(f);

//sort method uses compare function and overwrites in original array.
const g = arry.sort((a, b) => a - b);
// console.log(g);

// console.log(arry);

const array2 = [
  { name: "Ashish", roles: ["admin"] },
  { name: "Ram", roles: ["user"] },
  { name: "sita", roles: ["user", "admin"] },
];

const i = (inside) => {
  const h = array2.map((value) => {
    if (value.roles.includes(inside)) return value.name;
  });
  console.log(h);
};
// console.log(i("admin"));

const studentMarks = [
  {
    name: "Ashish",
    rollno: "1",
    Totalmarks: 90,
    role: ["management", "monitor", "teacher"],
  },
  {
    name: "Bishal",
    rollno: "2",
    Totalmarks: 80,
    role: ["management", "student", "sweeper"],
  },
  {
    name: "Suman",
    rollno: "3",
    Totalmarks: 90,
    role: ["science", "inspecter", "teacher"],
  },
];

//Using map method to print name of student whosw marks is greter than 40.
const e = studentMarks.map((index) => {
  if (index.Totalmarks > 40) return index;
});
// console.log(e);

//Using map method to print user name whose marks is greater than 80 and role management.

const f = (roles) => {
  const g = studentMarks.map((index) => {
    if (index.Totalmarks > 80 && index.role.includes(roles)) return index.name;
  });
  console.log(g);
};
console.log(f("management"));
*/
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.

const arr = [
  "the",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "a",
  "lazy",
  "dog",
];

const capitalizeWords = (str) => {
  const words = str.split(" ");
  const capitalizedWords = words.map((value) => {
    // Assign the result back to the variable
    return value.charAt(0).toUpperCase() + value.slice(1);
  });
  //Join the capitalized words back into a string
  const result = capitalizedWords.join(" ");
  return result;
};
const capitalizedString = capitalizeWords(arr.join(" "));
console.log(capitalizedString);

const redu = [1, 2, 3, 4];

redu.splice(1, 1, "Ashish"); //splice(1(index),1(replace 1 item from indea 1),Ashish(eplace item with "Ashish"))
console.log(redu);

//reduce method
const funct = redu.reduce((a, b) => {
  return a + b;
});
// console.log(funct);
