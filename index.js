// Initialize Scores

let humanScore = 0;
let computerScore = 0;
let Draws = 0;
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
    Draws++;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    console.log("You Won! " + humanChoice + " beats " + computerChoice);
    humanScore++;
  } else {
    console.log("You Lost! " + computerChoice + " beats " + humanChoice);
    computerScore++;
  }
}

function showFinalScore() {
  console.log("Player Score: " + humanScore);
  console.log("Computer Score: " + computerScore);
  console.log("Draws: " + Draws);
  if (humanScore === computerScore) {
    console.log("Winner: Its a Draw");
  } else if (humanScore > computerScore) {
    console.log("Player Won!");
  } else {
    console.log("Computer Won!");
  }
}

function resetScore() {
  humanScore = 0;
  computerScore = 0;
  Draws = 0;
}

// Play Game

function playGame() {
  for (let Round = 1; Round <= 5; Round++) {
    playRound();
  }
  showFinalScore();
  resetScore();
}
