'use strict';
//Establish global variables
let playerScore = 0;
let computerScore = 0;
const RPS_ARRAY = ['rock', 'paper', 'scissors'];
//Helper function to rest the game stats whenever a game is finished.
const cleanUpGame = () => {
        playerScore = 0;
        computerScore = 0;
}
//The computer chooses it's option.
const getComputerChoice = () => RPS_ARRAY[Math.floor(Math.random() * 3)];
//The user chooses their option.
const getPlayerChoice = () => prompt('Choose rock, paper, or scissors!').toLowerCase();
//The game compares the choices. Rock beats scissors, paper beats rock, and scissors beats paper.
const playRound = (getPlayerChoice, getComputerChoice) => {
        console.log(`The computer chose ${getComputerChoice}.`);
        switch (getPlayerChoice) {
                case 'rock':
                        if (getComputerChoice == 'scissors') return 'win';
                        if (getComputerChoice == 'paper') return 'lose';
                        if (getComputerChoice == 'rock') return 'tie';
                        break;
                case 'paper':
                        if (getComputerChoice == 'rock') return 'win';
                        if (getComputerChoice == 'scissors') return 'lose';
                        if (getComputerChoice == 'paper') return 'tie';
                        break;
                case 'scissors':
                        if (getComputerChoice == 'paper') return 'win';
                        if (getComputerChoice == 'rock') return 'lose';
                        if (getComputerChoice == 'scissors') return 'tie';
                        break;
                default:
                        return 'Incorrect input'
        }
}
//Helper function for reporting the winner.
const reportWinner = (playerScore, computerScore) => {
        if (playerScore < computerScore) {
                return console.log(`You lost! You have ${playerScore} points and the computer has ${computerScore} points!`)
        }
        if (playerScore > computerScore) {
                return console.log(`You won! You have ${playerScore} points and the computer has ${computerScore} points!`)
        } else {
                return console.log(`It's a tie! You have ${playerScore} points and the computer has ${computerScore} points!`);
        }
}
//Helper function to process a round
const processRound = (roundResults) => {
        if (roundResults == 'win') {
                playerScore++;
                console.log(`You ${roundResults}! You have ${playerScore} points and the computer has ${computerScore} points!`);
        }
        if (roundResults == 'lose') {
                computerScore++;
                console.log(`You ${roundResults}! You have ${playerScore} points and the computer has ${computerScore} points!`);
        }
        if (roundResults == 'tie') {
                console.log(`It's a ${roundResults}! You have ${playerScore} points and the computer has ${computerScore} points!`);
        }
}
//Run the game 5 times
const game = () => {
        for (let i = 0; i < 5; i++) {
                let computerChoice = getComputerChoice();
                let playerChoice = getPlayerChoice();
                let roundResults = playRound(playerChoice, computerChoice);
                processRound(roundResults);
                if (roundResults == 'Incorrect input') {i--, console.log(`Please enter Rock, Paper, or Scissors. Not ${playerChoice}.`)};
        }
//Report the winner.
        reportWinner(playerScore, computerScore);
        cleanUpGame();
        return console.log('Thank you for playing :)');

}
