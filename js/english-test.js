let english_test_rules_btn = document.querySelector(".english-test-rules-btn");
let english_test_rules_all_content = document.querySelector(
  ".english-test-rules-all-content"
);
let english_test_all_content = document.querySelector(
  ".english-test-all-content"
);
let quizContainer = document.querySelector(".english-test-container");
let quizNextBtn = document.querySelector(".english-test-next-btn");
let userEmail = "h@gmail.com"; // Change this to the user's email

let allQuestions = [
  {
    question: "What is the plural form of 'child'?",
    options: ["childs", "children", "childes", "childer"],
    answerIndex: 1,
    userAnswer: null,
  },
  {
    question: "Which word is the synonym of 'happy'?",
    options: ["sad", "angry", "joyful", "tired"],
    answerIndex: 2,
    userAnswer: null,
  },
  {
    question: "Choose the correct spelling:",
    options: ["relevent", "rellevant", "relevant", "relevvnt"],
    answerIndex: 2,
    userAnswer: null,
  },
  {
    question: "What is the opposite of 'begin'?",
    options: ["start", "end", "continue", "pause"],
    answerIndex: 1,
    userAnswer: null,
  },
  {
    question: "Which sentence is grammatically correct?",
    options: [
      "She don't like ice cream.",
      "They doesn't have a car.",
      "He haven't finished his homework.",
      "I am not going to the party.",
    ],
    answerIndex: 3,
    userAnswer: null,
  },
  {
    question: "What is the past tense of 'eat'?",
    options: ["ate", "eaten", "eated", "eats"],
    answerIndex: 0,
    userAnswer: null,
  },
  {
    question: "Which word is an adverb?",
    options: ["quickly", "happy", "cat", "jumped"],
    answerIndex: 0,
    userAnswer: null,
  },
  {
    question:
      "Choose the correct form of the verb to complete the sentence: She _____ a book every day.",
    options: ["read", "reads", "reading", "readed"],
    answerIndex: 1,
    userAnswer: null,
  },
  {
    question: "What is the comparative form of 'good'?",
    options: ["goodest", "better", "best", "gooder"],
    answerIndex: 1,
    userAnswer: null,
  },
  {
    question: "Which word is a conjunction?",
    options: ["and", "house", "happy", "jump"],
    answerIndex: 0,
    userAnswer: null,
  },
  {
    question: "Choose the correct spelling:",
    options: ["experiance", "experience", "experienze", "expeerience"],
    answerIndex: 1,
    userAnswer: null,
  },
  {
    question: "What is the plural form of 'mouse'?",
    options: ["mouses", "mices", "mousies", "mice"],
    answerIndex: 3,
    userAnswer: null,
  },
  {
    question: "What is the synonym of 'beautiful'?",
    options: ["ugly", "gorgeous", "dirty", "plain"],
    answerIndex: 1,
    userAnswer: null,
  },
  {
    question:
      "Choose the correct form of the verb to complete the sentence: They _____ soccer every weekend.",
    options: ["plays", "playing", "play", "played"],
    answerIndex: 2,
    userAnswer: null,
  },
  {
    question: "What is the past tense of 'go'?",
    options: ["gone", "went", "goed", "goes"],
    answerIndex: 1,
    userAnswer: null,
  },
  {
    question: "Choose the correct spelling:",
    options: ["accomodation", "acommodation", "accommodation", "accommadation"],
    answerIndex: 2,
    userAnswer: null,
  },
  {
    question: "What is the antonym of 'small'?",
    options: ["big", "tiny", "little", "miniature"],
    answerIndex: 0,
    userAnswer: null,
  },
  {
    question: "Which sentence is grammatically correct?",
    options: [
      "I am can swim.",
      "He don't like pizza.",
      "They is going to the park.",
      "She has a beautiful voice.",
    ],
    answerIndex: 3,
    userAnswer: null,
  },
  {
    question: "What is the comparative form of 'bad'?",
    options: ["worser", "worse", "baddest", "badder"],
    answerIndex: 1,
    userAnswer: null,
  },
  {
    question:
      "Choose the correct form of the verb to complete the sentence: The cat _____ on the wall.",
    options: ["jump", "jumps", "jumped", "jumping"],
    answerIndex: 1,
    userAnswer: null,
  },
  {
    question: "What is the plural form of 'tomato'?",
    options: ["tomatos", "tomatoes", "tomatoies", "tomate"],
    answerIndex: 1,
    userAnswer: null,
  },
  {
    question: "What is the synonym of 'angry'?",
    options: ["happy", "sad", "mad", "glad"],
    answerIndex: 2,
    userAnswer: null,
  },
  {
    question: "Choose the correct spelling:",
    options: ["occurence", "ocurrence", "occurrence", "occurrense"],
    answerIndex: 2,
    userAnswer: null,
  },
  {
    question: "What is the opposite of 'easy'?",
    options: ["simple", "hard", "difficult", "challenging"],
    answerIndex: 1,
    userAnswer: null,
  },
  {
    question: "Which word is a preposition?",
    options: ["cat", "run", "over", "quick"],
    answerIndex: 2,
    userAnswer: null,
  },
  {
    question:
      "Choose the correct form of the verb to complete the sentence: We _____ to the beach every summer.",
    options: ["go", "goes", "going", "went"],
    answerIndex: 0,
    userAnswer: null,
  },
  {
    question: "What is the comparative form of 'happy'?",
    options: ["happier", "happyest", "happyer", "more happy"],
    answerIndex: 0,
    userAnswer: null,
  },
  {
    question: "What is the plural form of 'knife'?",
    options: ["knifes", "knive", "knifes", "knives"],
    answerIndex: 3,
    userAnswer: null,
  },
  {
    question: "What is the synonym of 'brave'?",
    options: ["fearful", "shy", "courageous", "timid"],
    answerIndex: 2,
    userAnswer: null,
  },
  {
    question:
      "Choose the correct form of the verb to complete the sentence: He _____ his guitar every day.",
    options: ["play", "played", "playing", "plays"],
    answerIndex: 3,
    userAnswer: null,
  },
  {
    question: "What is the past tense of 'see'?",
    options: ["see", "seed", "saw", "seen"],
    answerIndex: 2,
    userAnswer: null,
  },
  {
    question: "Which word is an adjective?",
    options: ["run", "quickly", "cat", "fast"],
    answerIndex: 3,
    userAnswer: null,
  },
  {
    question:
      "Choose the correct form of the verb to complete the sentence: They _____ a movie last night.",
    options: ["watching", "watch", "watches", "watched"],
    answerIndex: 3,
    userAnswer: null,
  },
  {
    question: "What is the comparative form of 'far'?",
    options: ["farther", "farest", "fartherest", "more far"],
    answerIndex: 0,
    userAnswer: null,
  },
  {
    question: "What is the opposite of 'hot'?",
    options: ["warm", "cold", "cool", "burning"],
    answerIndex: 1,
    userAnswer: null,
  },
];

let selectedQuestions = getRandomQuestions(allQuestions, 10); // Change 10 to the desired number of questions
let currentQuestionIndex = 0;
let score = 0;
let startTime = null;
let timerInterval = null;

english_test_rules_btn.addEventListener("click", function () {
  english_test_rules_all_content.classList.add("english-test-hidden");
  english_test_all_content.classList.remove("english-test-hidden");
  displayQuestion();
  startTimer();
});

quizNextBtn.addEventListener("click", checkAnswer);

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
      score++; // Increment the score when the answer is correct
    }

    currentQuestionIndex++;
    displayQuestion();
  } else {
    alert("Please select an option.");
  }
}

function finishQuiz() {
  stopTimer();
  alert("Quiz finished. Your score: " + score);
  saveQuizData();
  // You can perform any additional actions here after the quiz is finished
}

function startTimer() {
  startTime = Date.now();
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  let currentTime = Date.now();
  let elapsedTime = Math.floor((currentTime - startTime) / 1000);
  let timerElement = document.querySelector(".english-test-timer");
  timerElement.textContent = formatTime(elapsedTime);
}
function stopTimer() {
  clearInterval(timerInterval);
}

function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
}

function saveQuizData() {
  let quizData = {
    email: userEmail,
    score: score,
    answers: selectedQuestions.map((question) => ({
      question: question.question,
      userAnswer: question.userAnswer,
      correctAnswer: question.answerIndex,
    })),
  };

  // Save the quiz data to the local storage
  localStorage.setItem(userEmail, JSON.stringify(quizData));
}

function getRandomQuestions(questions, count) {
  let shuffled = questions.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
