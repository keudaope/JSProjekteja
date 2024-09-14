// Odotetaan, että DOM latautuu kokonaan ennen skriptin suorittamista
document.addEventListener("DOMContentLoaded", () => {
  // Valitaan lomake-elementti, jota käytetään kaupungin nimen syöttämiseen
  const weatherForm = document.getElementById("weather-form");

  // Valitaan syöttökenttä, johon käyttäjä kirjoittaa kaupungin nimen
  const cityInput = document.getElementById("city-input");

  // Valitaan div, jossa haetut säätiedot näytetään
  const weatherInfo = document.getElementById("weather-info");
  // Määritellään OpenWeatherMap API-avaimen (korvaa 'your_api_key_here' oikealla API-avaimellasi)
  const apiKey = "be2d23aa0e1b4ab382b53831241309";

  // Sään API:n perus-URL, johon kaupungin nimi liitetään
  const apiBaseUrl = "http://api.weatherapi.com/v1/current.json";
  /**
   * Hakee säätietoja OpenWeatherMap API:sta annetulle kaupungille.
   * @param {string} city - Kaupungin nimi, jolle säätiedot pyydetään.
   */
  function fetchWeather(city) {
    // Rakennetaan täydellinen API-URL käyttäen kaupungin nimeä, API-avainta ja lämpötilan metrijärjestelmää
    const apiUrl = `${apiBaseUrl}?key=${apiKey}&q=${city}`;
    // Käytetään Fetch API:ta tekemään GET-pyyntö säätietojen API:lle
    fetch(apiUrl)
      .then((response) => {
        // Tarkistetaan, onko API:n vastaus onnistunut (tilakoodi 200-299)
        if (!response.ok) {
          // Jos kaupunkia ei löydy tai tapahtuu virhe, heitetään virheilmoitus
          throw new Error("Kaupunkia ei löytynyt");
        }
        // Muutetaan vastaus JSON-muotoon
        return response.json();
      })
      .then((data) => {
        // Jos tiedot haetaan onnistuneesti, näytetään ne displayWeather-funktion avulla
        displayWeather(data);
      })
      .catch((error) => {
        // Jos tapahtuu virhe (esim. kaupunkia ei löydy), näytetään virheilmoitus weatherInfo-divissä
        weatherInfo.innerHTML = `<p>Virhe: ${error.message}</p>`;
        // Tehdään virheilmoitus näkyväksi lisäämällä 'visible'-luokka
        weatherInfo.classList.add("visible");
      });
  }
  /**
   * Näyttää haetut säätiedot sivun weather info -osiossa.
   * @param {object} data - API:n palauttamat säätiedot.
   */
  async function displayWeather(data) {
    // Tyhjennetään mahdolliset aiemmat säätiedot ennen uusien tietojen näyttämistä
    weatherInfo.innerHTML = "";
    // Haetaan tärkeät tiedot API:n vastauksesta (kaupungin nimi, lämpötila, säätila jne.)
    const cityName = data.location.name;
    const temperature = data.current.temp_c;
    const condition = data.current.condition.text;
    const latitude = data.location.lat;
    const longitude = data.location.lon;
    // Rakennetaan HTML, jolla säätiedot näytetään dynaamisesti
    weatherInfo.innerHTML = `
    <p><strong>Kaupunki:</strong> ${cityName}</p>
    <p><strong>Lämpötila:</strong> ${temperature}°C</p>
    <p><strong>Säätila:</strong> ${condition}</p>
    <p><strong>Leveysaste:</strong> ${latitude}</p>
    <p><strong>Pituusaste:</strong> ${longitude}</p>
    `;
    // Tehdään säätiedot näkyviksi fade-in-efektillä lisäämällä 'visible'-luokka
    weatherInfo.classList.add("visible");
  }
  /**
   * Käsittelee lomakkeen lähetyksen ja hakee säätiedot syötetylle kaupungille.
   * @param {Event} event - Submit-tapahtuma, joka laukeaa, kun lomake lähetetään.
   */
  weatherForm.addEventListener("submit", (event) => {
    // Estetään lomakkeen oletuslähetys, joka lataisi sivun uudelleen
    event.preventDefault();
    // Haetaan syöttökenttään kirjoitettu kaupungin nimi ja poistetaan ylimääräiset välilyönnit
    const city = cityInput.value.trim();
    // Jos käyttäjä on syöttänyt kaupungin nimen, jatketaan säätietojen hakemista
    if (city) {
      fetchWeather(city);
    } else {
      // Jos kaupunkia ei ole syötetty, näytetään viesti, jossa pyydetään syöttämään kaupungin nimi
      weatherInfo.innerHTML = "<p>Syötä kaupungin nimi</p>";
      // Tehdään viesti näkyväksi lisäämällä 'visible'-luokka
      weatherInfo.classList.add("visible");
    }
  });
});
