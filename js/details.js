document.addEventListener('DOMContentLoaded', function() {
    var nextButton = document.querySelector('.details-next-btn');
    nextButton.addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
  
      var form = document.querySelector('.needs-validation');
      form.classList.add('was-validated');
  
    });
  });
  
  //average function checking
  var isOptionSelected = false;
  
  function selectOption(option) {
    var inputElement = document.getElementById('validationAverage');
    inputElement.value = ''; // Reset the input value when the option changes
    if (option === 'GPA') {
      inputElement.setAttribute('type', 'number');
      inputElement.setAttribute('min', '0');
      inputElement.setAttribute('max', '4');
      inputElement.setAttribute('step', '0.01');
      inputElement.setAttribute('placeholder', 'Enter GPA (0-4)');
      document.querySelector("#average-invalid-feedback").innerHTML = "Enter a number between (0-4) with 2 decimal points as maximum"; // Set initial validation error message
    } else if (option === '%') {
      inputElement.setAttribute('type', 'number');
      inputElement.setAttribute('min', '1');
      inputElement.setAttribute('max', '100');
      inputElement.setAttribute('placeholder', 'Enter Percentage (1-100)');
      document.querySelector("#average-invalid-feedback").innerHTML = "Enter number between (1-100) with 2 decimal points as maximum"; // Set initial validation error message
    }
    //to let option appears in the place of select downdrop
    document.getElementById("dropdownInput").textContent = option;
  // to check if the user has choosen or not
    if (option === 'GPA' || option === '%') {
      isOptionSelected = true;
    } else {
      isOptionSelected = false;
    }
  }
  

  document.getElementById('validationAverage').addEventListener('input', function() {
    var inputElement = document.getElementById('validationAverage');
    var option = document.getElementById('dropdownInput').textContent;
    // to check if the user has choosen or not
    if (!isOptionSelected) {
      document.querySelector("#average-invalid-feedback").innerHTML = "Please choose GPA or %";
      inputElement.setCustomValidity('Invalid input');
      return;
    }
  
    if (option === 'GPA') {
      if (inputElement.value > 4 || inputElement.value < 0) {
        document.querySelector("#average-invalid-feedback").innerHTML = "Enter a number between (0-4) with 2 decimal points as maximum";
        inputElement.setCustomValidity('Invalid input');
      } else {
        document.querySelector("#average-invalid-feedback").innerHTML = ""; // Clear the validation error message
        inputElement.setCustomValidity('');
      }
    } else if (option === '%') {
      if (inputElement.value > 100 || inputElement.value < 1) {
        document.querySelector("#average-invalid-feedback").innerHTML = "Enter number between (1-100) with 2 decimal points as maximum";
        inputElement.setCustomValidity('Invalid input');
      } else {
        document.querySelector("#average-invalid-feedback").innerHTML = ""; // Clear the validation error message
        inputElement.setCustomValidity('');
      }
    }
  });
  