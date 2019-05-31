//  Globals
//  ****************************************************
let wordChoices = ['xbox', 'playstation', 'nintendo', 'computer', 'switch']
let currentWord = '';
let lettersInWord = [];
let numBlanks = 0
let blanksAndCorrect = [];
let wrongGuess = [];


let winCount = 0;
let guessesRemaining = 5;

// Function
//  ****************************************************

function start() {
    currentWord = wordChoices[Math.floor(Math.random () * wordChoices.length)];
    lettersInWord = currentWord.split('');
    numBlanks = lettersInWord.length;
    
    guessesRemaining = 5;
    wrongGuess = [];
    blanksAndCorrect = [];
    
    for (let i = 0; i < numBlanks; i++) {
        blanksAndCorrect.push('_');
    }

    document.getElementById('current-word').innerHTML = blanksAndCorrect.join(' ');
    document.getElementById('numbGuesses').innerHTML = guessesRemaining;
    document.getElementById('wins').innerHTML = winCount;
}

function letterCheck(letter) {
    let isLetterInWord = false;

    for (let i = 0; i < numBlanks; i++) {
        if(currentWord[i] == letter) {
            isLetterInWord = true;
        }
    }

    if(isLetterInWord) {
        for (let i = 0; i < numBlanks; i++) {
            if(currentWord[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }   
    } else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
}

function complete() {
    document.getElementById('numbGuesses').innerHTML = guessesRemaining;
    document.getElementById('current-word').innerHTML = blanksAndCorrect.join(' ');
    document.getElementById('wrongGuess').innerHTML = wrongGuess.join(' ');

    if(lettersInWord.toString() == blanksAndCorrect) {
        winCount++;
        alert('You Win');

        document.getElementById('wins').innerHTML = winCount;
        start();
    } else if(guessesRemaining == 0) {
        alert('You lost');
        start();
    }
}


// Main
//  ****************************************************
start();

document.onkeyup = function(event) {
    let letterGuessed = event.key.toLowerCase();
    letterCheck(letterGuessed);
    complete();
}