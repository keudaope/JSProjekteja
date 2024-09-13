// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Select the body and button elements
  const body = document.body;
  const toggleButton = document.getElementById("toggle-button");
  // Add event listener to toggle between light and dark mode
  toggleButton.addEventListener("click", () => {
    // Toggle between dark-mode and light-mode classes
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");
    // Update button text based on the active mode
    if (body.classList.contains("dark-mode")) {
      toggleButton.textContent = "Switch to Light Mode"; // Dark mode
      active;
    } else {
      toggleButton.textContent = "Switch to Dark Mode"; // Light mode
      active;
    }
  });
});
