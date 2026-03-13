// Guessing Game
// Guess a number from 1 to 5
// Genetate a random number between 1 to 5
// If the guess numbet matches random number, then show message won else lost
// Run the game for 5 times
// Show the number of wons and losts


var numOfWon = 0;
var numOfLost = 0;

for(var i = 0; i<=5; i++){

    var guessNumber = parseInt(prompt("Enter a number from 1 to 5 : "));
    var randomNumber = Math.floor(Math.random()*5) + 1; // Math.floor will Convert decimal numbers to whole numbers

    if(guessNumber == randomNumber){
        console.log("You have won");
        numOfWon++;
    }
    else{
        console.log("You have lost. Random number was " + randomNumber);
        numOfLost++;
    }

}
document.write("Number of won = " + numOfWon + "<br>");
document.write("Number of lost = " + numOfLost + "<br>");
