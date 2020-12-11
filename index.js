var readlineSync = require("readline-sync")
const chalk = require('chalk');
var score = 0

console.log(chalk.cyan("welcome to the HarryPotter quiz !!"))
var userName= readlineSync.question("What is your name ? ")
console.log(chalk.cyan("Hello " + userName + "!!" ));
console.log(chalk.yellow("below are the rules for this quiz.\nEach correct answer will give you a point but you will lose a point for wrong answers so answer carefully!(answer with a,b,c,and d )"))

//play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("you are right!"))
    score++
  }
  else {
    console.log(chalk.red("you are wrong."))
  }
  console.log("score is: ", score);
  console.log(chalk.blue("----------------------"));
  console.log(chalk.blue("\n----------------------"));
}


//arry with questions
var questions=[
    {
    question:"\n1.Which house did the sorting hat decide to put harry in initially?\na)Gryffindor\nb)Hufflepuff\nc)Ravenclaw\nd)Slytherin ",
    answer:"d"
    },
    {
    question:"\n2)How does Harry manage to breathe underwater during the second task of the Triwizard Tournament?\na)He transfigures into a shark\nb)He kisses a mermaid\nc)He eats gillyweed\nd)He performs a bubble-head charm ",
    answer:"c"
    },
    {
      question:"\n3)Who guards the entrance to the Gryffindor common room?\na)The Grey Lady\nb)The Fat Friar\nc)The Bloody Baron\nd)The Fat Lady",
      answer:"d"
    },
    {
      question:"\n4)The three kinds of balls used in Quidditch are Bludgers, Snitches, and…\na)Quaffles\nb)Wiffles\nc)Boccis\nd)Foozles",
      answer:"a"
    },
    {
      question:"\n5)What does the spell “Obliviate” do?\na)Destroys objects\nb)Sends someone to the nether realm\nc)Removes parts of someone’s memory\nd)Makes objects invisible",
      answer:"c"
    }]

//loop array 
for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)

}

var highScores = [
  {
    name: "karthik",
    score: 5,
  },
  {
    name: "Tarun",
    score: 4,
  }
]

for (var j = 0; j < highScores.length; j++) {
  currentHighScore = highScores[j]
  console.log(chalk.white.bgBlue("high score is " + currentHighScore.score))
  console.log(chalk.white.bgBlue("Achieved by ", currentHighScore.name))
}
