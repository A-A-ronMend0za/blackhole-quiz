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
  timerEl.textContent = "⏱️ " + time;

  if (time <= 0) {
    clearInterval(timerId);
    endQuiz();
  }
}

function startQuiz() {
  startScreenEl.setAttribute("class", "hide");
  hide();
  viewBtn.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");
  timerId = setInterval(startTime, 1000);
  timerEl.textContent = "⏱️ " + time;
  getQuestion();
}

function getQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  questionTitleEl.textContent = currentQuestion.title;
  optionsEl.textContent = "";

  currentQuestion.options.forEach(function (option, i) {
    var optionNode = document.createElement("button");
    Object.assign(optionNode, {
      class: "choice",
      value: option,
      textContent: i + 1 + " ◎ " + option,
      onclick: optionClick,
    });

    optionsEl.appendChild(optionNode);
  });
}

function optionClick() {
  if (this.value !== questions[currentQuestionIndex].answer) {
    time -= 10;
    if (time < 0) {
      time = 0;
    }
    timerEl.textContent = "⏱️ " + time;
    feedbackEl.textContent =
      "Incorrect. The correct answer was " +
      questions[currentQuestionIndex].answer +
      ".";
    penaltyFlash();
  } else {
    feedbackEl.textContent = "CORRECT!! 💥 💥 💥 💥";
  }

  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function () {
    feedbackEl.setAttribute("class", "hide");
  }, 3000);

  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length) {
    endQuiz();
  } else {
    getQuestion();
  }
}
function penaltyFlash() {}

function endQuiz() {
  //hide timer
  console.log("Game Over");
}

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
