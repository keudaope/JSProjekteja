// Odota, että DOM latautuu kokonaan ennen skriptin suorittamista
document.addEventListener("DOMContentLoaded", () => {
  // Haetaan DOM-elementit kysymyksen, vaihtoehtojen ja nappien käsittelyyn
  const pollQuestionInput = document.getElementById("poll-question"); // Input-kenttä kysymykselle
  const pollOptionsDiv = document.getElementById("poll-options"); // Div, johon lisätään vastausvaihtoehdot
  const addOptionButton = document.getElementById("add-option"); // Nappi uuden vaihtoehdon lisäämiseen
  const createPollButton = document.getElementById("create-poll-button"); // Nappi kyselyn luomiseen
  const pollDisplayDiv = document.getElementById("poll-display"); // Div, johon kysely näytetään luomisen jälkeen
  const pollQuestionDisplay = document.getElementById("poll-question-display"); // Kyselyn kysymyksen näyttäminen
  const pollOptionsDisplay = document.getElementById("poll-options-display"); // Vastausvaihtoehtojen näyttäminen
  const voteButton = document.getElementById("vote-button"); // Nappi äänestämiseen
  const pollResultsDiv = document.getElementById("poll-results"); // Div, johon tulokset näytetään
  const pollResultsDisplay = document.getElementById("poll-results-display"); // Elementti tulosten näyttämiseen

  // Tapahtumankuuntelija vaihtoehdon lisäämiseksi
  addOptionButton.addEventListener("click", () => {
    const optionDiv = document.createElement("div"); // Luodaan uusi div vaihtoehdolle
    optionDiv.classList.add("poll-option"); // Lisätään luokka tyylittelyä varten
    optionDiv.innerHTML = `
      <input type="text" class="option-input" placeholder="Vaihtoehto ${
        pollOptionsDiv.children.length + 1
      }">
      <button class="remove-option">X</button>
    `;
    pollOptionsDiv.appendChild(optionDiv); // Lisätään uusi vaihtoehto div:iin
    addRemoveOptionListeners(); // Lisätään tapahtumankuuntelijat poistamiseen
  });

  // Tapahtumankuuntelija kyselyn luomiselle
  createPollButton.addEventListener("click", () => {
    const question = pollQuestionInput.value.trim(); // Haetaan kysymys
    const options = Array.from(document.getElementsByClassName("option-input"))
      .map((input) => input.value.trim())
      .filter((value) => value); // Haetaan vastausvaihtoehdot

    // Tarkistetaan, että kysymys ja vähintään kaksi vaihtoehtoa on annettu
    if (question && options.length >= 2) {
      pollQuestionDisplay.textContent = question; // Näytetään kysymys
      pollOptionsDisplay.innerHTML = ""; // Tyhjennetään mahdolliset vanhat vaihtoehdot

      // Näytetään vastausvaihtoehdot radiopainikkeina
      options.forEach((option, index) => {
        const optionDiv = document.createElement("div");
        optionDiv.classList.add("poll-option");
        optionDiv.innerHTML = `
          <input type="radio" name="poll-option" value="${index}">
          <label>${option}</label>
        `;
        pollOptionsDisplay.appendChild(optionDiv); // Lisätään jokainen vaihtoehto näyttöön
      });

      // Piilotetaan kyselyn luontilomake ja näytetään kysely
      document.getElementById("poll-section").style.display = "none";
      pollDisplayDiv.style.display = "block";
    } else {
      alert("Anna kysymys ja vähintään kaksi vaihtoehtoa."); // Näytetään virheilmoitus
    }
  });

  // Tapahtumankuuntelija äänestyksen lähettämiseen ja tulosten näyttämiseen
  voteButton.addEventListener("click", () => {
    const selectedOption = document.querySelector(
      'input[name="poll-option"]:checked'
    ); // Haetaan valittu vaihtoehto
    if (selectedOption) {
      const optionIndex = parseInt(selectedOption.value); // Haetaan valitun vaihtoehdon indeksi
      pollResultsDisplay.innerHTML = ""; // Tyhjennetään vanhat tulokset

      // Näytetään tulokset jokaiselle vaihtoehdolle
      const options = Array.from(
        document.querySelectorAll("#poll-options-display .poll-option")
      );
      options.forEach((option, index) => {
        const resultDiv = document.createElement("div");
        resultDiv.classList.add("result");
        const votes = optionIndex === index ? 1 : 0; // Äänimäärä (yksinkertainen logiikka tässä esimerkissä)
        resultDiv.textContent = `${
          option.querySelector("label").textContent
        }: ${votes} ääntä`;
        pollResultsDisplay.appendChild(resultDiv);
      });

      // Piilotetaan kysely ja näytetään tulokset
      pollDisplayDiv.style.display = "none";
      pollResultsDiv.style.display = "block";
    } else {
      alert("Valitse vaihtoehto äänestääksesi."); // Näytetään virheilmoitus, jos ei valittu vaihtoehtoa
    }
  });

  // Funktio lisäämään tapahtumankuuntelijat vaihtoehdon poistamiselle
  function addRemoveOptionListeners() {
    const removeButtons = document.getElementsByClassName("remove-option"); // Haetaan kaikki poistonapit
    Array.from(removeButtons).forEach((button) => {
      button.addEventListener("click", (event) => {
        event.target.parentElement.remove(); // Poistetaan valittu vaihtoehto
      });
    });
  }

  // Lisätään poistonapit jo olemassa oleville vaihtoehdoille sivun latautuessa
  addRemoveOptionListeners();
});
