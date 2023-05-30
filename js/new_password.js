const formNewPass = document.getElementById("new__pass__form");
const passField = document.querySelector(".create-password");
const inputPass = document.getElementById("inputPassword");
const confirmPassField = document.querySelector(".confirm-password");
const confirmPassInput = document.getElementById("inputConfirmPassword");

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

// Calling Function on Form Submit
formNewPass.addEventListener("submit", (e) => {
  e.preventDefault(); //preventing form submitting
  createPass();
  confirmPass();
  //calling function on key up
  inputPass.addEventListener("keyup", createPass);
  confirmPassInput.addEventListener("keyup", confirmPass);

  if (
    !passField.classList.contains("invalid") &&
    !confirmPassField.classList.contains("invalid")
  ) {
    var currentDate = new Date();
    const encryptionKey = "encryptionKey123";
    const pass = encryptPassword(inputPass.value, encryptionKey);
    const getEmail = window.sessionStorage.getItem("emailRest");
    let data = JSON.parse(localStorage.getItem(getEmail));

    let currentObj = { ...data };
    currentObj["password"] = pass;
    currentObj["oldPassword"] = data.password;
    currentObj["changePassDate"] = currentDate;

    localStorage.setItem(getEmail, JSON.stringify(currentObj));
    location.href = formNewPass.getAttribute("action");
  }
});

// Encrypt the password
function encryptPassword(password, encryptionKey) {
  const encryptedData = sjcl.encrypt(encryptionKey, password);
  return encryptedData;
}
// Decrypt the password
function decryptPassword(encryptedPassword, encryptionKey) {
  const decryptedData = sjcl.decrypt(encryptionKey, encryptedPassword);
  return decryptedData;
}
