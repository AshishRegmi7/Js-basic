function getFormData() {
  const fName = document.getElementById("fname").value;
  const lName = document.getElementById("lname").value;
  const email = document.getElementById("inputEmail4").value;
  const password = document.getElementById("inputPassword4").value;
  const address = document.getElementById("inputAddress").value;
  const gender = document.getElementByName("gender").value;
  console.log(
    "First Name:" + fName,
    "Last Name:" + lName,
    "Email Address:" + email,
    "Password:" + password,
    "Address:" + address,
    "Gender:" + gender
  );
  alert(`Welcome ${fName}`);
}
