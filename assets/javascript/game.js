//  Globals
//  ****************************************************
let wordChoices = ['xbox', 'playstation', 'nintendo', 'computer',]
let currentWord;
let lettersInWord = [];
let wrongGuess = [];

let winCount = 0;
let lossCount = 0;
let guessesRemaining = 5;

function start() {
currentWord = wordChoices[Math.floor(Math.random () * wordChoices.length)];
lettersInWord = currentWord.split('');
console.log(lettersInWord);
console.log(currentWord);
}
//  ****************************************************

start();
