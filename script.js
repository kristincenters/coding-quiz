window.onload = startButton;
//activate button
function startButton() {
	alert('this button works');
}
var startBtnElement = document.getElementById('startBtn');
startBtnElement.addEventListener('click', startButton, false);

//const questions = document.querySelector('quizQuestions');
//const timer = document.querySelector('timer');

var timeElement = document.querySelector('.time');
var timerElement = document.getElementById('timer');

function timeClock() {
	var timer = 20;
	setInterval(function() {
		if (timer >= 1) {
			console.log('timer');
			timer--;

			var counter = document.getElementById('timer');

			timer.innerContent = counter + 'Time Left';
		}
	}, 2000);
}

function timeAlert() {
	timeElement.textContent = 'Time Over';
}

/*
function revealQuiz() {
	event.preventDefault();
	//timer = setInterval(displayCounter, 1000);
	//randomQuestions = quizQuestions.shadowRoot(() => Math.random( - .5))
}
*/
/*questions.addEventListener(
	'click',
	function() {
	console.log('this button works');
	},
	false
);
*/
//function displayQuestions();
/*
var quizQuestions = [
	{
		question: 'Which statements are true?',
		answerA: '<JavaScript can be embedded within HTML>',
		answerB: '<JavaScript is different from Java>',
		answerC: '<JavaScript can be viewed in your browser window>',
		answerD: '<All of the Above>',
		correctAnswer: '3'
	},
	{
		question: 'Name a JavaScript Library',
		answerA: '<React>',
		answerB: '<Bootstrap>',
		answerC: '<Sass>',
		answerD: '<Ruby',
		correctAnswer: '0'
	}
];*/
