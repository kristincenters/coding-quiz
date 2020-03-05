window.onload = startButton;
//activate button

function startButton() {
	//alert('this button works');
}
var startBtnElement = document.getElementById('startBtn');
startBtnElement.addEventListener('click', startButton, false);

//const questions = document.querySelector('quizQuestions');
var timer = document.querySelector('timer');

function timeClock() {
	var counter = 20;
	setInterval(function() {
		if (counter >= 1) {
			counter--;
			var timer = document.getElementById('timer');
			timer.innerText = 'Seconds Remaining:' + counter;
		}
	}, 2000);
}
function timeAlert() {
	counter.textContent = 'Time Over';
}

/*var quizQuestions = [
	{
		question: 'Guess the number of states where I've lived?',
		options: [
			'1',
			'14',
			'6',
			'10'
		],
		correctAnswer: '2'
	},
	{
		question: 'My favorite TV series?',
		options: ['Mary Tyler Moore', 'Ozarks', 'The Handmaid's Tale', 'Mad Med'],
		correctAnswer: '3'
	}
];
*/
//var body = document.body
//var renderQuestionDiv = document.getElementById('div');
//var questionIndex = 0;
/*
var listChoices = document.getElementById('ul');
options.forEach(function(options) {
	let li = document.querySelector('li');
	li.textContent = options;
	listChoices.appendChild(li);
});
console.log(options);

var options = document.querySelector(options);
options.appendChild(listChoices);
*/
//var ChoiceBtn = document.createElement('btn');
//var viewQuestion = renderQuestion(quizQuestions);
//correctChoice = set.correctChoice;

//var questionDiv = document.createElement(h2);
//renderQuestion.innerText = set.question;
//renderQuestion.appendChild(questionDiv);
