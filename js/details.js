const firstNameInput = document.getElementById("validationFirstName");
const lastNameInput = document.getElementById("validationLastName");
const mobileNumberInput = document.getElementById("validationMobileNumber");
const cityInput = document.getElementById("validationCity");
const educationInput = document.getElementById("validationEducation");
const averageTypeInput = document.getElementById("dropdownInput");
const averageInput = document.getElementById("validationAverage");
const birthdayInput = document.getElementById("birthday");
const imgInput = document.getElementById("imageUpload");

// load function to let the informations appears after the user has completed the first stage
window.addEventListener("load", function () {
  if (dataUser.statusPersonalInformation == "Done") {
    firstNameInput.value = dataUser.fullName.split(" ")[0];
    lastNameInput.value = dataUser.fullName.substring(
      dataUser.fullName.indexOf(" ") + 1
    );
    mobileNumberInput.value = dataUser.MobileNumber.slice(4);
    cityInput.value = dataUser.City;
    educationInput.value = dataUser.Education;
    averageTypeInput.textContent = dataUser.AverageType;
    averageInput.value = dataUser.Average;
    birthdayInput.value = dataUser.Birthday;
    imgInput.value = dataUser.Image;
  }
});

//event listener for next button
document.addEventListener("DOMContentLoaded", function () {
  var nextButton = document.querySelector(".details-next-btn");
  nextButton.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();

    var form = document.querySelector(".needs-validation");
    form.classList.add("was-validated");
    if (
      form.checkValidity() &&
      firstNameInput.value !== "" &&
      lastNameInput.value !== "" &&
      mobileNumberInput.value !== "" &&
      cityInput.value !== "" &&
      educationInput.value !== "" &&
      averageTypeInput.textContent !== "" &&
      averageInput.value !== "" &&
      birthdayInput.value !== "" &&
      imgInput.value !== ""
    ) {
      let list = {
        fullName: `${firstNameInput.value} ${lastNameInput.value}`,
        MobileNumber: "+962" + mobileNumberInput.value,
        City: cityInput.value,
        Education: educationInput.value,
        AverageType: averageTypeInput.textContent,
        Average: averageInput.value,
        Birthday: birthdayInput.value,
        Image: imgInput.value,
        statusPersonalInformation: "Done",
      };
      let newData = { ...dataUser, ...list };
      localStorage.setItem(dataUser.email, JSON.stringify(newData));
      window.location.href = "../pages/registration_page.html";
    }
  });
});

//average function checking
var isOptionSelected = false;

function selectOption(option) {
  var inputElement = document.getElementById("validationAverage");
  inputElement.value = ""; // Reset the input value when the option changes
  if (option === "GPA") {
    inputElement.setAttribute("type", "number");
    inputElement.setAttribute("min", "0");
    inputElement.setAttribute("max", "4");
    inputElement.setAttribute("step", "0.01");
    inputElement.setAttribute("placeholder", "Enter GPA (0-4)");
    document.querySelector("#average-invalid-feedback").innerHTML =
      "Enter a number between (0-4) with 2 decimal points as maximum"; // Set initial validation error message
  } else if (option === "%") {
    inputElement.setAttribute("type", "number");
    inputElement.setAttribute("min", "0");
    inputElement.setAttribute("max", "100");
    inputElement.setAttribute("step", "0.01");
    inputElement.setAttribute("placeholder", "Enter Percentage (1-100)");
    document.querySelector("#average-invalid-feedback").innerHTML =
      "Enter number between (1-100) with 2 decimal points as maximum"; // Set initial validation error message
  }
  //to let option appears in the place of select downDrop
  document.getElementById("dropdownInput").textContent = option;
  // to check if the user has chosen or not
  if (option === "GPA" || option === "%") {
    isOptionSelected = true;
  } else {
    isOptionSelected = false;
  }
}

document
  .getElementById("validationAverage")
  .addEventListener("input", function () {
    var inputElement = document.getElementById("validationAverage");
    var option = document.getElementById("dropdownInput").textContent;

    // to check if the user has chosen or not
    if (!isOptionSelected) {
      document.querySelector("#average-invalid-feedback").innerHTML =
        "Please choose GPA or %";
      inputElement.setCustomValidity("Invalid input");
      return;
    }
    //error massages that appears if user enter invalid numbers
    if (option === "GPA") {
      if (inputElement.value > 4 || inputElement.value < 0) {
        document.querySelector("#average-invalid-feedback").innerHTML =
          "Enter a number between (0-4) with 2 decimal points as maximum";
        inputElement.setCustomValidity("Invalid input");
      } else {
        document.querySelector("#average-invalid-feedback").innerHTML = ""; // Clear the validation error message
        inputElement.setCustomValidity("");
      }
    } else if (option === "%") {
      if (inputElement.value > 100 || inputElement.value < 1) {
        document.querySelector("#average-invalid-feedback").innerHTML =
          "Enter number between (1-100) with 2 decimal points as maximum";
        inputElement.setCustomValidity("Invalid input");
      } else {
        document.querySelector("#average-invalid-feedback").innerHTML = ""; // Clear the validation error message
        inputElement.setCustomValidity("");
      }
    }
  });
