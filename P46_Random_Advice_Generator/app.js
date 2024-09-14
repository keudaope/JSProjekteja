document.addEventListener("DOMContentLoaded", () => {
  const adviceDiv = document.getElementById("advice"); // Reference to the div where advice will be displayed
  const generateAdviceButton = document.getElementById(
    "generate-advice-button"
  ); // Reference to the button
  // Add an event listener to the button to fetch new advice when clicked
  generateAdviceButton.addEventListener("click", fetchRandomAdvice);
  /**
   * Function to fetch random advice from the API.
   * Uses the 'adviceslip' API to retrieve random pieces of advice.
   */
  async function fetchRandomAdvice() {
    try {
      // Fetch data from API with a timestamp to avoid caching
      const response = await fetch(
        `https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`
      );
      const data = await response.json(); // Parse the response as JSON
      adviceDiv.textContent = data.slip.advice; // Display the fetched advice
    } catch (error) {
      // If an error occurs during the fetch, show an error message
      adviceDiv.textContent = "Could not fetch advice. Please try again later.";
    }
  }
});
