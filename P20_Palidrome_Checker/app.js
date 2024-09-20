// Odota, kunnes DOM on kokonaan ladattu ennen skriptin suorittamista
document.addEventListener("DOMContentLoaded", () => {
  // Valitaan DOM-elementit
  const inputText = document.getElementById("input-text"); // Tekstikenttä käyttäjän syötteelle
  const checkButton = document.getElementById("check-button"); // Painike, jolla tarkistetaan, onko syöte palindromi
  const resultDiv = document.getElementById("result"); // Div-elementti tuloksen näyttämiseen
  // Tapahtumankuuntelija painikkeen painallusta varten
  checkButton.addEventListener("click", () => {
    const text = inputText.value.trim(); // Haetaan syöte ja poistetaan ylimääräiset välilyönnit
    // Tarkistetaan, onko syöte tyhjä
    if (text === "") {
      resultDiv.textContent = " Anna tekstiä."; // Näytetään virheilmoitus, jos syötettä ei ole annettu
      return; // Lopetetaan toiminto, jos syöte on tyhjä
    }
    // Tarkistetaan, onko syöte palindromi
    const isPalindrome = checkPalindrome(text);

    // Näytetään tulos oikealla viestillä
    if (isPalindrome) {
      resultDiv.innerHTML = ` "${text}" on palindromi.`;
    } else {
      resultDiv.innerHTML = ` "${text}" ei ole palindromi.`;
    }
  });
  /**
   * Funktio tarkistaa, onko merkkijono palindromi
   * @param {string} str - Syötemerkkijono, jota tarkistetaan
   * @returns {boolean} - Palauttaa true, jos syöte on palindromi, muuten false
   */
  function checkPalindrome(str) {
    // Puhdistetaan merkkijono: poistetaan muut kuin aakkosnumeeriset merkit ja muutetaan pieniksi kirjaimiksi
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    // Käännetään puhdistettu merkkijono
    const reversedStr = cleanedStr.split("").reverse().join("");
    // Verrataan puhdistettua merkkijonoa käännettyyn versioon
    return cleanedStr === reversedStr;
  }
});
