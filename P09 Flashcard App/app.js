// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the form, input fields, flashcard display, and buttons
    const flashcardForm = document.getElementById('flashcard-form');
    const questionInput = document.getElementById('question');
    const answerInput = document.getElementById('answer');
    const flashcard = document.getElementById('flashcard');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    // Initialize an array to hold flashcards, loading from localStorage if available
    let flashcards = JSON.parse(localStorage.getItem('flashcards')) || [];
    let currentIndex = 0; // Keeps track of the current flashcard index
    let showAnswer = false; // Controls whether the answer is shown or not
    // Event listener for adding a new flashcard
    flashcardForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission from refreshing the page
    // Get trimmed values from input fields
    const question = questionInput.value.trim();
    const answer = answerInput.value.trim();
    // Only proceed if both question and answer are provided
    if (question && answer) {
    // Add the new flashcard to the array and update localStorage
    flashcards.push({ question, answer });
    localStorage.setItem('flashcards', JSON.stringify(flashcards));
    // Clear input fields after submission
    questionInput.value = '';
    answerInput.value = '';
    // Display the new flashcard
    currentIndex = flashcards.length - 1; // Set index to the latest flashcard
    displayFlashcard();
    }
    });
    // Event listener for toggling between question and answer
    flashcard.addEventListener('click', () => {
    showAnswer = !showAnswer; // Toggle between showing question and answer
    displayFlashcard();
    });
    // Event listener for navigating to the previous flashcard
    prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
    currentIndex--; // Move to the previous flashcard
    showAnswer = false; // Reset to showing the question
    displayFlashcard();
    }
    });
    // Event listener for navigating to the next flashcard
    nextButton.addEventListener('click', () => {
        if (currentIndex < flashcards.length - 1) {
            currentIndex++; // Move to the next flashcard
            showAnswer = false; // Reset to showing the question
            displayFlashcard();
            }
            });
            // Function to display the current flashcard
            function displayFlashcard() {
            if (flashcards.length > 0) {
            const currentFlashcard = flashcards[currentIndex];
            // Show the question or answer based on the toggle
            flashcard.textContent = showAnswer ? currentFlashcard.answer :
           currentFlashcard.question;
            } else {
            flashcard.textContent = 'No flashcards available. Add a new flashcard.'; // Default message if no flashcards exist
            }
            }
            // Display the first flashcard on page load
            displayFlashcard();
           });   