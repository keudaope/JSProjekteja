// Odota, että DOM latautuu kokonaan ennen kuin suoritat skriptin
document.addEventListener("DOMContentLoaded", () => {
  // Valitse DOM-elementit vuorovaikutukseen
  const editor = document.getElementById("editor"); // Tekstialue Markdown-syötteelle
  const preview = document.getElementById("preview"); // Div-elementti, johon renderöity Markdown näytetään

  // Funktio, joka päivittää esikatselualueen käsitellyllä Markdownilla
  function updatePreview() {
    const markdownText = editor.value; // Hae käyttäjän syöte tekstialueelta
    preview.innerHTML = marked.parse(markdownText); // Käsittele Markdown ja päivitä esikatselu
  }

  // Tapahtumankuuntelija, joka päivittää esikatselun aina, kun käyttäjä kirjoittaa
  editor.addEventListener("input", updatePreview);

  // Alustava esikatselupäivitys varmistamaan, että sisältö käsitellään sivun latauksen yhteydessä
  updatePreview();
});
