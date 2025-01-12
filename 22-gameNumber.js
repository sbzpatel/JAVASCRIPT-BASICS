let gameNum = 25;

let enteredNum = prompt("Guess the game number :");

var msg = false;
while(gameNum != enteredNum) {
        enteredNum = prompt("You entered wrong number. Guess again bro :");
}

console.log("Congratulation bntae, you guessed right number bro!!!!");
