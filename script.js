//pseudocode//
// declare variables at the top to keep organized

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


//if Player's score or Computer's score === 5; then stop game and declare winner
//have result and outcome section disappear and be replaced with who won/lost
//include button below to reset, called "play again"