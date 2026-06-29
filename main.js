const computerChoiceDisplay = document.getElementById("computer_choice")
const userChoiceDisplay = document.getElementById("user_choice")
const result = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
let userChoice, computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    // User
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice

    // Computer
    _computerChoice()

    // Result
    gameResult()


}))

function _computerChoice(){
    choice = Math.floor(Math.random()*3)
    switch(choice){
        case 0:
            computerChoice = 'rock'
            computerChoiceDisplay.innerHTML = 'rock'
            break;
        case 1:
            computerChoice = 'paper'
            computerChoiceDisplay.innerHTML = 'paper'
            break;
        case 2:
            computerChoice = 'scissors'
            computerChoiceDisplay.innerHTML = 'scissors'
            break;
    }
}

function gameResult(){
    /*
    C:R / U:P => WIN
    C:R / U:S => LOSE
    C:P / U:R => LOSE
    C:P / U:S => WIN
    C:S / U:P => LOSE
    C:S / U:R => WIN
    */

    if ((computerChoice === 'rock' && userChoice === 'paper') || (computerChoice === 'paper' && userChoice === 'scissors') || (computerChoice === 'rock' && userChoice === 'paper') || (computerChoice === 'scissors' && userChoice === 'rock')){
        result.innerHTML = 'YOU WIN'

    } else if ((computerChoice === 'rock' && userChoice === 'scissors') || (computerChoice === 'paper' && userChoice === 'rock') || (computerChoice === 'rock' && userChoice === 'paper') || (computerChoice === 'scissors' && userChoice === 'paper')){
        result.innerHTML = 'YOU LOSE'

    } else {
        result.innerHTML = "IT'S A DRAW"
    }
}