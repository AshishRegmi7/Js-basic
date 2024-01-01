const persondetails = {
  FirstName: "Ashish",
  LastName: "Regmi",
  Age: 23,
  iseligibletovote: function () {
    return this.Age > 18;
  },
};
console.log(persondetails.iseligibletovote());
