// Wait until the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select the clock element from the DOM
    const clockElement = document.getElementById('clock');
    /**
    * Function to update the time on the digital clock.
    * This function retrieves the current time, formats it, and displays it in
   HH:MM:SS format.
    */
    function updateClock() {
    // Get the current time
    const now = new Date();
    // Extract hours, minutes, and seconds, and pad them with leading zeros if necessary
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    // Update the text content of the clock element to display the current    time
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
    /**
    * Set an interval to update the clock every second.
    * This ensures that the clock remains accurate and displays real-time
   changes.
    */
    setInterval(updateClock, 1000); // Update the clock every 1000 milliseconds (1 second)
   
    // Call the updateClock function immediately to display the time on page load 
    updateClock();
});