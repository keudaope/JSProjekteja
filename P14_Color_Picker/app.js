// Odota, kunnes DOM on täysin ladattu ennen skriptin suorittamista
document.addEventListener("DOMContentLoaded", () => {
  // Valitse värinvalitsin, värikoodin näyttö ja kopiointipainike
  const colorPicker = document.getElementById("color-picker");
  const colorCode = document.getElementById("color-code");
  const copyButton = document.getElementById("copy-button");

  /**
   * Päivitä näytettävä värikoodi, kun uusi väri valitaan
   * Värinvalitsin palauttaa heksadesimaalisen arvon, joka näytetään
   * colorCode-elementissä.
   */
  colorPicker.addEventListener("input", () => {
    // Päivitä värikoodin näyttö valitulla värillä
    colorCode.textContent = colorPicker.value;
  });

  /**
   * Kopioi nykyinen värikoodi leikepöydälle, kun kopiointipainiketta
   * painetaan
   * Käytetään Clipboard API:a tekstin kopioimiseen käyttäjän leikepöydälle.
   */
  copyButton.addEventListener("click", () => {
    // Kopioi näytetty värikoodi leikepöydälle
    navigator.clipboard
      .writeText(colorCode.textContent)
      .then(() => {
        // Ilmaise onnistuminen muuttamalla painikkeen tekstiä
        copyButton.textContent = "Kopioitu!";
        // Palauta painikkeen teksti 2 sekunnin kuluttua
        setTimeout(() => {
          copyButton.textContent = "Kopioi väri";
        }, 2000);
      })
      .catch((err) => {
        // Tulosta mahdolliset virheet, jotka tapahtuvat kopioinnin aikana
        console.error("Tekstin kopioiminen epäonnistui: ", err);
      });
  });
});
