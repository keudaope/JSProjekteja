// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements for interaction
  const quoteElement = document.getElementById("quote"); // Element to display the quote
  const authorElement = document.getElementById("author"); // Element to display the author
  const quoteButton = document.getElementById("quote-button"); // Button to fetch a new quote
  // Add event listener to the button to fetch a quote on click
  quoteButton.addEventListener("click", fetchQuote);
  // Function to fetch a random quote from the API
  async function fetchQuote() {
    const url =
      "https://the-personal-quotes.p.rapidapi.com/quotes/tags/happiness";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "527371f994msh57563f768dd80f6p135d33jsn69c07817117b",
        "x-rapidapi-host": "the-personal-quotes.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json().then((data) => {
        //     // Update the DOM with the new quote and author
        quoteElement.textContent = `"${data[0].quote}"`; // Set quote text;
        authorElement.textContent = `- ${data[0].author}`; // Set author text;
        quoteElement.style.color = "#2c3e50";
      });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  // Fetch an initial quote when the page loads
  fetchQuote();
});
