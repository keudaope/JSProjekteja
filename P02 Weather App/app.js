// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Select the form element used for inputting the city name
  const weatherForm = document.getElementById("weather-form");

  // Select the input field where users will type the city name
  const cityInput = document.getElementById("city-input");

  // Select the div where the fetched weather information will be displayed
  const weatherInfo = document.getElementById("weather-info");
  // Define the API key for OpenWeatherMap (replace 'your_api_key_here' with your actual API key)
  const apiKey = "be2d23aa0e1b4ab382b53831241309";

  // Base URL for the weather API to which the city name will be appended
  const apiBaseUrl = "http://api.weatherapi.com/v1/current.json";
  /**
    * Fetches weather data from the OpenWeatherMap API for the provided city.
    * @param {string} city - The name of the city for which the weather data is
   requested.
    */
  function fetchWeather(city) {
    // Build the complete API URL using the city name, API key, and metric units for temperature
    const apiUrl = `${apiBaseUrl}?key=${apiKey}&q=${city}`;
    // Use the Fetch API to make a GET request to the weather API
    fetch(apiUrl)
      .then((response) => {
        // Check if the response from the API is successful (status code 200-299)
        if (!response.ok) {
          // If the city is not found or there's an error, throw an error message
          throw new Error("City not found");
        }
        // Convert the response into JSON format
        return response.json();
      })
      .then((data) => {
        // If the data is successfully fetched, display it using the displayWeather function
        displayWeather(data);
      })
      .catch((error) => {
        // If an error occurs (e.g., city not found), display an error message in the weatherInfo div
        weatherInfo.innerHTML = `<p>Error: ${error.message}</p>`;
        // Make the error message visible by adding the 'visible' class
        weatherInfo.classList.add("visible");
      });
  }
  /**
    * Displays the fetched weather data in the weather info section of the
   page.
    * @param {object} data - The weather data returned by the API.
    */
  async function displayWeather(data) {
    //Clear any previous weather information before displaying new data
    weatherInfo.innerHTML = "";
    // Extract key information from the API response (city name, temperature, weather description, etc.)
    const cityName = data.location.name;
    const temperature = data.current.temp_c;
    const condition = data.current.condition.text;
    const latitude = data.location.lat;
    const longitude = data.location.lon;
    // Construct HTML to display the weather information dynamically
    weatherInfo.innerHTML = `
    <p><strong>City:</strong> ${cityName}</p>
    <p><strong>Temperature:</strong> ${temperature}°C</p>
    <p><strong>Condition:</strong> ${condition}</p>
    <p><strong>Latitude:</strong> ${latitude}</p>
    <p><strong>Longitude:</strong> ${longitude}</p>
    `;
    // Make the weather information visible with a fade-in effect by adding the 'visible' class
    weatherInfo.classList.add("visible");
  }
  /**
    * Handles the form submission to get the weather data for the entered city.
    * @param {Event} event - The submit event triggered when the form is
   submitted.
    */
  weatherForm.addEventListener("submit", (event) => {
    // Prevent the default form submission, which would reload the page
    event.preventDefault();
    // Get the value entered in the city input field and remove any extra spaces
    const city = cityInput.value.trim();
    // If the user has entered a city name, proceed to fetch the weather data
    if (city) {
      fetchWeather(city);
    } else {
      // If no city is entered, display a message asking the user to enter a city name
      weatherInfo.innerHTML = "<p>Please enter a city name</p>";
      // Make the message visible by adding the 'visible' class
      weatherInfo.classList.add("visible");
    }
  });
});
