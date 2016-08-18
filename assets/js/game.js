// Star Wars Hangman Game

console.log("Is this thing on?");


var wordList = [
	"Princess Leia", 
	"General Organa", 
	"Han Solo",
	"Darth Vader",
	"Lando Calrissian",
	"Rey",
	"Finn",
	"Poe Dameron",
	"BB-8",
	"Grand Moff Tarkin",
	"Kylo Ren",
	"Ben Organa Solo",
	"TIE Fighter",
	"Death Star",
	"Jakku",
	"Tatooine",
	"Coruscant",
	"Jabba the Hutt",
	"Boba Fett",
	"Chewbacca",
	"Obi-Wan Kenobi",
	"Star Destroyer",
	"X-Wing",
	"Maz Kenata",
	"General Hux",
	"Snoke",
	// "TK",
]

var totalGuesses = 12




// selects a random word from the array

var wordChoice = wordList[Math.floor(Math.random() * wordList.length)];

console.log(wordChoice);



// replaces all characters in the string with underscores and prints the result to the screen

var showBlanks = wordChoice.length

var blanks = "_ ";

var i;

for (i = 0; i < showBlanks; i++) {
	document.write(blanks);
}



// records the player's letter guess

document.onkeyup = function(event) {
	var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(playerGuess);


	// reveals letter if player's guess is a match

	if (wordChoice.includes(playerGuess)) {
		console.log("It's a match!");

		// get js to show only the letters that matched
	}

	else {
		console.log("That letter isn't in the string.");
	};


	console.log(playerGuess);
	console.log("You have " +  )

}







