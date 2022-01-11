// gets buttons into variables seperatley
const btns = Array.from(document.querySelectorAll('button'));
const btns_container = document.querySelector('#btns');
const p = document.createElement('p')
p.textContent= 'Please click on a button!'
btns_container.appendChild(p)
const resultText = document.createElement('h2');
btns_container.appendChild(resultText);



btns.forEach(function(btn){ //assigns an event listener to all buttons 
    btn.addEventListener('click', function(e){
//gets a random number 1-3 and assigns Rock, Paper or Scissors to the var computerPlay
        getRandom = () => Math.floor(Math.random()* 3) + 1;
let computerPlay = getRandom();
if (computerPlay == 1 ) {
    computerPlay = "Rock";
} else if (computerPlay == 2) {
    computerPlay = "Paper";
} else {
    computerPlay = "Scissors";
}
//
        const playerChoice = `${e.target.id}`
        
        p.textContent = `The player chose ${playerChoice}. The Computer chose ${computerPlay}`;
        
        function playRound (playerSelection, computerSelection){
            let results;
            if (playerSelection == computerSelection) {
                results = `TIE! You both chose ${e.target.id}`
                return results
            } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
                 results = "HUMAN WINS! Rock beats Scissors";
                 return results;
            } else if  (playerSelection == "Paper" && computerSelection == "Rock") {
                results = "HUMAN WINS! Paper beats Rock";
                return results;
            }  else if (playerSelection == "Scissors" && computerSelection == "Paper") {
            
                results = "HUMAN WINS! Scissors beats Paper";
                 return results;
            } else {
            
                results = `Computer Wins! ${computerSelection} beats ${playerSelection}!`;
                 return results;
            }
        };
       //everytime a button is runs function playRound and resultText text is updated to the returned results
       resultText.textContent = playRound(playerChoice, computerPlay);
    })
    
})
