var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("Hey sup, What's your name?");
console.log("Hey " + userName + ", Welcome to Maverick's quiz on PUBG");

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log("Perfect! You're right buddy");
    score = score + 1;
  } else {
    console.log("You're wrong buddy! -_-");
    score = score - 1; 
  }
}

var questions = [
	{
		question: `
  Which is more powerful damage weapon?
  a: AKM
  b: M416
	c: Groza
  d: Aug\n`,
		answer: "c"
	},
	{
		question: `
	Shortest map in pubg?(Distance)
  a: Livik
  b: Sanhok
  c: Erangel
    d: Miramar
    e: Vikendi\n`,
		  answer: "a"
	},
	{
		question: `
	Which team won the Pubg Mobile Global Championship?
	a: BTR
	b: OR
	c: TSM
	d: RRQ\n`,
		answer: "a"
	},
	{
		question: `
	Which of the following weapon is found in Air Drop
	a: UMP
	b: Win 94
	c: Kar 98k
  d: AWM\n`,
		answer: "d"
	}
];


for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}
console.log("---------THE END--------")
console.log("YAY! You SCORED: ", score);



