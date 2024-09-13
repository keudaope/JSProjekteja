// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements for profile display and button
  const profilePicture = document.getElementById("profile-picture"); // Profile picture element
  const nameElement = document.getElementById("name"); // Element for displaying name
  const emailElement = document.getElementById("email"); // Element for displaying email
  const locationElement = document.getElementById("location"); // Element for displaying location
  const generateButton = document.getElementById("generate-button"); // Button to trigger user generation
  // Add click event listener to the "Generate User" button
  generateButton.addEventListener("click", generateUser);
  // Function to fetch and display a random user
  function generateUser() {
    // Fetch random user data from the API
    fetch("https://randomuser.me/api/")
      .then((response) => response.json()) // Parse the JSON response
      .then((data) => {
        const user = data.results[0]; // Get the first user from the response
        // Update the profile picture, name, email, and location with the fetched data
        profilePicture.src = user.picture.large; // Set profile picture
        nameElement.textContent = `${user.name.first} ${user.name.last}
`; // Set full name
        emailElement.textContent = user.email; // Set email
        locationElement.textContent = `${user.location.city}, ${user.location.country}`; // Set location
      })
      .catch((error) => {
        console.error("Error fetching user data:", error); // Log any errors
      });
  }
  // Automatically generate an initial user when the page loads
  generateUser();
});
