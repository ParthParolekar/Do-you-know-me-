const readlineSync = require('readline-sync')
const chalk = require('chalk')
let score = 0;

//Welcome the user and tell
//them about the rules of the game
function greeting(){
  let userName = readlineSync.question("What's your name?:\n")
  console.log(chalk.bgMagenta("Hi " + userName))
  console.log(chalk.bgYellow('Welcome to "DO YOU KNOW ME?"'))
  console.log("--------------------------------------------")
  console.log("The game is simple. There will be 5 questions about me")
  console.log("Each question will have 3 options to choose from")
  console.log("--------------------------------------------")
  console.log("You can choose the correct option \nby typing the correct number of the option")
  console.log("For example: If you think that option 2 \nis correct then press 2 and enter")
  console.log("--------------------------------------------")
  console.log(chalk.green("Right Answer = +2 points"))
  console.log(chalk.red("Wrong Answer = -1 points"))
  console.log(chalk.yellow("You can also skip the question by pressing 0"))
  console.log("--------------------------------------------\n\n\n")
}

const question1 = {q:"Where do I live?\n1.)Nashik\n2.)Mumbai\n3.)Pune\n0.)SKIP\n", a:"1"}

const question2 = {q:"How old am I?\n1.)18\n2.)20\n3.)19\n0.)SKIP\n", a:"3"}

const question3 = {q:"What is my favourite Sitcom?\n1.)F.R.I.E.N.D.S\n2.)The Office\n3.)Brooklyn Nine-Nine\n0.)SKIP\n", a:"2"}

const question4 = {q:"What is my favourite Sport?\n1.)Cricket\n2.)Football\n3.)Tennis\n0.)SKIP\n", a:"2"}

const question5 = {q:"Where do I live?\n1.)Nashik\n2.)Mumbai\n3.)Pune\n0.)SKIP\n", a:"1"}

const allQuestions = [question1, question2, question3, question4, question5] 

//Function to ask questions and check for answers
function askQuestions(questions){

  for(let i = 0; i<questions.length; i++){

    //Ask Question
    let answer = readlineSync.question(questions[i].q)

    //Check for Answer
    if (answer == questions[i].a){
      console.log(chalk.green("Correct"))
      score = score + 2
      console.log(chalk.bgGreen(" Score: " + score +" "))
      console.log('\n\n')
    }else if(answer == 0){
      console.log(chalk.yellow("Skip"))
      score = score
      console.log(chalk.bgYellow(" Score: " + score +" "))
      console.log('\n\n')
    }else{
      console.log(chalk.red("Wrong"))
      score = score - 1
      console.log(chalk.bgRed(" Score: " + score +" "))
      console.log('\n\n')
    }
  }
}

greeting()
askQuestions(allQuestions)