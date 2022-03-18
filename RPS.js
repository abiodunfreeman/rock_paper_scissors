const btns = Array.from(document.querySelectorAll('button'));
const humScr = document.getElementById('humanScore');
const comScr = document.getElementById('computerScore');



const printResults = document.createElement('h2')
const resetBtn = document.createElement('button')
resetBtn.textContent = 'Play Again?';



resetBtn.addEventListener('click', () => {
    humScr.textContent = 0;
    comScr.textContent = 0;
    printResults.textContent = "";
})


btns.forEach(function(btn){
    btn.addEventListener('click',(e) => {
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
        let results;
        let btnPressed = e.target.id
        console.log(`Human - ${btnPressed}`);
        console.log(`Computer - ${comScr.textContent}`)
        if (comScr.textContent >= 5){
            printResults.textContent = "GAME OVER - COMPUTER WINS";
            document.body.appendChild(printResults);
            document.body.appendChild(resetBtn);
        
        }else if (parseInt(humScr.textContent) >= 5 ){
            printResults.textContent = "GAME OVER - HUMAN WINS";
            document.body.appendChild(printResults);
            document.body.appendChild(resetBtn);
            
        } else if (btnPressed == computerPlay) {
              
            results = `TIE! You both chose ${computerPlay}`;
        
        } else if (btnPressed == "Rock" && computerPlay == "Scissors") {
             
            results = "HUMAN WINS! Rock beats Scissors";
            humScr.innerHTML++;
            
        } else if (btnPressed == "Paper" && computerPlay == "Rock") {
            
            results = "HUMAN WINS! Paper beats Rock";
            humScr.innerHTML++;
            
        } else if (btnPressed == "Scissors" && computerPlay == "Paper") {
           
           results = "HUMAN WINS! Scissors beats Paper";
           humScr.innerHTML++;
            
       } else {
       
           results = `Computer Wins! ${computerPlay} beats ${btnPressed}!`;
           comScr.innerHTML++;
            
       }
    })
});

if (humScr.textContent > 5 || comScr.textContent > 5) {
    
} 

