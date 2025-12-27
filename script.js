console.log("Hello World");

console.log(getComputerChoice());


function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}


function getHumanChoice() {
  return prompt("Enter rock, paper, or scissors").toLowerCase();
}

console.log(getHumanChoice());
