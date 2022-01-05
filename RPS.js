function game () {
    let humanWin = 0;
    let computerWin = 0;
    let gamesPlayed = 5;
    while (gamesPlayed > 0) {
 // ask the human for an input and makes whatever they give have the first letter capital with the rest lowercase
let choose = prompt("Choose Rock, Paper, or Scissors");
const humanChoice = choose.charAt(0).toUpperCase() + choose.slice(1).toLowerCase();
// -gets a random number 1-3 and sets the value to rock, paper or scissors for the computer
getRandom = () => Math.floor(Math.random()* 3) + 1;
let computerPlay = getRandom();
if (computerPlay == 1 ) {
    computerPlay = "Rock";
} else if (computerPlay == 2) {
    computerPlay = "Paper";
} else {
    computerPlay = "Scissors";
}
//plays a single round of rock, paper, scissors, prints results from the single round and adds to overall human/computer score
        function playRound (playerSelection, computerSelection) {
            let results
         if (playerSelection == computerSelection) {
             
             results = `TIE! You both chose ${computerSelection}`;
             
             return results;
         } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
             
             results = "HUMAN WINS! Rock beats Scissors";
             humanWin++;
             return results;
         } else if (playerSelection == "Paper" && computerSelection == "Rock") {
             
             results = "HUMAN WINS! Paper beats Rock";
             humanWin++;
             return results;
         } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
            
            results = "HUMAN WINS! Scissors beats Paper";
            humanWin++;
             return results;
        } else {
        
            results = `Computer Wins! ${computerSelection} beats ${playerSelection}!`;
            computerWin++;
             return results;
        }
        }
        console.log(playRound(humanChoice, computerPlay));
        gamesPlayed--;
    }

    //keeps track of overall score and prints the results at the end 
    if (humanWin > computerWin) {
        console.log(`Human Player wins the Game: ${humanWin} - ${computerWin}`);
    } else if (computerWin > humanWin) {
        console.log(`Computer Player wins the Game: ${computerWin} - ${humanWin}`);
    } else {
        console.log(`The game ends in a tie: ${humanWin} - ${computerWin}`)
    }
}
game();
