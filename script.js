//1. cached my elements into variables
let playerScore = 0; //had to chng const to let
let computerScore = 0;
const playerScoreSpan = document.querySelector("#player-score");
const computerScoreSpan = document.querySelector("#computer-score");
const scoreBoardDiv = document.querySelector(".score-board");
// const playerChoiceImg = document.querySelector(".player-choice-img");
// const computerChoiceImg = document.querySelector(".computer-choice-img");
const outcome = document.querySelector(".outcome > h6");
const rockDiv = document.querySelector("#rock");
const paperDiv = document.querySelector("#paper");
const scissorsDiv = document.querySelector("#scissors");
const playAgainBtn = document.querySelector("#play-again-btn");
const gameOverWindow = document.querySelector(".game-over-window");
const choicesArray = ["rock", "paper", "scissors"];

function capFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//3. Generate random RPS choice for Computer
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choicesArray.length); //array has 3 elements
  let randomChoice = choicesArray[randomIndex];
  //   addComputerChoiceImg(randomChoice);
  return randomChoice;
}
// console.log(getComputerChoice());  //checkpoint: random choice on console

//7. what happens when we win, lose, or draw per round, user score should increment
function playerWin(playerChoice, computerChoice) {
  playerScore++; //increment winner score
  playerScoreSpan.innerHTML = playerScore; //update scoreboard
  computerScoreSpan.innerHTML = computerScore; //update scoreboard
  playerChoice = capFirstLetter(playerChoice); //cap first letter of RPS for player
  computerChoice = capFirstLetter(computerChoice); //cap first letter of RPS for computer
  outcome.innerHTML = `${playerChoice} beats ${computerChoice}. Point for you!`;
  //   console.log("Player won");
  //   console.log(playerScore);
}

function computerWin(playerChoice, computerChoice) {
  computerScore++; //increment winner score
  computerScoreSpan.innerHTML = computerScore; //update scoreboard
  playerScoreSpan.innerHTML = playerScore; //update scoreboard
  playerChoice = capFirstLetter(playerChoice); //cap first letter of RPS for player
  computerChoice = capFirstLetter(computerChoice); //cap first letter of RPS for computer
  outcome.innerHTML = `${computerChoice} beats ${playerChoice}. Point for computer!`;
}

function draw(playerChoice, computerChoice) {
  // no points for a draw/tie, no need to update scoreboard
  playerChoice = capFirstLetter(playerChoice); //cap first letter of RPS for player
  computerChoice = capFirstLetter(computerChoice); //cap first letter of RPS for computer
  outcome.innerHTML = `${playerChoice} equals ${computerChoice}. Draw! No points.`;
}

//4. create the game fxn that carries out RPS play   //reminder to add break; after each case action!
function rpsGame(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      playerWin(userChoice, computerChoice);
      break;
      //   console.log("PLAYER WINS!");
      break;
    case "scissorsrock":
    case "rockpaper":
    case "paperscissors":
      computerWin(userChoice, computerChoice);
      break;
    // console.log("PLAYER LOSES!")
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice, computerChoice);
      break;
    // console.log("DRAW!")
  }

  //   console.log(`player choice: ${userChoice}`);
  //   console.log(`computer choice: ${computerChoice}`);
}

//rpsGame("rock");  //chckpoint output playerchoice and computerchoice

// function endGame() {
// if (playerScore === 5 || computerScore === 5) {
//display Game Over screen by changing display from none to block to move it fwd
//store gameover div in variable
//add innerHTML to include a <p> with temperate literal MSG where:
//      if player score > computer score, then msg states You win!
// but if player score < computer score, then msg states You lost!
// and if player score === computer score, then msg It's a tie!
//reset playerScore to zero
//reset computerScore to zero
// }
// }
function endGame() {
  gameOverWindow.style.display = "block"; //is this where i'm messing up?
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      resultDiv.innerHTML = "Congratulations, you won the game!";
    } else {
      resultDiv.innerHTML = "Sorry, you lost the game!";
    }
  } else if (playerScore === 5 && computerScore === 5) {
    resultDiv.innerHTML = "It was a draw!";
  }
  playerScore = 0;
  computerScore = 0;
  return;
}
endGame();

function restartGame() {
  gameOverWindow.style.display = "none";
  return;
}

// function replay() globally //create eventListener that will set game over screen display back to none with "play again" button "click"

//event Listener for intro screen
// function startGame() globally //create eventListener that will set Start screen display back to none with "Play" button "click"

//2. Make event listeners for selecting RPS choice with CLICK, decided to define fxn rps game above
// Make rock clickable
rockDiv.addEventListener("click", function () {
  rpsGame("rock");
  //   addPlayerChoiceImg("rock");
  //   console.log("hey you clicked on rock");
});

// make paper clickable
paperDiv.addEventListener("click", function () {
  rpsGame("paper");
  //   addPlayerChoiceImg("paper");
  //   console.log("hey you clicked on paper");
});

// make scissors clickable
scissorsDiv.addEventListener("click", function () {
  rpsGame("scissors");
  //   addPlayerChoiceImg("scissors");
  //   console.log("hey you clicked on scissors")
});

// make replay button so that on click the gameover window disappears, scores are reset, to play again
playAgainBtn.addEventListener("click", function () {
  restartGame();
});
