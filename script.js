//load start button function
//window.onload = startButton;
function startButton() {
alert('this button works');
//}


var startBtnElement = document.getElementById('startBtn');
startBtnElement.addEventListener('click', startButton, false);
console.log(startBtn);

var questionsEl = document.getElementById('questions');
var optionsEl = document.getElementsById('answers');
var highscoreEl = document.getElementById(highscore);
var renderCorrectAnswers = document.getElementById('correct');
var timeClockEl = document.getElementById(countDown); 

//const questions = document.querySelector('quizQuestions');
//const timer = document.querySelector('timer');

var counter = 20;
setInterval(function() {
	if (counter >= 1) {
		counter--;
		var timer = document.getElementById('timer');
		timer.innerText = 'Seconds Remaining:' + counter;
	}
}, 2000);
if (counter < 0) {
	counter = 0;
}

//function revealQuiz() {
//	event.preventDefault();
//	//timer = setInterval(displayCounter, 1000);
//	//randomQuestions = quizQuestions.shadowRoot(() => Math.random( - .5))}

var renderQuiz () 
