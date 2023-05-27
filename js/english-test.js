const englishTestRulesBtn = document.querySelector(".english-test-rules-btn");
const englishTestRulesAllContent = document.querySelector(
  ".english-test-rules-all-content"
);
const englishTestAllContent = document.querySelector(
  ".english-test-all-content"
);
const quizContainer = document.querySelector(".english-test-container");
const quizNextBtn = document.querySelector(".english-test-next-btn");
const userEmail = "h@gmail.com"; // Change this to the user's email

let selectedQuestions = getRandomQuestions(englishQuestions, 15);
// Change 15 to the desired number of questions
let currentQuestionIndex = 0;
let englishTestScore = 0; // Changed the variable name from score to englishTestScore
let startTime = null;
let timerInterval = null;

englishTestRulesBtn.addEventListener("click", startEnglishTest);

quizNextBtn.addEventListener("click", checkAnswer);

function startEnglishTest() {
  englishTestRulesAllContent.classList.add("english-test-hidden");
  englishTestAllContent.classList.remove("english-test-hidden");
  displayQuestion();
  startTimer();
}

function displayQuestion() {
  if (currentQuestionIndex < selectedQuestions.length) {
    const currentQuestion = selectedQuestions[currentQuestionIndex];

    const questionNumberElement = document.querySelector(
      ".english-test-number"
    );
    questionNumberElement.textContent = `${currentQuestionIndex + 1} of ${
      selectedQuestions.length
    } Questions`;

    const questionElement = document.querySelector(".english-test-question");
    questionElement.textContent = currentQuestion.question;

    const optionsElement = document.querySelector(".english-test-ul");
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
      const inputElement = document.createElement("input");
      inputElement.type = "radio";
      inputElement.name = "listGroupRadio";
      inputElement.value = index;
      inputElement.id = `option${index}`;
      if (currentQuestion.userAnswer === index) {
        inputElement.checked = true;
      }

      const labelElement = document.createElement("label");
      labelElement.htmlFor = `option${index}`;
      labelElement.classList.add("form-check-label", "option");
      labelElement.textContent = option;

      const listItemElement = document.createElement("li");
      listItemElement.classList.add("list-group-item");
      listItemElement.appendChild(inputElement);
      listItemElement.appendChild(labelElement);

      optionsElement.appendChild(listItemElement);
    });
  } else {
    finishQuiz();
  }
}

function checkAnswer() {
  const selectedOption = quizContainer.querySelector(
    "input[name='listGroupRadio']:checked"
  );

  if (selectedOption) {
    const selectedAnswer = parseInt(selectedOption.value);
    const currentQuestion = selectedQuestions[currentQuestionIndex];

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
  alert(`Quiz finished. Your score: ${englishTestScore}`);
  saveQuizData();
  window.location.href = "/registration-devBridge/pages/registration_page.html";
}

function startTimer() {
  const totalTime = 10 * 60; // 10 minutes in seconds
  startTime = Date.now() + totalTime * 1000; // Set the start time as the current time plus the total time in milliseconds
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  const currentTime = Date.now();
  const remainingTime = Math.max((startTime - currentTime) / 1000, 0); // Calculate the remaining time in seconds
  const timerElement = document.querySelector(".english-test-timer");
  timerElement.textContent = formatTime(remainingTime);

  if (remainingTime === 0) {
    finishQuiz(); // Automatically finish the quiz when time runs out
  }
}

function stopTimer() {
  clearInterval(timerInterval);
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.round(seconds % 60); // Round the remaining seconds
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
}

function saveQuizData() {
  localStorage.removeItem(userEmail);
  const englishTestData = {
    email: userEmail,
    englishTestScore: englishTestScore,
    answers: selectedQuestions.map((question) => ({
      question: question.question,
      userAnswer: question.userAnswer,
      correctAnswer: question.answerIndex,
    })),
  };

  // Save the quiz data to the local storage
  localStorage.setItem(userEmail, JSON.stringify(englishTestData));
}

function getRandomQuestions(questions, count) {
  const shuffled = questions.sort(() => Math.random() - 0.5);
  const uniqueQuestions = Array.from(new Set(shuffled)); // Remove duplicates
  return uniqueQuestions.slice(0, count);
}
