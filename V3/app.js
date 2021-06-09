const resultDisplay = document.querySelector('#result');
const choicesDisplay = document.querySelector('#choices');
const choices = ['rock', 'paper', 'scissors'];

const getResults = (userChoice, computerChoice) => {
  switch (userChoice + computerChoice) {
    case 'paperrock':
      resultDisplay.innerHTML = 'You have chosen ' + userChoice + ' and the computer have chosen ' + computerChoice + ': You won !';
      break;
    case 'paperscissors':
      resultDisplay.innerHTML = 'You have chosen ' + userChoice + ' and the computer have chosen ' + computerChoice + ': You lost !';
			break;
    case 'rockpaper':
      resultDisplay.innerHTML = 'You have chosen ' + userChoice + ' and the computer have chosen ' + computerChoice + ': You lost !';
			break;
    case 'rockscissors':
      resultDisplay.innerHTML = 'You have chosen ' + userChoice + ' and the computer have chosen ' + computerChoice + ': You won !';
			break;
    case 'scissorsrock':
      resultDisplay.innerHTML = 'You have chosen ' + userChoice + ' and the computer have chosen ' + computerChoice + ': You lost !';
			break;
    case 'scissorspaper':
      resultDisplay.innerHTML = 'You have chosen ' + userChoice + ' and the computer have chosen ' + computerChoice + ': You won !';
			break;
    default:
		resultDisplay.innerHTML = 'You have chosen ' + userChoice + ' and the computer have chosen ' + computerChoice + ": It's a draw !";
  }
};

const handleClick = (e) => {
  getResults(e.target.innerHTML, choices[(Math.floor(Math.random() * choices.length))]);
};

choices.forEach((choice) => {
  const button = document.createElement('button');
  button.innerHTML = choice;
  button.className = 'button';
  button.addEventListener('click', handleClick);
  choicesDisplay.appendChild(button);
});
