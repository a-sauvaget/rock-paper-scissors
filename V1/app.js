/* eslint-disable no-use-before-define */
const computerChoiceDisplay = document.getElementById('computer-choice');
let computerChoice;
const userChoiceDisplay = document.getElementById('user-choice');
let userChoice;
const resultDisplay = document.getElementById('result');
let result;
const choices = document.querySelectorAll('button');

choices.forEach((choice) => choice.addEventListener('click', (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;
  generateComputerChoice();
  getResult();
}));

const generateComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = 'rock';
  } else if (randomNumber === 2) {
    computerChoice = 'scissors';
  } else if (randomNumber === 3) {
    computerChoice = 'paper';
  }

  computerChoiceDisplay.innerHTML = computerChoice;
};

const getResult = () => {
  if (userChoice === computerChoice) {
    result = "It's a draw !";
  } else if (userChoice === 'rock' && computerChoice === 'scissors') {
    result = 'You won !';
  } else if (userChoice === 'rock' && computerChoice === 'paper') {
    result = 'You lost!';
  } else if (userChoice === 'paper' && computerChoice === 'scissors') {
    result = 'You lost!';
  } else if (userChoice === 'paper' && computerChoice === 'rock') {
    result = 'You won!';
  } else if (userChoice === 'scissors' && computerChoice === 'rock') {
    result = 'You lost!';
  } else if (userChoice === 'scissors' && computerChoice === 'paper') {
    result = 'You won!';
  }
  resultDisplay.innerHTML = result;
};
