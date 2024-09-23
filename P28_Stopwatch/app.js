document.addEventListener("DOMContentLoaded", () => {
  // Valitaan DOM-elementit vuorovaikutusta varten
  const timerElement = document.getElementById("timer"); // Ajastimen näyttöelementti
  const startButton = document.getElementById("start-button"); // Käynnistysnappi
  const stopButton = document.getElementById("stop-button"); // Pysäytysnappi
  const resetButton = document.getElementById("reset-button"); // Nollausnappi
  // Muuttujat ajan ja intervallien seuraamiseen
  let timerInterval = null; // Intervalli ajastimelle
  let startTime = 0; // Ajastimen aloitusaika
  let elapsedTime = 0; // Kulunut aika
  // Funktio päivittää ajastimen näyttöä
  function updateTimer() {
    // Lasketaan kulunut aika
    const time = Date.now() - startTime + elapsedTime;
    const hours = Math.floor(time / 3600000); // Lasketaan tunnit
    const minutes = Math.floor((time % 3600000) / 60000); // Lasketaan minuutit
    const seconds = Math.floor((time % 60000) / 1000); // Lasketaan sekunnit
    // Päivitetään ajastimen näyttö ja lisätään nollat tarvittaessa
    timerElement.textContent = `${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }
  // Funktio ajastimen käynnistämiseen
  function startTimer() {
    // Estetään ajastimen moninkertainen käynnistäminen
    if (timerInterval) return;
    // Tallennetaan aloitusaika ja käynnistetään intervalli
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000); // Päivitetään ajastinta sekunnin välein
  }
  // Funktio ajastimen pysäyttämiseen
  function stopTimer() {
    // Pysäytetään vain, jos ajastin on käynnissä
    if (!timerInterval) return;
    // Lisätään kulunut aika ja pysäytetään intervalli
    elapsedTime += Date.now() - startTime;
    clearInterval(timerInterval); // Pysäytetään ajastimen päivitys
    timerInterval = null;
  }
  // Funktio ajastimen nollaamiseen
  function resetTimer() {
    // Pysäytetään intervalli, nollataan kulunut aika ja näyttö
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    timerElement.textContent = "00:00:00"; // Nollataan näyttö
  }
  // Lisätään tapahtumankuuntelijat nappeihin
  startButton.addEventListener("click", startTimer); // Käynnistysnapille
  stopButton.addEventListener("click", stopTimer); // Pysäytysnapille
  resetButton.addEventListener("click", resetTimer); // Nollausnapille
});
