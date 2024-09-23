document.addEventListener("DOMContentLoaded", () => {
  const getWeatherButton = document.getElementById("get-weather-button"); // Valitse painike-elementti
  const weatherInfoDiv = document.getElementById("weather-info"); // Valitse div, jossa näytetään sääinfo
  const apiKey = "6ddc93fbc7d0c4a2941a17cf6dbbba37"; // Korvaa omalla OpenWeatherMap API-avaimellasi
  // Lisää klikkaustapahtuman kuuntelija painikkeeseen
  getWeatherButton.addEventListener("click", getWeather);

  /**
   * Funktio, joka hakee sään käyttäjän sijainnin perusteella.
   */
  function getWeather() {
    // Tarkista, tukeeko selain geosijainnin hakua
    if (navigator.geolocation) {
      // Käytä geosijaintia saadaksesi käyttäjän koordinaatit
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude; // Hae leveysaste
          const lon = position.coords.longitude; // Hae pituusaste
          // Hae säädata OpenWeather API:sta käyttäen leveys- ja pituusastetta
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
          )
            .then((response) => response.json()) // Muunna vastaus JSON-muotoon
            .then((data) => {
              displayWeather(data); // Kutsu funktiota, joka näyttää säädatan
            })
            .catch((error) => {
              console.error("Virhe säädatan haussa:", error);
              weatherInfoDiv.textContent =
                "Virhe säädatan haussa. Yritä myöhemmin uudelleen.";
            });
        },
        (error) => {
          console.error("Geosijainnin virhe:", error); // Tulosta mahdolliset geosijaintivirheet
          weatherInfoDiv.textContent =
            "Sijaintiasi ei voitu hakea. Yritä uudelleen."; // Näytä virheilmoitus
        }
      );
    } else {
      weatherInfoDiv.textContent = "Selaimesi ei tue geosijainnin hakua."; // Käsittele tapaukset, joissa geosijainnin haku ei ole tuettu
    }
  }

  /**
   * Funktio, joka näyttää säädatan weatherInfoDiv:issä.
   * @param {Object} data - API:sta saatu säädata.
   */
  function displayWeather(data) {
    weatherInfoDiv.innerHTML = `
    <h2>${data.name}</h2> <!-- Näytä kaupungin nimi -->
    <p>Lämpötila: ${data.main.temp}°C</p> <!-- Näytä lämpötila -->
    <p>Säätila: ${data.weather[0].description}</p> <!-- Näytä sääkuvaus -->
    `;
  }
});
