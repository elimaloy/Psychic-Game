



var compChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
var wins = 0;
var losses = 0;
var numberGuesses = 5;
var guessChoices = [];

document.onkeyup = function (event) {

        var userGuess = event.key;
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];

        if (options.indexOf(userGuess) > -1) {

            if (userguess === computerGuess) {
                wins++;
                numberguesses = 5;
                guessChoices = [];
            }

            if (userGuess != computerGuess) {
                numberGuesses = 5;
                guessChoices.push(userGuess);
            }

            if (numGuessess === 0) {
                numberGuesses = 9;
                losses++;
                guessChoices = [];

            }


        }