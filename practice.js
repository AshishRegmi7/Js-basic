const getFormData = () => {
  const first = document.getElementById("fName").value;
  const last = document.getElementById("lName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const city = document.getElementById("city").value;
  const province = document.getElementById("inputState").value;
  console.log(
    `First Nmae:${first} Last Name:${last} Email-Address: ${email} Password: ${password} City:${city} Province:${province}`
  );
};
