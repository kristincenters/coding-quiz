//activate button
var startBtn = document.querySelector('start');
start.addEventListener('click', quizQuestions);

let timer;

function startQuiz() {
	timer = setInterval(displayCounter, 1000);
	//function displayQuestions();
}

var quizQuestions = [
	{
		question: 'Question1?',
		multipleChoice: [
			{
				id: 'answer-a',
				answer: 'a'
			},
			{
				id: 'answer-b',
				answer: 'b'
			},
			{
				id: 'answer-c',
				answer: 'c'
			},
			{
				id: 'answer-d',
				answer: 'd'
			}
		],
		correct_answer: 'b'
	},
	{
		question: 'question2?',
		multipleChoice: [
			{
				id: 'a',
				answer: 'a'
			},
			{
				id: 'b',
				answer: 'b'
			},
			{
				id: 'c',
				answer: 'b'
			},
			{
				id: 'd',
				answer: 'b'
			}
		],
		correct_answer: 'b'
	}
];
