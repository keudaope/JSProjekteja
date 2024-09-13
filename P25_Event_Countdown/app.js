// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", () => {
  // Selecting DOM elements
  const eventNameInput = document.getElementById("event-name"); // Event name input
  const eventDateInput = document.getElementById("event-date"); // Event date input
  const startButton = document.getElementById("start-button"); // Start button
  const countdownDiv = document.getElementById("countdown"); // Countdown display
  let countdownInterval; // Variable to store the interval
  // Add event listener to the start button
  startButton.addEventListener("click", startCountdown);
  // Function to start the countdown
  function startCountdown() {
    // Retrieve the event name and event date
    const eventName = eventNameInput.value.trim();
    const eventDate = new Date(eventDateInput.value);
    // Validate inputs
    if (!eventName || isNaN(eventDate)) {
      countdownDiv.textContent = "Please enter a valid event name and date."; // Error message
      countdownDiv.style.color = "#e74c3c"; // Red color for error
      return;
    }
    // Clear any previous interval
    if (countdownInterval) {
      clearInterval(countdownInterval);
    }
    // Start the countdown timer
    countdownInterval = setInterval(() => {
      const now = new Date(); // Get current date and time
      const timeDifference = eventDate - now; // Calculate time difference
      // Check if the event has already occurred
      if (timeDifference <= 0) {
        clearInterval(countdownInterval); // Stop the countdown
        countdownDiv.textContent = `${eventName} has already occurred.`;
        // Display message
        countdownDiv.style.color = "#2c3e50"; // Reset text color
        return;
      }
      // Calculate remaining time in days, hours, minutes, and seconds
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      // Update the countdown display
      countdownDiv.textContent = `Time until ${eventName}: ${days}d ${hours}h ${minutes}m ${seconds}s`;
      countdownDiv.style.color = "#2c3e50"; // Reset text color
    }, 1000);
  }
});
