// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Array of card values (2 of each to create pairs)
    const cardsArray = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F',
   'F', 'G', 'G', 'H', 'H'];
    // Shuffle the card values to randomize the board
    let shuffledCards = shuffleArray(cardsArray);
    // Track the first and second card being flipped
    let firstCard = null;
    let secondCard = null;
    let lockBoard = false; // Prevent multiple flips while cards are being
   checked
    // Select the game board element from the DOM
    const gameBoard = document.getElementById('game-board');
    /**
    * Function to create the game board by generating the card elements
   dynamically
    */
    function createBoard() {
    shuffledCards.forEach((cardValue) => {
    const card = document.createElement('div'); // Create a new div for each card
    card.classList.add('card'); // Add the "card" class for styling
    card.dataset.value = cardValue; // Store the card's value as a data attribute
    card.addEventListener('click', flipCard); // Attach the click event listener to flip the card
    gameBoard.appendChild(card); // Append the card to the game board
    });
    }
    /**
    * Function to handle the card flip
    * This checks if it's the first or second card being flipped
    */
    function flipCard() {
    if (lockBoard || this === firstCard) return; // Prevent flipping if board is locked or the same card is clicked twice
    this.classList.add('flipped'); // Add the flipped class to show the card
    this.textContent = this.dataset.value; // Display the card's value
    // Check if this is the first card being flipped
    if (!firstCard) {
        firstCard = this; // Set the first card
        return;
        }
        // This is the second card being flipped
        secondCard = this;
        checkForMatch(); // Check if the two cards match
        }
        /**
        * Function to check if two cards match
        */
        function checkForMatch() {
        if (firstCard.dataset.value === secondCard.dataset.value) {
        disableCards(); // Disable the cards if they match
        } else {
        unflipCards(); // Unflip the cards if they don't match
        }
        }
        /**
        * Function to disable the matched cards
        */
        function disableCards() {
        firstCard.classList.add('matched'); // Mark the first card as matched
        secondCard.classList.add('matched'); // Mark the second card as matched
        resetBoard(); // Reset the board for the next round
        }
        /**
        * Function to unflip the cards if they don't match
        * A small delay is added to allow the user to see the cards before they are
       flipped back
        */
        function unflipCards() {
        lockBoard = true; // Lock the board to prevent more flips
        setTimeout(() => {
        firstCard.classList.remove('flipped'); // Remove flipped class from first card
        secondCard.classList.remove('flipped'); // Remove flipped class from second card
        firstCard.textContent = ''; // Hide the value of the first card
        secondCard.textContent = ''; // Hide the value of the second card
        resetBoard(); // Reset the board for the next round
        }, 1000); // 1 second delay before flipping back
        }
        /**
        * Function to reset the board state after each round
        * This clears the first and second card and unlocks the board
        */
        function resetBoard() {
            [firstCard, secondCard, lockBoard] = [null, null, false]; // Reset the game state
             }
             /**
             * Function to shuffle the cards using the Fisher-Yates algorithm
             */
             function shuffleArray(array) {
             let currentIndex = array.length, randomIndex;
             // Shuffle the array in place
             while (currentIndex !== 0) {
             randomIndex = Math.floor(Math.random() * currentIndex);
             currentIndex--;
             [array[currentIndex], array[randomIndex]] = [array[randomIndex],
            array[currentIndex]];
             }
             return array; // Return the shuffled array
             }
             // Create the game board when the page is loaded
             createBoard();
            });
                   