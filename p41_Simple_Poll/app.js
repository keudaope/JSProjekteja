document.addEventListener("DOMContentLoaded", () => {
  // Variables to reference various elements on the page
  const pollQuestionInput = document.getElementById("poll-question"); // Input for the poll question
  const pollOptionsDiv = document.getElementById("poll-options"); // Div where poll options are displayed
  const addOptionButton = document.getElementById("add-option"); // Button to add more poll options
  const createPollButton = document.getElementById("create-poll-button"); // Button to create poll
  const pollDisplayDiv = document.getElementById("poll-display"); // Div to display the poll after creation
  const pollQuestionDisplay = document.getElementById("poll-question-display"); // Poll question display element
  const pollOptionsDisplay = document.getElementById("poll-options-display");
  // Div to display poll options for voting
  const voteButton = document.getElementById("vote-button"); // Button to submit the vote
  const pollResultsDiv = document.getElementById("poll-results"); // Div to display poll results
  const pollResultsDisplay = document.getElementById("poll-results-display");
  // Element to display the results
  // Event listener to add more poll options
  addOptionButton.addEventListener("click", () => {
    const optionDiv = document.createElement("div"); // Create a new div for the option
    optionDiv.classList.add("poll-option"); // Add class for styling
    optionDiv.innerHTML = `
 <input type="text" class="option-input" placeholder="Option $
{pollOptionsDiv.children.length + 1}">
 <button class="remove-option">X</button>
 `;
    pollOptionsDiv.appendChild(optionDiv); // Append the new option to the options div
    addRemoveOptionListeners(); // Attach event listener for removing options
  });
  // Event listener to create the poll
  createPollButton.addEventListener("click", () => {
    const question = pollQuestionInput.value.trim(); // Get the poll question
    const options = Array.from(document.getElementsByClassName("option-input"))
      .map((input) => input.value.trim())
      .filter((value) => value); // Get poll options
    // Ensure question and at least two options are provided
    if (question && options.length >= 2) {
      pollQuestionDisplay.textContent = question; // Display the poll question
      pollOptionsDisplay.innerHTML = ""; // Clear any existing options
      // Display poll options as radio buttons
      options.forEach((option, index) => {
        const optionDiv = document.createElement("div");
        optionDiv.classList.add("poll-option");
        optionDiv.innerHTML = `
 <input type="radio" name="poll-option" value="${index}">
 <label>${option}</label>
 `;
        pollOptionsDisplay.appendChild(optionDiv); // Add each option to the display
      });
      // Hide the poll creation form and show the poll
      document.getElementById("poll-section").style.display = "none";
      pollDisplayDiv.style.display = "block";
    } else {
      alert("Please enter a question and at least two options."); // Validation message
    }
  });
  // Event listener to submit vote and show results
  voteButton.addEventListener("click", () => {
    const selectedOption = document.querySelector(
      'input[name="poll-option"]:checked'
    ); // Get the selected option
    if (selectedOption) {
      const optionIndex = parseInt(selectedOption.value); // Get index of selected option
      pollResultsDisplay.innerHTML = ""; // Clear previous results
      // Display results for each option
      const options = Array.from(
        document.querySelectorAll("#poll-options-display .poll-option")
      );
      options.forEach((option, index) => {
        const resultDiv = document.createElement("div");
        resultDiv.classList.add("result");
        const votes = optionIndex === index ? 1 : 0; // Simple vote counting for this example
        resultDiv.textContent = `${
          option.querySelector("label").textContent
        }: ${votes} votes`;
        pollResultsDisplay.appendChild(resultDiv);
      });
      // Hide poll and display results
      pollDisplayDiv.style.display = "none";
      pollResultsDiv.style.display = "block";
    } else {
      alert("Please select an option to vote."); // Alert if no option is selected;
    }
  });
  // Function to add event listeners for removing poll options
  function addRemoveOptionListeners() {
    const removeButtons = document.getElementsByClassName("remove-option");
    // Get all remove buttons
    Array.from(removeButtons).forEach((button) => {
      button.addEventListener("click", (event) => {
        event.target.parentElement.remove(); // Remove the poll option
      });
    });
  }
  // Attach remove listeners to existing options on load
  addRemoveOptionListeners();
});
