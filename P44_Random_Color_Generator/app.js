// Wait until the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Get references to the DOM elements for later manipulation
  const colorDisplay = document.getElementById("color-display");
  const generateColorButton = document.getElementById("generate-color-button");
  const hexCodeSpan = document.getElementById("hex-code");
  const rgbCodeSpan = document.getElementById("rgb-code");
  // Event listener for the "Generate Color" button
  generateColorButton.addEventListener("click", generateRandomColor);
  // Function to generate a random color and update the display
  function generateRandomColor() {
    const randomColor = getRandomColor(); // Generate a random RGB color
    const hexColor = rgbToHex(randomColor); // Convert the RGB to HEX format
    // Update the background color of the display box
    colorDisplay.style.backgroundColor = hexColor;
    // Display the color codes (HEX and RGB)
    hexCodeSpan.textContent = `HEX: ${hexColor}`;
    rgbCodeSpan.textContent = `RGB: ${randomColor}`;
  }
  // Function to generate a random RGB color
  function getRandomColor() {
    const r = Math.floor(Math.random() * 256); // Random value for Red (0-255)
    const g = Math.floor(Math.random() * 256); // Random value for Green (0-255)
    const b = Math.floor(Math.random() * 256); // Random value for Blue (0-255)
    return `rgb(${r}, ${g}, ${b})`; // Return the color in RGB format
  }
  // Function to convert an RGB color to HEX format
  function rgbToHex(rgb) {
    const rgbArray = rgb.match(/\d+/g); // Extract the numeric values from the RGB string
    // Convert each value to hexadecimal and pad with zero if necessary
    const hex = rgbArray
      .map((val) => {
        const hexVal = parseInt(val).toString(16); // Convert decimal to hexadecimal
        return hexVal.length === 1 ? "0" + hexVal : hexVal; // Ensure 2-digit HEX values
      })
      .join("");
    return `#${hex}`; // Return the HEX color with a "#" prefix
  }
});
