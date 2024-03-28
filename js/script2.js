document.querySelector("#loginForm").addEventListener("submit", function(event) {
  validateForm(event);
});

function validateForm(e) {
  let isValid = true;
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;

  if (!(username == "admin" && password == "1234")) {
    alert("invalid credentials");
    isValid = false;
  }

  if (!isValid) {
    e.preventDefault();
  }

}