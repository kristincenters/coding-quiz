window.onload = startButton;
//activate button

function startButton() {
	//alert('this button works');
}

var timerElement = document.getElementById('counter');
var startBtnElement = document.getElementById('startBtn');
startBtnElement.addEventListener('click', startButton, false);

var counter = 60;
var timer = document.querySelector('counter');

timeInterval = setInterval(function() {
	if (counter >= 0) {
		counter--;

		timerElement.textContent = 'Remaining Seconds: ' + counter;
		if (counter === 0) {
			clearInterval(timeInterval);
			alert('Game Over');
		}
	}
}, 1000);

var quizSection = document.getElementById('renderQuiz');
//var questions = document.qetElementById('renderQuestion');
var AnswerChoices = document.getElementById('renderOptions');
var correctAnswer = document.getElementById('renderCorrect');
var questionIndex = 0;
var question;

var quizQuestions = [
	{
		question: 'Guess the number of states where I have lived',
		options: ['1', '14', '6', '10'],
		correct: '2'
	},
	{
		question: 'My favorite TV series',
		options: ['Mary Tyler Moore', 'Ozarks', 'The Handmaids Tale', 'Mad Med'],
		correct: '3'
	}
];
renderQuiz.innerHTML = quizQuestions[0].question;
//renderOptions.innerHTML = quizQuestions[0].options[i];

function renderQA() {
	for (var i = 0; 1 < quizQuestions[0].options.length; i++) {
		var listChoices = document.getElementById('ul');
		var li = document.querySelector('li');
		console.log(listChoices);
		li.innerHTML = question[0].options[i];
		li.setAttribute('class', '#list');
		listChoices.appendChild(li);
	}
}
renderQA();
