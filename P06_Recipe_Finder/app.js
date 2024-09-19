document.addEventListener('DOMContentLoaded', () => {
    const recipeForm = document.getElementById('recipe-form'); // Valitsee lomake-elementin
    const ingredientsInput = document.getElementById('ingredients'); // Valitsee ainesosien syötekentän
    const recipesContainer = document.getElementById('recipes'); // Valitsee reseptien näyttöalueen
    // Lomakkeen lähetyksen kuuntelija
    recipeForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Estää lomakkeen oletustoiminnon (sivun uudelleenlatauksen)
        const ingredients = ingredientsInput.value.trim(); // Hakee ja siistii käyttäjän syötteen
        if (ingredients) {
            try {
                const apiKey = 'fadd92035d9f414aa81a22cc7f9ce61c'; // Korvaa omalla Spoonacular API-avaimellasi
                // Ensimmäinen API-kutsu löytää reseptejä ainesosien perusteella
                const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=5&apiKey=${apiKey}`);
                const recipes = await response.json(); // Muuntaa vastauksen JSON-muotoon
                recipesContainer.innerHTML = ''; // Tyhjentää aiemmat tulokset
                // Käydään läpi jokainen resepti ensimmäisestä API-kutsusta
                for (const recipe of recipes) {
                    // Toinen API-kutsu, joka hakee tarkempia tietoja reseptistä
                    const recipeDetails = await fetch(`https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${apiKey}`);
                    const detailsData = await recipeDetails.json(); // Hakee tarkemmat tiedot
                    displayRecipe(detailsData); // Kutsuu funktiota reseptin näyttämiseen
                }
            } catch (error) {
                displayError(); // Näyttää virheilmoituksen, jos API-kutsu epäonnistuu
            }
        }
    });
    
    // Funktio reseptien näyttämiseen DOM:ssa
    function displayRecipe(recipe) {
        const recipeDiv = document.createElement('div'); // Luo uuden divin jokaiselle reseptille
        recipeDiv.className = 'recipe'; // Lisää 'recipe'-luokka tyylittelyä varten
        // Lisää reseptin otsikko, kuva ja kuvaus
        recipeDiv.innerHTML = `
            <h3>${recipe.title}</h3>
            <img src="${recipe.image}" alt="${recipe.title}">
            <p>${recipe.summary}</p> <!-- Näyttää lyhyen kuvauksen reseptistä -->
        `;
        // Liittää reseptikortin reseptien näyttöalueelle
        recipesContainer.appendChild(recipeDiv);
    }

    // Funktio virheilmoituksen näyttämiseen
    function displayError() {
        recipesContainer.innerHTML = '<p>Reseptien hakeminen epäonnistui. Yritä myöhemmin uudelleen.</p>'; // Yksinkertainen virheilmoitus
    }
});
