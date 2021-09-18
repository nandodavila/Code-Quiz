var questionsTxt = document.querySelector(".questions");
var startBtn = document.querySelector(".start-button");
var answerChoices = document.querySelector(".random-answers");
var timerElement = document.querySelector(".timer-count");
var highscore = document.querySelector(".highscore");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
answerChoices.appendChild(li1)
answerChoices.appendChild(li2)
answerChoices.appendChild(li3)
answerChoices.appendChild(li4)


var timer;
var timerCount;
var answeredQuestions = [];

var questions = [
  {
    question: "What is an array??",
    correctAnswer: "An ordered list of values",
    choices: ["A type of ray gun", "a true or false statement", "a bit of text", "An ordered list of values" ],
  },
  {
    question: "Which is a semantic HTML element?",
    correctAnswer: "Header",
    choices: ["div", "meta", "var", "Header"],
  },
  {
    question: "What is an array??",
    correctAnswer: "Head tag",
    choices: ["The footer", "The main tag", "The body tag", "Head tag"],
  },
  {
    question: "What is an array??",
    correctAnswer: "An ordered list of values",
    choices: ["A type of ray gun", "a true or false statement", "a bit of text", "An ordered list of values" ],
  },
  {
    question: "What is an array??",
    correctAnswer: "An ordered list of values",
    choices: ["A type of ray gun", "a true or false statement", "a bit of text", "An ordered list of values" ],
  }
]


function startTimer() {
  timerCount = 50;
    timer = setInterval(function() {
      
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        if (timerCount > 0) {
          //clearInterval(timer);
         // winGame();
        }
      }
      if (timerCount === 0) {
        clearInterval(timer);
        //loseGame();
      }
    }, 1000);
}

startBtn.addEventListener("click", function() {
  startTimer();
  startBtn.setAttribute("style", "display: none")
  displayQuestions();

});

function displayQuestions () {
  var questionAnswered = true
  while(questionAnswered) {
    randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    if (answeredQuestions[randomQuestion.question]) {
      questionAnswered = true 
    } else questionAnswered = false;
  }

  questionsTxt.textContent = randomQuestion.question
}

function displayAnswers () {
  displayQuestions();
  if (randomQuestion === questions[0]) {
    li1.textContent = wrongAnswers1[0];
    li1Click();
    li2.textContent = wrongAnswers1[1];
    li2Click();
    li3.textContent = rightAnswers[0];
    li3Click();
    li4.textContent = wrongAnswers1[2]
    li4Click();
    console.log(rightAnswers[0])
    console.log(li3.textContent)
  }
  if (randomQuestion === questions[1]) {
    li1.textContent = wrongAnswers1[0];
    li1Click();
    li2.textContent = wrongAnswers1[1];
    li2Click();
    li3.textContent = rightAnswers[0];
    li3Click();
    li4.textContent = wrongAnswers1[2]
    li4Click();
  }
  if (randomQuestion === questions[2]) {
    li1.textContent = wrongAnswers1[0];
    li1Click();
    li2.textContent = wrongAnswers1[1];
    li2Click();
    li3.textContent = rightAnswers[0];
    li3Click();
    li4.textContent = wrongAnswers1[2]
    li4Click();
  }
  if (randomQuestion === questions[3]) {
    li1.textContent = wrongAnswers1[0];
    li1Click();
    li2.textContent = wrongAnswers1[1];
    li2Click();
    li3.textContent = rightAnswers[0];
    li3Click();
    li4.textContent = wrongAnswers1[2]
    li4Click();
  }
  if (randomQuestion === questions[4]) {
    li1.textContent = wrongAnswers1[0];
    li1Click();
    li2.textContent = wrongAnswers1[1];
    li2Click();
    li3.textContent = rightAnswers[0];
    li3Click();
    li4.textContent = wrongAnswers1[2]
    li4Click();
  }
  return;
}

function li1Click () {
  li1.addEventListener("click", function() {
  if (li1 === rightAnswers[0]) {
    answerChoices.textContent = "Correct!"
  } else {
    answerChoices.textContent = "WRONG!!"
  }
});
};

function li2Click() {
  li2.addEventListener("click", function() {
  if (li2 == rightAnswers[0]) {
    answerChoices.textContent = "Correct!"
  } else {
    answerChoices.textContent = "WRONG!!"
    
  }
});
};

function li3Click() {
  li3.addEventListener("click", function() {
  if (li3 == rightAnswers[0]) {
    answerChoices.textContent = "Correct!"
  } else {
    answerChoices.textContent = "WRONG!!"
  }
});
};

function li4Click() {
  li4.addEventListener("click", function() {
  if (li4 == rightAnswers[0]) {
    answerChoices.textContent = "Correct!"
  } else {
    answerChoices.textContent = "WRONG!!"
  }
});
};
