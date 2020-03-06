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
			//alert('Game Over');
		}
	}
}, 1000);

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
//for (var i = 0; i < quizQuestions.length; i++) {
//for (var j = 0; j < quizQuestions[i].//length; j++) {
//console.log(quizQuestions[i]);
//}
//}
var element = document.createElement('div');
element.textContent = quizQuestions[0].question;
quizSection.prepend(element);
//renderOptions.innerHTML = quizQuestions[0].options[i];
//var list = document.createElement('ul');
//var answers = document.createElement('li');

var ul = document.querySelector('ul');
//var li = document.querySelector('li');

function renderQA(num) {
	var ul = document.createElement('ul');
	for (var i = 0; i < quizQuestions[num].options.length; i++) {
		var li = document.createElement('li');
		li.innerHTML = quizQuestions[num].options[i];
		li.setAttribute('class', '#list.ul');
		ul.appendChild(li);
	}
	console.log(options);
	options.appendChild(ul);
}
renderQA(1);
