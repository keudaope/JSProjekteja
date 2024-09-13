// Wait until the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements
  const questionElement = document.getElementById("question");
  const answersElement = document.getElementById("answers");
  const feedbackElement = document.getElementById("feedback");
  const correctCountElement = document.getElementById("correct-count");
  const incorrectCountElement = document.getElementById("incorrect-count");
  let correctCount = 0; // Initialize the correct answer count
  let incorrectCount = 0; // Initialize the incorrect answer count
  // Function to fetch a new trivia question
  function fetchQuestion() {
    fetch("https://opentdb.com/api.php?amount=1&type=multiple")
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => {
        displayQuestion(data.results[0]); // Pass the question data to the display function
      })
      .catch((error) => {
        console.error("Error fetching question:", error);
        questionElement.textContent =
          "Failed to load question. Please try again.";
      });
  }
  // Function to display the question and answers
  function displayQuestion(questionData) {
    // Decode any HTML entities in the question
    questionElement.textContent = decodeHTML(questionData.question);
    // Correct answer and shuffled answers
    const correctAnswer = decodeHTML(questionData.correct_answer);
    const answers = [
      ...questionData.incorrect_answers.map(decodeHTML),
      correctAnswer,
    ];
    shuffleArray(answers); // Shuffle the answers for randomness

    // Clear existing answers and feedback
    answersElement.innerHTML = "";
    feedbackElement.textContent = "";
    // Create a button for each answer
    answers.forEach((answer) => {
      const button = document.createElement("button");
      button.textContent = answer;
      button.addEventListener("click", () =>
        checkAnswer(answer, correctAnswer)
      );
      button.setAttribute("aria-label", `Answer: ${answer}`);
      answersElement.appendChild(button); // Append the button to the answers container
    });
  }
  // Function to check if the selected answer is correct
  function checkAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
      correctCount++; // Increase correct count if the answer is correct
      feedbackElement.textContent = "Correct! ";
      feedbackElement.classList.add("correct");
      feedbackElement.classList.remove("incorrect");
    } else {
      incorrectCount++; // Increase incorrect count if the answer is wrong
      feedbackElement.textContent = "Incorrect! ";
      feedbackElement.classList.add("incorrect");
      feedbackElement.classList.remove("correct");
    }
    // Update the counts in the DOM
    correctCountElement.textContent = correctCount;
    incorrectCountElement.textContent = incorrectCount;
    // Fetch a new question after a short delay
    setTimeout(fetchQuestion, 1000);
  }
  // Helper function to decode HTML entities in the question and answers
  function decodeHTML(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }
  // Helper function to shuffle the answers array for randomness
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  // Fetch the first trivia question when the page loads
  fetchQuestion();
});
