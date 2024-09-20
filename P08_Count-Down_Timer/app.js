document.addEventListener("DOMContentLoaded", () => {
  // Valitse lomake, syötekentät ja ajastimen näyttöelementit
  const timerForm = document.getElementById("timer-form");
  const minutesInput = document.getElementById("minutes");
  const secondsInput = document.getElementById("seconds");
  const timerDisplay = document.getElementById("timer");

  // Muuttuja, joka tallentaa viittauksen intervalliin (laskuriin)
  let countdownInterval;

  // Tapahtumankuuntelija lomakkeen lähetykselle ajastimen käynnistämiseksi
  timerForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Estä lomakkeen sivun uudelleenlataus
    // Tyhjennä mahdollinen olemassa oleva laskuri estääksesi päällekkäisyydet
    clearInterval(countdownInterval);

    // Hae käyttäjän syöttämät minuutit ja sekunnit
    const minutes = parseInt(minutesInput.value) || 0; // Muunna minuutit numeroiksi
    const seconds = parseInt(secondsInput.value) || 0; // Muunna sekunnit numeroiksi
    let totalSeconds = minutes * 60 + seconds; // Laske kokonaisaika sekunneissa

    // Jos ei ole annettu kelvollista aikaa, poistu funktiosta
    if (totalSeconds <= 0) return;

    // Käynnistä laskuri käyttämällä setIntervalia, joka pyörii joka 1000 ms (1 sekunti)
    countdownInterval = setInterval(() => {
      // Pysäytä laskuri, kun se saavuttaa nollan
      if (totalSeconds <= 0) {
        clearInterval(countdownInterval); // Tyhjennä intervalli pysäyttääksesi ajastimen
        timerDisplay.style.color = "red"; // Muuta ajastimen väri punaiseksi, kun aika loppuu
        return;
      }

      // Vähennä kokonaissekunttimäärää
      totalSeconds--;

      // Laske näytettävät minuutit ja sekunnit
      const displayMinutes = Math.floor(totalSeconds / 60)
        .toString()
        .padStart(2, "0");
      const displaySeconds = (totalSeconds % 60).toString().padStart(2, "0");

      // Päivitä ajastimen näyttö muotoillulla ajalla (MM:SS)
      timerDisplay.textContent = `${displayMinutes}:${displaySeconds}`;

      // Muuta ajastimen väriä dynaamisesti laskennan edetessä
      if (totalSeconds < 10) {
        timerDisplay.style.color = "red"; // Punainen, kun aikaa on jäljellä alle 10 sekuntia
      } else if (totalSeconds < 30) {
        timerDisplay.style.color = "orange"; // Oranssi, kun aikaa on jäljellä alle 30 sekuntia
      } else {
        timerDisplay.style.color = "#333"; // Oletusväri normaalille ajalle
      }
    }, 1000); // Aseta intervalli päivittymään joka 1000 millisekuntia (1 sekunti)
  });
});
