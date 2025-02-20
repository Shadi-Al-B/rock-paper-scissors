// Initialize Scores

let humanScore = 0;
let ComputerScore = 0;

// Player gives an input

function getHumanChoice() {
  let humanChoice = prompt("Choose (1) Rock , (2) Paper , (3) Scissors");

  return humanChoice;
}

// Computer gives random output

function getComputerChoice() {
  let computerChoice;
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
  }

  return computerChoice;
}

// Play Round

function playRound(humanChoice, computerChoice) {
  humanChoice = getHumanChoice().toLowerCase();
  computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    console.log("it is a Draw!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    console.log("You Won! " + humanChoice + " beats " + computerChoice);
  } else {
    console.log("You Lost! " + computerChoice + " beats " + humanChoice);
  }
}

// compare Player input with Computer output

// Announce Round Winner

// Announce Game winner
