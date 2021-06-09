const computerChoiceDisplay = document.getElementById('computer-choice');
const yourChoiceDisplay = document.getElementById('your-choice');
let yourChoice;
const resultDisplay = document.getElementById('result');
const choices = document.querySelectorAll('button');

choices.forEach((choice) => choice.addEventListener('click', (e) => {
  yourChoice = e.target.id;
  yourChoiceDisplay.innerHTML = yourChoice;
}));
