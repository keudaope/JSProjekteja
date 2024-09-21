// Suorita skripti vasta kun DOM on täysin ladattu
document.addEventListener("DOMContentLoaded", () => {
  // Haetaan DOM-elementit lämpötilan syötettä, alasvetovalikoita, painiketta ja tulosdiviä varten
  const temperatureInput = document.getElementById("temperature-input");
  const fromUnit = document.getElementById("from-unit");
  const toUnit = document.getElementById("to-unit");
  const convertButton = document.getElementById("convert-button");
  const resultDiv = document.getElementById("result");
  // Lisätään tapahtumankuuntelija "Muunna" -painikkeelle
  convertButton.addEventListener("click", convertTemperature);
  // Funktio lämpötilan muunnoksen käsittelemiseksi
  function convertTemperature() {
    // Haetaan ja jäsennetään syötetyt arvot
    const temperature = parseFloat(temperatureInput.value);
    const from = fromUnit.value;
    const to = toUnit.value;
    // Tarkistetaan, onko syöte virheellinen (esim. ei-numeerinen arvo)
    if (isNaN(temperature)) {
      resultDiv.textContent = "Anna kelvollinen lämpötila.";
      return; // Lopetetaan funktio, jos syöte on virheellinen
    }
    let convertedTemperature;
    // Käsitellään muunnokset yksiköiden välillä käyttäjän valintojen perusteella
    if (from === to) {
      // Ei tarvitse muuntaa, jos yksiköt ovat samat
      convertedTemperature = temperature;
    } else if (from === "Celsius") {
      if (to === "Fahrenheit") {
        convertedTemperature = (temperature * 9) / 5 + 32;
      } else if (to === "Kelvin") {
        convertedTemperature = temperature + 273.15;
      }
    } else if (from === "Fahrenheit") {
      if (to === "Celsius") {
        convertedTemperature = ((temperature - 32) * 5) / 9;
      } else if (to === "Kelvin") {
        convertedTemperature = ((temperature - 32) * 5) / 9 + 273.15;
      }
    } else if (from === "Kelvin") {
      if (to === "Celsius") {
        convertedTemperature = temperature - 273.15;
      } else if (to === "Fahrenheit") {
        convertedTemperature = ((temperature - 273.15) * 9) / 5 + 32;
      }
    }
    // Näytetään muunnettu lämpötila kahden desimaalin tarkkuudella
    resultDiv.textContent = `Muunnettu lämpötila: ${convertedTemperature.toFixed(
      2
    )} ${to}`;
  }
});
