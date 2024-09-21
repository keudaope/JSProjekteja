document.addEventListener("DOMContentLoaded", () => {
  // Haetaan viittaukset DOM-elementteihin
  const nameInput = document.getElementById("name-input");
  const titleInput = document.getElementById("title-input");
  const emailInput = document.getElementById("email-input");
  const phoneInput = document.getElementById("phone-input");
  const generateCardButton = document.getElementById("generate-card-button");
  const businessCard = document.getElementById("business-card");
  const cardName = document.getElementById("card-name");
  const cardTitle = document.getElementById("card-title");
  const cardEmail = document.getElementById("card-email");
  const cardPhone = document.getElementById("card-phone");

  // Tapahtumankuuntelija "Luo käyntikortti" -painikkeelle
  generateCardButton.addEventListener("click", () => {
    // Trimmataan syötteen arvot ylimääräisten välilyöntien poistamiseksi
    const name = nameInput.value.trim();
    const title = titleInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();

    // Varmistetaan, että kaikki kentät on täytetty
    if (name === "" || title === "" || email === "" || phone === "") {
      alert("Täytä kaikki kentät."); // Näytetään varoitus, jos kentät ovat tyhjiä
      return; // Lopetetaan suoritus, jos kenttiä ei ole täytetty
    }

    // Päivitetään käyntikortin tiedot syötteen arvoilla
    cardName.textContent = name;
    cardTitle.textContent = title;
    cardEmail.textContent = email;
    cardPhone.textContent = phone;

    // Näytetään käyntikortti
    businessCard.style.display = "block";
  });
});
