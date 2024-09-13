// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements for interaction
  const lengthInput = document.getElementById("length"); // Number input for password length
  const uppercaseCheckbox = document.getElementById("uppercase"); // Checkbox for including uppercase letters
  const numbersCheckbox = document.getElementById("numbers"); // Checkbox for including numbers
  const symbolsCheckbox = document.getElementById("symbols"); // Checkbox for including symbols
  const generateButton = document.getElementById("generate-button"); // Button to generate password
  const resultDiv = document.getElementById("result"); // Div to display the generated password
  // Add event listener to the button for click event
  generateButton.addEventListener("click", generatePassword);
  // Function to generate the password
  function generatePassword() {
    // Get the length and options for the password
    const length = parseInt(lengthInput.value);
    const includeUppercase = uppercaseCheckbox.checked;
    const includeNumbers = numbersCheckbox.checked;
    const includeSymbols = symbolsCheckbox.checked;
    // Character sets for different types of characters
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    // Initialize the character set with lowercase letters by default
    let charSet = lowerCaseChars;
    if (includeUppercase) charSet += upperCaseChars; // Include uppercase if selected
    if (includeNumbers) charSet += numberChars; // Include numbers if selected
    if (includeSymbols) charSet += symbolChars; // Include symbols if selected
    // Generate the password by randomly selecting characters from the character set
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      password += charSet[randomIndex];
    }
    // Display the generated password in the result div
    resultDiv.innerHTML = "Generated Password: <br />" + password;
  }
});
