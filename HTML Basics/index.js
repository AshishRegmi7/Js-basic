function today() {
  return new Date();
}
document.getElementById("first").innerHTML = today();

function getFormData() {
  const fName = document.getElementById("fName").value;
  const lName = document.getElementById("lName").value;
  console.log(fName, lName);
}
