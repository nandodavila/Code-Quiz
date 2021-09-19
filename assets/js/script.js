var questionsTxt = document.querySelector(".questions");
var startBtn = document.querySelector(".start-button");
var nxtBtn = document.querySelector(".next-button");
var answerChoices = document.querySelectorAll(".answer-choice");
var timerElement = document.querySelector(".timer-count");
var highscore = document.querySelector(".highscore");
var form = document.querySelector(".highscore-form");
var formInput = document.querySelector("#initials")
var submitForm =document.querySelector(".submit")



var timer;
var timerCount;
var answeredQuestions = [];
var displayedHighscores = [];

var questions = [
  {
    question: "What is an array??",
    correctAnswer: "An ordered list of values",
    choices: ["A type of ray gun", "a true or false statement", "a bit of text", "An ordered list of values" ],
  },
  {
    question: "Which is a semantic HTML element?",
    correctAnswer: "<header>",
    choices: ["<div>", "<header>", "<meta>", "<var>", ],
  },
  {
    question: "Where should you link a stylesheet?",
    correctAnswer: "Head tag",
    choices: ["The footer", "Head tag", "The main tag", "The body tag", ],
  },
  {
    question: "What is a 'Boolean'?",
    correctAnswer: "A value thats true or false",
    choices: ["A value thats true or false", "A bunch of numbers", "A bunch of letters", "an ordered list to store values",  ],
  },
  {
    question: "What is a string??",
    correctAnswer: "A squence of characters in a var",
    choices: ["A true or false statement", "Numbers", "A squence of characters in a var", "Everything in the body tag",  ],
  }
]

function getHighscore() {
  var storedHighscore = localStorage.getItem("recentHighscore");
  if (storedHighscore) {
    displayedHighscores = JSON.parse(storedHighscore);
  }
}

function setHighscore () {

  localStorage.setItem("recentHighscore", JSON.stringify(displayedHighscores));
}

function displayHighscores() {
  var clearDisplay = document.querySelectorAll(".list-score");
  for (i = 0; i < clearDisplay.length; i++) {
    clearDisplay[i].remove();
  }
  
  if (displayedHighscores.length > 0) {
    for (i = 0; i < displayedHighscores.length; i++) {
      var listScore = document.createElement("li");
      listScore.textContent = displayedHighscores[i].initials + ' ' + displayedHighscores[i].score;
      listScore.className = "list-score";
      document.body.appendChild(listScore);
    }
  }
}

getHighscore();
displayHighscores();

//timer count
function startTimer() {
  timerCount = 50;
    timer = setInterval(function() {
      
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
    timerCount = timerCount -10;

  }

}
//start button event 
startBtn.addEventListener("click", function() {
  startTimer();
  startBtn.setAttribute("style", "display: none")
  displayQuestions();

});
// next button event
nxtBtn.addEventListener("click", function(event) {
  checkQuestion();
  displayQuestions(); 
  console.log(event)
});
// displays questions in a random order checking if questions have already been asked
function displayQuestions () {
  
  console.log(answeredQuestions.length)
  console.log(questions.length)
  if (answeredQuestions.length === questions.length && timerCount > 0) {
    stopTimer();
    alert("Quiz over, log your highscore!")
    form.hidden = false;
    return;
  }
  var questionAnswered = true
  
  while(questionAnswered) {
    randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    if (answeredQuestions[randomQuestion.question]) {
      questionAnswered = true 
    } else questionAnswered = false;
  }

  questionsTxt.textContent = randomQuestion.question
  answeredQuestions.push(randomQuestion.question)

  for (i = 0; i < answerChoices.length; i++) {
    answerChoices[i].textContent = randomQuestion.choices[i];
    if (randomQuestion.choices[i] == randomQuestion.correctAnswer){
      answerChoices[i].dataset.isAnswer = true;
    } else answerChoices[i].dataset.isAnswer = false;
  }
}

// adding event listener for all list items
for (i = 0; i < answerChoices.length; i++) {
  answerChoices[i].addEventListener("click", function(event) {
  console.log(event.target.textContent);
    console.log(event.target.dataset);
    if (event.target.dataset.isAnswer === "true") {
      nxtBtn.dataset.isAnswerCorrect = true;
      //add bs later
      console.log("correct answer");
    } else {
      nxtBtn.dataset.isAnswerCorrect = false;
      console.log("Wrong Answer");
    }
    
    nxtBtn.hidden = false;
    console.log(answeredQuestions)
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



submitForm.addEventListener('submit', function(event) {
event.preventDefault();
getInitials();
})

function stopTimer() {
  clearInterval(timer);

}

