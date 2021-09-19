//document elements
var questionsTxt = document.querySelector(".questions");
var startBtn = document.querySelector(".start-button");
var nxtBtn = document.querySelector(".next-button");
var answerChoices = document.querySelectorAll(".answer-choice");
var timerElement = document.querySelector(".timer-count");
var highscore = document.querySelector(".highscore");
var form = document.querySelector(".highscore-form");
var formInput = document.querySelector("#initials")
var submitForm = document.querySelector(".submit")
//global variable
var timer;
var timerCount;
var answeredQuestions = [];
var displayedHighscores = [];

//array of question objects
var questions = [
  {
    question: "What is an array??",
    correctAnswer: "An ordered list of values",
    choices: ["A type of ray gun", "a true or false statement", "a bit of text", "An ordered list of values"],
  },
  {
    question: "Which is a semantic HTML element?",
    correctAnswer: "<header>",
    choices: ["<div>", "<header>", "<meta>", "<var>",],
  },
  {
    question: "Where should you link a stylesheet?",
    correctAnswer: "Head tag",
    choices: ["The footer", "Head tag", "The main tag", "The body tag",],
  },
  {
    question: "What is a 'Boolean'?",
    correctAnswer: "A value thats true or false",
    choices: ["A value thats true or false", "A bunch of numbers", "A bunch of letters", "an ordered list to store values",],
  },
  {
    question: "What is a string??",
    correctAnswer: "A squence of characters in a var",
    choices: ["A true or false statement", "Numbers", "A squence of characters in a var", "Everything in the body tag",],
  }
]
// gets high score from local storage
function getHighscore() {
  // gets recent high score value out of local storeage
  var storedHighscore = localStorage.getItem("recentHighscore");
  // checking if value exsist
  if (storedHighscore) {
    // parse local storeage value into global variable for later use
    displayedHighscores = JSON.parse(storedHighscore);
  }
}
//sets highscore to local storage
function setHighscore() {
  localStorage.setItem("recentHighscore", JSON.stringify(displayedHighscores));
}
//displays highscore
function displayHighscores() {
  //clear pages highscore before then displaying local storage
  var clearDisplay = document.querySelectorAll(".list-score");
  
  for (i = 0; i < clearDisplay.length; i++) {
    clearDisplay[i].remove();
  }
// runs for loop so every highscore is shown in local storage
  if (displayedHighscores.length > 0) {
    for (i = 0; i < displayedHighscores.length; i++) {
      var listScore = document.createElement("li");
      listScore.textContent = displayedHighscores[i].initials + ' ' + displayedHighscores[i].score;
      listScore.className = "list-score";
      highscore.appendChild(listScore);
    }
  }
}

//calls functions to run get highscore and display high score
getHighscore();
displayHighscores();

//timer count
function startTimer() {
  timerCount = 50;
  timer = setInterval(function () {

    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      if (timerCount > 0) {

      }
    }
    if (timerCount <= 0) {
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}
// checking if the answer is correct when next is pushed
function checkQuestion() {

  if (nxtBtn.dataset.isAnswerCorrect === "false") {
    console.log("question wrong");
    timerCount = timerCount - 10;
  }
}

//start button event 
startBtn.addEventListener("click", function () {
  startTimer();
  startBtn.setAttribute("style", "display: none")
  displayQuestions();
});

// next button event
nxtBtn.addEventListener("click", function (event) {
  checkQuestion();
  displayQuestions();
  console.log(event)
});

// displays questions in a random order checking if questions have already been asked
function displayQuestions() {
  console.log(answeredQuestions.length)
  console.log(questions.length)
  // checks if all the questions have been asked and timer is above zero.
  if (answeredQuestions.length === questions.length && timerCount > 0) {
    stopTimer();
    alert("Quiz over, log your highscore!")
    form.hidden = false;
    startBtn.setAttribute("style", "display: inline")
    
    return;
  }
  var questionAnswered = true
  //choses random question and checks in the question has already been asked
  while (questionAnswered) {
    randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    if (answeredQuestions.includes(randomQuestion.question)) {
      questionAnswered = true
    } else questionAnswered = false;
  }
  //shows random question
  questionsTxt.textContent = randomQuestion.question
  //pushes the question asked to the answeredQuestion global variable
  answeredQuestions.push(randomQuestion.question)

  for (i = 0; i < answerChoices.length; i++) {
    answerChoices[i].textContent = randomQuestion.choices[i];
    if (randomQuestion.choices[i] == randomQuestion.correctAnswer) {
      answerChoices[i].dataset.isAnswer = true;
    } else answerChoices[i].dataset.isAnswer = false;
  }
}

// adding event listener for all list items
for (i = 0; i < answerChoices.length; i++) {
  answerChoices[i].addEventListener("click", function (event) {
    if (event.target.dataset.isAnswer === "true") {
      nxtBtn.dataset.isAnswerCorrect = true;
    } else {
      nxtBtn.dataset.isAnswerCorrect = false;
    }
    answerChoices.setAttribute("style", "color:green;");
    nxtBtn.hidden = false;
  });
}

function loseGame() {
  alert("Failed, please try again");
  timerCount = 0;
  startBtn.setAttribute("style", "display: inline")
}

function getInitials() {
  var newHighscore = {
    initials: formInput.value,
    score: timerCount,
  };

  displayedHighscores.push(newHighscore);
  setHighscore();
  displayHighscores();
}

submitForm.addEventListener('submit', function (event) {
  event.preventDefault();
  getInitials();
})

function stopTimer() {
  clearInterval(timer);
}
