// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements for interaction
  const quoteElement = document.getElementById("quote"); // Element to display the quote
  const authorElement = document.getElementById("author"); // Element to display the author
  const quoteButton = document.getElementById("quote-button"); // Button to fetch a new quote
  // Add event listener to the button to fetch a quote on click
  quoteButton.addEventListener("click", fetchQuote);
  // Function to fetch a random quote from the API
  function fetchQuote() {
    // Use the Quotable API to fetch a random quote
    fetch("https://api.quotable.io/random")
      .then((response) => response.json()) // Parse the JSON data from the response
      .then((data) => {
        // Update the DOM with the new quote and author
        quoteElement.textContent = `"${data.content}"`; // Set quote text;
        authorElement.textContent = `- ${data.author}`; // Set author text;
        // Apply a smooth color change for the quote text
        quoteElement.style.color = "#2c3e50";
      })
      .catch((error) => {
        // Handle any errors in fetching the quote
        console.error("Error fetching quote:", error);
        quoteElement.textContent =
          "Oops! Something went wrong. Please try again.";
        authorElement.textContent = ""; // Clear the author if there's an error
        // Change color to indicate an error
        quoteElement.style.color = "#e74c3c";
      });
  }
  // Fetch an initial quote when the page loads
  fetchQuote();
});
