// Odota, että DOM on täysin ladattu ennen skriptin suorittamista
document.addEventListener("DOMContentLoaded", () => {
  // Korttien arvot (kaksi kutakin parien muodostamiseksi)
  const cardsArray = [
    "A", "A",
    "B", "B",
    "C", "C",
    "D", "D",
    "E", "E",
    "F", "F",
    "G", "G",
    "H", "H",
  ];
  // Sekoita korttien arvot satunnaista pelilautaa varten
  let shuffledCards = shuffleArray(cardsArray);
  // Seuraa ensimmäistä ja toista korttia, jotka käännetään
  let firstCard = null;
  let secondCard = null;
  let lockBoard = false; // Estä useita käännöksiä korttien tarkistamisen aikana
  // Valitse pelilaudan elementti DOM:sta
  const gameBoard = document.getElementById("game-board");
  /**
    * Funktio pelilaudan luomiseksi korttielementtien dynaamisella generoinnilla
    */
  function createBoard() {
    shuffledCards.forEach((cardValue) => {
      const card = document.createElement("div"); // Luo uusi div jokaiselle kortille
      card.classList.add("card"); // Lisää "card"-luokka tyylitystä varten
      card.dataset.value = cardValue; // Tallenna kortin arvo data-attribuutiksi
      card.addEventListener("click", flipCard); // Liitä klikkaustapahtuma kortin kääntämiseksi
      gameBoard.appendChild(card); // Lisää kortti pelilaudalle
    });
  }
  /**
   * Funktio kortin kääntämisen käsittelemiseksi
   * Tarkistaa, onko kyseessä ensimmäinen vai toinen käännettävä kortti
   */
  function flipCard() {
    if (lockBoard || this === firstCard) return; // Estä kääntö, jos pelilauta on lukittu tai sama kortti käännetään kahdesti
    this.classList.add("flipped"); // Lisää "flipped"-luokka kortin näyttämiseksi
    this.textContent = this.dataset.value; // Näytä kortin arvo
    // Tarkista, onko tämä ensimmäinen käännettävä kortti
    if (!firstCard) {
      firstCard = this; // Aseta ensimmäinen kortti
      return;
    }
    // Tämä on toinen käännettävä kortti
    secondCard = this;
    checkForMatch(); // Tarkista, ovatko kaksi korttia pari
  }
  /**
   * Funktio tarkistamaan, ovatko kaksi korttia pari
   */
  function checkForMatch() {
    if (firstCard.dataset.value === secondCard.dataset.value) {
      disableCards(); // Poista korttien aktiivisuus, jos ne ovat pari
    } else {
      unflipCards(); // Käännä kortit takaisin, jos ne eivät ole pari
    }
  }
  /**
   * Funktio pariksi tulleiden korttien poistamiseksi käytöstä
   */
  function disableCards() {
    firstCard.classList.add("matched"); // Merkitse ensimmäinen kortti pariksi
    secondCard.classList.add("matched"); // Merkitse toinen kortti pariksi
    resetBoard(); // Nollaa pelilauta seuraavaa kierrosta varten
  }
  /**
        * Funktio kääntämään kortit takaisin, jos ne eivät ole pari
        * Lisätään pieni viive, jotta käyttäjä näkee kortit ennen kuin ne käännetään takaisin
        */
  function unflipCards() {
    lockBoard = true; // Lukitse pelilauta, jotta muita kortteja ei voi kääntää
    setTimeout(() => {
      firstCard.classList.remove("flipped"); // Poista "flipped"-luokka ensimmäisestä kortista
      secondCard.classList.remove("flipped"); // Poista "flipped"-luokka toisesta kortista
      firstCard.textContent = ""; // Piilota ensimmäisen kortin arvo
      secondCard.textContent = ""; // Piilota toisen kortin arvo
      resetBoard(); // Nollaa pelilauta seuraavaa kierrosta varten
    }, 1000); // 1 sekunnin viive ennen korttien kääntämistä takaisin
  }
  /**
   * Funktio pelilaudan tilan nollaamiseksi jokaisen kierroksen jälkeen
   * Tämä tyhjentää ensimmäisen ja toisen kortin sekä avaa pelilaudan
   */
  function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false]; // Nollaa pelin tila
  }
  /**
   * Funktio korttien sekoittamiseksi Fisher-Yates-algoritmilla
   */
  function shuffleArray(array) {
    let currentIndex = array.length,
      randomIndex;
    // Sekoita taulukko paikallaan
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array; // Palauta sekoitettu taulukko
  }
  // Luo pelilauta, kun sivu on ladattu
  createBoard();
});
