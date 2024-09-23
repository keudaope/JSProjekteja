// Odota, että DOM latautuu kokonaan ennen kuin suoritat skriptin
document.addEventListener("DOMContentLoaded", () => {
  // Valitse kaikki valintanapit ja tuloksen näyttämiseen tarkoitettu div-elementti
  const choices = document.querySelectorAll(".choice");
  const resultDiv = document.getElementById("result");

  // Taulukko mahdollisista valinnoista
  const choicesArray = ["kivi", "paperi", "sakset"];

  // Lisää klikkaustapahtuman kuuntelija jokaiselle valintanapille
  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("data-choice"); // Hae käyttäjän valinta
      const computerChoice = getComputerChoice(); // Hae tietokoneen satunnainen valinta
      const result = determineWinner(userChoice, computerChoice); // Määritä voittaja
      displayResult(userChoice, computerChoice, result); // Näytä tulos näytöllä
    });
  });

  /**
   * Funktio, joka valitsee tietokoneelle satunnaisen valinnan.
   * Palauttaa joko 'kivi', 'paperi' tai 'sakset'.
   */
  function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choicesArray.length);
    return choicesArray[randomIndex];
  }

  /**
   * Funktio määrittää voittajan käyttäjän ja tietokoneen valintojen perusteella.
   * @param {string} userChoice - Käyttäjän valinta (kivi, paperi, tai sakset).
   * @param {string} computerChoice - Tietokoneen valinta (kivi, paperi, tai sakset).
   * @returns {string} - Pelin tulos ('Voitit!', 'Hävisit!' tai 'Tasapeli!').
   */
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "Tasapeli!";
    } else if (
      (userChoice === "kivi" && computerChoice === "sakset") ||
      (userChoice === "paperi" && computerChoice === "kivi") ||
      (userChoice === "sakset" && computerChoice === "paperi")
    ) {
      return "Voitit!";
    } else {
      return "Hävisit!";
    }
  }

  /**
   * Funktio näyttää pelin tuloksen resultDiv-elementissä.
   * @param {string} userChoice - Käyttäjän valinta.
   * @param {string} computerChoice - Tietokoneen valinta.
   * @param {string} result - Pelin tulos.
   */
  function displayResult(userChoice, computerChoice, result) {
    resultDiv.innerHTML = `
    Sinä valitsit: ${userChoice}<br>
    Tietokone valitsi: ${computerChoice}<br>
    ${result}
    `;
  }
});
