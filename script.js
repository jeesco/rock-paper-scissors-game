// const rock = document.getElementById('rock')
// const paper = document.getElementById('paper')
// const scissors = document.getElementById('scissors')

// const theResult = document.querySelector("#result");



// const theres = document.createElement('h3');
// theres.classList.add('theres');
// theres.textContent = 'result';


// theResult.appendChild(theres);


// let playerScore = 0
// let computerScore = 0


// computerPlay = () => {
//   let randomNum = Math.floor(Math.random()*3)
//   let result = ""

//   if (randomNum === 0) {
//     result = "rock"
//   } else if (randomNum === 1) {
//     result =  "paper"
//   } else if (randomNum === 2) {
//     result = "scissors"
//   }
//   return result
// }



// playRound = (playerSelection = "", computerSelection = "") => {

//   let result = ""

//   if (playerSelection == computerSelection) {
//     return "I'ts a tie"
//   } 
//     else if (playerSelection == "rock") {
//     if (computerSelection == "paper") {
//         playerScore += 1
//         result = "computer won"
//     }
//     if (computerSelection == "scissors") {
//       computerScore += 1
//       result = "player won"
//     }
//   }
//     else if (playerSelection == "paper") {
//       if (computerSelection == "rock") {
//         playerScore += 1
//         result = "player won"
//       }
//       if (computerSelection == "scissors") {
//         computerScore += 1
//         result = "computer won"
//       }
//     }
//     else if (playerSelection == "scissors") {
//       if (computerSelection == "rock") {
//         computerScore += 1
//         result = "computer won"
//       }
//       if (computerSelection == "paper") {
//         playerScore += 1
//         result = "player won"
//       }
//     }
//     return `
//     you choose: ${playerSelection} 
//     vs 
//     the pc choose: ${computerSelection}
//     ${result}
//     `
// }


// function clicks() {
//   playerSelection = ""
//   computerSelection = computerPlay()

//   let ther =(playRound(playerSelection, computerSelection))
  
//   theres.classList.add('ther');
//   theres.textContent = ther;
// }


// rock.addEventListener('click', clicks)

// paper.addEventListener('click', clicks)

// scissors.addEventListener('click', clicks)



// ----------------*******************---------------




const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')

const resultOnScreen = document.getElementById("result");

function computerPlay() {
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
   

rock.addEventListener("click", () => {
  playerSelection = "rock"
  
  computerSelection = computerPlay()

  if (playerSelection == computerSelection) {
    result = "It's a tie"
  }
  else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      result = "You Lose"
    }
    if (computerSelection == "scissors") {
      result = "You Win"
    }
  }

  resultOnScreen.textContent = `your choose: ${playerSelection}
  vs 
  the computer choose: ${computerSelection} ${result}`

})



paper.addEventListener("click", () => {
  playerSelection = "paper"
  
  computerSelection = computerPlay()

  if (playerSelection == computerSelection) {
    result = "It's a tie"
  }
  else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      result = "You Win"
    }
    if (computerSelection == "scissors") {
      result = "You Lose"
    }
  }

  resultOnScreen.textContent = `your choose: ${playerSelection}
  vs 
  the computer choose: ${computerSelection} ${result}`
})



scissors.addEventListener("click", () => {
  playerSelection = "scissors"
  
  computerSelection = computerPlay()

  if (playerSelection == computerSelection) {
    result = "It's a tie"
  }
  else if (playerSelection == "scissors") {
    if (computerSelection == "paper") {
      result = "You Win"
    }
    if (computerSelection == "rock") {
      result = "You Lose"
    }
  }

  return resultOnScreen.textContent = `your choose: ${playerSelection}
  vs
  the computer choose: ${computerSelection} ${result}`
})
