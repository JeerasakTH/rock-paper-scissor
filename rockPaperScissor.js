const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error!');
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0 :
    return 'rock';
    break;
    case 1 :
    return 'paper';
    break;
    case 2 :
    return 'scissors';
    break;
    default:
    return 'Error';
    break;
  }
}

function determineWinner (userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  } else if (userChoice === 'bomb') {
  return 'Player is cheater.';
}
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer won.';
    } else {
      return 'Player won.';
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer won.';
    } else {
      return 'Player won.';
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer won.';
    } else {
      return 'Player won.';
    }
  }
}

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log(`You thew: ${userChoice}.`);
  console.log(`The compuber threw: ${computerChoice}.`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();