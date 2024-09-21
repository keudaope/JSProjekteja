// Odota, että DOM latautuu kokonaan ennen kuin suoritat skriptin
document.addEventListener("DOMContentLoaded", () => {
  // Valitse DOM-elementit profiilin näyttämistä ja painiketta varten
  const profilePicture = document.getElementById("profile-picture"); // Profiilikuvan elementti
  const nameElement = document.getElementById("name"); // Elementti nimen näyttämistä varten
  const emailElement = document.getElementById("email"); // Elementti sähköpostin näyttämistä varten
  const locationElement = document.getElementById("location"); // Elementti sijainnin näyttämistä varten
  const generateButton = document.getElementById("generate-button"); // Painike käyttäjän generointiin
  // Lisää klikkaustapahtuman kuuntelija "Luo käyttäjä" -painikkeelle
  generateButton.addEventListener("click", generateUser);
  // Funktio, joka hakee ja näyttää satunnaisen käyttäjän
  function generateUser() {
    // Hae satunnaisen käyttäjän tiedot API:sta
    fetch("https://randomuser.me/api/")
      .then((response) => response.json()) // Parsitaan JSON-vastaus
      .then((data) => {
        const user = data.results[0]; // Haetaan ensimmäinen käyttäjä vastauksesta
        // Päivitetään profiilikuva, nimi, sähköposti ja sijainti haetuilla tiedoilla
        profilePicture.src = user.picture.large; // Aseta profiilikuva
        nameElement.textContent = `${user.name.first} ${user.name.last}`; // Aseta koko nimi
        emailElement.textContent = user.email; // Aseta sähköposti
        locationElement.textContent = `${user.location.city}, ${user.location.country}`; // Aseta sijainti
      })
      .catch((error) => {
        console.error("Virhe käyttäjätietojen haussa:", error); // Kirjataan mahdolliset virheet
      });
  }
  // Luo automaattisesti ensimmäinen käyttäjä, kun sivu latautuu
  generateUser();
});
