function computerPlay(){
  const result = Math.floor(Math.random()*3);

  if (result === 0)
    return "Rock"; 
  else if (result === 1)
    return "Paper";
  else
    return "Scissors";
}

function calcWinner(userScore, compScore, tie) {
  const winMsg = document.createElement("div");
  winMsg.setAttribute('id', 'winner');
 
  if (userScore > compScore) { 
    winMsg.textContent = "Congratulations, you won the game!"; 
  } else if (compScore > userScore) { 
    winMsg.textContent = "Unfortunately, you lost the game!"; 
  } else {
    winMsg.textContent = "The game is tied!";
  }

  document.getElementById("body").appendChild(winMsg);

  winMsg.textContent += " Refresh to play again."

  //disable all buttons since game is over
  document.querySelectorAll("button").forEach(b =>{b.disabled = true;});  
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
  const roundMsg = document.getElementById("results");

  if (result == 1)
  roundMsg.textContent = `You tied! Both picked ${playerSelect}`; 
  else if (result == 2)
  roundMsg.textContent = `You win! ${playerSelect} beats ${compSelect}`; 
  else if (result == 3)
  roundMsg.textContent = `You lose! ${compSelect} beats ${playerSelect}`;
  
}

function game() {
  // create variables to store the scores
  let userScore = 0;
  let compScore = 0;
  let tie = 0;

  const updateScore = result => {
    (result == 1) ? tie++ :
    (result == 2) ? userScore++ :
        compScore++; //updating score variables
        const h2 = document.getElementById('h2');
        //update score on browser
        h2.textContent = `Score(W:L:T):  (${userScore}:${compScore}:${tie})`;
  }  
    const btns = document.querySelectorAll("button");
    btns.forEach(btn => {
      btn.addEventListener('click', e =>{
        let usr = e.target.id; //player selction
        let cpu = computerPlay();//cpu selection
        let result = playRound(usr, cpu); 
        declareRoundWinner(result, usr, cpu);
        updateScore(result); 
        if (userScore === 5 || compScore ===5){
          calcWinner(userScore, compScore, tie);
        }
      })
    });
  

}

game();


