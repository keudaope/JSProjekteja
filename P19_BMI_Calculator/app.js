// Wait until the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements for easy access
  const form = document.getElementById("bmi-form"); // The form for submitting height and weight
  const heightInput = document.getElementById("height"); // Input field for height
  const weightInput = document.getElementById("weight"); // Input field for weight
  const resultDiv = document.getElementById("result"); // Div to display the result
  // Event listener for form submission
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from submitting and refreshing the page
    // Get the input values and convert them into usable numbers
    const height = parseFloat(heightInput.value) / 100; // Convert height from cm to meters
    const weight = parseFloat(weightInput.value); // Weight is already in kilograms
    // Validate the inputs to ensure they're positive numbers
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      // Display an error message if the inputs are invalid
      resultDiv.textContent = " Please enter valid height and weight values.";
      return; // Stop further execution if validation fails
    }
    // Calculate the BMI (weight divided by the square of the height)
    const bmi = (weight / (height * height)).toFixed(2); // Fixed to 2 decimal places for better readability
    resultDiv.innerHTML = `Your BMI is ${bmi}. `; // Display the BMI result
    // Provide feedback based on the BMI value
    if (bmi < 18.5) {
      resultDiv.innerHTML += "You are underweight. "; // Underweight category with emoji
    } else if (bmi < 24.9) {
      resultDiv.innerHTML += "You have a normal weight. "; // Normal weight category with emoji
    } else if (bmi < 29.9) {
      resultDiv.innerHTML += "You are overweight. "; // Overweight category with emoji
    } else {
      resultDiv.innerHTML += "You are obese. "; // Obese category with emoji
    }
  });
});
