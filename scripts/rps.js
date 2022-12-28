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
const rockLogo = document.querySelector('#rock-logo');
const paperLogo = document.querySelector('#paper-logo');
const scissorsLogo = document.querySelector('#scissors-logo');
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
const getComputerChoice = () => {
	const RPS_CHOICE = RPS_ARRAY[Math.floor(Math.random() * 3)];
	if (RPS_CHOICE === 'rock') rockLogo.classList.add('comp-choice');
	if (RPS_CHOICE === 'paper') paperLogo.classList.add('comp-choice');
	if (RPS_CHOICE === 'scissors') scissorsLogo.classList.add('comp-choice');
	return RPS_CHOICE;
}
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
	if (playerScore < computerScore) gameResultsDisplay.innerText = `You lost! ${POINTS_MESSAGE}`;
	if (playerScore > computerScore) gameResultsDisplay.innerText = `You won! ${POINTS_MESSAGE}`;
	if (playerScore == computerScore) gameResultsDisplay.innerText = `It's a tie! ${POINTS_MESSAGE}`;
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
	if (gameState.playerScore >= 3 || gameState.computerScore >= 3) {
		gameState.gameOver = true;
		reportWinner(gameState.playerScore, gameState.computerScore);
	}
}

const userChoiceMade = (rpsChoice) => {
	if (gameState.gameOver) return console.error("GAME OVER! PLEASE STOP");
	switch (rpsChoice) {
		case 'rock':
			playRound('rock', getComputerChoice());
			rockButton.classList.add('chosen');
			break;
		case 'paper':
			playRound('paper', getComputerChoice());
			paperButton.classList.add('chosen');
			break;
		case 'scissors':
			playRound('scissors', getComputerChoice());
			scissorsButton.classList.add('chosen');
			break;
	}
}

rockButton.addEventListener('click', () => userChoiceMade('rock'));
rockButton.addEventListener('animationend', () => rockButton.classList.remove('chosen'));
rockLogo.addEventListener('animationend', () => rockLogo.classList.remove('comp-choice'));
paperButton.addEventListener('click', () => userChoiceMade('paper'));
paperButton.addEventListener('animationend', () => paperButton.classList.remove('chosen'));
paperLogo.addEventListener('animationend', () => paperLogo.classList.remove('comp-choice'));
scissorsButton.addEventListener('click', () => userChoiceMade('scissors'));
scissorsButton.addEventListener('animationend', () => scissorsButton.classList.remove('chosen'));
scissorsLogo.addEventListener('animationend', () => scissorsLogo.classList.remove('comp-choice'));