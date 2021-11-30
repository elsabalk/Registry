
var tableRows = document.getElementsByClassName("tableRows")
var highScoreMain = document.querySelector("#scores")
var scoreHeader = document.querySelector("#scoreHeader");

//trivia screen variable
var quizQuestion = document.querySelector("#quizQuestion");
var quizAnswers = document.getElementsByClassName("answerButtons");
var submitButton = document.querySelector("#submitButton");
var userScore = 0;
var disp = document.getElementById("display");
var lives = 3;
var lifeContainer = document.getElementById("lives")


//homescreen variables
var topicDropDown = document.querySelector("#topicDropDown");
var dropDownName = document.getElementsByClassName("dropDownName")
var difficultyDropDown = document.querySelector("#difficulty");
var userName = document.querySelector("#name")

submitButton.onclick = function () {
  document.getElementById("home").style.display = "none"
  document.getElementById("scores").style.display = "none"
  var t = topicDropDown.value;
  var d = difficultyDropDown.value;
  console.log(t)
  console.log(d)
}
