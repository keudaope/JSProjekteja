// Odota, kunnes DOM on täysin ladattu, ennen kuin suoritat skriptin
document.addEventListener("DOMContentLoaded", () => {
  // Valitaan DOM-elementit helppoa käyttöä varten
  const form = document.getElementById("bmi-form"); // Lomake pituuden ja painon syöttämistä varten
  const heightInput = document.getElementById("height"); // Syöttökenttä pituudelle
  const weightInput = document.getElementById("weight"); // Syöttökenttä painolle
  const resultDiv = document.getElementById("result"); // Div, johon tulos näytetään
  // Lomakkeen lähettämisen tapahtumankuuntelija
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Estetään lomakkeen lähettäminen ja sivun uudelleenlataus
    // Haetaan syötetyt arvot ja muunnetaan ne käytettävään numeeriseen muotoon
    const height = parseFloat(heightInput.value) / 100; // Muunnetaan pituus senttimetreistä metreiksi
    const weight = parseFloat(weightInput.value); // Paino on jo kilogrammoissa
    // Tarkistetaan, että syötteet ovat positiivisia lukuja
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      // Näytetään virheilmoitus, jos syötteet ovat virheellisiä
      resultDiv.textContent = " Anna oikeat pituus- ja painoarvot.";
      return; // Lopetetaan suoritus, jos syötteet eivät ole kelvollisia
    }
    // Lasketaan BMI (paino jaettuna pituuden neliöllä)
    const bmi = (weight / (height * height)).toFixed(2); // Pyöristetään kahteen desimaaliin luettavuuden parantamiseksi
    resultDiv.innerHTML = `BMI-arvosi on ${bmi}. `; // Näytetään BMI-tulos
    // Annetaan palaute BMI-arvon perusteella
    if (bmi < 18.5) {
      resultDiv.innerHTML += "Olet alipainoinen."; // Alipaino-kategoria
    } else if (bmi < 24.9) {
      resultDiv.innerHTML += "Painosi on normaali."; // Normaali paino -kategoria
    } else if (bmi < 29.9) {
      resultDiv.innerHTML += "Olet ylipainoinen."; // Ylipaino-kategoria
    } else {
      resultDiv.innerHTML += "Olet lihava."; // Lihavuus-kategoria
    }
  });
});
