let playerSelection = prompt("rock paper or scissors")

let computerPlay = function() {

  let randomNum = Math.floor(Math.random() * 3)

  switch (randomNum) {
    case 0: 
      return "rock"
      brake;
    case 1: 
      return "paper"
      brake;
    case 2:
      return "scissors"
      brake
  }
}


let computerResult = computerPlay()
let playerResult = playerSelection.toLowerCase()

console.log(`computer result: ${computerResult}`)
console.log(`player result: ${playerResult}`)

let startGame = function() {
  if (playerResult === "rock" && computerResult === "rock") {
    return console.log("tie on rock")

  } else if (playerResult === "rock" && computerResult === "paper") {
    return console.log("paper over rock, pc win")

  } else if (playerResult === "rock" && computerResult === "scissors") {
    return console.log("rock over scissors, player win")

  } else if (playerResult === "paper" && computerResult === "rock") {
    return console.log("paper over rock, player win")

  } else if (playerResult === "paper" && computerResult === "paper") {
    return console.log("tie on paper")

  } else if (playerResult === "paper" && computerResult === "scissors") {
    return console.log("paper over scissors, pc win")

  } else if (playerResult === "scissors" && computerResult === "rock") {
    return console.log("rock over scissors, pc win")

  } else if (playerResult === "scissors" && computerResult === "paper") {
    return console.log("sscissors over paper, player win")

  } else if (playerResult === "scissors" && computerResult === "scissors") {
    return console.log("tie on scissors")
  }
}

startGame()