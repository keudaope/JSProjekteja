// Odota, että DOM latautuu kokonaan ennen kuin suoritat skriptin
document.addEventListener("DOMContentLoaded", () => {
  // Valitaan DOM-elementit vuorovaikutusta varten
  const lengthInput = document.getElementById("length"); // Numero-syöte salasanan pituudelle
  const uppercaseCheckbox = document.getElementById("uppercase"); // Valintaruutu isojen kirjainten mukaan ottamiseksi
  const numbersCheckbox = document.getElementById("numbers"); // Valintaruutu numeroiden mukaan ottamiseksi
  const symbolsCheckbox = document.getElementById("symbols"); // Valintaruutu symbolien mukaan ottamiseksi
  const generateButton = document.getElementById("generate-button"); // Painike salasanan luomiseen
  const resultDiv = document.getElementById("result"); // Div salasanan näyttämiseksi
  // Lisää tapahtumankuuntelija painikkeelle klikkaustapahtumaa varten
  generateButton.addEventListener("click", generatePassword);
  // Funktio salasanan luomiseksi
  function generatePassword() {
    // Haetaan pituus ja asetukset salasanalle
    const length = parseInt(lengthInput.value);
    const includeUppercase = uppercaseCheckbox.checked;
    const includeNumbers = numbersCheckbox.checked;
    const includeSymbols = symbolsCheckbox.checked;
    // Merkkisarjat eri tyyppisille merkeille
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    // Alustetaan merkkisarja pienillä kirjaimilla oletuksena
    let charSet = lowerCaseChars;
    if (includeUppercase) charSet += upperCaseChars; // Sisällytä isot kirjaimet, jos valittu
    if (includeNumbers) charSet += numberChars; // Sisällytä numerot, jos valittu
    if (includeSymbols) charSet += symbolChars; // Sisällytä symbolit, jos valittu
    // Luodaan salasana valitsemalla satunnaisia merkkejä merkkisarjasta
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      password += charSet[randomIndex];
    }
    // Näytetään luotu salasana tulos-divissä
    resultDiv.innerHTML = "Luotu salasana: <br />" + password;
  }
});
