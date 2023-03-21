//pseudocode//
// declare variables at the top to keep organized
// ***include notes of what would happen on the screen***
//player hovers over to choices (image-divs of RPS)
//when player clicks on choice:
//       that same choice appears to the right of "You chose:"
//       the random choice chosen by computer appears to the left of "Computer chose:"
//       to the right of "Outcome:" prints template literal
//          if on outcome player beats Comp, then temperate literal  states "Player beats Computer"
//          if outcome is Comp beats Player, then outcome prints "Comp beats computer"
// Number is incremented in scoreboard for entity that won that round
// Screen stays this way until playe clicks on another choice to execute next round
//Player clicks on another choice
//cache all the RPS images into one variable as the possible choices
//when clicked on an option (ex. rock img), that option shows up next to "Player chose:"
//Generate a random computer choice fxn, that randomly choses RPS:
// store RPS choices in array
// can use Math.floor(Math.random()) + 3 (or the length of array)
//Make computer choice show up next to "Computer chose:" after Player chose
//Create fxn that compares the results to determine who wins:
//if player's choice === computer's choice, then it's a tie!, zero points given, return
//if player === "rock" && computer === "paper", then Comp++ pt, then return
//if player === "rock" && computer === "scissors", then Player++ pt, then return
//if player === "paper" && computer === "rock", then Player++ pt, then return
//if player === "paper" && computer === "scissors", then Comp++ pt, then return
//if player === "scissors" && computer === "rock", then Comp++ pt, then return
//if player === "scissors" && computer === "paper", then Player++ pt, then return
//look into switch statements for scenarios^

//if Player's score or Computer's score === 5; then stop game and declare winner
//have result and outcome section disappear and be replaced with who won/lost
//include button below to reset, called "play again"

const playerScore = 0;
const computerScore = 0;
const playerScoreSpan = document.querySelector();
