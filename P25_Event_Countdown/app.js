// Odota, että DOM latautuu täysin ennen kuin suoritat skriptin
document.addEventListener("DOMContentLoaded", () => {
  // Valitaan DOM-elementit
  const eventNameInput = document.getElementById("event-name"); // Tapahtuman nimen syötekenttä
  const eventDateInput = document.getElementById("event-date"); // Tapahtuman päivämäärän syötekenttä
  const startButton = document.getElementById("start-button"); // Käynnistyspainike
  const countdownDiv = document.getElementById("countdown"); // Laskurin näyttö
  let countdownInterval; // Muuttuja intervallin tallentamista varten
  // Lisää tapahtumankuuntelija käynnistyspainikkeelle
  startButton.addEventListener("click", startCountdown);
  // Funktio laskurin käynnistämiseen
  function startCountdown() {
    // Haetaan tapahtuman nimi ja päivämäärä
    const eventName = eventNameInput.value.trim();
    const eventDate = new Date(eventDateInput.value);
    // Tarkistetaan syötteiden kelvollisuus
    if (!eventName || isNaN(eventDate)) {
      countdownDiv.textContent =
        "Anna kelvollinen tapahtuman nimi ja päivämäärä."; // Virheilmoitus
      countdownDiv.style.color = "#e74c3c"; // Punainen väri virheelle
      return;
    }
    // Tyhjennetään mahdollinen aiempi intervalli
    if (countdownInterval) {
      clearInterval(countdownInterval);
    }
    // Käynnistetään laskurin ajastin
    countdownInterval = setInterval(() => {
      const now = new Date(); // Haetaan nykyinen päivämäärä ja aika
      const timeDifference = eventDate - now; // Lasketaan ajan ero
      // Tarkistetaan, onko tapahtuma jo ohi
      if (timeDifference <= 0) {
        clearInterval(countdownInterval); // Lopetetaan laskuri
        countdownDiv.textContent = `${eventName} on jo tapahtunut.`;
        // Näytetään viesti
        countdownDiv.style.color = "#2c3e50"; // Palautetaan tekstin väri
        return;
      }
      // Lasketaan jäljellä oleva aika päivinä, tunteina, minuutteina ja sekunteina
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      // Päivitetään laskurin näyttö
      countdownDiv.textContent = `Aikaa ${eventName}: ${days}p ${hours}t ${minutes}m ${seconds}s`;
      countdownDiv.style.color = "#2c3e50"; // Palautetaan tekstin väri
    }, 1000);
  }
});
