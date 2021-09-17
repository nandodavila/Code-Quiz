var questionsTxt = document.querySelector(".questions");
var startBtn = document.querySelector(".start-button");
var answerChoices = document.querySelector(".random-answers");
var timerElement = document.querySelector(".timer-count");
var highscore = document.querySelector(".highscore");

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

function startTimer() {
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        if (isWin && timerCount > 0) {
          clearInterval(timer);
          winGame();
        }
      }
      if (timerCount === 0) {
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }
