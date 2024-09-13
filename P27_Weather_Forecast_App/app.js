document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements for interaction
  const cityInput = document.getElementById("city"); // Input field for city name
  const getForecastButton = document.getElementById("get-forecast"); // Button to get forecast
  const forecastDiv = document.getElementById("forecast"); // Div to display forecast
  const apiKey = "6ddc93fbc7d0c4a2941a17cf6dbbba37"; // Replace with your OpenWeatherMap API key
  // Add click event listener to the button
  getForecastButton.addEventListener("click", getWeatherForecast);
  // Function to fetch and display weather forecast
  function getWeatherForecast() {
    const city = cityInput.value.trim(); // Get the city name from the input field
    // Ensure the city input is not empty
    if (!city) {
      forecastDiv.innerHTML = "<p>Please enter a city name.</p>";
      return;
    }
    // Fetch weather data from OpenWeatherMap API
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=40&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        // Check if the city was found
        if (data.cod !== "200") {
          forecastDiv.innerHTML = "<p>City not found. Please try again.</p>";
          return;
        }
        // Display the forecast data
        displayForecast(data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        forecastDiv.innerHTML =
          "<p>Error fetching weather data. Please try again later.</p>";
      });
  }
  // Function to display the forecast in the UI
  function displayForecast(data) {
    forecastDiv.innerHTML = ""; // Clear previous forecast
    const forecastList = data.list;
    for (let i = 0; i < forecastList.length; i += 8) {
      // Get forecast for each day (every 24 hours)
      const forecast = forecastList[i];
      const date = new Date(forecast.dt * 1000); // Convert UNIX timestamp to Date
      const day = date.toLocaleDateString(undefined, { weekday: "long" });
      // Format the date as weekday
      const temp = forecast.main.temp; // Get the temperature
      const weather = forecast.weather[0].description; // Get weather description
      // Determine the appropriate emoji based on the weather description
      let weatherEmoji = "";
      if (weather.includes("clear")) {
        weatherEmoji = " "; // Clear weather
      } else if (weather.includes("clouds")) {
        weatherEmoji = " "; // Cloudy weather
      } else if (weather.includes("rain")) {
        weatherEmoji = " "; // Rainy weather
      } else if (weather.includes("thunderstorm")) {
        weatherEmoji = " "; // Thunderstorm
      } else if (weather.includes("snow")) {
        weatherEmoji = " "; // Snowy weather
      } else if (weather.includes("mist") || weather.includes("fog")) {
        weatherEmoji = " "; // Mist or fog
      } else {
        weatherEmoji = " "; // Default: general nice weather
      }
      // Create a new div for each day's forecast
      const forecastDayDiv = document.createElement("div");
      forecastDayDiv.classList.add("forecast-day");
      forecastDayDiv.innerHTML = `
 <h2>${day}</h2>
 <p>Temperature: ${temp}°C</p>
 <p>Weather: ${weatherEmoji} ${weather}</p>
 `;
      // Append the forecast div to the main forecast container
      forecastDiv.appendChild(forecastDayDiv);
    }
  }
});
