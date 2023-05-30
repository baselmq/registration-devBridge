const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");
const form = document.querySelector("form");

// Iterate over all inputs
inputs.forEach((input, index1) => {
  input.addEventListener("keyup", (e) => {
    const currentInput = input;
    const nextInput = input.nextElementSibling;
    const prevInput = input.previousElementSibling;

    // If the value has more than one character, clear it
    if (currentInput.value.length > 1) {
      currentInput.value = "";
      return;
    }

    // If the next input is disabled and the current value is not empty,
    // enable the next input and focus on it
    if (
      nextInput &&
      nextInput.hasAttribute("disabled") &&
      currentInput.value !== ""
    ) {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    // If the backspace key is pressed
    if (e.key === "Backspace") {
      // Iterate over all inputs again
      inputs.forEach((input, index2) => {
        // If the index1 of the current input is less than or equal to the index2 of the input in the outer loop
        // and the previous element exists, set the disabled attribute on the input and focus on the previous element
        if (index1 <= index2 && prevInput) {
          input.setAttribute("disabled", true);
          input.value = "";
          prevInput.focus();
        }
      });
    }

    // If the fourth input (which index number is 3) is not empty and does not have the disabled attribute,
    // add the active class to the button; otherwise, remove the active class
    if (!inputs[5].disabled && inputs[5].value !== "") {
      button.classList.add("active");
      return;
    }
    button.classList.remove("active");
  });
});

// Focus the first input (index 0) on window load
window.addEventListener("load", () => inputs[0].focus());

button.addEventListener("click", function () {
  const enteredOTP = Array.from(inputs)
    .map((input) => input.value)
    .join("");
  const expectedOTP = "000000"; // Change this to your desired OTP

  if (enteredOTP === expectedOTP) {
    // OTP is correct, navigate to the main page
    form.action = "../pages/new_password.html";
  } else {
    // OTP is incorrect, display an error message
    alert("Incorrect OTP. Please try again.");
  }
});

// Function to check the OTP and navigate back to the main page

// const inputs = document.querySelectorAll("input"),
//   button = document.querySelector("button");

// // iterate over all inputs
// inputs.forEach((input, index1) => {
//   input.addEventListener("keyup", (e) => {
//     // This code gets the current input element and stores it in the currentInput variable
//     // This code gets the next sibling element of the current input element and stores it in the nextInput variable
//     // This code gets the previous sibling element of the current input element and stores it in the prevInput variable
//     const currentInput = input,
//       nextInput = input.nextElementSibling,
//       prevInput = input.previousElementSibling;

//     // if the value has more than one character then clear it
//     if (currentInput.value.length > 1) {
//       currentInput.value = "";
//       return;
//     }
//     // if the next input is disabled and the current value is not empty
//     //  enable the next input and focus on it
//     if (
//       nextInput &&
//       nextInput.hasAttribute("disabled") &&
//       currentInput.value !== ""
//     ) {
//       nextInput.removeAttribute("disabled");
//       nextInput.focus();
//     }

//     // if the backspace key is pressed
//     if (e.key === "Backspace") {
//       // iterate over all inputs again
//       inputs.forEach((input, index2) => {
//         // if the index1 of the current input is less than or equal to the index2 of the input in the outer loop
//         // and the previous element exists, set the disabled attribute on the input and focus on the previous element
//         if (index1 <= index2 && prevInput) {
//           input.setAttribute("disabled", true);
//           input.value = "";
//           prevInput.focus();
//         }
//       });
//     }
//     //if the fourth input( which index number is 3) is not empty and has not disable attribute then
//     //add active class if not then remove the active class.
//     if (!inputs[5].disabled && inputs[5].value !== "") {
//       button.classList.add("active");
//     } else {
//       button.classList.remove("active");
//     }

//     // Print all values in the console
//     let sum = "";
//     inputs.forEach((input, index) => {
//       if (input.value != "") {
//         // console.log(`Value of input ${index + 1}: ${input.value}`);
//         sum += input.value;
//       }
//     });
//     console.log(sum);
//   });
// });

// //focus the first input which index is 0 on window load
// window.addEventListener("load", () => inputs[0].focus());

// const inputs = document.querySelectorAll("input"),
//   button = document.querySelector("button");

// // iterate over all inputs
// inputs.forEach((input, index1) => {
//   input.addEventListener("keyup", (e) => {
//     // This code gets the current input element and stores it in the currentInput variable
//     // This code gets the next sibling element of the current input element and stores it in the nextInput variable
//     // This code gets the previous sibling element of the current input element and stores it in the prevInput variable
//     const currentInput = input,
//       nextInput = input.nextElementSibling,
//       prevInput = input.previousElementSibling;

//     // if the value has more than one character then clear it
//     if (currentInput.value.length > 1) {
//       currentInput.value = "";
//       return;
//     }
//     // if the next input is disabled and the current value is not empty
//     //  enable the next input and focus on it
//     if (
//       nextInput &&
//       nextInput.hasAttribute("disabled") &&
//       currentInput.value !== ""
//     ) {
//       nextInput.removeAttribute("disabled");
//       nextInput.focus();
//     }

//     // if the backspace key is pressed
//     if (e.key === "Backspace") {
//       // iterate over all inputs again
//       inputs.forEach((input, index2) => {
//         // if the index1 of the current input is less than or equal to the index2 of the input in the outer loop
//         // and the previous element exists, set the disabled attribute on the input and focus on the previous element
//         if (index1 <= index2 && prevInput) {
//           input.setAttribute("disabled", true);
//           input.value = "";
//           prevInput.focus();
//         }
//       });
//     }
//     //if the fourth input( which index number is 3) is not empty and has not disable attribute then
//     //add active class if not then remove the active class.
//     if (!inputs[5].disabled && inputs[5].value !== "") {
//       button.classList.add("active");
//       return;
//     }
//     button.classList.remove("active");
//   });
// });

// //focus the first input which index is 0 on window load
// window.addEventListener("load", () => inputs[0].focus());

// inputs.forEach((input) => {
//   const value = input.value;
//   console.log(value);
//   // Do something with the value
// });
