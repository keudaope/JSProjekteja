document.addEventListener('DOMContentLoaded', () => {
    const recipeForm = document.getElementById('recipe-form'); // Select the form element
    const ingredientsInput = document.getElementById('ingredients'); // Select the input field for ingredients
    const recipesContainer = document.getElementById('recipes'); // Select the container to display recipes
    // Event listener for form submission
    recipeForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission behavior (prevents page reload)
    const ingredients = ingredientsInput.value.trim(); // Get and trim user input
    if (ingredients) {
    try {
    const apiKey = 'fadd92035d9f414aa81a22cc7f9ce61c'; // Replace with your actual Spoonacular API key
    // First API call to find recipes based on ingredients
    const response = await
    fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=5&apiKey=${apiKey}`);
         const recipes = await response.json(); // Convert the response to JSON
         recipesContainer.innerHTML = ''; // Clear previous results
         // Loop through each recipe from the first API call
         for (const recipe of recipes) {
         // Second API call to get detailed information about the recipe
         const recipeDetails = await
        fetch(`https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${apiKey}`);
         const detailsData = await recipeDetails.json(); // Get detailed information
         displayRecipe(detailsData); // Call function to display each recipe
         }
         } catch (error) {
         displayError(); // Display an error message if the API call fails
         }
         }
         });
         // Function to display each recipe in the DOM
         function displayRecipe(recipe) {
         const recipeDiv = document.createElement('div'); // Create a new div for each recipe
         recipeDiv.className = 'recipe'; // Add 'recipe' class for styling
         // Insert the title, image, and summary (description) of the recipe
         recipeDiv.innerHTML = `
         <h3>${recipe.title}</h3>
         <img src="${recipe.image}" alt="${recipe.title}">
         <p>${recipe.summary}</p> <!-- Display the short description of the
        recipe -->
         `;
         // Append the recipe card to the recipes container
         recipesContainer.appendChild(recipeDiv);
         }
         // Function to display an error message
         function displayError() {
         recipesContainer.innerHTML = '<p>Could not fetch recipes. Please try again later.</p>'; // Simple error message
         }
        });