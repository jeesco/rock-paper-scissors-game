
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
    return "tie"
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
    return `${result}
    player: ${playerSelection} vs computer: ${computerSelection}
    `
}


function game() {
  for (let i = 1; i < 6; i++) {
      let playerSelection = prompt("Please choose Rock, Paper or Scissors: ")
      let computerSelection = computerPlay()
      console.log(`Round ${i}`)
      playRound(playerSelection, computerSelection)
      console.log(`You: ${playerScore} - Me: ${computerScore}`)
  }

  if (playerScore > computerScore) {
          console.log("Congratulations, you won the match!")
      } else {
          console.log("You lost the match, better luck next time!")
      }
  }

game();

