// Initialize Scores

let humanScore = 0;
let computerScore = 0;
let Draws = 0;
let round = 0;
function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

// Player gives an input
//
// function getHumanChoice() {
//   let humanChoice = prompt("Choose (1) Rock , (2) Paper , (3) Scissors");
//
//   return humanChoice;
// }

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

const roundResult = document.querySelector(".round-result");
const displayContainer = document.querySelector(".display-container");
// Play Round

function playRound(humanChoice, computerChoice) {
  round++;
  document.querySelector("#round-score").textContent = round;
  humanChoice = humanChoice.toLowerCase();
  computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    roundResult.textContent = "it is a Draw!";
    console.log("it is a Draw!");
    Draws++;
    document.querySelector("#draws-score").textContent = Draws;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    roundResult.textContent = `You Won! ${capitalizeFirstLetter(
      humanChoice
    )} beats ${capitalizeFirstLetter(computerChoice)}`;

    console.log("You Won! " + humanChoice + " beats " + computerChoice);
    humanScore++;
    document.querySelector("#player-score").textContent = humanScore;
  } else {
    roundResult.textContent = `You Lost! ${capitalizeFirstLetter(
      humanChoice
    )} beats ${capitalizeFirstLetter(computerChoice)}`;

    console.log("You Lost! " + computerChoice + " beats " + humanChoice);
    computerScore++;
    document.querySelector("#computer-score").textContent = computerScore;
  }
  if (round === 5) {
    showFinalScore();
  }
  if (round === 6) {
    resetScore();
  }
}

// Add an event listener to the buttons that call your playRound function with
// the correct playerSelection every time a button is clicked.

const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");

function clickButton(e) {
  playRound(e.target.textContent, getComputerChoice());
}

rockBtn.addEventListener("click", clickButton);
paperBtn.addEventListener("click", clickButton);
scissorsBtn.addEventListener("click", clickButton);

function showFinalScore() {
  const gameOver = document.createElement("p");
  displayContainer.appendChild(gameOver);
  displayContainer.removeChild(roundResult);
  gameOver.style.textAlign = "left";
  gameOver.innerText = "******GAME OVER******\n\n";
  gameOver.innerText += `Player Score: ${humanScore}\n`;
  gameOver.innerText += `Computer Score: ${computerScore}\n`;
  gameOver.innerText += `Draws: ${Draws}\n\n`;
  gameOver.innerText += "*********************\n\n";

  if (humanScore === computerScore) {
    gameOver.innerText += "Winner: Its a Draw";
  } else if (humanScore > computerScore) {
    gameOver.innerText += "Player Won!";
  } else {
    gameOver.innerText += "Computer Won!";
  }

  // console.log("Player Score: " + humanScore);
  // console.log("Computer Score: " + computerScore);
  // console.log("Draws: " + Draws);
}

function resetScore() {
  humanScore = 0;
  computerScore = 0;
  Draws = 0;
  round = -1;
}

// Play Game

function playGame() {
  for (let Round = 1; Round <= 5; Round++) {
    playRound();
  }
  showFinalScore();
  resetScore();
}
