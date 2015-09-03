function AlertEmptyProject() {
    alert("Sorry this project is currently unavailable");
}

function guessGame(){
    var number = Math.floor(Math.random() * 100) + 0;
    var answer = prompt("Guess a number between 0-100.\nPress cancel or type nothing to quit!");
    var loop = true;
    while(loop){
        if (answer === "" || answer === null){
            loop = false
        }
        else if(answer == number){
            loop = false;
            var playAgain = confirm("Great you guessed the right number!\nDo you want to play again?");
            if (playAgain == true) {
                loop = true;
                number = Math.floor(Math.random() * 100) + 0;
                answer = prompt("Guess a number between 0-100.\nPress cancel or type nothing to quit!");
            }
        }
        else if (answer > number && answer <= 100) {
            answer = prompt("You guessed to high. Guess again.");
        }
        else if (answer < number && answer >= 0) {
            answer = prompt("You guessed to low. Guess again.");
        }
        else{
            answer = prompt("Guess a number between 0-100.\nPress cancel or type nothing to quit!");
        }
    }
}