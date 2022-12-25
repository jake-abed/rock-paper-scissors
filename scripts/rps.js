'use strict';
//Establish global variables
const gameState = {
	gameOver : false,
	playerScore: 0,
	computerScore: 0,
	playerChoice: null,
	computerChoice: null
}
const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const scissorsButton = document.querySelector('#scissors-button');
const roundResultsDisplay = document.querySelector('.round-end-results');
const gameResultsDisplay = document.querySelector('.game-end-results');
const playerScoreDisplay = document.querySelector('.player-points');
const compScoreDisplay = document.querySelector('.computer-points');
const RPS_ARRAY = ['rock', 'paper', 'scissors'];
//Helper function to reset the game upon completion.
const cleanUpGame = () => {
	gameState.playerScore = 0;
	gameState.computerScore = 0;
}
//Helper function to get the Computer Choice
const getComputerChoice = () => RPS_ARRAY[Math.floor(Math.random() * 3)];
//Helper function to play a round.
const playRound = (getPlayerChoice, getComputerChoice) => {
	if (gameState.gameOver) return console.log('The game is over. Please restart.');
	gameState.playerChoice = getPlayerChoice;
	gameState.computerChoice = getComputerChoice;
	switch (getPlayerChoice) {
        case 'rock':
            if (getComputerChoice == 'scissors') return processRound('win');
			if (getComputerChoice == 'paper') return processRound('lose');
			if (getComputerChoice == 'rock') return processRound('tie');
			break;
		case 'paper':
			if (getComputerChoice == 'rock') return processRound('win');
			if (getComputerChoice == 'scissors') return processRound('lose');
			if (getComputerChoice == 'paper') return processRound('tie');
			break;
		case 'scissors':
			if (getComputerChoice == 'paper') return processRound('win');
			if (getComputerChoice == 'rock') return processRound('lose');
			if (getComputerChoice == 'scissors') return processRound('tie');
			break;
		default:
			return 'Incorrect input';
        }
}
//Helper function for reporting the winner.
const reportWinner = (playerScore, computerScore) => {
	const POINTS_MESSAGE = `Your score = ${playerScore}. Computer score = ${computerScore}.`;
	if (playerScore < computerScore) {
		gameResultsDisplay.innerText = `You lost! ${POINTS_MESSAGE}`;
	}
	if (playerScore > computerScore) {
		gameResultsDisplay.innerText = `You won! ${POINTS_MESSAGE}`;
	} else {
		gameResultsDisplay.innerText =`It's a tie! ${POINTS_MESSAGE}`;
	}
}
//Helper function to process a round and update UI accordingly.
const processRound = (roundResults) => {
	if (roundResults == 'win') {
		gameState.playerScore++;
		roundResultsDisplay.innerText = `You ${roundResults} this round!`;
		playerScoreDisplay.innerText = `Human (You): ${gameState.playerScore} Points`;
		compScoreDisplay.innerText = `Computer: ${gameState.computerScore} Points`;
        }
	if (roundResults == 'lose') {
		gameState.computerScore++;
		roundResultsDisplay.innerText = `You ${roundResults} this round!`;
		playerScoreDisplay.innerText = `Human (You): ${gameState.playerScore} Points`;
		compScoreDisplay.innerText = `Computer: ${gameState.computerScore} Points`;
	}
	if (roundResults == 'tie') {
		roundResultsDisplay.innerText = `It's a ${roundResults} this round!`;
		playerScoreDisplay.innerText = `Human (You): ${gameState.playerScore} Points`;
		compScoreDisplay.innerText = `Computer: ${gameState.computerScore} Points`;
	}
}

rockButton.addEventListener('click', () => playRound('rock', getComputerChoice()));
rockButton.addEventListener('click', () => rockButton.classList.add('chosen'));
rockButton.addEventListener('animationend', () => rockButton.classList.remove('chosen'));
paperButton.addEventListener('click', () => playRound('paper', getComputerChoice()));
paperButton.addEventListener('click', () => paperButton.classList.add('chosen'));
paperButton.addEventListener('animationend', () => paperButton.classList.remove('chosen'));
scissorsButton.addEventListener('click', () => playRound('scissors', getComputerChoice()));
scissorsButton.addEventListener('click', () => scissorsButton.classList.add('chosen'));
scissorsButton.addEventListener('animationend', () => scissorsButton.classList.remove('chosen'));