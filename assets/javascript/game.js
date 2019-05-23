
// Globals
var wins = 0;

var guessesLeft = [];

var userGuess = [];

// String of answers listed as underscore to answer
var answerString;

// Array of answers
var words = [
    'xbox',
    'playstation',
    'nintendo'
]

// Randomize chosen word in array
var randomWord = words[Math.floor(Math.random () * words.length)];

console.log(randomWord);


// Calculate length of randomized word and convert it into a underscore
function underScore () {
    for (i = 0; i < randomWord.length; i++) {
        userGuess[i] = '_';
    }

    // Adds a space in between underscores
    answerString = userGuess.join(' ');
    // Grab 'word'text' ID and change the HTML equal to word from underscore to word
    document.getElementById('word-text').innerHTML = answerString;
}

underScore();


// Enable key up function to recognize keys pressed
document.onkeyup = function(event) {

// Convert letter pressed into lowercase
var letter = event.key.toLowerCase();
console.log(letter);
}