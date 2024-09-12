// Wait for the DOM to fully load before running the script to ensure elements can be manipulated
document.addEventListener('DOMContentLoaded', () => {
 // Quiz questions stored in an array of objects
 const questions = [
 {
 question: "What is the capital of France?",
 options: ["Berlin", "Madrid", "Paris", "Lisbon"],
 answer: "Paris"
 },
 {
 question: "Who wrote 'To Kill a Mockingbird'?",
 options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
 answer: "Harper Lee"
 },
 {
 question: "What is the largest planet in our solar system?",
 options: ["Earth", "Jupiter", "Saturn", "Mars"],
 answer: "Jupiter"
 }
 ];
 // Variables to keep track of the current question and the score
 let currentQuestionIndex = 0; // Tracks the current question
 let score = 0; // Tracks the user's score
 // Select DOM elements for manipulation
 const questionElement = document.getElementById('question');
 const optionsElement = document.getElementById('options');
 const nextButton = document.getElementById('next-button');
 const resultElement = document.getElementById('result');
 const resetButton = document.getElementById('reset-button'); // Select the reset button
 // Function to load and display the current question and its options
 function loadQuestion() {
 // Retrieve the current question from the questions array
 const currentQuestion = questions[currentQuestionIndex];
 // Set the question text in the DOM
 questionElement.textContent = currentQuestion.question;
 // Clear previous options to display new ones
 optionsElement.innerHTML = '';
 // Loop through each option and create list items dynamically
 currentQuestion.options.forEach(option => {
 const li = document.createElement('li');
 li.textContent = option;
 li.addEventListener('click', () => selectOption(li,
currentQuestion.answer)); // Attach event listener for option selection
 optionsElement.appendChild(li); // Add the option to the DOM
 });
 // Hide the "Next" button until an option is selected
 nextButton.classList.add('hidden');
 resetButton.classList.add('hidden'); // Hide reset button initially
 }
 // Function to handle what happens when a user selects an option
 function selectOption(selectedOption, correctAnswer) {
 // Disable further selections by preventing more clicks
 const options = optionsElement.querySelectorAll('li');
 options.forEach(option => {
 option.style.pointerEvents = 'none'; // Prevents further interaction
 // Highlight the correct answer in green
 if (option.textContent === correctAnswer) {
 option.classList.add('correct');
 } else {
 // Highlight incorrect answers in red
 option.classList.add('incorrect');
 }
 });
 // Check if the selected option is correct and update the score
 if (selectedOption.textContent === correctAnswer) {
    score++; // Increase score for correct answers
}
// Reveal the "Next" button to proceed to the next question
nextButton.classList.remove('hidden');
}
// Event listener for the "Next" button to load the next question or show the result
nextButton.addEventListener('click', () => {
currentQuestionIndex++; // Move to the next question
// If there are more questions, load the next one; otherwise, show the final score
if (currentQuestionIndex < questions.length) {
loadQuestion();
} else {
showResult();
}
});
// Function to display the user's final score once the quiz is complete
function showResult() {
// Display the user's final score
resultElement.textContent = `You scored ${score} out of ${questions.length}!`;
resultElement.classList.remove('hidden'); // Make the result visible
nextButton.classList.add('hidden'); // Hide the next button to indicate the end
resetButton.classList.remove('hidden'); // Show the reset button
}
// Event listener for the reset button to restart the quiz
resetButton.addEventListener('click', () => {
currentQuestionIndex = 0; // Reset the question index
score = 0; // Reset the score
resultElement.classList.add('hidden'); // Hide the result
loadQuestion(); // Reload the first question
});
// Initial call to load the first question when the page is loaded
loadQuestion();
});