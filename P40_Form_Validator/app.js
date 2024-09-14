document.addEventListener("DOMContentLoaded", () => {
  // Haetaan lomake ja kaikki syöttökentät
  const form = document.getElementById("form");
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");
  // Haetaan div-elementit, joihin virheilmoitukset tulevat
  const usernameError = document.getElementById("username-error");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  const confirmPasswordError = document.getElementById(
    "confirm-password-error"
  );
  // Lisätään tapahtumankuuntelija lomakkeen lähettämistapahtumalle
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Estetään lomakkeen perinteinen lähetys
    validateInputs(); // Kutsutaan validointifunktio
  });
  // Funktio kaikkien syöttökenttien validointiin
  function validateInputs() {
    let isValid = true; // Määritellään lomake aluksi validiksi
    // Validointi: käyttäjänimi ei saa olla tyhjä
    if (username.value.trim() === "") {
      usernameError.textContent = "Käyttäjänimi on pakollinen"; // Näytetään virheilmoitus
      isValid = false; // Määritellään lomake virheelliseksi
    } else {
      usernameError.textContent = ""; // Tyhjennetään mahdolliset aiemmat virheilmoitukset
    }
    // Validointi: sähköpostin pitää vastata oikeaa muotoa
    if (!validateEmail(email.value.trim())) {
      emailError.textContent = "Virheellinen sähköpostiosoite"; // Näytetään virheilmoitus, jos sähköposti on virheellinen
      isValid = false; // Määritellään lomake virheelliseksi
    } else {
      emailError.textContent = ""; // Tyhjennetään mahdolliset aiemmat virheilmoitukset
    }
    // Validointi: salasanan on oltava vähintään 6 merkkiä pitkä
    if (password.value.trim().length < 6) {
      passwordError.textContent =
        "Salasanan on oltava vähintään 6 merkkiä pitkä"; // Näytetään virheilmoitus salasanasta
      isValid = false; // Määritellään lomake virheelliseksi
    } else {
      passwordError.textContent = ""; // Tyhjennetään salasanan virheilmoitus, jos se on validi
    }
    // Validointi: varmista salasana -kentän täytyy vastata salasanaa
    if (confirmPassword.value.trim() !== password.value.trim()) {
      confirmPasswordError.textContent = "Salasanat eivät täsmää"; // Näytetään virheilmoitus, jos salasanat eivät täsmää
      isValid = false; // Määritellään lomake virheelliseksi
    } else {
      confirmPasswordError.textContent = ""; // Tyhjennetään virheilmoitus, jos salasanat täsmäävät
    }
    // Jos kaikki kentät ovat valideja, näytetään onnistumisviesti
    if (isValid) {
      alert("Lomake lähetetty onnistuneesti!"); // Näytetään onnistumisviesti, jos lomake on validi
    }
  }
  // Apuohjelma sähköpostin validointiin säännöllisellä lausekkeella
  function validateEmail(email) {
    // Säännöllinen lauseke tarkistamaan, onko sähköposti oikeassa muodossa
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email); // Palauttaa true, jos sähköposti on validi, muuten false
  }
});
