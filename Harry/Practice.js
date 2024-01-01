// // objects in js

/*const marks = {
  Ashish: 99,
  Rohan: 90,
  Ramesh: 80,
  Januka: 50,
};
console.log(marks["Januka"]);

// //Create a variable of type string and add a number to it

let a = "Ashish";
let b = 6;
console.log(a + b);

// //Use typeof operator to find the datatype of string in above question.
console.log(typeof a);

const student = {
  name: "Ashish",
  section: "A",
  Rollno: 6,
};

// //Adding key to object
(student["surname"] = "Regmi"),
  //   //Replacing the name
  (student["name"] = "Ram");

console.log(student);

console.log(student.Rollno);

// //Write a program to print marks of students in object using for in loop

const obj = {
  Ashish: 98,
  Ram: 45,
  Sita: 67,
  Ganesh: 20,
};
for (let key in obj) {
  console.log(key + obj[key]);
}

//Functions practice set
//Q1 Write a Js function that reverses a number.

const rev = (x) => {
  x = String(x);
  return x.split("").reverse("").join("");
};
console.log(rev(12345));

//Js function to check whether the passed string is palindrome or not.

const checkpali = (x) => {
  x = x.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  const rev = x.split("").reverse().join("");
  return x === rev;
};
const input = prompt("Enter string to check:");
const result = checkpali(input)
  ? console.log(input + "is a palindrome")
  : console.log(input + "isnot a palindrome");
  */

//Write  js function that reverses a number

const reverser = (num) => {
  const data = String(num);
  const length = data.length;
  for (i = length; i >= 0; i--) {
    console.log(data[i]);
  }
};
console.log(reverser(12345));

//conversion of celcius to fahrenheit

const conversion = (temp, unit = "C") => {
  if (unit == "C") {
    return (9 * temp) / 5 + 32 + "fahrenheit";
  }
  return ((temp - 32) / 9) * 5 + "celsius";
};
console.log(conversion(45, "C"));

//multiplication and division of two numbers

const arithmetic = (a, b, operation = "M") => {
  if (operation === "M") {
    return a * b;
  }
  return a / b;
};
console.log(arithmetic(3, 0, "D"));
