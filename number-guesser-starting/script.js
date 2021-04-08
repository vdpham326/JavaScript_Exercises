let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (user, computer, number) => {
  let userDiff = Math.abs(user - number);
  let compDiff = Math.abs(computer - number);
  
  if (userDiff === compDiff) {
    return true; //human wins
  } else if (userDiff < compDiff) {
    return true; //human wins
  } else {
    return false; //computer wins
  }
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else {
    computerScore++;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};

