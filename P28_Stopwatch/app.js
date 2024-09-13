document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements for interaction
  const timerElement = document.getElementById("timer");
  const startButton = document.getElementById("start-button");
  const stopButton = document.getElementById("stop-button");
  const resetButton = document.getElementById("reset-button");
  // Variables to keep track of time and intervals
  let timerInterval = null;
  let startTime = 0;
  let elapsedTime = 0;
  // Function to update the timer display
  function updateTimer() {
    // Calculate the elapsed time
    const time = Date.now() - startTime + elapsedTime;
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    // Update the timer display, padding numbers with leading zeros
    timerElement.textContent = `${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }
  // Function to start the timer
  function startTimer() {
    // Prevent starting the timer multiple times
    if (timerInterval) return;
    // Record the start time and begin the interval
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
  }
  // Function to stop the timer
  function stopTimer() {
    // Only stop if the timer is running
    if (!timerInterval) return;
    // Add the elapsed time and clear the interval
    elapsedTime += Date.now() - startTime;
    clearInterval(timerInterval);
    timerInterval = null;
  }
  // Function to reset the timer
  function resetTimer() {
    // Clear the interval, reset elapsed time and display
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    timerElement.textContent = "00:00:00";
  }
  // Add event listeners to buttons
  startButton.addEventListener("click", startTimer);
  stopButton.addEventListener("click", stopTimer);
  resetButton.addEventListener("click", resetTimer);
});
