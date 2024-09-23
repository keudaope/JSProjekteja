// Odotetaan, että DOM on täysin ladattu ennen kuin scripti suoritetaan
document.addEventListener("DOMContentLoaded", () => {
  // Valitaan DOM-elementit vuorovaikutusta varten
  const timerElement = document.getElementById("timer"); // Ajastimen näyttöelementti
  const startButton = document.getElementById("start-button"); // Aloituspainike
  const pauseButton = document.getElementById("pause-button"); // Taukopainike
  const stopButton = document.getElementById("stop-button"); // Lopetuspainike
  let timer; // Muuttuja ajastinvälin tallentamiseen
  let isRunning = false; // Boolean, joka seuraa, onko ajastin käynnissä
  let timeLeft = 25 * 60; // Asetetaan oletusaika Pomodoro-ajastimelle (25 minuuttia sekunneissa)

  // Funktio päivittää ajastimen näytön MM:SS-formaattiin
  function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60)
      .toString()
      .padStart(2, "0"); // Muuntaa minuutit
    const seconds = (timeLeft % 60).toString().padStart(2, "0"); // Muuntaa sekunnit
    timerElement.textContent = `${minutes}:${seconds}`; // Näyttää ajan näytössä
  }

  // Funktio aloittaa ajastimen
  function startTimer() {
    if (isRunning) return; // Estetään useiden ajastinten käynnistäminen samanaikaisesti
    isRunning = true; // Määritetään ajastimen tila käynnissä olevaksi
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--; // Vähennetään aikaa yhdellä sekunnilla
        updateTimerDisplay(); // Päivitetään näyttö uudella ajalla
      } else {
        clearInterval(timer); // Pysäytetään ajastin, kun aika loppuu
        isRunning = false; // Nollataan ajastimen tila
        timeLeft = 5 * 60; // Asetetaan taukoaika (5 minuuttia)
        alert("Aika pitää tauko!"); // Ilmoitetaan käyttäjälle
        startTimer(); // Käynnistetään automaattisesti taukoajastin
      }
    }, 1000); // Ajastin päivittyy joka sekunti
  }

  // Funktio pysäyttää ajastimen tilapäisesti
  function pauseTimer() {
    if (!isRunning) return; // Ei tehdä mitään, jos ajastin ei ole käynnissä
    clearInterval(timer); // Pysäytetään ajastin
    isRunning = false; // Muutetaan tila pysäytetyksi
  }

  // Funktio pysäyttää ajastimen ja palauttaa sen 25 minuuttiin
  function stopTimer() {
    clearInterval(timer); // Pysäytetään ajastin
    isRunning = false; // Muutetaan tila pysäytetyksi
    timeLeft = 25 * 60; // Palautetaan ajastin 25 minuuttiin
    updateTimerDisplay(); // Päivitetään näyttö oletusajalla
  }

  // Lisätään tapahtumakuuntelijat painikkeille vuorovaikutusta varten
  startButton.addEventListener("click", startTimer); // Käynnistä-painikkeen tapahtuma
  pauseButton.addEventListener("click", pauseTimer); // Tauko-painikkeen tapahtuma
  stopButton.addEventListener("click", stopTimer); // Lopeta-painikkeen tapahtuma

  // Päivitetään näyttö, kun sivu ladataan
  updateTimerDisplay();
});
