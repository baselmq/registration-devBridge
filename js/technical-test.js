const startButton = document.querySelector(".technical-test-rules-btn");
const rulesContent = document.querySelector(
  ".technical-test-rules-all-content"
);
const testContent = document.querySelector(".technical-test-all-content");
const container = document.querySelector(".technical-test-container");
const nextButton = document.querySelector(".technical-test-next-btn");

const userEmail = "h@gmail.com"; // Change this to the user's email
const TOTAL_QUESTIONS = 10;
let selectedQuestions = getRandomQuestions(webTechQuestions, TOTAL_QUESTIONS);
let currentQuestionIndex = 0;
let technicalTestScore = 0;
let startTime = null;
let timerInterval = null;

window.addEventListener("load", function () {
  if (dataUser != undefined) {
    startButton.addEventListener("click", startTechnicalTest);
    nextButton.addEventListener("click", function () {
      if (currentQuestionIndex < selectedQuestions.length - 1) {
        checkAnswer();
      } else {
        finishQuiz();
      }
    });
  } else {
    window.location.href = "../pages/login.html";
  }
});

startButton.addEventListener("click", startTechnicalTest);
nextButton.addEventListener("click", function () {
  if (currentQuestionIndex < selectedQuestions.length - 1) {
    checkAnswer();
  } else {
    finishQuiz();
  }
});

function startTechnicalTest() {
  hideElement(rulesContent);
  showElement(testContent);
  displayQuestion();
  startTimer();
}

function hideElement(element) {
  element.classList.add("technical-test-hidden");
}

function showElement(element) {
  element.classList.remove("technical-test-hidden");
}

function displayQuestion() {
  if (currentQuestionIndex < selectedQuestions.length) {
    const currentQuestion = selectedQuestions[currentQuestionIndex];

    const questionNumberElement = document.querySelector(
      ".technical-test-number"
    );
    questionNumberElement.textContent = `${currentQuestionIndex + 1} of ${
      selectedQuestions.length
    } Questions`;

    const questionElement = document.querySelector(".technical-test-qustion");
    questionElement.textContent = currentQuestion.question;

    const optionsElement = document.querySelector(".technical-test-ul");
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
      const inputElement = document.createElement("input");
      inputElement.setAttribute("type", "radio");
      inputElement.setAttribute("name", "listGroupRadio");
      inputElement.setAttribute("value", index);
      inputElement.setAttribute("id", `option${index}`);
      if (currentQuestion.userAnswer === index) {
        inputElement.checked = true;
      }

      const labelElement = document.createElement("label");
      labelElement.setAttribute("for", `option${index}`);
      labelElement.classList.add("form-check-label", "option");
      labelElement.textContent = option;

      const listItemElement = document.createElement("li");
      listItemElement.classList.add("list-group-item");
      listItemElement.appendChild(inputElement);
      listItemElement.appendChild(labelElement);

      optionsElement.appendChild(listItemElement);
    });

    if (currentQuestionIndex === selectedQuestions.length - 1) {
      // Last question, update nextButton to "Finish"
      nextButton.textContent = "Finish";
    } else {
      // Not the last question, update nextButton to "Next"
      nextButton.textContent = "Next";
    }
  } else {
    finishQuiz();
  }
}

function checkAnswer() {
  const selectedOption = container.querySelector(
    "input[name='listGroupRadio']:checked"
  );

  if (selectedOption) {
    const selectedAnswer = parseInt(selectedOption.value);
    const currentQuestion = selectedQuestions[currentQuestionIndex];

    currentQuestion.userAnswer = selectedAnswer;

    if (selectedAnswer === currentQuestion.answerIndex) {
      technicalTestScore++;
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
  const TOTAL_TIME_MINUTES = 10;
  const totalTime = TOTAL_TIME_MINUTES * 60;
  startTime = Date.now() + totalTime * 1000;
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  const currentTime = Date.now();
  const remainingTime = Math.max((startTime - currentTime) / 1000, 0);
  const timerElement = document.querySelector(".technical-test-timer");
  timerElement.innerHTML = `<i class="fa-solid fa-stopwatch fa-lg" style="color: #099289"></i>  ${formatTime(
    remainingTime
  )}`;
  if (remainingTime === 0) {
    finishQuiz();
  }
}

function stopTimer() {
  clearInterval(timerInterval);
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.round(seconds % 60);
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
}

function saveQuizData() {
  let data = JSON.parse(localStorage.getItem(dataUser.email));

  data.technicalTest = {
    selectedQuestions: selectedQuestions,
    technicalTestScore: technicalTestScore,
  };
  data["statusTechnicalTest"] = "Done";

  localStorage.setItem(dataUser.email, JSON.stringify(data));
}

function getRandomQuestions(questions, count) {
  const shuffled = questions.sort(() => Math.random() - 0.5);
  const uniqueQuestions = Array.from(new Set(shuffled));
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
