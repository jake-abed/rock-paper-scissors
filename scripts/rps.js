'use strict';
//Establish global variables
let playerScore = 0;
let computerScore = 0;
const RPS_ARRAY = ['rock', 'paper', 'scissors'];
//Helper function to reset the game upon completion.
const cleanUpGame = () => {
        playerScore = 0;
        computerScore = 0;
}
//Helper function to get the Computer Choice
const getComputerChoice = () => RPS_ARRAY[Math.floor(Math.random() * 3)];
//Helper function to get the player choice via prompt
const getPlayerChoice = () => prompt('Choose rock, paper, or scissors!').toLowerCase();
//Helper function to play a round.
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
                        return 'Incorrect input';
        }
}
//Helper function for reporting the winner.
const reportWinner = (playerScore, computerScore) => {
        const POINTS_MESSAGE = `Your score = ${playerScore}. Computer score = ${computerScore}.`;
        if (playerScore < computerScore) {
                return console.log(`You lost! ${POINTS_MESSAGE}`);
        }
        if (playerScore > computerScore) {
                return console.log(`You won! ${POINTS_MESSAGE}`);
        } else {
                return console.log(`It's a tie! ${POINTS_MESSAGE}`);
        }
}
//Helper function to process a round
const processRound = (roundResults) => {
        if (roundResults == 'win') {
                playerScore++;
                let pointsMessage = `Your score = ${playerScore}. Computer score = ${computerScore}.`;
                console.log(`You ${roundResults}! ${pointsMessage}`);
        }
        if (roundResults == 'lose') {
                computerScore++;
                let pointsMessage = `Your score = ${playerScore}. Computer score = ${computerScore}.`;
                console.log(`You ${roundResults}! ${pointsMessage}`);
        }
        if (roundResults == 'tie') {
                let pointsMessage = `Your score = ${playerScore}. Computer score = ${computerScore}.`;
                console.log(`It's a ${roundResults}! ${pointsMessage}`);
        }
}
