 // conatiner to store both human score and computer score 
let humanScore = 0;
let computerScore = 0;


// creating choise for the cpmputer

function getComputerChoice() {
  const choices = ["rock", "paper","scissors"];
  return choices [Math.floor( Math.random()*3)];
}
// aceessing the html element by the selector
const buttons = document.querySelectorAll("button");
const resuitDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");


// playRound section

  function playRound(humanChoice, computerChoice) {
    
    if (humanChoice === computerChoice) {
      resuitDiv.textContent = "It's a tie!";
      return;
    }

    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      resuitDiv.textContent = (`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      resuitDiv.textContent = (`You lose! ${computerChoice} beats ${humanChoice}`);
    }
    checkWinner();
  }


  // check  winner
  function checkWinner(){

  if (humanScore === 5 ){
    resuitDiv.textContent = "🏆 You won the game!";
    disableButtons();
  } else if (computerScore === 5) {
    resuitDiv.textContent= "💻 Computer won the game!";
    disableButtons();
  } 
function disableButtons(){
  buttons.forEach(button=>button.disabled = true);
}

  }
// the load event listener
buttons.forEach(button=>{
  button.addEventListener("click", ()=> {
    const humanChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });
});
