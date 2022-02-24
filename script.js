const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')




const theResult = document.querySelector("#result");

const theres = document.createElement('h3');
theres.classList.add('theres');
theres.textContent = 'result';


theResult.appendChild(theres);


let playerScore = 0
let computerScore = 0


computerPlay = () => {
  let randomNum = Math.floor(Math.random()*3)
  let result = ""

  if (randomNum === 0) {
    result = "rock"
  } else if (randomNum === 1) {
    result =  "paper"
  } else if (randomNum === 2) {
    result = "scissors"
  }
  return result
}



playRound = (playerSelection = "", computerSelection = "") => {

  let result = ""

  if (playerSelection == computerSelection) {
    return "I'ts a tie"
  } 
    else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
        playerScore += 1
        result = "computer won"
    }
    if (computerSelection == "scissors") {
      computerScore += 1
      result = "player won"
    }
  }
    else if (playerSelection == "paper") {
      if (computerSelection == "rock") {
        playerScore += 1
        result = "player won"
      }
      if (computerSelection == "scissors") {
        computerScore += 1
        result = "computer won"
      }
    }
    else if (playerSelection == "scissors") {
      if (computerSelection == "rock") {
        computerScore += 1
        result = "computer won"
      }
      if (computerSelection == "paper") {
        playerScore += 1
        result = "player won"
      }
    }
    return `
    you choose: ${playerSelection} 
    vs 
    the pc choose: ${computerSelection}
    ${result}
    `
}


function clicks() {
  playerSelection = "rock"
  computerSelection = computerPlay()

  let ther =(playRound(playerSelection, computerSelection))
  
  theres.classList.add('ther');
  theres.textContent = ther;
}


rock.addEventListener('click', clicks)

paper.addEventListener('click', clicks)

scissors.addEventListener('click', clicks)

