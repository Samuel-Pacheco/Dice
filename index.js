// Function to roll a dice and return a random number between 1 and 6
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  // Function to update the dice image for player 1
  function updateDicePlayer1() {
    const dice1Img = document.querySelector('.img1');
    const diceRollResult = rollDice();
    dice1Img.src = `./images/dice${diceRollResult}.png`;
    dice1Img.alt = `Dice ${diceRollResult}`;
    return diceRollResult;
  }
  
  // Function to update the dice image for player 2
  function updateDicePlayer2() {
    const dice2Img = document.querySelector('.img2');
    const diceRollResult = rollDice();
    dice2Img.src = `./images/dice${diceRollResult}.png`;
    dice2Img.alt = `Dice ${diceRollResult}`;
    return diceRollResult;
  }
  
  // Function to determine the winner and display the result
  function determineWinner() {
    const player1Score = updateDicePlayer1();
    const player2Score = updateDicePlayer2();
  
    const heading = document.querySelector('h1');
  
    if (player1Score > player2Score) {
      heading.textContent = '🚩 Player 1 Wins!';
    } else if (player2Score > player1Score) {
      heading.textContent = 'Player 2 Wins! 🚩';
    } else {
      heading.textContent = 'It\'s a Tie!';
    }
  }
  
  // Function to handle the "Refresh" button click event
  function refreshButtonClickHandler() {
    determineWinner();
  }
  
  // Event listener to call refreshButtonClickHandler() when the "Refresh" button is clicked
  const refreshButton = document.getElementById('refreshButton');
  refreshButton.addEventListener('click', refreshButtonClickHandler);
  
  // Initial call to determine the winner when the page is loaded
  determineWinner();
  