const form = document.querySelector("form");
const emailField = document.querySelector(".email-field");
const emailError = document.querySelector(".email-error");
const inputEmail = document.getElementById("inputEmail");
const passField = document.querySelector(".create-password");
const inputPass = document.getElementById("inputPassword");
const confirmPassField = document.querySelector(".confirm-password");
const confirmPassInput = document.getElementById("inputConfirmPassword");
const checkbox = document.getElementById("checkbox");
const checkboxField = document.querySelector(".checkbox-field");

window.localStorage;

// Message Error
const invalidEmail = "Please enter a valid email";
const emailExist = "The email is already registered";

// Email Validation
function checkEmail() {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (inputEmail.value.match(emailPattern)) {
    //removing invalid class if email value matched with emailPattern
    emailField.classList.remove("invalid");

    // check email in localStorage
    if (localStorage.getItem(inputEmail.value) === null) {
      emailField.classList.remove("invalid");
    } else {
      emailError.textContent = emailExist;
      emailField.classList.add("invalid");
    }
  } else {
    //adding invalid class if email value do not matched with email pattern
    emailError.textContent = invalidEmail;
    emailField.classList.add("invalid");
  }
}
// Password Validation
function createPass() {
  const passPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!inputPass.value.match(passPattern)) {
    //adding invalid class if password input value do not match with passPattern
    return passField.classList.add("invalid");
  }
  //removing invalid class if password input value matched with passPattern
  passField.classList.remove("invalid");
}

// Confirm Password Validation
function confirmPass() {
  if (
    inputPass.value !== confirmPassInput.value ||
    confirmPassInput.value === ""
  ) {
    return confirmPassField.classList.add("invalid");
  }
  confirmPassField.classList.remove("invalid");
}

// Checkbox Validation
function check_checkbox() {
  if (checkbox.checked) {
    checkboxField.classList.remove("invalid");
  } else {
    checkboxField.classList.add("invalid");
  }
}
// Calling Function on Form Submit
form.addEventListener("submit", (e) => {
  e.preventDefault(); //preventing form submitting
  checkEmail();
  createPass();
  confirmPass();
  check_checkbox();
  //calling function on key up
  inputEmail.addEventListener("keyup", checkEmail);
  inputPass.addEventListener("keyup", createPass);
  confirmPassInput.addEventListener("keyup", confirmPass);
  checkboxField.addEventListener("click", check_checkbox);

  if (
    !emailField.classList.contains("invalid") &&
    !passField.classList.contains("invalid") &&
    !confirmPassField.classList.contains("invalid") &&
    !checkboxField.classList.contains("invalid")
  ) {
    let list = {
      email: inputEmail.value,
      password: inputPass.value,
      status: "login",
    };
    localStorage.setItem(inputEmail.value, JSON.stringify(list));
    location.href = form.getAttribute("action");
  }
});

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   if (localStorage.getItem(inputEmail.value) === null) {
//     let arr = [{ email: inputEmail.value, password: inputPass.value }];
//     localStorage.setItem(inputEmail.value, JSON.stringify(arr));
//     console.log(localStorage.getItem(inputEmail.value));

//     const newArr1 = arr.map((v) => ({ ...v, isActive: true }));
//     localStorage.setItem(inputEmail.value, JSON.stringify(newArr1));
//     console.log(localStorage.getItem(inputEmail.value));
//     // console.log(JSON.parse(localStorage.getItem(inputEmail.value)));
//   } else {
//     // alert("user ");
//   }
// });
