// Odota, että DOM latautuu kokonaan ennen kuin suoritat skriptin
document.addEventListener("DOMContentLoaded", () => {
  // Valitaan kelloelementti DOM:sta
  const clockElement = document.getElementById("clock");
  /**
   * Funktio, joka päivittää ajan digitaalisessa kellossa.
   * Tämä funktio hakee nykyisen ajan, muotoilee sen ja näyttää sen
   * HH:MM:SS-muodossa.
   */
  function updateClock() {
    // Hae nykyinen aika
    const now = new Date();
    // Poimitaan tunnit, minuutit ja sekunnit, ja lisätään johtavat nollat tarvittaessa
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    // Päivitetään kelloelementin tekstisisältö näyttämään nykyinen aika
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
  }
  /**
   * Asetetaan intervalli, joka päivittää kellon joka sekunti.
   * Tämä varmistaa, että kello pysyy tarkkana ja näyttää reaaliaikaiset
   * muutokset.
   */
  setInterval(updateClock, 1000); // Päivittää kellon joka 1000 millisekunti (1 sekunti)

  // Kutsutaan updateClock-funktio välittömästi, jotta aika näkyy sivulla latauksen jälkeen
  updateClock();
});
