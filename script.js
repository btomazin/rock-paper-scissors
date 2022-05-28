function computerPlay(){
  const result = Math.floor(Math.random()*3);

  if (result === 0)
    return "Rock"; 
  else if (result === 1)
    return "Paper";
  else
    return "Scissors";
}

//input is formated for first letter Upper and rest lower
function formatInput(userInput) {
  userInput = userInput.toLowerCase();
  userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1);
  return userInput;
}

function userPlay(){
  let input = prompt("Rock Paper Scissors- What will you pick?");

  if (input == null){ //user cancelled
    return false; 
  } else {
    input = formatInput(input);
    return input;
  }
}

function calcWinner(userScore, compScore, tie) {
  const winMsg = document.createElement("div");
  winMsg.setAttribute('id', 'winner');
  winMsg.textContent = "test";
 
  if (userScore > compScore) { 
    winMsg.textContent = "Congratulations, you won the game!"; 
  } else if (compScore > userScore) { 
    winMsg.textContent = "Unfortunately, you lost the game!"; 
  } else {
    winMsg.textContent = "The game is tied!";
  }
  winMsg.textContent += ` (${userScore}:${compScore}:${tie})`;
  document.getElementById("body").appendChild(winMsg);
  document.querySelectorAll("button").forEach(b =>{b.disabled = true;});
  //print the end score
}

function playRound(playerSelection, computerSelection) {

  switch (true){  
    case (playerSelection === computerSelection):
      return 1;   
    case (playerSelection === "Rock" && computerSelection === "Scissors"):
    case (playerSelection === "Paper" && computerSelection === "Rock"):
    case (playerSelection === "Scissors" && computerSelection === "Paper"):
      return 2; 
    case (playerSelection === "Rock" && computerSelection === "Paper"):
    case (playerSelection === "Paper" && computerSelection === "Scissors"):
    case (playerSelection === "Scissors" && computerSelection === "Rock"):
      return 3; 
    default:  
      console.error("An error occured in round selection");
      return false;
  }
}

function declareRoundWinner(result, playerSelect, compSelect) {
  let roundMsg = document.createElement("div");
  const body = document.querySelector("body");


  if (result == 1)
  roundMsg.textContent = `You tied! Both picked ${playerSelect}`; 
  else if (result == 2)
  roundMsg.textContent = `You win! ${playerSelect} beats ${compSelect}`; 
  else if (result == 3)
  roundMsg.textContent = `You lose! ${compSelect} beats ${playerSelect}`;
  

  body.appendChild(roundMsg);

}

function getValidInput() {
  let userInput = userPlay();
  //while user doesnt cancel
  while (userInput !== false) {
    if (userInput === "Rock" || userInput === "Paper" 
        || userInput === "Scissors")
      return userInput;
    else {
      alert("Incorrect input");
      userInput = userPlay();
    }
  }
  return userInput;
}

function game() {
  // create variables to store the scores
  let userScore = 0;
  let compScore = 0;
  let tie = 0;

  const updateScore = result => {
    (result == 1) ? tie++ :
    (result == 2) ? userScore++ :
        compScore++;
  }  
    const btns = document.querySelectorAll("button");
    btns.forEach(btn => {
      btn.addEventListener('click', e =>{
        //console.log(e.target.id);
        let usr = e.target.id;
        let cpu = computerPlay();
        let result = playRound(usr, cpu);
        declareRoundWinner(result, usr, cpu);
        updateScore(result); 
        if (userScore === 5 || compScore ===5){
          calcWinner(userScore, compScore, tie);
          compScore = 0 , userScore = 0, tie = 0;
        }
        
      })
    });
  
  // for (let i = 0; i < 5 && !isGameCancelled(userVal);i++){

  //   userVal = getValidInput();
  //   compVal = computerPlay();

  //   if (!isGameCancelled(userVal)){
  //     result = playRound(userVal, compVal);
     
  //     declareRoundWinner(result, userVal, compVal);
  //     updateScore(result); 
  //     if (result == 1)
  //       i--;
  //   }
  // }



}

game();


