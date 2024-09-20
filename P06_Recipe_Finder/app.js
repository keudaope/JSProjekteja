document.addEventListener("DOMContentLoaded", () => {
  const recipeForm = document.getElementById("recipe-form"); // Valitaan lomake-elementti
  const ingredientsInput = document.getElementById("ingredients"); // Valitaan syötekenttä ainesosille
  const recipesContainer = document.getElementById("recipes"); // Valitaan säilö reseptien näyttämiseksi

  // Tapahtumankuuntelija lomakkeen lähettämiselle
  recipeForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // Estetään lomakkeen oletustoiminto (estää sivun uudelleenlatauksen)
    const ingredients = ingredientsInput.value.trim(); // Haetaan ja siistitään käyttäjän syöte

    if (ingredients) {
      try {
        const apiKey = "fadd92035d9f414aa81a22cc7f9ce61c"; // Korvaa tämä oikealla Spoonacularin API-avaimellasi

        // Ensimmäinen API-kutsu, jolla haetaan reseptejä ainesosien perusteella
        const response = await fetch(
          `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=5&apiKey=${apiKey}`
        );
        const recipes = await response.json(); // Muutetaan vastaus JSON-muotoon
        recipesContainer.innerHTML = ""; // Tyhjennetään aiemmat tulokset

        // Silmukka, joka käy läpi jokaisen reseptin ensimmäisestä API-kutsusta
        for (const recipe of recipes) {
          // Toinen API-kutsu, jolla haetaan tarkempia tietoja reseptistä
          const recipeDetails = await fetch(
            `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${apiKey}`
          );
          const detailsData = await recipeDetails.json(); // Haetaan tarkemmat tiedot
          displayRecipe(detailsData); // Kutsutaan funktiota, joka näyttää reseptin
        }
      } catch (error) {
        displayError(); // Näytetään virheilmoitus, jos API-kutsu epäonnistuu
      }
    }
  });

  // Funktio reseptien näyttämiseksi DOM:issa
  function displayRecipe(recipe) {
    const recipeDiv = document.createElement("div"); // Luodaan uusi div-elementti jokaiselle reseptille
    recipeDiv.className = "recipe"; // Lisätään 'recipe'-luokka tyylitystä varten

    // Lisätään reseptin otsikko, kuva ja yhteenveto (kuvaus)
    recipeDiv.innerHTML = `
            <h3>${recipe.title}</h3>
            <img src="${recipe.image}" alt="${recipe.title}">
            <p>${recipe.summary}</p> <!-- Näytetään reseptin lyhyt kuvaus -->
        `;

    // Liitetään reseptikortti reseptisäilöön
    recipesContainer.appendChild(recipeDiv);
  }

  // Funktio virheilmoituksen näyttämiseksi
  function displayError() {
    recipesContainer.innerHTML =
      "<p>Reseptejä ei voitu hakea. Yritä myöhemmin uudelleen.</p>"; // Yksinkertainen virheilmoitus
  }
});
