document.addEventListener("DOMContentLoaded", () => {
  // Valitaan DOM-elementit vuorovaikutusta varten
  const cityInput = document.getElementById("city"); // Syötekenttä kaupungin nimelle
  const getForecastButton = document.getElementById("get-forecast"); // Painike, joka hakee sääennusteen
  const forecastDiv = document.getElementById("forecast"); // Div-elementti sääennusteen näyttämiseksi
  const apiKey = "6ddc93fbc7d0c4a2941a17cf6dbbba37"; // Korvaa tämä omalla OpenWeatherMap API-avaimellasi
  // Lisätään klikkaustapahtuma painikkeeseen
  getForecastButton.addEventListener("click", getWeatherForecast);

  // Funktio, joka hakee ja näyttää sääennusteen
  function getWeatherForecast() {
    const city = cityInput.value.trim(); // Haetaan kaupungin nimi syötekentästä
    // Varmistetaan, että kaupunkikenttä ei ole tyhjä
    if (!city) {
      forecastDiv.innerHTML = "<p>Syötä kaupungin nimi.</p>";
      return;
    }
    // Haetaan säädataa OpenWeatherMap API:sta
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=40&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        // Tarkistetaan, löytyikö kaupunki
        if (data.cod !== "200") {
          forecastDiv.innerHTML =
            "<p>Kaupunkia ei löytynyt. Yritä uudelleen.</p>";
          return;
        }
        // Näytetään sääennustedata
        displayForecast(data);
      })
      .catch((error) => {
        console.error("Virhe haettaessa säätietoja:", error);
        forecastDiv.innerHTML =
          "<p>Virhe säätietojen haussa. Yritä myöhemmin uudelleen.</p>";
      });
  }

  // Funktio, joka näyttää sääennusteen käyttöliittymässä
  function displayForecast(data) {
    forecastDiv.innerHTML = ""; // Tyhjennetään edellinen sääennuste
    const forecastList = data.list;
    for (let i = 0; i < forecastList.length; i += 8) {
      // Haetaan ennuste joka päivältä (joka 24 tunnin välein)
      const forecast = forecastList[i];
      const date = new Date(forecast.dt * 1000); // Muutetaan UNIX-aikaleima päivämääräksi
      const day = date.toLocaleDateString(undefined, { weekday: "long" });
      // Muotoillaan päivämäärä viikonpäiväksi
      const temp = forecast.main.temp; // Haetaan lämpötila
      const weather = forecast.weather[0].description; // Haetaan sään kuvaus

      // Määritetään sopiva emoji sään kuvauksen perusteella
      let weatherEmoji = "";
      if (weather.includes("clear")) {
        weatherEmoji = "☀️"; // Selkeä sää
      } else if (weather.includes("clouds")) {
        weatherEmoji = "☁️"; // Pilvinen sää
      } else if (weather.includes("rain")) {
        weatherEmoji = "🌧️"; // Sateinen sää
      } else if (weather.includes("thunderstorm")) {
        weatherEmoji = "⛈️"; // Ukkosmyrsky
      } else if (weather.includes("snow")) {
        weatherEmoji = "❄️"; // Lumisade
      } else if (weather.includes("mist") || weather.includes("fog")) {
        weatherEmoji = "🌫️"; // Sumu
      } else {
        weatherEmoji = "🌤️"; // Yleisesti hyvä sää
      }

      // Luodaan uusi div jokaisen päivän ennusteelle
      const forecastDayDiv = document.createElement("div");
      forecastDayDiv.classList.add("forecast-day");
      forecastDayDiv.innerHTML = `
        <h2>${day}</h2>
        <p>Lämpötila: ${temp}°C</p>
        <p>Sää: ${weatherEmoji} ${weather}</p>
      `;
      // Lisätään ennuste-elementti pääennustekontaineriin
      forecastDiv.appendChild(forecastDayDiv);
    }
  }
});
