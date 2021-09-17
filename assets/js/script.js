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

var questions = ["What is an array??", "Which is a semantic HTML element?", "Where should you link a stylesheet?",
"What is a 'Boolean'?", "What is a string??"];

var wrongAnswers1 = ["A type of ray gun", "a true or false statement", "a bit of text"];
var wrongAnswers2 = ["div", "meta", "var"];
var wrongAnswers3 = ["The footer", "The main tag", "The body tag"];
var wrongAnswers4 = ["A bunch of numbers", "A bunch of letters", "an ordered list to store values"];
var wrongAnswers5 = ["A true or false statement", "Numbers", "Everything in the body tag"];
var rightAnswers = ["An ordered list of values", "Header", "Head tag", "A value thats true or false", 
"A squence of characters in a var"];
var randomQuestion = ""

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
  displayAnswers();
});

function displayQuestions () {
  randomQuestion = questions[Math.floor(Math.random() * questions.length)];
  questionsTxt.textContent = randomQuestion
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
