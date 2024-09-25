var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;
var timerEl = document.getElementById("time");

//buttons
var startBtn = document.getElementById("start");
var viewBtn = document.getElementById("viewHighscores");
var hideBtn = document.getElementById("hideHighscores");
var submitBtn = document.getElementById("submit");

//game
var startScreenEl = document.getElementById("start-screen");
var questionTitleEl = document.getElementById("question-title");
var questionsEl = document.getElementById("questions");
var optionsEl = document.getElementById("options");
var feedbackEl = document.getElementById("feedback");
var penaltyEl = document.getElementById("scorePenalty");

//scoreboard
var finalScoreEl = document.getElementById("final-score");
var gameoverEl = document.getElementById("end-screen");
var highscoresEl = document.getElementById("highscoreCard");
var initialsEl = document.getElementById("initials");
var olEl = document.getElementById("highscores");

//localstorage
var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

//game
function startTime() {
  time--;
  //time to page
  timerEl.textContent = "⏱️ " + time;
  //reach zero and end
  if (time <= 0) {
    clearInterval(timerId);
    endQuiz();
  }
}

function startQuiz() {}
function getQuestion() {}
function optionClick() {}
function penaltyFlash() {}
function endQuiz() {}

//scoreboard
function menu() {}
function hide() {
  highscoresEl.setAttribute("class", "hide");
  viewBtn.setAttribute("class", "start");
  viewBtn.onclick = function () {
    highscoresEl.setAttribute("class", "start");
    viewBtn.setAttribute("class", "hide");
  };
}
function saveScore() {}
function printScores() {}
function clearScoreboard() {}
function checkForEnter() {}

//keys and buttons
startBtn.onclick = startQuiz;
submitBtn.onclick = saveScore;
hideBtn.onclick = hide;
