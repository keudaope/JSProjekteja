// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the form, input fields, and result display
    const tipForm = document.getElementById('tip-form');
    const billAmountInput = document.getElementById('bill-amount');
    const tipPercentageSelect = document.getElementById('tip-percentage');
    const resultDiv = document.getElementById('result');
    /**
    * Event listener for the form submission
    * This function prevents the default form submission behavior and
   calculates the tip
    */
    tipForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission from refreshing the page
    // Retrieve the bill amount and tip percentage from the input fields
    const billAmount = parseFloat(billAmountInput.value); // Convert bill amount to a floating-point number
    const tipPercentage = parseFloat(tipPercentageSelect.value); // Convert tip percentage to a floating-point number
    // Validate the input: Ensure that both bill amount and tip percentage are valid numbers
 if (isNaN(billAmount) || isNaN(tipPercentage)) {
 resultDiv.textContent = 'Please enter a valid bill amount and select a tip percentage.'; // Error message
 return; // Exit the function if the input is invalid
 }
 // Calculate the tip amount and round it to two decimal places
 const tipAmount = (billAmount * (tipPercentage / 100)).toFixed(2);
 // Display the result in the result div
 resultDiv.textContent = `Tip Amount: $${tipAmount}`;
 });
});
