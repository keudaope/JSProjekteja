// Wait for the DOM to fully load before executing the script to ensure all elements are available
document.addEventListener('DOMContentLoaded', () => {
 // Select key elements from the DOM that will be used in the script
 const converterForm = document.getElementById('converter-form'); // The form used for submitting the currency conversion
 const amountInput = document.getElementById('amount'); // The input field for the amount to convert
 const fromCurrencySelect = document.getElementById('from-currency'); //Dropdown for selecting the base currency
 const toCurrencySelect = document.getElementById('to-currency'); // Dropdown for selecting the target currency
 const resultDiv = document.getElementById('result'); // The div where the conversion result will be displayed
 // Define the API URL to fetch exchange rate data, using USD as the default base currency
 const apiURL = 'https://api.exchangerate-api.com/v4/latest/USD';
 /**
 * Fetch currency data from the API when the page loads
 * This fetch request gets the latest exchange rates using USD as the base.
 * The data includes the rates for converting from USD to other currencies,
which will be used to populate the dropdowns.
 */
 fetch(apiURL)
 .then(response => response.json()) // Parse the JSON response from the API
 .then(data => {
 // Extract the list of currencies from the API response
 const currencies = Object.keys(data.rates); // `data.rates` contains exchange rates for each currency

 // Dynamically populate both the "From" and "To" currency dropdowns
 currencies.forEach(currency => {
 // Create a new option element for the "From" currency dropdown
 const optionFrom = document.createElement('option');
 optionFrom.value = currency; // Set the option's value to the currency code (e.g., USD, EUR)
 optionFrom.textContent = currency; // Display the currency code as the option text
 fromCurrencySelect.appendChild(optionFrom); // Add the option to the "From" currency dropdown
 // Create a new option element for the "To" currency dropdown
 const optionTo = document.createElement('option');
 optionTo.value = currency; // Set the option's value to the currency code
 optionTo.textContent = currency; // Display the currency code as the option text
 toCurrencySelect.appendChild(optionTo); // Add the option to the "To" currency dropdown
 });
 })
 .catch(error => {
 // Handle any errors that occur during the fetch request (e.g., network issues, API failure)
 console.error('Error fetching currency data:', error); // Log the error to the console for debugging
 resultDiv.textContent = 'Failed to load currency data.'; // Inform the user that the currency data could not be loaded
 });
 /**
 * Handle the form submission to perform the currency conversion.
 * When the user submits the form, this event listener prevents the default
form behavior (page reload)
 * and instead triggers the currency conversion using the selected inputs.
 */
 converterForm.addEventListener('submit', (event) => {
 event.preventDefault(); // Prevent the form from submitting in the traditional way (which would reload the page)
 // Retrieve the amount entered by the user and convert it to a float (decimal number)
 const amount = parseFloat(amountInput.value);
 // Get the selected base currency (the currency to convert from)
 const fromCurrency = fromCurrencySelect.value;
 // Get the selected target currency (the currency to convert to)
 const toCurrency = toCurrencySelect.value;
 // Validate user input: Ensure that the amount is a valid number and that both currencies have been selected
 if (isNaN(amount) || !fromCurrency || !toCurrency) {
 resultDiv.textContent = 'Please enter a valid amount and select currencies.'; // Display an error message to the user
 return; // Stop further execution if the input is invalid
 }
 /**
 * Fetch the exchange rates for the selected "from" currency.
 * The API URL is dynamically built using the selected "from" currency.
 * For example, if the user selects "EUR", the API will fetch conversion
rates with EUR as the base currency.
 */
fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
.then(response => response.json()) // Parse the JSON response from the API
.then(data => {
// Get the conversion rate for the selected "to" currency from the API data
const conversionRate = data.rates[toCurrency]; // `data.rates` contains the exchange rates for all currencies
// Calculate the converted amount by multiplying the user input (amount) by the conversion rate
const convertedAmount = (amount * conversionRate).toFixed(2); // Round to 2 decimal places for currency formatting
// Update the result div with the formatted conversion result
resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
})
.catch(error => {
// Handle any errors that occur during the fetch request (e.g., network issues, API failure)
console.error('Error fetching conversion data:', error); // Log the error to the console for debugging
resultDiv.textContent = 'Failed to convert currency.'; // Display an error message to the user
});
});
});