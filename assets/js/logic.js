var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;
var timerEl = document.getElementById("time");

//buttons
var startButton = document.getElementById("start");
var viewButton = document.getElementById("viewHighscores");
var hideButton = document.getElementById("hideHighscores");
var submitButton = document.getElementById("submit");

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
function startTime() {}
function startQuiz() {}
function getQuestion() {}
function optionClick() {}
function penaltyFlash() {}
function endQuiz() {}

//scoreboard
function menuBtn() {}
function hideBtn() {}
function saveScore() {}
function printScores() {}
function clearScoreboard() {}
function checkForEnter() {}
