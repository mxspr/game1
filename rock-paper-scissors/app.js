const computerChoiceDisplay = document.getElementById('computeur-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generatecomputerChoice()
    getResult()
}))

function generatecomputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1  // ça ou "possibleChoices.length car il y a 3 possibilités

    if (randomNumber === 1) {
        computerChoice = 'Rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'Scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'Paper'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a draw!'
    }
    if (computerChoice === 'Rock' && userChoice === "Paper") {
        result = 'you win!'
    }
    if (computerChoice === 'Rock' && userChoice === "Scissors") {
        result = 'you lost!'
    }
    if (computerChoice === 'Paper' && userChoice === "Scissors") {
        result = 'you win!'
    }
    if (computerChoice === 'Paper' && userChoice === "Rock") {
        result = 'you lose!'
    }
    if (computerChoice === 'Scissors' && userChoice === "Rock") {
        result = 'you win!'
    }
    if (computerChoice === 'Scissors' && userChoice === "Paper") {
        result = 'you lose!'
    }

    resultDisplay.innerHTML = result
}

