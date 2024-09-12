document.addEventListener('DOMContentLoaded', () => {
    // Select form, input fields, and the timer display elements
    const timerForm = document.getElementById('timer-form');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');
    const timerDisplay = document.getElementById('timer');
    // Variable to hold the reference to the interval (for countdown)
    let countdownInterval;
    // Event listener for form submission to start the countdown
    timerForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page
    // Clear any existing countdown interval to avoid overlaps
    clearInterval(countdownInterval);
    // Get the minutes and seconds entered by the user
    const minutes = parseInt(minutesInput.value) || 0; // Convert minutes input to number
    const seconds = parseInt(secondsInput.value) || 0; // Convert seconds input to number
     let totalSeconds = (minutes * 60) + seconds; // Calculate total time in seconds
     // If no valid time is provided, exit the function
     if (totalSeconds <= 0) return;
     // Start the countdown using setInterval, which runs every 1000ms (1 second)
     countdownInterval = setInterval(() => {
     // Stop the countdown when it reaches zero
     if (totalSeconds <= 0) {
     clearInterval(countdownInterval); // Clear the interval to stop the timer
     timerDisplay.style.color = 'red'; // Change timer color to red when time is up
     return;
     }
     // Decrease the total seconds
     totalSeconds--;
     // Calculate the minutes and seconds to display
     const displayMinutes = Math.floor(totalSeconds /
    60).toString().padStart(2, '0');
     const displaySeconds = (totalSeconds % 60).toString().padStart(2,
    '0');
     // Update the timer display with the formatted time (MM:SS)
     timerDisplay.textContent = `${displayMinutes}:${displaySeconds}`;
     // Dynamically change the color of the timer as the countdown progresses
     if (totalSeconds < 10) {
     timerDisplay.style.color = 'red'; // Red when less than 10 seconds remain
     } else if (totalSeconds < 30) {
     timerDisplay.style.color = 'orange'; // Orange when less than 30 seconds remain
     } else {
     timerDisplay.style.color = '#333'; // Default color for normal time
     }
     }, 1000); // Set interval to update every 1000 milliseconds (1 second)
     });
    });
    