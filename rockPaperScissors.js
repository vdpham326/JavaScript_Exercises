const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "scissors" || userInput === "paper" || userInput === "bomb") {
    return userInput;
  }
  return console.log("Error input value");
};

const getComputerChoice = () => {
  const number = Math.floor(Math.random() * 3);
  switch (number) {
    case 0:
      return 'rock';
    case 1: 
      return 'paper';
    case 2: 
      return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === "bomb") {
    return "You won!";
  }
  if (userChoice === computerChoice) {
    return "The game is a tie!";
  } 
   if (userChoice === "rock") {
     if (computerChoice === "paper") {
       return "The computer has won!";
     } else {
       return "You won!";
     }
   }
   if (userChoice === "paper") {
     if (computerChoice === "scissors") {
       return "The computer has won!";
     } else {
       return "You won!";
     }
   }

   if (userChoice === "scissors") {
     if (computerChoice === "rock") {
       return "The computer has won!";
     } else {
       return "You won!";
     }
   }

}

//console.log(determineWinner("rock", "scissors"));
const playGame = () => {
  const userChoice = getUserChoice("bomb");
  const computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("The computer three: " + computerChoice);

  console.log("Winner: " + determineWinner(userChoice, computerChoice));
}

playGame();

