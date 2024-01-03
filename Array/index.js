//Create an array
// const array = [
//   { name: "Ashish", lastName: "Regmi", age: 23 },
//   { name: "Ram", age: 22 },
//   45,
//   "Hello Everone",
//   "p",
// ];

// console.log(array);
// // Access
// // Provide always starts from 0
// console.log(array[array.length - 1]);

// // Update
// array[5] = "Govinda";
// array[0].name = "Shyam";

//Write a function to sort the array by age in ascending order.
const arr = [
  { name: "ram", age: 20 },
  { name: "shyam", age: 10 },
  { name: "hari", age: 15 },
];
// const check = arr.sort((a, b) => a.age - b.age);
// console.log(check);

//Function to console age
const peoples = (people) => {
  return people.age;
};

const sorting = arr.sort((a, b) => a.age - b.age);
console.log(sorting);

const immutable = arr.map(peoples);
console.log(immutable);

// // foreach
// arr.forEach(peoples);

// //map
// const d = arr.map((people) => peoples(people));
// console.log(d);

// const cars = [
//   { name: "Suzuki", model: "ALTO", Cost: 20 },
//   { name: "Hyundai", model: "CRETA", Cost: 60 },
//   { name: "Ford", model: "POL0", Cost: 30 },
//   { name: "Mitsubishi", model: "GAAD", Cost: 40 },
// ];

// const arrange = cars.sort((a, b) => a.Cost - b.Cost);
// console.log(arrange);

// const cost = ($) => {
//   console.log($.Cost);
// };

// const arranges = cars.map(($) => cost($));
// console.log(arranges);

// const showName = (nameofcar) => {
//   console.log(nameofcar.name);
//   return nameofcar.name;
// };
// // for (let i = 0; i <= cars.length - 1; i++) {
// //   showName(cars[i]);
// // }
// // cars.forEach(showName);

// // .map works as a loop inside array(cars).
// const d = cars.map((nameofcar) => showName(nameofcar));
// console.log(d);
