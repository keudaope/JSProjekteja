// Odota, että DOM latautuu kokonaan ennen kuin suoritat skriptin
document.addEventListener("DOMContentLoaded", () => {
  // Valitse DOM-elementit vuorovaikutusta varten
  const quoteElement = document.getElementById("quote"); // Elementti, jossa lainaus näytetään
  const authorElement = document.getElementById("author"); // Elementti, jossa tekijän nimi näytetään
  const quoteButton = document.getElementById("quote-button"); // Painike uuden lainauksen hakemiseen
  // Lisää tapahtumankuuntelija painikkeelle, jotta lainaus haetaan klikkauksella
  quoteButton.addEventListener("click", fetchQuote);
  // Funktio, joka hakee satunnaisen lainauksen API:sta
  async function fetchQuote() {
    const url =
      "https://the-personal-quotes.p.rapidapi.com/quotes/tags/happiness";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "527371f994msh57563f768dd80f6p135d33jsn69c07817117b",
        "x-rapidapi-host": "the-personal-quotes.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json().then((data) => {
        // Päivitä DOM uudella lainauksella ja tekijän nimellä
        quoteElement.textContent = `"${data[0].quote}"`; // Aseta lainauksen teksti
        authorElement.textContent = `- ${data[0].author}`; // Aseta tekijän nimi
        quoteElement.style.color = "#2c3e50";
      });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  // Hae alkuperäinen lainaus, kun sivu latautuu
  fetchQuote();
});
