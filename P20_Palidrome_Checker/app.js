// Wait until the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements
  const inputText = document.getElementById("input-text"); // Input field for user text
  const checkButton = document.getElementById("check-button"); // Button to check for palindrome
  const resultDiv = document.getElementById("result"); // Div to display the result
  // Event listener for the button click
  checkButton.addEventListener("click", () => {
    const text = inputText.value.trim(); // Get input text and remove extra spaces
    // Validate if input is empty
    if (text === "") {
      resultDiv.textContent = " Please enter some text."; // Display an error message if no input
      return; // Exit function if input is empty
    }
    // Check if the input is a palindrome
    const isPalindrome = checkPalindrome(text);

    // Display the result with appropriate message
    if (isPalindrome) {
      resultDiv.innerHTML = ` "${text}" is a palindrome.`;
    } else {
      resultDiv.innerHTML = ` "${text}" is not a palindrome.`;
    }
  });
  /**
   * Function to check if a string is a palindrome
   * @param {string} str - The input string to check
   * @returns {boolean} - True if the input is a palindrome, false otherwise
   */
  function checkPalindrome(str) {
    // Clean the string: remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    // Reverse the cleaned string
    const reversedStr = cleanedStr.split("").reverse().join("");
    // Compare the cleaned string with the reversed version
    return cleanedStr === reversedStr;
  }
});
