let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

let buttons = document.querySelectorAll("button");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let reset = document.getElementById("reset");

let playerImg = document.getElementById("player-img");
let computerImg = document.getElementById("computer-img");

let resultDisplay = document.getElementById("result");
let playerScoreDisplay = document.getElementById("player-score");
let computerScoreDisplay = document.getElementById("computer-score");
let roundDisplay = document.getElementById("round-display");

// --------------------------------------------------------
// Array of choices and Images
const choices = ["rock", "paper", "scissors"];
const images = {
  rock: "images/rock.png",
  paper: "images/paper.png",
  scissors: "images/scissors.png",
};

// --------------------------------------------------------
// Get computer choice
function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// --------------------------------------------------------
// Get round winner
function getWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore += 5;
    return "Player Wins!";
  } else {
    computerScore += 5;
    return "Computer Wins!";
  }
}

// --------------------------------------------------------
// Update UI
function updateUI(playerChoice, computerChoice, winner) {
  // Update images
  playerImg.src = images[playerChoice];
  computerImg.src = images[computerChoice];

  // Update scores
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;

  // Display Result
  resultDisplay.textContent = winner;

  // Update the Round Number
  roundDisplay.textContent = `Round ${roundCount + 1}`;
}

// --------------------------------------------------------
// Display Winner after 5 rounds
function displayFinalWinner() {
  if (playerScore > computerScore) {
    resultDisplay.textContent = "Player is the Final Winner!";
  } else if (computerScore > playerScore) {
    resultDisplay.textContent = "Computer is the Final Winner!";
  } else {
    resultDisplay.textContent = "It's a Tie after 5 Rounds!";
  }
  // Disable buttons after 5 rounds
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;
}

// --------------------------------------------------------
// Event Listeners for Player Choices
rock.addEventListener("click", function () {
  return playGame("rock");
});

paper.addEventListener("click", function () {
  return playGame("paper");
});

scissors.addEventListener("click", function () {
  return playGame("scissors");
});

// --------------------------------------------------------
// Main Game
function playGame(playerChoice) {
  if (roundCount < 5) {
    // Get Computer's choice
    const computerChoice = getComputerChoice();

    // Determine Winner
    const winner = getWinner(playerChoice, computerChoice);

    // Update UI
    updateUI(playerChoice, computerChoice, winner);

    //   Increment
    roundCount++;

    if (roundCount === 5) {
      displayFinalWinner();
    }
  }
}

reset.addEventListener("click", function () {
  // Reset Scores and Rounds
  playerScore = 0;
  computerScore = 0;
  roundCount = 0;

  // Reset UI Elements
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  resultDisplay.textContent = "";
  playerImg.src = "";
  computerImg.src = "";

  // Re-enabled Buttons
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
});
