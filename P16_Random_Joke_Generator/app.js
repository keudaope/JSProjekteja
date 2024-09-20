// Odota, että DOM latautuu kokonaan ennen kuin suoritat skriptin
document.addEventListener("DOMContentLoaded", () => {
  // Valitse DOM-elementit
  const jokeElement = document.getElementById("joke"); // Div, johon vitsi näytetään
  const jokeButton = document.getElementById("joke-button"); // Nappi, joka laukaisee vitsin hakemisen
  // Lisää tapahtumankuuntelija napille klikkaustapahtumaa varten
  jokeButton.addEventListener("click", fetchJoke); // Kun nappia klikataan, kutsutaan fetchJoke-funktiota
  // Funktio hakee satunnaisen vitsin API:sta
  function fetchJoke() {
    // Hae satunnainen vitsi julkisesta vitsi-API:sta
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json()) // Muunna vastaus JSON-muotoon
      .then((data) => {
        // Päivitä vitsi-elementti haetulla vitsillä (alku ja lopetus)
        jokeElement.textContent = `${data.setup} - ${data.punchline}`;
        jokeElement.style.color = "#333"; // Palauta tekstin väri normaaliksi onnistuneen haun jälkeen
      })
      .catch((error) => {
        // Jos tapahtuu virhe (esim. verkkovirhe), näytä virheilmoitus
        jokeElement.textContent = "Hups! Jotain meni pieleen.";
        jokeElement.style.color = "#e74c3c"; // Vaihda tekstin väri punaiseksi virhetilassa
        console.error("Virhe vitsin haussa:", error); // Tulosta virhe konsoliin vianetsintää varten
      });
  }
});
