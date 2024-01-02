//Create an array
const array = [
  { name: "Ashish", lastName: "Regmi", age: 23 },
  { name: "Ram", age: 22 },
  45,
  "Hello Everone",
  "p",
];

console.log(array);
// Access
// Provide always starts from 0
console.log(array[array.length - 1]);

// Update
array[5] = "Govinda";
array[0].name = "Shyam";

//Write a function to sort the array by age in ascending order.
const arr = [
  { name: "ram", age: 20 },
  { name: "shyam", age: 10 },
  { name: "hari", age: 15 },
];
const check = arr.sort((a, b) => a.age - b.age);
console.log(check);
