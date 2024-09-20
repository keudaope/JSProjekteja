// Odota, että DOM latautuu kokonaan ennen skriptin suorittamista
document.addEventListener("DOMContentLoaded", () => {
  // Valitse DOM-elementit vuorovaikutusta varten
  const birthdateInput = document.getElementById("birthdate"); // Syntymäpäivän syöttö
  const calculateButton = document.getElementById("calculate-button"); // Painike laskennan aloittamiseksi
  const resultDiv = document.getElementById("result"); // Div, johon lasketun iän tulos näytetään
  // Lisää tapahtumankuuntelija painikkeelle klikkaustapahtumalle
  calculateButton.addEventListener("click", calculateAge);
  // Funktio laskee iän valitun syntymäpäivän perusteella
  function calculateAge() {
    const birthdate = new Date(birthdateInput.value); // Hanki syntymäpäivä syöttökentästä
    if (isNaN(birthdate)) {
      // Tarkista, onko syöte kelvollinen päivämäärä
      resultDiv.textContent = "Syötä kelvollinen syntymäpäivä."; // Näytä virheilmoitus
      resultDiv.style.color = "#e74c3c"; // Muuta tekstin väri punaiseksi virheen merkiksi
      return;
    }
    const today = new Date(); // Hanki nykyinen päivämäärä
    let age = today.getFullYear() - birthdate.getFullYear(); // Laske ikä vuosierojen perusteella
    const monthDifference = today.getMonth() - birthdate.getMonth(); // Laske kuukausiero
    const dayDifference = today.getDate() - birthdate.getDate(); // Laske päiväero
    // Säädä ikää, jos syntymäpäivä ei ole vielä tapahtunut tänä vuonna
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      age--;
    }
    // Näytä laskettu ikä tulosdivissä
    resultDiv.textContent = `Ikäsi on ${age} vuotta.`; // Näytä ikä
    resultDiv.style.color = "#2d3748"; // Palauta tekstin väri normaaliksi
  }
});
