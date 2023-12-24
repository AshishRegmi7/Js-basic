//logical operations
// const num1 = prompt("Enter any value for first number");
// const num2 = prompt("Enter any value for second number");

// if (num1 > num2) {
//   alert(num1 + "is greater than" + num2);
// } else {
//   alert(num2 + "is greater than" + num1);
// }

// const num3 = 2;
// const num4 = 12;
// console.log(num3 + "is greater than" + num4);

// //Ternary operator

// let a = prompt("age");
// const res =
//   a >= "18" ? console.log("USer can vote") : console.log("User cannot vote");

//Use logical operator to find whether the age of a person lies between 10 and 20

// let age = Number(prompt("Enter age of a person"));
// const res =
//   age >= 10 && age <= 20
//     ? console.log("Age of a person lies between 10 and 20")
//     : console.log("Age of a person doesnot lie between 10 and 20");

//Write a javascript progrram to find whether a number is divisible by 2 or 3

const num = Number(prompt("Enter the number:"));
const res =
  num % 2 == 0 || num % 3 == 0
    ? console.log("The number is divisible by 2 or 3")
    : console.log("The number isnot divisible by 2 or 3");
