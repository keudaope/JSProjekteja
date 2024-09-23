<<<<<<< HEAD
// Odota, että DOM on täysin ladattu ennen skriptin suorittamista
document.addEventListener("DOMContentLoaded", () => {
  // Korttien arvot (kaksi kutakin parien muodostamiseksi)
=======
// Odota, kunnes DOM on täysin ladattu ennen kuin suoritat skriptin
document.addEventListener("DOMContentLoaded", () => {
  // Korttien arvot (kaksi kutakin arvoa parien muodostamiseksi)
>>>>>>> 475e911a3c77800f46bc3691df0ebc465854a671
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
<<<<<<< HEAD
  // Seuraa ensimmäistä ja toista korttia, jotka käännetään
  let firstCard = null;
  let secondCard = null;
  let lockBoard = false; // Estä useita käännöksiä korttien tarkistamisen aikana
  // Valitse pelilaudan elementti DOM:sta
=======
  // Seuraa ensimmäistä ja toista käännettävää korttia
  let firstCard = null;
  let secondCard = null;
  let lockBoard = false; // Estä useat käännöt kortteja tarkistettaessa
  // Valitse pelilauta elementti DOM:sta
>>>>>>> 475e911a3c77800f46bc3691df0ebc465854a671
  const gameBoard = document.getElementById("game-board");

  /**
<<<<<<< HEAD
    * Funktio pelilaudan luomiseksi korttielementtien dynaamisella generoinnilla
    */
  function createBoard() {
    shuffledCards.forEach((cardValue) => {
      const card = document.createElement("div"); // Luo uusi div jokaiselle kortille
      card.classList.add("card"); // Lisää "card"-luokka tyylitystä varten
      card.dataset.value = cardValue; // Tallenna kortin arvo data-attribuutiksi
      card.addEventListener("click", flipCard); // Liitä klikkaustapahtuma kortin kääntämiseksi
=======
   * Funktio pelilaudan luomiseen, korttielementtien dynaaminen generointi
   */
  function createBoard() {
    shuffledCards.forEach((cardValue) => {
      const card = document.createElement("div"); // Luo uusi div jokaiselle kortille
      card.classList.add("card"); // Lisää "card" luokka tyylittelyä varten
      card.dataset.value = cardValue; // Tallenna kortin arvo data-attribuutiksi
      card.addEventListener("click", flipCard); // Liitä kortin kääntöön click-tapahtuma
>>>>>>> 475e911a3c77800f46bc3691df0ebc465854a671
      gameBoard.appendChild(card); // Lisää kortti pelilaudalle
    });
  }

  /**
<<<<<<< HEAD
   * Funktio kortin kääntämisen käsittelemiseksi
   * Tarkistaa, onko kyseessä ensimmäinen vai toinen käännettävä kortti
   */
  function flipCard() {
    if (lockBoard || this === firstCard) return; // Estä kääntö, jos pelilauta on lukittu tai sama kortti käännetään kahdesti
    this.classList.add("flipped"); // Lisää "flipped"-luokka kortin näyttämiseksi
    this.textContent = this.dataset.value; // Näytä kortin arvo
    // Tarkista, onko tämä ensimmäinen käännettävä kortti
=======
   * Funktio kortin kääntämiseen
   * Tämä tarkistaa, onko kyseessä ensimmäinen vai toinen kortti, joka käännetään
   */
  function flipCard() {
    if (lockBoard || this === firstCard) return; // Estä kääntö, jos lauta on lukittu tai sama kortti käännetään kahdesti
    this.classList.add("flipped"); // Lisää flipped-luokka, jotta kortti näkyy käännettynä
    this.textContent = this.dataset.value; // Näytä kortin arvo
    // Tarkista, onko tämä ensimmäinen kortti, joka käännetään
>>>>>>> 475e911a3c77800f46bc3691df0ebc465854a671
    if (!firstCard) {
      firstCard = this; // Aseta ensimmäinen kortti
      return;
    }
<<<<<<< HEAD
    // Tämä on toinen käännettävä kortti
    secondCard = this;
    checkForMatch(); // Tarkista, ovatko kaksi korttia pari
=======
    // Tämä on toinen kortti, joka käännetään
    secondCard = this;
    checkForMatch(); // Tarkista, vastaavatko kaksi korttia toisiaan
>>>>>>> 475e911a3c77800f46bc3691df0ebc465854a671
  }

  /**
<<<<<<< HEAD
   * Funktio tarkistamaan, ovatko kaksi korttia pari
   */
  function checkForMatch() {
    if (firstCard.dataset.value === secondCard.dataset.value) {
      disableCards(); // Poista korttien aktiivisuus, jos ne ovat pari
    } else {
      unflipCards(); // Käännä kortit takaisin, jos ne eivät ole pari
=======
   * Funktio korttien vastaavuuden tarkistamiseen
   */
  function checkForMatch() {
    if (firstCard.dataset.value === secondCard.dataset.value) {
      disableCards(); // Poista korttien käytöstä, jos ne vastaavat
    } else {
      unflipCards(); // Käännä kortit takaisin, jos ne eivät vastaa
>>>>>>> 475e911a3c77800f46bc3691df0ebc465854a671
    }
  }

  /**
<<<<<<< HEAD
   * Funktio pariksi tulleiden korttien poistamiseksi käytöstä
   */
  function disableCards() {
    firstCard.classList.add("matched"); // Merkitse ensimmäinen kortti pariksi
    secondCard.classList.add("matched"); // Merkitse toinen kortti pariksi
=======
   * Funktio vastaavien korttien poistamiseen käytöstä
   */
  function disableCards() {
    firstCard.classList.add("matched"); // Merkitse ensimmäinen kortti vastaavaksi
    secondCard.classList.add("matched"); // Merkitse toinen kortti vastaavaksi
>>>>>>> 475e911a3c77800f46bc3691df0ebc465854a671
    resetBoard(); // Nollaa pelilauta seuraavaa kierrosta varten
  }

  /**
<<<<<<< HEAD
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
=======
   * Funktio korttien takaisin kääntämiseen, jos ne eivät vastaa
   * Pieni viive lisätään, jotta käyttäjä ehtii nähdä kortit ennen kääntämistä
   */
  function unflipCards() {
    lockBoard = true; // Lukitse pelilauta estämään useampia käännöksiä
    setTimeout(() => {
      firstCard.classList.remove("flipped"); // Poista flipped-luokka ensimmäisestä kortista
      secondCard.classList.remove("flipped"); // Poista flipped-luokka toisesta kortista
      firstCard.textContent = ""; // Piilota ensimmäisen kortin arvo
      secondCard.textContent = ""; // Piilota toisen kortin arvo
      resetBoard(); // Nollaa pelilauta seuraavaa kierrosta varten
    }, 1000); // 1 sekunnin viive ennen takaisin kääntämistä
>>>>>>> 475e911a3c77800f46bc3691df0ebc465854a671
  }

  /**
<<<<<<< HEAD
   * Funktio pelilaudan tilan nollaamiseksi jokaisen kierroksen jälkeen
   * Tämä tyhjentää ensimmäisen ja toisen kortin sekä avaa pelilaudan
   */
  function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false]; // Nollaa pelin tila
=======
   * Funktio pelilaudan nollaamiseen jokaisen kierroksen jälkeen
   * Tämä tyhjentää ensimmäisen ja toisen kortin ja avaa laudan uudelleen
   */
  function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false]; // Nollaa pelitila
>>>>>>> 475e911a3c77800f46bc3691df0ebc465854a671
  }

  /**
<<<<<<< HEAD
   * Funktio korttien sekoittamiseksi Fisher-Yates-algoritmilla
=======
   * Funktio korttien sekoittamiseen käyttäen Fisher-Yates-algoritmia
>>>>>>> 475e911a3c77800f46bc3691df0ebc465854a671
   */
  function shuffleArray(array) {
    let currentIndex = array.length,
      randomIndex;
<<<<<<< HEAD
    // Sekoita taulukko paikallaan
=======
    // Sekoita taulukko paikan päällä
>>>>>>> 475e911a3c77800f46bc3691df0ebc465854a671
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
<<<<<<< HEAD
=======

>>>>>>> 475e911a3c77800f46bc3691df0ebc465854a671
  // Luo pelilauta, kun sivu on ladattu
  createBoard();
});
