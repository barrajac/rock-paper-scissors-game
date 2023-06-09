//1. cached my elements into variables
const startBtn = document.querySelector(".start-btn");
const startContainer = document.querySelector(".start-container");
let playerScore = 0; //had to chng const to let
let computerScore = 0;
const playerScoreSpan = document.querySelector("#player-score");
const computerScoreSpan = document.querySelector("#computer-score");
const scoreBoardDiv = document.querySelector(".score-board");
const outcome = document.querySelector(".outcome > h6");
const rockDiv = document.querySelector("#rock");
const paperDiv = document.querySelector("#paper");
const scissorsDiv = document.querySelector("#scissors");
const choseText_One = document.querySelector(".chose-text-one");
const choseText_Two = document.querySelector(".chose-text-two");
const playAgainBtn = document.querySelector(".play-again-btn");
const gameOverWindow = document.querySelector(".game-over-window");
const gameSummary = document.querySelector(".game-summary");
const playerChose_Div = document.querySelector(".choice-img-one");
const computerChose_Div = document.querySelector(".choice-img-two");
const gameOverImg_Div = document.querySelector(".game-over-img");

const choicesArray = ["rock", "paper", "scissors"];

//13. start window appears by default, this fxn makes its display disappear
function playGame() {
  startContainer.style.display = "none";
}

//14. Capitalizes the first letter of a string
function capFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//3. created a fxn that Generates a random RPS choice for Computer using similar approach as Battleship project
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choicesArray.length); //array has 3 elements
  let randomChoice = choicesArray[randomIndex];
  //   addComputerChoiceImg(randomChoice);
  return randomChoice;
}
// console.log(getComputerChoice());  //checkpoint: random choice on console

//5. what happens when we win, lose, or draw per round, user score should increment
function playerWin(playerChoice, computerChoice) {
  playerScore++; //increment winner score
  playerScoreSpan.innerHTML = playerScore; //update scoreboard
  computerScoreSpan.innerHTML = computerScore; //update scoreboard
  displayPlayerChoice(playerChoice); //display player selected choice
  displayComputerChoice(computerChoice); //display random computer selection
  playerChoice = capFirstLetter(playerChoice); //cap first letter of RPS for player
  computerChoice = capFirstLetter(computerChoice); //cap first letter of RPS for computer
  outcome.innerHTML = `${playerChoice} beats ${computerChoice}. Point for you!`;
  if (playerScore === 5) {
    endGame();
  }
  //   console.log("Player won");
  //   console.log(playerScore);
}

//6.
function computerWin(playerChoice, computerChoice) {
  computerScore++; //increment winner score
  computerScoreSpan.innerHTML = computerScore; //update scoreboard
  playerScoreSpan.innerHTML = playerScore; //update scoreboard
  displayPlayerChoice(playerChoice); //display player selected choice
  displayComputerChoice(computerChoice); //display random computer selection
  playerChoice = capFirstLetter(playerChoice); //cap first letter of RPS for player
  computerChoice = capFirstLetter(computerChoice); //cap first letter of RPS for computer
  outcome.innerHTML = `${computerChoice} beats ${playerChoice}. Point for computer!`;
  if (computerScore === 5) {
    endGame();
  }
}

//7.
function draw(playerChoice, computerChoice) {
  // no points for a draw/tie, no need to update scoreboard
  displayPlayerChoice(playerChoice); //display player selected choice
  displayComputerChoice(computerChoice); //display random computer selection
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

//11.
function displayPlayerChoice(playerChoice) {
  playerChose_Div.innerHTML = "";

  const choseText_One = document.querySelector(".chose-text-one");
  choseText_One.style.color = "#303030";

  const playerChoice_Img = document.createElement("img"); // we are going remove & update each time
  if (playerChoice === "rock") {
    playerChoice_Img.src = "images/cuterock.png";
  } else if (playerChoice === "paper") {
    playerChoice_Img.src = "images/cutepaper.png";
  } else if (playerChoice === "scissors") {
    playerChoice_Img.src = "images/cutescissors.png";
  }
  playerChose_Div.appendChild(playerChoice_Img);
  return;
}

//10.
function displayComputerChoice(computerChoice) {
  computerChose_Div.innerHTML = "";

  const choseText_Two = document.querySelector(".chose-text-two");
  choseText_Two.style.color = "#303030";

  const computerChoice_Img = document.createElement("img");
  if (computerChoice === "rock") {
    computerChoice_Img.src = "images/cuterock.png";
  } else if (computerChoice === "paper") {
    computerChoice_Img.src = "images/cutepaper.png";
  } else if (computerChoice === "scissors") {
    computerChoice_Img.src = "images/cutescissors.png";
  }
  computerChose_Div.appendChild(computerChoice_Img);
  return;
}

//8.
function endGame() {
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      gameSummary.innerHTML = "Yay! You won!";
      displayGameOverImg();
    } else {
      gameSummary.innerHTML = "Sorry, you lost the game!";
      displayGameOverImg();
    }
    gameOverWindow.style.display = "block";
    return;
  }
}

//9.
function restartGame() {
  gameOverWindow.style.display = "none"; //set gameOverWindow display:none to reset it to not visible
  playerScore = 0;
  computerScore = 0;
  computerScoreSpan.innerHTML = computerScore; //update scoreboard
  playerScoreSpan.innerHTML = playerScore; //update scoreboard
  return;
}

//12.
function displayGameOverImg() {
  gameOverImg_Div.innerHTML = "";
  const gameOver_Img = document.createElement("img");
  if (computerScore === 5) {
    gameOver_Img.src = "images/sadtp.png";
  } else if (playerScore === 5) {
    gameOver_Img.src = "images/win.png";
  }
  gameOverImg_Div.appendChild(gameOver_Img);
  return;
}

//2. Create event listeners for selecting RPS choice with CLICK, fxns args are defined above rps game above
// a. Make rock clickable
rockDiv.addEventListener("click", function () {
  rpsGame("rock");
  //   addPlayerChoiceImg("rock");
  //   console.log("hey you clicked on rock");
});

// b. make paper clickable
paperDiv.addEventListener("click", function () {
  rpsGame("paper");
  //   addPlayerChoiceImg("paper");
  //   console.log("hey you clicked on paper");
});

// c. make scissors clickable
scissorsDiv.addEventListener("click", function () {
  rpsGame("scissors");
  //   addPlayerChoiceImg("scissors");
  //   console.log("hey you clicked on scissors")
});

// d. create START GAME PLAY button that on click, start window disappears, allows to proceed with game
startBtn.addEventListener("click", function () {
  playGame();
});

// e. create PLAY AGAIN button so that on click the gameover window disappears, scores are reset, to play again
playAgainBtn.addEventListener("click", function () {
  restartGame();
  location.reload();
  //   console.log("You are pressing Play AGAIN button");
});
