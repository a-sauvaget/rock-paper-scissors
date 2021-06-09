const userChoiceDisplay = document.createElement('h1');
const computerChoiceDisplay = document.createElement('h1');
const resultDisplay = document.createElement('h1');
// Parent of everything displayed
const gameGrid = document.getElementById('game');

// Add everything to the DOM
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay);

// Choices
const choices = ['rock', 'paper', 'scissors'];
let computerChoice;
let userChoice;

// WHo won ?
const getResult = () => {
  switch (userChoice + computerChoice) {
    case 'paperrock':
      resultDisplay.innerHTML = 'You won !';
      break;
    case 'paperscissors':
      resultDisplay.innerHTML = 'You lost !';
			break;
    case 'rockpaper':
      resultDisplay.innerHTML = 'You lost !';
			break;
    case 'rockscissors':
      resultDisplay.innerHTML = 'You won !';
			break;
    case 'scissorsrock':
      resultDisplay.innerHTML = 'You lost !';
			break;
    case 'scissorspaper':
      resultDisplay.innerHTML = 'You won !';
			break;
    default:
		resultDisplay.innerHTML = "It's a draw !";
  }
};

// Computer choice
const generateComputerChoice = () => {
  computerChoice = choices[Math.floor(Math.random() * choices.length)];
  computerChoiceDisplay.innerHTML = 'Computer choice: ' + computerChoice;
};

// CLick Handler
const handleClick = (e) => {
  // console.log('clicked');
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = 'User choice: ' + userChoice;
  generateComputerChoice();
	getResult();
};

for (let i = 0; i < choices.length; i++) {
  // Add a button per item in the array
  const element = document.createElement('button');
  element.id = choices[i];
  element.innerHTML = choices[i];
  element.addEventListener('click', handleClick);
  gameGrid.appendChild(element);
}
