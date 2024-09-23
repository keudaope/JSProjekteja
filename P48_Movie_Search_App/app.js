document.addEventListener("DOMContentLoaded", () => {
  // Valitse DOM-elementit
  const movieInput = document.getElementById("movie-input");
  const searchMovieButton = document.getElementById("search-movie-button");
  const movieDiv = document.getElementById("movie");
  // Lisää tapahtumankuuntelija hakupainikkeelle
  searchMovieButton.addEventListener("click", fetchMovie);

  /**
   * Hakee elokuvatietoja OMDB API:sta käyttäjän syötteen perusteella
   */
  async function fetchMovie() {
    const movieName = movieInput.value.trim(); // Hakee käyttäjän syötteen ja poistaa ylimääräiset välilyönnit
    // Tarkista, onko syöte tyhjä
    if (movieName === "") {
      alert("Anna elokuvan nimi.");
      return;
    }
    try {
      // Hakee elokuvatietoja OMDB API:sta
      const response = await fetch(
        `https://www.omdbapi.com/?t=${movieName}&apikey=af239a67`
      );
      const data = await response.json();
      // Tarkistaa, löytyikö elokuva
      if (data.Response === "False") {
        movieDiv.innerHTML = `<p>Elokuvaa ei löytynyt!</p>`;
      } else {
        displayMovie(data); // Kutsuu funktiota näyttämään elokuvatiedot
      }
    } catch (error) {
      // Näyttää virheilmoituksen verkkovirheiden tapauksessa
      movieDiv.innerHTML = `<p>Elokuvatietoja ei voitu hakea. Yritä uudelleen myöhemmin.</p>`;
    }
  }

  /**
   * Näyttää haetut elokuvatiedot sivulla
   * @param {Object} data - Elokuvatieto-objekti, joka palautetaan API:sta
   *  */
  function displayMovie(data) {
    // Täyttää elokuvadivin elokuvatiedoilla
    movieDiv.innerHTML = `
 <img src="${data.Poster !== "N/A" ? data.Poster : "default-image.jpg"}" alt="${
      data.Title
    }">
 <div class="movie-details">
 <h2>${data.Title}</h2>
 <p><strong>Julkaisupäivä:</strong> ${data.Released}</p>
 <p><strong>Genre:</strong> ${data.Genre}</p>
 <p><strong>Juoni:</strong> ${data.Plot}</p>
 </div>
 `;
  }
});
