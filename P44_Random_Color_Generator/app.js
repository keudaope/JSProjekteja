// Odota, että DOM on täysin ladattu ennen skriptin suorittamista
document.addEventListener("DOMContentLoaded", () => {
  // Haetaan viittaukset DOM-elementteihin myöhempää käyttöä varten
  const colorDisplay = document.getElementById("color-display");
  const generateColorButton = document.getElementById("generate-color-button");
  const hexCodeSpan = document.getElementById("hex-code");
  const rgbCodeSpan = document.getElementById("rgb-code");
  // Tapahtumankuuntelija "Luo väri" -painikkeelle
  generateColorButton.addEventListener("click", generateRandomColor);
  // Funktio satunnaisen värin luomiseen ja näytön päivittämiseen
  function generateRandomColor() {
    const randomColor = getRandomColor(); // Luo satunnainen RGB-väri
    const hexColor = rgbToHex(randomColor); // Muunna RGB-väri HEX-muotoon
    // Päivitä näyttölaatikon taustaväri
    colorDisplay.style.backgroundColor = hexColor;
    // Näytä värikoodit (HEX ja RGB)
    hexCodeSpan.textContent = `HEX: ${hexColor}`;
    rgbCodeSpan.textContent = `RGB: ${randomColor}`;
  }
  // Funktio satunnaisen RGB-värin luomiseen
  function getRandomColor() {
    const r = Math.floor(Math.random() * 256); // Satunnainen arvo punaiselle (0-255)
    const g = Math.floor(Math.random() * 256); // Satunnainen arvo vihreälle (0-255)
    const b = Math.floor(Math.random() * 256); // Satunnainen arvo siniselle (0-255)
    return `rgb(${r}, ${g}, ${b})`; // Palauta väri RGB-muodossa
  }
  // Funktio RGB-värin muuntamiseen HEX-muotoon
  function rgbToHex(rgb) {
    const rgbArray = rgb.match(/\d+/g); // Erota numeeriset arvot RGB-merkkijonosta
    // Muunna jokainen arvo heksadesimaalimuotoon ja lisää tarvittaessa nolla
    const hex = rgbArray
      .map((val) => {
        const hexVal = parseInt(val).toString(16); // Muunna desimaalit heksadesimaaliin
        return hexVal.length === 1 ? "0" + hexVal : hexVal; // Varmista, että HEX-arvot ovat kaksinumeroisia
      })
      .join("");
    return `#${hex}`; // Palauta HEX-väri "#" etuliitteellä
  }
});
