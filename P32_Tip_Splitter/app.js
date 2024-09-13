// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements
  const billAmountInput = document.getElementById("bill-amount");
  const tipPercentageInput = document.getElementById("tip-percentage");
  const numberOfPeopleInput = document.getElementById("number-of-people");
  const calculateButton = document.getElementById("calculate-button");
  const resultDiv = document.getElementById("result");
  // Add event listener to the calculate button
  calculateButton.addEventListener("click", calculateSplit);
  // Function to calculate the tip and total amount per person
  function calculateSplit() {
    // Parse input values
    const billAmount = parseFloat(billAmountInput.value);
    const tipPercentage = parseFloat(tipPercentageInput.value);
    const numberOfPeople = parseInt(numberOfPeopleInput.value);
    // Validate input values
    if (
      isNaN(billAmount) ||
      isNaN(tipPercentage) ||
      isNaN(numberOfPeople) ||
      numberOfPeople <= 0
    ) {
      resultDiv.textContent = "Please enter valid values.";
      resultDiv.style.color = "#e74c3c"; // Display error in red
      return;
    }
    // Calculate tip and total amount
    const tipAmount = billAmount * (tipPercentage / 100);
    const totalAmount = billAmount + tipAmount;
    const amountPerPerson = totalAmount / numberOfPeople;
    // Display the result in the result div
    resultDiv.textContent = `Each person pays: $${amountPerPerson.toFixed(2)}`;
    resultDiv.style.color = "#2d3748"; // Reset text color to normal
  }
});
