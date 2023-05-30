const formReset = document.getElementById("rest__pass__form");
const emailField = document.querySelector(".email-field");
const emailError = document.querySelector(".email-error");
const inputEmail = document.getElementById("inputEmail");

window.localStorage;

// Message Error
const invalidEmail = "Please enter a valid email";
const Incorrect = "Incorrect email or password";

// Email Validation
function checkEmail() {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (inputEmail.value.match(emailPattern)) {
    emailField.classList.remove("invalid");
  } else {
    emailError.textContent = invalidEmail;
    emailField.classList.add("invalid");
  }
}
// Calling Function on Form Submit
formReset.addEventListener("submit", (e) => {
  e.preventDefault(); //preventing form submitting
  checkEmail();

  //calling function on key up
  inputEmail.addEventListener("keyup", checkEmail);

  if (!emailField.classList.contains("invalid")) {
    window.sessionStorage.setItem("emailRest", inputEmail.value);
    location.href = formReset.getAttribute("action");
  }
});

// Message Error
