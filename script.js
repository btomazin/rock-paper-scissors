function computerPlay(){
  //generate a random number less than 3
  const result = Math.floor(Math.random()*3);
  //depending on the random num
  //return the computers choice
  if (result === 0)
    return "Rock"; 
  else if (result === 1)
    return "Paper";
  else
    return "Scissors";
}

function userPlay(){
  //ask user for input of their turn
  let input = prompt("Rock Paper Scissors- What will you pick?");
  if (input == null){//if input is not okay
    userPlay(); //ask again
  } else {
    //format the input so it is consistant
    input = input.toLowerCase();
    input = input.charAt(0).toUpperCase() + input.slice(1);
    //return the input
    return input;
  }
}
//method to calulate who won the game
function calcWinner(userScore, compScore, tie) {
  if (userScore > compScore) { //if user score is higher
    console.log ("Congratulations, you won the game!"); //print user won
  } else if (compScore > userScore) { //if computer score is higher
    console.log ("Unfortunately, you lost the game!"); //print loss
  } else {//otherwise its a tie
    console.log("The game is tied!")
  }
  console.log(`(${userScore}:${compScore}:${tie})`); //print the score
}

function playRound(playerSelection, computerSelection) {

  switch (true){  //where both players are equal
    case (playerSelection === computerSelection):
      return `You tied! Both picked ${playerSelection}`; //return a tie
      break;      //where the players selection beats computers
    case (playerSelection === "Rock" && computerSelection === "Scissors"):
    case (playerSelection === "Paper" && computerSelection === "Rock"):
    case (playerSelection === "Scissors" && computerSelection === "Paper"):
      return `You win! ${playerSelection} beats ${computerSelection}`; //return a win
      break;      //where comps selection beats players
    case (playerSelection === "Rock" && computerSelection === "Paper"):
    case (playerSelection === "Paper" && computerSelection === "Scissors"):
    case (playerSelection === "Scissors" && computerSelection === "Rock"):
      return `You lose! ${computerSelection} beats ${playerSelection}`; //return a loss
      break;
    default:  //otherwise, players input is a problem
      alert("Incorrect input. Try again."); //ask again for their input
      return playRound(userPlay(), computerSelection); //and run the round again
  }
}


// make a game method to handle the game
function game() {
  // create variables to store the scores
  let userScore = 0;
  let compScore = 0;
  let tie = 0;
  let winnerDeclarationMsg;
 
  // make a loop to run 5 game rounds
  for (let i = 0; i < 5;i++){
                 // run a round // prompt the user for their turn
    winnerDeclarationMsg = playRound(userPlay(), computerPlay());
    console.log(`Game ${i + 1}: ${winnerDeclarationMsg}`);
    // update score
    updateScore();
  }

  //Calculate winner and print the result
  calcWinner(userScore, compScore, tie);

  //method for updating score in game
  function updateScore(){
    if (winnerDeclarationMsg[4] === 'w') { //if the msg says P wins
      userScore++; //increment player score
    } else if (winnerDeclarationMsg[4] === 'l'){ //if msg says P loses
      compScore++; //increment comp score
    } else{
      tie++; //else its a tie
    }
  } 
}

game();
