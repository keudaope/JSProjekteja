// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements
  const jokeElement = document.getElementById("joke"); // Div where the joke will be displayed
  const jokeButton = document.getElementById("joke-button"); // Button that triggers the joke fetching
  // Add event listener to the button for click event
  jokeButton.addEventListener("click", fetchJoke); // When the button is clicked, call fetchJoke function
  // Function to fetch a random joke from the API
  function fetchJoke() {
    // Fetch a random joke from the public joke API
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json()) // Parse the response into JSON format
      .then((data) => {
        // Update the joke element with the fetched joke (setup and punchline)
        jokeElement.textContent = `${data.setup} - ${data.punchline}`;
        jokeElement.style.color = "#333"; // Reset text color to default after successfully fetching a joke
      })
      .catch((error) => {
        // If an error occurs (e.g., network issue), display an error message
        jokeElement.textContent = "Oops! Something went wrong.";
        jokeElement.style.color = "#e74c3c"; // Change text color to red for error state
        console.error("Error fetching joke:", error); // Log the error to the console for debugging
      });
  }
});
