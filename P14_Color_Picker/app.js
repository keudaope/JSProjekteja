// Odota, että DOM on ladattu kokonaan ennen kuin suoritat skriptin
document.addEventListener('DOMContentLoaded', () => {
    // Valitaan värinvalitsin, värikoodin näyttö ja kopiointipainikkeen elementit
    const colorPicker = document.getElementById('color-picker');
    const colorCode = document.getElementById('color-code');
    const copyButton = document.getElementById('copy-button');
    /**
    * Päivitä näytettävä värikoodi, kun uusi väri on valittu
    * Värinvalitsin palauttaa heksadesimaaliarvon, joka näytetään colorCode-elementissä.
    */
    colorPicker.addEventListener('input', () => {
    // Päivitä värikoodin näyttö valitulla värillä
    colorCode.textContent = colorPicker.value;
    });
    /**
    * Kopioi nykyinen värikoodi leikepöydälle, kun kopiointipainiketta painetaan
    * Käyttää Clipboard APIa kopioidakseen tekstiä käyttäjän leikepöydälle.
    */
   copyButton.addEventListener('click', () => {
    // Kopioi näytettävä värikoodi leikepöydälle
    navigator.clipboard.writeText(colorCode.textContent)
    .then(() => {
    // Ilmaise onnistuminen muuttamalla painikkeen tekstiä
    copyButton.textContent = 'Kopioitu!';
    // Palauta painikkeen teksti 2 sekunnin kuluttua
    setTimeout(() => {
    copyButton.textContent = 'Kopioi väri';
    }, 2000);
    })
    .catch(err => {
    // Kirjaa mahdolliset virheet kopioinnin aikana
    console.error('Tekstin kopiointi epäonnistui: ', err);
    });
    });
   });
