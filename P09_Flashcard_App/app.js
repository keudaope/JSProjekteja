// Odotetaan, että DOM on latautunut kokonaan ennen JavaScriptin suorittamista
document.addEventListener("DOMContentLoaded", () => {
  // Haetaan viittaukset lomakkeeseen, syötekenttiin, flashcard-näyttöön ja painikkeisiin
  const flashcardForm = document.getElementById("flashcard-form");
  const questionInput = document.getElementById("question");
  const answerInput = document.getElementById("answer");
  const flashcard = document.getElementById("flashcard");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  // Alustetaan taulukko flashcardeille, ladaten ne localStoragesta jos saatavilla
  let flashcards = JSON.parse(localStorage.getItem("flashcards")) || [];
  let currentIndex = 0; // Seuraa nykyisen flashcardin indeksiä
  let showAnswer = false; // Määrittää näytetäänkö vastaus vai ei
  // Tapahtumankuuntelija uuden flashcardin lisäämiselle
  flashcardForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Estetään lomakkeen lähettäminen, joka virkistäisi sivun
    // Haetaan siivotut arvot syötekentistä
    const question = questionInput.value.trim();
    const answer = answerInput.value.trim();
    // Jatketaan vain, jos sekä kysymys että vastaus on annettu
    if (question && answer) {
      // Lisätään uusi flashcard taulukkoon ja päivitetään localStorage
      flashcards.push({ question, answer });
      localStorage.setItem("flashcards", JSON.stringify(flashcards));
      // Tyhjennetään syötekentät lähetyksen jälkeen
      questionInput.value = "";
      answerInput.value = "";
      // Näytetään uusi flashcard
      currentIndex = flashcards.length - 1; // Asetetaan indeksi uusimpaan flashcardiin
      displayFlashcard();
    }
  });
  // Tapahtumankuuntelija kysymyksen ja vastauksen välillä vaihtamiselle
  flashcard.addEventListener("click", () => {
    showAnswer = !showAnswer; // Vaihdetaan kysymyksen ja vastauksen näyttämisen välillä
    displayFlashcard();
  });
  // Tapahtumankuuntelija edelliseen flashcardiin siirtymiselle
  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--; // Siirrytään edelliseen flashcardiin
      showAnswer = false; // Palautetaan näyttö kysymykseen
      displayFlashcard();
    }
  });
  // Tapahtumankuuntelija seuraavaan flashcardiin siirtymiselle
  nextButton.addEventListener("click", () => {
    if (currentIndex < flashcards.length - 1) {
      currentIndex++; // Siirrytään seuraavaan flashcardiin
      showAnswer = false; // Palautetaan näyttö kysymykseen
      displayFlashcard();
    }
  });
  // Funktio nykyisen flashcardin näyttämiseksi
  function displayFlashcard() {
    if (flashcards.length > 0) {
      const currentFlashcard = flashcards[currentIndex];
      // Näytetään kysymys tai vastaus riippuen tilasta
      flashcard.textContent = showAnswer
        ? currentFlashcard.answer
        : currentFlashcard.question;
    } else {
      flashcard.textContent =
        "Ei flashcardeja saatavilla. Lisää uusi flashcard."; // Oletusviesti, jos flashcardeja ei ole
    }
  }
  // Näytetään ensimmäinen flashcard sivun latautuessa
  displayFlashcard();
});
