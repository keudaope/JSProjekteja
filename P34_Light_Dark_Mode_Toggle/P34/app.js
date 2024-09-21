// Odota, että DOM latautuu kokonaan
document.addEventListener("DOMContentLoaded", () => {
  // Valitse body- ja button-elementit
  const body = document.body;
  const toggleButton = document.getElementById("toggle-button");
  // Lisää tapahtumankuuntelija vaihtaaksesi valotilan ja pimeän tilan välillä
  toggleButton.addEventListener("click", () => {
    // Vaihda pimeän tilan ja valoisan tilan luokkien välillä
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");
    // Päivitä napin teksti aktiivisen tilan perusteella
    if (body.classList.contains("dark-mode")) {
      toggleButton.textContent = "Vaihda valoiseen tilaan"; // Pimeä tila aktiivinen
    } else {
      toggleButton.textContent = "Vaihda pimeään tilaan"; // Valoisa tila aktiivinen
    }
  });
});
