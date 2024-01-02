const persondetails = {
  FirstName: "Ashish",
  LastName: "Regmi",
  Age: 23,
  iseligibletovote: function () {
    //Arrow function is local scoped so "this" keyword doesnot work in it.
    return this.Age > 18;
  },
};
console.log(persondetails.iseligibletovote());

//CRUD (Create,Read,Update,Delete)

//Update
persondetails.dob = 2000 / 12 / 11;
console.log(persondetails);

//Delete

delete persondetails.Age;
console.log(persondetails);

console.log(Object.keys(persondetails)); //Object.keys is used to print keys of an object.
