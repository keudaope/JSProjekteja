// Wait until the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Select all choice buttons and the result display div
  const choices = document.querySelectorAll(".choice");
  const resultDiv = document.getElementById("result");

  // Array of possible choices
  const choicesArray = ["rock", "paper", "scissors"];
  // Add click event listeners to each choice button
  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("data-choice"); // Get the user's choice
      const computerChoice = getComputerChoice(); // Get the computer's random choice
      const result = determineWinner(userChoice, computerChoice); // Determine the winner
      displayResult(userChoice, computerChoice, result); // Display the result on the screen
    });
  });
  /**
   * Function to get a random choice for the computer.
   * Returns 'rock', 'paper', or 'scissors'.
   */
  function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choicesArray.length);
    return choicesArray[randomIndex];
  }
  /**
   * Function to determine the winner based on user and computer choices.
   * @param {string} userChoice - The user's choice (rock, paper, or scissors).
   * @param {string} computerChoice - The computer's choice (rock, paper, or scissors).
   * @returns {string} - The result of the game ('You win!', 'You lose!', or 'It\'s a tie!').
   */
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      return "You win!";
    } else {
      return "You lose!";
    }
  }
  /**
   * Function to display the result of the game in the resultDiv.
   * @param {string} userChoice - The user's choice.
   * @param {string} computerChoice - The computer's choice.
   * @param {string} result - The result of the game.
   */
  function displayResult(userChoice, computerChoice, result) {
    resultDiv.innerHTML = `
 You chose: ${userChoice}<br>
 Computer chose: ${computerChoice}<br>
 ${result}
 `;
  }
});
