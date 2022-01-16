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

function roundOfRps(playerSelection, computerSelection) {
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
    return "An error occured."
  }
}

for (let i = 0; i < 20;i++){
  console.log(i + ": " +roundOfRps("Scissors", computerPlay()));
}
