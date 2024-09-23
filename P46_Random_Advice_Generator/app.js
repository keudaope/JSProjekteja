document.addEventListener("DOMContentLoaded", () => {
  const adviceDiv = document.getElementById("advice"); // Viittaus div-elementtiin, jossa neuvo näytetään
  const generateAdviceButton = document.getElementById(
    "generate-advice-button"
  ); // Viittaus nappiin
  // Lisätään tapahtumankuuntelija napille, jotta uusi neuvo haetaan klikatessa
  generateAdviceButton.addEventListener("click", fetchRandomAdvice);

  /**
   * Funktio, joka hakee satunnaisen neuvon API:sta.
   * Käyttää 'adviceslip'-APIa satunnaisten neuvojen hakemiseen.
   */
  async function fetchRandomAdvice() {
    try {
      // Hae data APIsta aikaleimalla, jotta vältetään välimuistin käyttö
      const response = await fetch(
        `https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`
      );
      const data = await response.json(); // Parsitaan vastaus JSON-muotoon
      adviceDiv.textContent = data.slip.advice; // Näytetään haettu neuvo
    } catch (error) {
      // Jos haun aikana tapahtuu virhe, näytetään virheilmoitus
      adviceDiv.textContent =
        "Neuvoa ei voitu hakea. Yritä myöhemmin uudelleen.";
    }
  }
});
