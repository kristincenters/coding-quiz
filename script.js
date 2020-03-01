//load start button function
window.onload = startButton;
function startButton() {
	alert('this button works');
}
var startBtnElement = document.getElementById('startBtn');
startBtnElement.addEventListener('click', startButton, false);

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

function revealQuiz() {
	event.preventDefault();
	//timer = setInterval(displayCounter, 1000);
	//randomQuestions = quizQuestions.shadowRoot(() => Math.random( - .5))
}

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
];
