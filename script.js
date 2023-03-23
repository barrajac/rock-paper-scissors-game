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

// //5. fxn that stores corresponding img to Player Choice so that it shows up in the results second
// function addPlayerChoiceImg(choice) {
//   if (choice === "rock") {
//     const img = document.createElement("img");
//     img.src = "images/cuterock.png";
//     playerChoiceImg.appendChild(img);
//   } else if (choice === "paper") {
//     const img = document.createElement("img");
//     img.src = "images/cutepaper.png";
//     playerChoiceImg.appendChild(img);
//   } else if (choice === "scissors") {
//     const img = document.createElement("img");
//     img.src = "images/cutescissors.png";
//     playerChoiceImg.appendChild(img);
//   } else {
//     return;
//   }
// }

// //6. fxn that stores corresponding img to Computer Choice so that it shows up in the results second
// function addComputerChoiceImg(choice) {
//   if (choice === "rock") {
//     const img = document.createElement("img");
//     img.src = "images/cuterock.png";
//     computerChoiceImg.appendChild(img);
//   } else if (choice === "paper") {
//     const img = document.createElement("img");
//     img.src = "images/cutepaper.png";
//     computerChoiceImg.appendChild(img);
//   } else if (choice === "scissors") {
//     const img = document.createElement("img");
//     img.src = "images/cutescissors.png";
//     computerChoiceImg.appendChild(img);
//   }
// }
