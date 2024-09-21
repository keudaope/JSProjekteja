document.addEventListener("DOMContentLoaded", () => {
  // DOM-elementit vuorovaikutusta varten
  const moodSelect = document.getElementById("mood-select"); // Pudotusvalikko mielialan valintaan
  const submitButton = document.getElementById("submit-button"); // Painike mielialan tallentamiseen
  const moodLog = document.getElementById("mood-log"); // Alue mielialapäiväkirjan näyttämiseen
  // Taulukko mielialamerkintöjen tallentamiseen (haetaan localStoragesta, jos saatavilla)
  let moodEntries = JSON.parse(localStorage.getItem("moodEntries")) || [];

  // Funktio mielialapäiväkirjan näyttämiseen
  function displayMoodLog() {
    // Tyhjennetään mielialapäiväkirja ennen uusien merkintöjen renderöintiä
    moodLog.innerHTML = "";
    moodEntries.forEach((entry) => {
      // Luodaan div jokaiselle mielialamerkinnälle
      const moodEntryDiv = document.createElement("div");
      moodEntryDiv.classList.add("mood-entry");
      // Luodaan span päivämäärälle
      const dateSpan = document.createElement("span");
      dateSpan.classList.add("mood-date");
      dateSpan.textContent = entry.date;
      // Luodaan span mielialan emojille ja tekstille
      const moodSpan = document.createElement("span");
      moodSpan.classList.add("mood-emoji");
      moodSpan.textContent = `${entry.emoji} ${entry.mood}`;
      // Liitetään päivämäärä ja mieliala merkintädiveen
      moodEntryDiv.appendChild(dateSpan);
      moodEntryDiv.appendChild(moodSpan);
      // Liitetään merkintädivi mielialapäiväkirjaan
      moodLog.appendChild(moodEntryDiv);
    });
  }

  // Funktio uuden mielialan tallentamiseen
  function trackMood() {
    // Haetaan valittu mieliala
    const selectedMood = moodSelect.value;
    // Emojisanakirja, joka yhdistää mielialan emojin kanssa
    const emojiDictionary = {
      happy: "😊",
      sad: "😢",
      excited: "😄",
      tired: "😴",
      angry: "😠",
      neutral: "😐",
    };
    // Jatketaan vain, jos mieliala on valittu
    if (selectedMood) {
      // Haetaan nykyinen päivämäärä luettavassa muodossa
      const currentDate = new Date().toLocaleDateString();
      // Luodaan uusi mielialamerkintä-objekti
      const newMoodEntry = {
        mood: selectedMood,
        emoji: emojiDictionary[selectedMood],
        date: currentDate,
      };
      // Lisätään uusi merkintä moodEntries-taulukkoon
      moodEntries.push(newMoodEntry);
      // Tallennetaan päivitetyt mielialamerkinnät localStorageen
      localStorage.setItem("moodEntries", JSON.stringify(moodEntries));
      // Päivitetään mielialapäiväkirja
      displayMoodLog();
    }
  }

  // Tapahtumankuuntelija "Track Mood" -painikkeelle
  submitButton.addEventListener("click", trackMood);
  // Näytetään mielialapäiväkirja sivun latautuessa
  displayMoodLog();
});
