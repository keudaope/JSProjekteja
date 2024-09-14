document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements
  const movieInput = document.getElementById("movie-input");
  const searchMovieButton = document.getElementById("search-movie-button");
  const movieDiv = document.getElementById("movie");
  // Add event listener to the search button
  searchMovieButton.addEventListener("click", fetchMovie);
  /**
   * Fetches movie data from the OMDB API based on user input
   */
  async function fetchMovie() {
    const movieName = movieInput.value.trim(); // Get user input and remove extra spaces
    // Check if input is empty
    if (movieName === "") {
      alert("Please enter a movie name.");
      return;
    }
    try {
      // Fetch movie data from OMDB API
      const response = await fetch(
        `https://www.omdbapi.com/?t=${movieName}&apikey=af239a67`
      );
      const data = await response.json();
      // Check if the movie was found
      if (data.Response === "False") {
        movieDiv.innerHTML = `<p>Movie not found!</p>`;
      } else {
        displayMovie(data); // Call function to display movie details
      }
    } catch (error) {
      // Display error message in case of network issues
      movieDiv.innerHTML = `<p>Could not fetch movie details. Please try again later.</p>`;
    }
  }
  /**
   * Displays the fetched movie details on the page
   * @param {Object} data - Movie data object returned from the API
   *  */
  function displayMovie(data) {
    // Populate the movie div with movie details
    movieDiv.innerHTML = `
 <img src="${data.Poster !== "N/A" ? data.Poster : "default-image.jpg"}" alt="${
      data.Title
    }">
 <div class="movie-details">
 <h2>${data.Title}</h2>
 <p><strong>Release Date:</strong> ${data.Released}</p>
 <p><strong>Genre:</strong> ${data.Genre}</p>
 <p><strong>Plot:</strong> ${data.Plot}</p>
 </div>
 `;
  }
});
