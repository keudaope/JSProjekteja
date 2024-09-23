document.addEventListener("DOMContentLoaded", () => {
  // Valitaan kaikki kuvat slider-konteinerin sisältä
  const images = document.querySelectorAll(".slider img");

  // Valitaan navigointipainikkeet
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  // Muuttuja, joka pitää kirjaa nykyisestä aktiivisesta kuvan indeksistä
  let currentIndex = 0;
  // Funktio, joka näyttää kuvan indeksin perusteella
  function showImage(index) {
    // Käydään kaikki kuvat läpi
    images.forEach((img, i) => {
      // Poistetaan 'active'-luokka kaikista kuvista
      img.classList.remove("active");

      // Lisätään 'active'-luokka vain kuvalle, joka vastaa nykyistä indeksiä
      if (i === index) {
        img.classList.add("active");
      }
    });
  }
  // Funktio näyttää seuraavan kuvan sarjassa
  function showNextImage() {
    // Kasvatetaan nykyistä indeksiä ja palataan ensimmäiseen kuvaan, jos indeksi ylittää viimeisen kuvan indeksin
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex); // Kutsutaan showImage-funktiota päivittämään näkymä
  }
  // Funktio näyttää edellisen kuvan sarjassa
  function showPrevImage() {
    // Vähennetään nykyistä indeksiä ja palataan viimeiseen kuvaan, jos indeksi menee alle nollan
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex); // Kutsutaan showImage-funktiota päivittämään näkymä
  }
  // Lisätään tapahtumakuuntelijat navigointipainikkeisiin
  prevButton.addEventListener("click", showPrevImage); // Näytetään edellinen kuva, kun "Edellinen" painiketta klikataan
  nextButton.addEventListener("click", showNextImage); // Näytetään seuraava kuva, kun "Seuraava" painiketta klikataan
  // Näytetään aluksi ensimmäinen kuva
  showImage(currentIndex); // Näytetään oletuksena ensimmäinen kuva, kun sivu latautuu
});
