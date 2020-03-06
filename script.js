//activate button
window.onload = startButton;

function startButton() {
	//alert('this button works');
}
//create timer that counts down 60 seconds
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
			//alert('Game Over');
		}
	}
}, 1000);
//variables for html elements
var quizSection = document.getElementById('render_Quiz');
//var questions = document.qetElementById('renderQuestion');
var options = document.getElementById('renderOptions');
var correctAnswer = document.getElementById('renderCorrect');
var questionIndex = 0;

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
//render question and answer pair listing answer options
var element = document.createElement('div');
element.textContent = quizQuestions[0].question;
quizSection.prepend(element);

var ul = document.querySelector('ul');

function renderQA(num) {
	var ul = document.createElement('ul');
	for (var i = 0; i < quizQuestions[num].options.length; i++) {
		var li = document.createElement('li');
		li.innerHTML = quizQuestions[num].options[i];
		li.setAttribute('class', '#list');
		ul.appendChild(li);
	}
	console.log(options);
	options.appendChild(ul);
}
renderQA(1);
