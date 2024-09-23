// Odota, kunnes DOM on täysin ladattu ennen kuin suoritat skriptin
document.addEventListener("DOMContentLoaded", () => {
  // Korttien arvot (kaksi kutakin arvoa parien muodostamiseksi)
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
  // Seuraa ensimmäistä ja toista käännettävää korttia
  let firstCard = null;
  let secondCard = null;
  let lockBoard = false; // Estä useat käännöt kortteja tarkistettaessa
  // Valitse pelilauta elementti DOM:sta
  const gameBoard = document.getElementById("game-board");

  /**
   * Funktio pelilaudan luomiseen, korttielementtien dynaaminen generointi
   */
  function createBoard() {
    shuffledCards.forEach((cardValue) => {
      const card = document.createElement("div"); // Luo uusi div jokaiselle kortille
      card.classList.add("card"); // Lisää "card" luokka tyylittelyä varten
      card.dataset.value = cardValue; // Tallenna kortin arvo data-attribuutiksi
      card.addEventListener("click", flipCard); // Liitä kortin kääntöön click-tapahtuma
      gameBoard.appendChild(card); // Lisää kortti pelilaudalle
    });
  }

  /**
   * Funktio kortin kääntämiseen
   * Tämä tarkistaa, onko kyseessä ensimmäinen vai toinen kortti, joka käännetään
   */
  function flipCard() {
    if (lockBoard || this === firstCard) return; // Estä kääntö, jos lauta on lukittu tai sama kortti käännetään kahdesti
    this.classList.add("flipped"); // Lisää flipped-luokka, jotta kortti näkyy käännettynä
    this.textContent = this.dataset.value; // Näytä kortin arvo
    // Tarkista, onko tämä ensimmäinen kortti, joka käännetään
    if (!firstCard) {
      firstCard = this; // Aseta ensimmäinen kortti
      return;
    }
    // Tämä on toinen kortti, joka käännetään
    secondCard = this;
    checkForMatch(); // Tarkista, vastaavatko kaksi korttia toisiaan
  }

  /**
   * Funktio korttien vastaavuuden tarkistamiseen
   */
  function checkForMatch() {
    if (firstCard.dataset.value === secondCard.dataset.value) {
      disableCards(); // Poista korttien käytöstä, jos ne vastaavat
    } else {
      unflipCards(); // Käännä kortit takaisin, jos ne eivät vastaa
    }
  }

  /**
   * Funktio vastaavien korttien poistamiseen käytöstä
   */
  function disableCards() {
    firstCard.classList.add("matched"); // Merkitse ensimmäinen kortti vastaavaksi
    secondCard.classList.add("matched"); // Merkitse toinen kortti vastaavaksi
    resetBoard(); // Nollaa pelilauta seuraavaa kierrosta varten
  }

  /**
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
  }

  /**
   * Funktio pelilaudan nollaamiseen jokaisen kierroksen jälkeen
   * Tämä tyhjentää ensimmäisen ja toisen kortin ja avaa laudan uudelleen
   */
  function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false]; // Nollaa pelitila
  }

  /**
   * Funktio korttien sekoittamiseen käyttäen Fisher-Yates-algoritmia
   */
  function shuffleArray(array) {
    let currentIndex = array.length,
      randomIndex;
    // Sekoita taulukko paikan päällä
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
