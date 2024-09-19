// Odotetaan, että DOM on kokonaan ladattu ennen kuin JavaScript suoritetaan
document.addEventListener('DOMContentLoaded', () => {
    // Haetaan viittaukset lomakkeeseen, syötekenttiin, flashcard-näyttöön ja painikkeisiin
    const flashcardForm = document.getElementById('flashcard-form');
    const questionInput = document.getElementById('question');
    const answerInput = document.getElementById('answer');
    const flashcard = document.getElementById('flashcard');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    // Alustetaan taulukko flashcardeja varten, ladataan localStoragesta jos saatavilla
    let flashcards = JSON.parse(localStorage.getItem('flashcards')) || [];
    let currentIndex = 0; // Seuraa nykyisen flashcardin indeksiä
    let showAnswer = false; // Määrittää, näytetäänkö vastaus vai ei
    // Tapahtumankuuntelija uuden flashcardin lisäämiseksi
    flashcardForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Estetään lomakkeen lähetys, joka uudelleenlataisi sivun
    // Haetaan syötteiden arvot ja poistetaan ylimääräiset välilyönnit
    const question = questionInput.value.trim();
    const answer = answerInput.value.trim();
    // Jatketaan vain, jos sekä kysymys että vastaus on annettu
    if (question && answer) {
    // Lisätään uusi flashcard taulukkoon ja päivitetään localStorage
    flashcards.push({ question, answer });
    localStorage.setItem('flashcards', JSON.stringify(flashcards));
    // Tyhjennetään syötekentät lähetyksen jälkeen
    questionInput.value = '';
    answerInput.value = '';
    // Näytetään uusi flashcard
    currentIndex = flashcards.length - 1; // Asetetaan indeksi uusimpaan flashcardiin
    displayFlashcard();
    }
    });
    // Tapahtumankuuntelija kysymyksen ja vastauksen välillä vaihtamiseksi
    flashcard.addEventListener('click', () => {
    showAnswer = !showAnswer; // Vaihdetaan kysymyksen ja vastauksen välillä
    displayFlashcard();
    });
    // Tapahtumankuuntelija edelliseen flashcardiin siirtymiseksi
    prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
    currentIndex--; // Siirrytään edelliseen flashcardiin
    showAnswer = false; // Palautetaan näyttämään kysymys
    displayFlashcard();
    }
    });
    // Tapahtumankuuntelija seuraavaan flashcardiin siirtymiseksi
    nextButton.addEventListener('click', () => {
        if (currentIndex < flashcards.length - 1) {
            currentIndex++; // Siirrytään seuraavaan flashcardiin
            showAnswer = false; // Palautetaan näyttämään kysymys
            displayFlashcard();
            }
            });
            // Funktio nykyisen flashcardin näyttämiseksi
            function displayFlashcard() {
            if (flashcards.length > 0) {
            const currentFlashcard = flashcards[currentIndex];
            // Näytetään kysymys tai vastaus riippuen valinnasta
            flashcard.textContent = showAnswer ? currentFlashcard.answer :
           currentFlashcard.question;
            } else {
            flashcard.textContent = 'Ei flashcardeja saatavilla. Lisää uusi flashcard.'; // Oletusviesti, jos flashcardeja ei ole
            }
            }
            // Näytetään ensimmäinen flashcard, kun sivu ladataan
            displayFlashcard();
           });
