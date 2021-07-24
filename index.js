var readlineSync = require('readline-sync')
var chalk = require('chalk')
var score = 0;

function greeting(){
let userName = readlineSync.question("What's your name?:\n")
console.log(chalk.bgMagenta("Hi " + userName))
console.log(chalk.bgYellow('Welcome to "DO YOU KNOW ME?"'))
console.log("--------------------------------------------")
console.log("The game is simple. There will be 5 questions about me")
console.log("Each question will have 3 options to choose from")
console.log("--------------------------------------------")
console.log("You can choose the correct option by typing the correct number of the option")
console.log("For example: If you think that option 2 is correct then press 2 and enter")
console.log("--------------------------------------------")
console.log(chalk.green("Right Answer = +2 points"))
console.log(chalk.red("Wrong Answer = -1 points"))
console.log(chalk.yellow("You can also skip the question by pressing 0"))
}
greeting()