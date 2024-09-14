// Execute the script after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Get DOM elements for temperature input, dropdowns, button, and result div
  const temperatureInput = document.getElementById("temperature-input");
  const fromUnit = document.getElementById("from-unit");
  const toUnit = document.getElementById("to-unit");
  const convertButton = document.getElementById("convert-button");
  const resultDiv = document.getElementById("result");
  // Add event listener to the "Convert" button
  convertButton.addEventListener("click", convertTemperature);
  // Function to handle temperature conversion logic
  function convertTemperature() {
    // Get and parse the input values
    const temperature = parseFloat(temperatureInput.value);
    const from = fromUnit.value;
    const to = toUnit.value;
    // Check for invalid input (e.g., non-numeric values)
    if (isNaN(temperature)) {
      resultDiv.textContent = "Please enter a valid temperature.";
      return; // Exit the function if the input is invalid
    }
    let convertedTemperature;
    // Handle conversions between units based on user selections
    if (from === to) {
      // No conversion needed if both units are the same
      convertedTemperature = temperature;
    } else if (from === "Celsius") {
      if (to === "Fahrenheit") {
        convertedTemperature = (temperature * 9) / 5 + 32;
      } else if (to === "Kelvin") {
        convertedTemperature = temperature + 273.15;
      }
    } else if (from === "Fahrenheit") {
      if (to === "Celsius") {
        convertedTemperature = ((temperature - 32) * 5) / 9;
      } else if (to === "Kelvin") {
        convertedTemperature = ((temperature - 32) * 5) / 9 + 273.15;
      }
    } else if (from === "Kelvin") {
      if (to === "Celsius") {
        convertedTemperature = temperature - 273.15;
      } else if (to === "Fahrenheit") {
        convertedTemperature = ((temperature - 273.15) * 9) / 5 + 32;
      }
    }
    // Display the converted temperature with two decimal points
    resultDiv.textContent = `Converted Temperature: ${convertedTemperature.toFixed(
      2
    )} ${to}`;
  }
});
