// // // objects in js

// // const marks = {
// //   Ashish: 99,
// //   Rohan: 90,
// //   Ramesh: 80,
// //   Januka: 50,
// // };
// // console.log(marks["Januka"]);

// //Create a variable of type string and add a number to it

// let a = "Ashish";
// let b = 6;
// console.log(a + b);

// //Use typeof operator to find the datatype of string in above question.
// console.log(typeof a);

// const student = {
//   name: "Ashish",
//   section: "A",
//   Rollno: 6,
// };

// //Adding key to object
// (student["surname"] = "Regmi"),
//   //Replacing the name
//   (student["name"] = "Ram");

// console.log(student);

// console.log(student.Rollno);

//Write a program to print marks of students in object using for in loop

const obj = {
  Ashish: 98,
  Ram: 45,
  Sita: 67,
  Ganesh: 20,
};
for (let key in obj) {
  console.log(key + obj[key]);
}
