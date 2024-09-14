document.addEventListener("DOMContentLoaded", () => {
  // Grabbing the form and all the input fields
  const form = document.getElementById("form");
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");
  // Grabbing the divs where error messages will be displayed
  const usernameError = document.getElementById("username-error");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  const confirmPasswordError = document.getElementById(
    "confirm-password error"
  );
  // Adding an event listener to the form's submit event
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the form from submitting the traditional way
    validateInputs(); // Trigger the validation function
  });
  // Function to validate all input fields
  function validateInputs() {
    let isValid = true; // Initialize form validity as true
    // Validate username: it should not be empty
    if (username.value.trim() === "") {
      usernameError.textContent = "Username is required"; // Display error message
      isValid = false; // Mark form as invalid
    } else {
      usernameError.textContent = ""; // Clear any previous error messages
    }
    // Validate email: must match a regular expression for valid email formats
    if (!validateEmail(email.value.trim())) {
      emailError.textContent = "Invalid email"; // Display error message if email is invalid
      isValid = false; // Mark form as invalid
    } else {
      emailError.textContent = ""; // Clear any previous error messages
    }
    // Validate password: it must be at least 6 characters long
    if (password.value.trim().length < 6) {
      passwordError.textContent = "Password must be at least 6 characters"; // Show password error
      isValid = false; // Mark form as invalid
    } else {
      passwordError.textContent = ""; // Clear password error message if valid
    }
    // Validate confirm password: it must match the password field
    if (confirmPassword.value.trim() !== password.value.trim()) {
      confirmPasswordError.textContent = "Passwords do not match"; // Show mismatch error
      isValid = false; // Mark form as invalid
    } else {
      confirmPasswordError.textContent = ""; // Clear mismatch error if valid
    }
    // If all fields are valid, show a success message
    if (isValid) {
      alert("Form submitted successfully!"); // Display success message if the form is valid
    }
  }
  // Helper function to validate email format using a regular expression
  function validateEmail(email) {
    // Regular expression to check if the email is in a valid format
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email); // Returns true if the email is valid, otherwise false
  }
});
