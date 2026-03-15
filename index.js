let humanScore = 0;
let computerScore = 0;
let draws = 0;

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;

  switch (computerChoice) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
    default:
      break;
  }
}

function getHumanChoice() {
  return prompt("Enter Rock, Paper or Scissors:");
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice.toUpperCase() === computerChoice.toUpperCase()) {
    console.log("It's a Draw!");
    draws++;
  } else if (
    humanChoice.toUpperCase() === "ROCK" &&
    computerChoice === "Paper"
  ) {
    console.log("Computer Win!");
    computerScore++;
  } else if (
    humanChoice.toUpperCase() === "PAPER" &&
    computerChoice === "Scissors"
  ) {
    console.log("Computer Win!");
    computerScore++;
  } else if (
    humanChoice.toUpperCase() === "SCISSORS" &&
    computerChoice === "Rock"
  ) {
    console.log("Computer Win!");
    computerScore++;
  } else {
    console.log("Player Win!");
    humanScore++;
  }
}

// playRound(humanSelection, computerSelection);

function playGame() {
  let roundNumbers = parseInt(
    prompt("Choose how many rounds you want to play:"),
  );

  for (let i = 0; i < roundNumbers; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  console.log("");

  console.log("*****************************");
  console.log("----------GAME OVER----------");
  console.log("*****************************");
  console.log("Rounds Played: " + roundNumbers);
  console.log("Player Score: " + humanScore);
  console.log("Computer Score: " + computerScore);
  console.log("Draws: " + draws);
  if (humanScore > computerScore) {
    console.log("Player WON!");
  } else if (computerScore > humanScore) {
    console.log("Computer WON!");
  } else {
    console.log("its a Draw!");
  }
}

playGame();
