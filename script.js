function computerPlay(){
  let result = Math.floor(Math.random()*3);

  switch (result) {
    case 0 :
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    case 2:
      return "Scissors";
      break;
  }
}

function userPlay(){
  //as user for input of their turn
  let input = prompt("Rock Paper Scissors- What will you pick?");
  if (input == null){
    userPlay();
  } else {
    //format the input so it is consistant
    input = input.toLowerCase();
    input = input.charAt(0).toUpperCase() + input.slice(1);

    return input;
  }

}

function calcWinner(score) {
  if (score > 0) {
    console.log ("Congratulations, you won the game!");
  }else if (score < 0) {
    console.log ("Unfortunately, you lost the game!");
  }
  else {
    console.log("The game is tied!")
  }
}

function playRound(playerSelection, computerSelection) {

  if (playerSelection === computerSelection){
    return `You tied! Both picked ${playerSelection}`;
  } else if(playerSelection === "Rock" && computerSelection === "Scissors"){
    return `You win! Rock beats Scissors`;
  } else if(playerSelection === "Rock" && computerSelection === "Paper"){
    return `You lose! Paper beats Rock`;
  } else if(playerSelection === "Paper" && computerSelection === "Scissors"){
    return `You lose! Scissors beats Paper`;
  } else if(playerSelection === "Paper" && computerSelection === "Rock"){
    return `You win! Paper beats Rock`;
  } else if(playerSelection === "Scissors" && computerSelection === "Rock"){
    return `You lose! Rock beats Scissors`;
  } else if(playerSelection === "Scissors" && computerSelection === "Paper"){
    return `You win! Scissors beats Paper`;
  } else {
    alert("Incorrect input. Try again.");
    return playRound(userPlay(), computerSelection);
    //redo player selection
  }
}


// make a game method to handle the game
function game() {
  
  // create variables to store the scores
  let score = 0;
  let userInput;
  let winnerDeclarationMsg;

 
  // make a loop to run 5 game rounds
  //WHILE there is less than 5 games played

  for (let i = 0; i < 5;i++){
    // prompt the user for their turn
    userInput = userPlay();
    // run a round and display the results
    winnerDeclarationMsg = playRound(userInput, computerPlay());
    console.log(i + ": " + winnerDeclarationMsg);
    // update score
      if (winnerDeclarationMsg[4] === 'w') {
        score++;
      } else if (winnerDeclarationMsg[4] === 'l'){
        score--;
      }
  }
  //Calculate winner and print the result
  calcWinner(score);
  
}

game();