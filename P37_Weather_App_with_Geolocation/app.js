document.addEventListener("DOMContentLoaded", () => {
  const getWeatherButton = document.getElementById("get-weather-button"); //Select button element
  const weatherInfoDiv = document.getElementById("weather-info"); // Select div for displaying weather info
  const apiKey = "6ddc93fbc7d0c4a2941a17cf6dbbba37"; // Replace with your OpenWeatherMap API key
  // Add click event listener to the button
  getWeatherButton.addEventListener("click", getWeather);
  /**
   * Function to get the weather based on user's location.
   */
  function getWeather() {
    // Check if the browser supports geolocation
    if (navigator.geolocation) {
      // Use geolocation to get the user's coordinates
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude; // Get latitude
          const lon = position.coords.longitude; // Get longitude
          // Fetch weather data from OpenWeather API using latitude and longitude
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
          )
            .then((response) => response.json()) // Convert response to JSON
            .then((data) => {
              displayWeather(data); // Call function to display weather data
            })
            .catch((error) => {
              console.error("Error fetching weather data:", error);
              weatherInfoDiv.textContent =
                "Error fetching weather data. Please try again later.";
            });
        },
        (error) => {
          console.error("Geolocation error:", error); // Log any geolocation errors
          weatherInfoDiv.textContent =
            "Unable to retrieve your location. Please try again."; // Display error message
        }
      );
    } else {
      weatherInfoDiv.textContent =
        "Geolocation is not supported by your browser."; // Handle cases where geolocation is unsupported
    }
  }
  /**
   * Function to display the weather data in the weatherInfoDiv.
   * @param {Object} data - Weather data from the API.
   */
  function displayWeather(data) {
    weatherInfoDiv.innerHTML = `
 <h2>${data.name}</h2> <!-- Display the city name -->
 <p>Temperature: ${data.main.temp}°C</p> <!-- Display the temperature -->
 <p>Weather: ${data.weather[0].description}</p> <!-- Display the weather description -->
 `;
  }
});
