let playerScore = 0; //had to chng const to let
let computerScore = 0;
const playerScoreSpan = document.querySelector("#player-score");
const computerScoreSpan = document.querySelector("#computer-score");
const scoreBoardDiv = document.querySelector(".score-board");
const playerChoiceImg = document.querySelector(".player-choice-img");
const computerChoiceImg = document.querySelector(".computer-choice-img");
const outcomeMsg = document.querySelector(".outcome > h3");
const rockDiv = document.querySelector("#rock");
const paperDiv = document.querySelector("#paper");
const scissorsDiv = document.querySelector("#scissors");
const choicesArray = ["rock", "paper", "scissors"];

// Generate random RPS choice for Computer
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choicesArray.length); //array has 3 elements
  let randomChoice = choicesArray[randomIndex];
  return randomChoice;
}
// console.log(getComputerChoice());  //checkpoint: random choice on console

// fxn that stores corresponding img to playerchoice
function addPlayerChoiceImg(choice) {
  if (choice === "rock") {
    const img = document.createElement("img");
    img.src = "images/cuterock.png";
    playerChoiceImg.appendChild(img);
  } else if (choice === "paper") {
    const img = document.createElement("img");
    img.src = "images/cutepaper.png";
    playerChoiceImg.appendChild(img);
  } else if (choice === "scissors") {
    const img = document.createElement("img");
    img.src = "images/cutescissors.png";
    playerChoiceImg.appendChild(img);
  }
}

// fxn that stores corresponding img to playerchoice
function addComputerChoiceImg(choice) {
  if (choice === "rock") {
    const img = document.createElement("img");
    img.src = "images/cuterock.png";
    computerChoiceImg.appendChild(img);
  } else if (choice === "paper") {
    const img = document.createElement("img");
    img.src = "images/cutepaper.png";
    computerChoiceImg.appendChild(img);
  } else if (choice === "scissors") {
    const img = document.createElement("img");
    img.src = "images/cutescissors.png";
    computerChoiceImg.appendChild(img);
  }
}

// create game fxn that carries out RPS play
function rpsGame(userChoice) {
  const computerChoice = getComputerChoice();
  addComputerChoiceImg(computerChoice);
  addPlayerChoiceImg(userChoice);
  console.log(`player choice: ${userChoice}`);
  console.log(`computer choice: ${computerChoice}`);
}
//rpsGame("rock");  //chckpoint output playerchoice and computerchoice

// Make rock clickable
rockDiv.addEventListener("click", function () {
  rpsGame("rock");
  //   console.log("hey you clicked on rock");
});

// make paper clickable
paperDiv.addEventListener("click", function () {
  rpsGame("paper");
  //   console.log("hey you clicked on paper");
});

// make scissors clickable
scissorsDiv.addEventListener("click", function () {
  rpsGame("scissors");
  //   console.log("hey you clicked on scissors")
});
