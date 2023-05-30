let english_test_rules_btn = document.querySelector(".english-test-rules-btn");
let english_test_rules_all_content = document.querySelector(
  ".english-test-rules-all-content"
);
let english_test_all_content = document.querySelector(
  ".english-test-all-content"
);
let quizContainer = document.querySelector(".english-test-container");
let quizNextBtn = document.querySelector(".english-test-next-btn");

let selectedQuestions = getRandomQuestions(englishQuestions, 15); // Change 15 to the desired number of questions
let currentQuestionIndex = 0;
let englishTestScore = 0; // Changed the variable name from score to englishTestScore
let startTime = null;
let timerInterval = null;

window.addEventListener("load", function () {
  if (dataUser != undefined) {
    english_test_rules_btn.addEventListener("click", function () {
      english_test_rules_all_content.classList.add("english-test-hidden");
      english_test_all_content.classList.remove("english-test-hidden");
      displayQuestion();
      startTimer();
    });
  } else {
    window.location.href = "../pages/login.html";
  }
});

english_test_rules_btn.addEventListener("click", function () {
  english_test_rules_all_content.classList.add("english-test-hidden");
  english_test_all_content.classList.remove("english-test-hidden");
  displayQuestion();
  startTimer();
});

quizNextBtn.addEventListener("click", function () {
  if (currentQuestionIndex < selectedQuestions.length - 1) {
    checkAnswer();
  } else {
    finishQuiz();
  }
});

function displayQuestion() {
  if (currentQuestionIndex < selectedQuestions.length) {
    let currentQuestion = selectedQuestions[currentQuestionIndex];

    let questionNumberElement = document.querySelector(".english-test-number");
    questionNumberElement.textContent = `${currentQuestionIndex + 1} of ${
      selectedQuestions.length
    } Questions`;

    let questionElement = document.querySelector(".english-test-qustion");
    questionElement.textContent = currentQuestion.question;

    let optionsElement = document.querySelector(".english-test-ul");
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
      let inputElement = document.createElement("input");
      inputElement.setAttribute("type", "radio");
      inputElement.setAttribute("name", "listGroupRadio");
      inputElement.setAttribute("value", index);
      inputElement.setAttribute("id", `option${index}`);
      if (currentQuestion.userAnswer === index) {
        inputElement.checked = true;
      }

      let labelElement = document.createElement("label");
      labelElement.setAttribute("for", `option${index}`);
      labelElement.classList.add("form-check-label", "option");
      labelElement.textContent = option;

      let listItemElement = document.createElement("li");
      listItemElement.classList.add("list-group-item");
      listItemElement.appendChild(inputElement);
      listItemElement.appendChild(labelElement);

      optionsElement.appendChild(listItemElement);
    });

    if (currentQuestionIndex === selectedQuestions.length - 1) {
      // Last question, update quizNextBtn to "Finish"
      quizNextBtn.textContent = "Finish";
    } else {
      // Not the last question, update quizNextBtn to "Next"
      quizNextBtn.textContent = "Next";
    }
  } else {
    finishQuiz();
  }
}

function checkAnswer() {
  let selectedOption = quizContainer.querySelector(
    "input[name='listGroupRadio']:checked"
  );

  if (selectedOption) {
    let selectedAnswer = parseInt(selectedOption.value);
    let currentQuestion = selectedQuestions[currentQuestionIndex];

    currentQuestion.userAnswer = selectedAnswer;

    if (selectedAnswer === currentQuestion.answerIndex) {
      englishTestScore++; // Increment the score when the answer is correct
    }

    currentQuestionIndex++;
    displayQuestion();
  } else {
    alert("Please select an option.");
  }
}

function finishQuiz() {
  stopTimer();
  saveQuizData();
  window.location.href = "../pages/registration_page.html";
}

function startTimer() {
  let totalTime = 10 * 60; // 10 minutes in seconds
  startTime = Date.now() + totalTime * 1000; // Set the start time as the current time plus the total time in milliseconds
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  let currentTime = Date.now();
  let remainingTime = Math.max((startTime - currentTime) / 1000, 0); // Calculate the remaining time in seconds
  let timerElement = document.querySelector(".english-test-timer");
  timerElement.innerHTML = `<i class="fa-solid fa-stopwatch fa-lg" style="color: #099289"></i>  ${formatTime(
    remainingTime
  )}`;

  if (remainingTime === 0) {
    finishQuiz(); // Automatically finish the quiz when time runs out
  }
}

function stopTimer() {
  clearInterval(timerInterval);
}

function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = Math.round(seconds % 60); // Round the remaining seconds
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
}

function saveQuizData() {
  let data = JSON.parse(localStorage.getItem(dataUser.email));

  data.englishTest = {
    selectedQuestions: selectedQuestions,
    englishTestScore: englishTestScore,
  };
  data["statusEnglishTest"] = "Done";

  localStorage.setItem(dataUser.email, JSON.stringify(data));
}

function getRandomQuestions(questions, count) {
  let shuffled = questions.sort(() => Math.random() - 0.5);
  let uniqueQuestions = Array.from(new Set(shuffled)); // Remove duplicates
  return uniqueQuestions.slice(0, count);
}
let img = document.getElementById("image__user");

function fetchImage() {
  if (dataUser.image == undefined) {
    img.src = "../assets/icon/user.svg";
  } else {
    img.src = dataUser.image;
  }
}
fetchImage();
