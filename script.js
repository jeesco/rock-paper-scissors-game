

computerPlay = () => {
  let randomNum = Math.floor(Math.random()*3)

  switch(randomNum){
    case 0:
      return "rock"
      break
    case 1:
      return "paper"
      break
    case 2:
      return "scissors"
      break
  }
}




playRound = () => {
  let playerChoose = prompt("choose")
  let playerSelection = playerChoose.toLowerCase()
  let computerSelection = computerPlay()

  if (playerSelection === computerSelection) {
    return `player: ${playerSelection} vs computer: ${computerSelection}
    it's a tie!
    `
  } else if (playerSelection === "rock") {
      if (computerSelection === "paper") {
        return `player: ${playerSelection} vs computer: ${computerSelection}
        you lose
        `
    } 
      if (computerSelection === "scissors") {
        return `player: ${playerSelection} vs computer: ${computerSelection}
        you won!
        `
    }
    
  } 
    else if (playerSelection === "paper") {
      if (computerSelection === "rock") {
        return `player: ${playerSelection} vs computer: ${computerSelection}
        you won!
      `
    } 
      if (computerSelection === "scissors") {
        return `player: ${playerSelection} vs computer: ${computerSelection}
        you lose
      `
    }
  }
    else if (playerSelection === "scissors") {
      if (computerSelection === "rock") {
        return `player: ${playerSelection} vs computer: ${computerSelection}
        you lose
      `
    } 
      if (computerSelection === "paper") {
        return `player: ${playerSelection} vs computer: ${computerSelection}
        you won!
      `
    }
}
}

console.log(playRound())