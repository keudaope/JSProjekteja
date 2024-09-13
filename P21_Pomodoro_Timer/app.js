// Wait until the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements for interaction
  const timerElement = document.getElementById("timer"); // Timer display element
  const startButton = document.getElementById("start-button"); // Start button
  const pauseButton = document.getElementById("pause-button"); // Pause button
  const stopButton = document.getElementById("stop-button"); // Stop button
  let timer; // Variable to store the interval ID
  let isRunning = false; // Boolean to track if the timer is running
  let timeLeft = 25 * 60; // Set default time for the Pomodoro (25 minutes in seconds)
  // Function to update the timer display in MM:SS format
  function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60)
      .toString()
      .padStart(2, "0");
    // Convert minutes
    const seconds = (timeLeft % 60).toString().padStart(2, "0"); // Convert seconds
    timerElement.textContent = `${minutes}:${seconds}`; // Display the time
  }
  // Function to start the timer
  function startTimer() {
    if (isRunning) return; // Prevent multiple timers from running
    isRunning = true; // Set the timer to running
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--; // Decrease the time by 1 second
        updateTimerDisplay(); // Update the display with new time
      } else {
        clearInterval(timer); // Stop the timer when time is up
        isRunning = false; // Reset running state
        timeLeft = 5 * 60; // Set break time (5 minutes)
        alert("Time for a break!"); // Notify the user
        startTimer(); // Automatically start the break timer
      }
    }, 1000); // Run the timer every second
  }
  // Function to pause the timer
  function pauseTimer() {
    if (!isRunning) return; // Do nothing if the timer isn't running
    clearInterval(timer); // Stop the interval timer
    isRunning = false; // Set running state to false
  }
  // Function to stop the timer and reset to 25 minutes
  function stopTimer() {
    clearInterval(timer); // Stop the interval timer
    isRunning = false; // Set running state to false
    timeLeft = 25 * 60; // Reset time to 25 minutes
    updateTimerDisplay(); // Update the display with default time
  }
  // Add event listeners to the buttons for interaction
  startButton.addEventListener("click", startTimer); // Start button click event;
  pauseButton.addEventListener("click", pauseTimer); // Pause button click event;
  stopButton.addEventListener("click", stopTimer); // Stop button click event
  // Initial display update when the page loads
  updateTimerDisplay();
});
