// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements for interaction
  const birthdateInput = document.getElementById("birthdate"); // Date input for birthdate
  const calculateButton = document.getElementById("calculate-button"); //Button to trigger calculation
  const resultDiv = document.getElementById("result"); // Div to display the calculated age
  // Add event listener to the button for click event
  calculateButton.addEventListener("click", calculateAge);
  // Function to calculate age based on the selected birthdate
  function calculateAge() {
    const birthdate = new Date(birthdateInput.value); // Get the birthdate from the input
    if (isNaN(birthdate)) {
      // Check if the input is a valid date
      resultDiv.textContent = "Please enter a valid birthdate."; // Display error message
      resultDiv.style.color = "#e74c3c"; // Change text color to red for error
      return;
    }
    const today = new Date(); // Get the current date
    let age = today.getFullYear() - birthdate.getFullYear(); // Calculate the age based on year difference
    const monthDifference = today.getMonth() - birthdate.getMonth(); // Calculate month difference
    const dayDifference = today.getDate() - birthdate.getDate(); // Calculate day difference
    // Adjust age if the birthdate hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      age--;
    }
    // Display the calculated age in the result div
    resultDiv.textContent = `Your age is ${age} years.`; // Display the age
    resultDiv.style.color = "#2d3748"; // Reset the text color to normal
  }
});
