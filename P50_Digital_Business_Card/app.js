document.addEventListener("DOMContentLoaded", () => {
  // Get references to DOM elements
  const nameInput = document.getElementById("name-input");
  const titleInput = document.getElementById("title-input");
  const emailInput = document.getElementById("email-input");
  const phoneInput = document.getElementById("phone-input");
  const generateCardButton = document.getElementById("generate-card-button");
  const businessCard = document.getElementById("business-card");
  const cardName = document.getElementById("card-name");
  const cardTitle = document.getElementById("card-title");
  const cardEmail = document.getElementById("card-email");
  const cardPhone = document.getElementById("card-phone");
  // Event listener for the "Generate Card" button
  generateCardButton.addEventListener("click", () => {
    // Trim input values to remove any unnecessary spaces
    const name = nameInput.value.trim();
    const title = titleInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    // Validate that all fields are filled
    if (name === "" || title === "" || email === "" || phone === "") {
      alert("Please fill in all fields."); // Alert user if fields are empty;
      return; // Stop execution if fields are not filled
    }
    // Update the business card with the input values
    cardName.textContent = name;
    cardTitle.textContent = title;
    cardEmail.textContent = email;
    cardPhone.textContent = phone;
    // Display the business card
    businessCard.style.display = "block";
  });
});
