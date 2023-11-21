document.addEventListener("DOMContentLoaded", function () {
  const myForm = document.getElementById("myForm");
  const tableBody = document
    .getElementById("userTable")
    .getElementsByTagName("tbody")[0];
  myForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      dob: document.getElementById("dob").value,
      acceptTerms: document.getElementById("acceptTerms").checked,
    };
    const storedData = JSON.parse(localStorage.getItem("formData")) || [];
    storedData.push(formData);
    const newRow = tableBody.insertRow();
    const keys = ["name", "email", "password", "dob", "acceptTerms"];
    keys.forEach((key) => {
      const cell = newRow.insertCell();
      cell.textContent = formData[key];
    });
    localStorage.setItem("formData", JSON.stringify(storedData));
    myForm.reset();
  });

  const userData = JSON.parse(localStorage.getItem("formData")) || [];

  userData.forEach((user) => {
    const row = tableBody.insertRow();
    const keys = ["name", "email", "password", "dob", "acceptTerms"];

    keys.forEach((key) => {
      const cell = row.insertCell();
      cell.textContent = user[key];
    });
  });
});
