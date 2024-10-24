// Odottaa, että DOM latautuu kokonaan ennen kuin skripti suoritetaan, jotta elementtejä voidaan käsitellä
document.addEventListener("DOMContentLoaded", () => {
  // Visailukysymykset tallennetaan taulukkoon, joka sisältää objekteja
  const questions = [
    {
      question: "Mikä on maailman suurin valtameri?",
      options: ["Atlantti", "Intian valtameri", "Tyynimeri", "Jäämeri"],
      answer: "Tyynimeri",
    },
    {
      question: "Kuka maalasi 'Mona Lisan'?",
      options: [
        "Vincent van Gogh",
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Claude Monet",
      ],
      answer: "Leonardo da Vinci",
    },
    {
      question: "Mikä on Suomen pääkaupunki?",
      options: ["Helsinki", "Tampere", "Turku", "Oulu"],
      answer: "Helsinki",
    },
    {
      question: "Minkä värinen on smaragdi?",
      options: ["Sininen", "Punainen", "Vihreä", "Keltainen"],
      answer: "Vihreä",
    },
    {
      question: "Mikä on Afrikan suurin maa pinta-alaltaan?",
      options: ["Sudan", "Egypti", "Algeria", "Nigeria"],
      answer: "Algeria",
    },
    {
      question: "Kuka on Harry Potter -kirjojen kirjoittaja?",
      options: [
        "J.K. Rowling",
        "Stephen King",
        "J.R.R. Tolkien",
        "George R.R. Martin",
      ],
      answer: "J.K. Rowling",
    },
    {
      question: "Mikä eläin on ihmisen lähin sukulainen?",
      options: ["Gorilla", "Simpanssi", "Oranki", "Bonobo"],
      answer: "Simpanssi",
    },
    {
      question:
        "Mikä on planeetta, joka tunnetaan myös 'punaisena planeettana'?",
      options: ["Venus", "Jupiter", "Mars", "Saturnus"],
      answer: "Mars",
    },
    {
      question: "Missä kaupungissa Vapaudenpatsas sijaitsee?",
      options: ["New York", "Washington D.C.", "Boston", "Chicago"],
      answer: "New York",
    },
    {
      question: "Mikä on ihmisen kehon suurin elin?",
      options: ["Sydän", "Iho", "Maksa", "Keuhkot"],
      answer: "Iho",
    },
    {
      question: "Kuka oli Yhdysvaltojen ensimmäinen presidentti?",
      options: [
        "Abraham Lincoln",
        "George Washington",
        "Thomas Jefferson",
        "John Adams",
      ],
      answer: "George Washington",
    },
    {
      question: "Mikä on maailman korkein vuori?",
      options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
      answer: "Mount Everest",
    },
    {
      question: "Mikä on maailman pisin joki?",
      options: ["Niili", "Amazon", "Jangtse", "Mississippi"],
      answer: "Amazon",
    },
    {
      question: "Mikä oli Titanicin määränpää?",
      options: ["New York", "Lontoo", "Liverpool", "Belfast"],
      answer: "New York",
    },
    {
      question: "Kuka keksi hehkulampun?",
      options: [
        "Thomas Edison",
        "Nikola Tesla",
        "Alexander Graham Bell",
        "Albert Einstein",
      ],
      answer: "Thomas Edison",
    },
    {
      question: "Mikä maa tunnetaan myös nimellä Nippon?",
      options: ["Kiina", "Japani", "Korea", "Thaimaa"],
      answer: "Japani",
    },
    {
      question: "Mikä on kemiallisen alkuaineen hapen symboli?",
      options: ["H", "O", "C", "N"],
      answer: "O",
    },
    {
      question: "Mikä kieli on maailman puhutuin äidinkielenä?",
      options: ["Espanja", "Englanti", "Mandariinikiina", "Hindi"],
      answer: "Mandariinikiina",
    },
    {
      question: "Mikä on maailman väkirikkain kaupunki?",
      options: ["Tokio", "New York", "Shanghai", "Mumbai"],
      answer: "Tokio",
    },
    {
      question: "Mikä on Euroopan pisin joki?",
      options: ["Tonava", "Volga", "Rein", "Seine"],
      answer: "Volga",
    },
    {
      question: "Mikä on ainoa maa, joka kattaa koko maanosan?",
      options: ["Australia", "Kanada", "Venäjä", "Brasilia"],
      answer: "Australia",
    },
    {
      question: "Mikä oli ensimmäinen eläin avaruudessa?",
      options: ["Koira", "Kissa", "Apina", "Rotta"],
      answer: "Koira",
    },
    {
      question: "Kuka oli Neuvostoliiton ensimmäinen johtaja?",
      options: [
        "Josef Stalin",
        "Leonid Brežnev",
        "Vladimir Lenin",
        "Mihail Gorbatšov",
      ],
      answer: "Vladimir Lenin",
    },
    {
      question: "Mikä on Afrikan suurin järvi?",
      options: [
        "Victoriajärvi",
        "Tanganjikajärvi",
        "Malawijärvi",
        "Chad-järvi",
      ],
      answer: "Victoriajärvi",
    },
    {
      question: "Kuka on kirjoittanut 'Romeo ja Julia'?",
      options: [
        "William Shakespeare",
        "Charles Dickens",
        "Mark Twain",
        "Jane Austen",
      ],
      answer: "William Shakespeare",
    },
    {
      question:
        "Mikä oli ensimmäinen planeetta, joka löydettiin teleskoopilla?",
      options: ["Uranus", "Neptunus", "Saturnus", "Jupiter"],
      answer: "Uranus",
    },
    {
      question: "Mikä eläin tunnetaan nimellä 'aavikon laiva'?",
      options: ["Dromedaari", "Kameli", "Hevonen", "Aasi"],
      answer: "Kameli",
    },
    {
      question: "Mikä on maailman tihein metsä?",
      options: [
        "Amazonin sademetsä",
        "Kongon sademetsä",
        "Taiga",
        "Sundarbans",
      ],
      answer: "Amazonin sademetsä",
    },
    {
      question: "Mikä maa voitti jalkapallon maailmanmestaruuden vuonna 2018?",
      options: ["Brasilia", "Saksa", "Ranska", "Argentiina"],
      answer: "Ranska",
    },
    {
      question: "Missä kaupungissa Eiffel-torni sijaitsee?",
      options: ["Lontoo", "Pariisi", "Berliini", "Rooma"],
      answer: "Pariisi",
    },
    {
      question: "Mikä on kemiallisen alkuaineen kullan symboli?",
      options: ["Ag", "Au", "Cu", "Fe"],
      answer: "Au",
    },
    {
      question: "Mikä on ihmisen kehon pisin luu?",
      options: ["Reisiluu", "Käsivarrenluu", "Sääriluu", "Selkäranka"],
      answer: "Reisiluu",
    },
    {
      question: "Mikä maa tunnetaan tulppaanien maana?",
      options: ["Hollanti", "Ranska", "Belgia", "Saksa"],
      answer: "Hollanti",
    },
    {
      question: "Mikä on suurin sisämeri maailmassa?",
      options: ["Kaspianmeri", "Mustameri", "Välimeri", "Kuollutmeri"],
      answer: "Kaspianmeri",
    },
    {
      question: "Mikä eläin tunnetaan myös nimellä 'vesinorsu'?",
      options: ["Valas", "Virtahepo", "Merileijona", "Manaatti"],
      answer: "Virtahepo",
    },
    {
      question: "Kuka oli Kreikan mytologian jumalten kuningas?",
      options: ["Poseidon", "Zeus", "Hades", "Ares"],
      answer: "Zeus",
    },
    {
      question: "Missä maassa järjestettiin ensimmäiset olympialaiset?",
      options: ["Kreikka", "Italia", "Ranska", "Saksa"],
      answer: "Kreikka",
    },
    {
      question: "Mikä on maailman suurin aavikko?",
      options: ["Sahara", "Arabian aavikko", "Antarktis", "Gobi"],
      answer: "Antarktis",
    },
    {
      question: "Mikä kaupunki tunnetaan nimellä 'Big Apple'?",
      options: ["Los Angeles", "Miami", "New York", "Chicago"],
      answer: "New York",
    },
    {
      question: "Mikä maa on tunnettu fjordeistaan?",
      options: ["Ruotsi", "Islanti", "Norja", "Tanska"],
      answer: "Norja",
    },
    {
      question: "Mikä maapallon kerros on kiinteä ja ulommainen?",
      options: ["Ydin", "Kuori", "Vaippa", "Kromosfääri"],
      answer: "Kuori",
    },
    {
      question: "Kuka keksi puhelimen?",
      options: [
        "Alexander Graham Bell",
        "Thomas Edison",
        "Nikola Tesla",
        "Isaac Newton",
      ],
      answer: "Alexander Graham Bell",
    },
    {
      question: "Mikä eläin on tunnettu 'Afrikan suurena kissana'?",
      options: ["Leijona", "Tiikeri", "Jaguaari", "Pantteri"],
      answer: "Leijona",
    },
    {
      question: "Mikä maa tunnetaan myös nimellä 'alppimaa'?",
      options: ["Sveitsi", "Itävalta", "Ranska", "Italia"],
      answer: "Sveitsi",
    },
    {
      question: "Mikä on maapallon suurin saari?",
      options: ["Grönlanti", "Australia", "Borneo", "Madagaskar"],
      answer: "Grönlanti",
    },
    {
      question: "Kuka oli Albert Einstein?",
      options: ["Maalari", "Fyysikko", "Matemaatikko", "Filosoofi"],
      answer: "Fyysikko",
    },
    {
      question: "Mikä on Yhdistyneiden kansakuntien lyhenne?",
      options: ["WTO", "UNESCO", "WHO", "YK"],
      answer: "YK",
    },
    {
      question: "Mikä on maailman korkein vesiputous?",
      options: [
        "Niagaran putoukset",
        "Iguazún putoukset",
        "Angel-putous",
        "Victoria-putoukset",
      ],
      answer: "Angel-putous",
    },
    {
      question: "Missä maassa sijaitsee Machu Picchu?",
      options: ["Chile", "Brasilia", "Peru", "Argentiina"],
      answer: "Peru",
    },
    {
      question: "Mikä kieli on virallinen kieli Brasiliassa?",
      options: ["Espanja", "Portugali", "Ranska", "Italia"],
      answer: "Portugali",
    },
    {
      question: "Kuka oli ensimmäinen nainen avaruudessa?",
      options: [
        "Sally Ride",
        "Valentina Tereškova",
        "Mae Jemison",
        "Yuri Gagarin",
      ],
      answer: "Valentina Tereškova",
    },
    {
      question: "Mikä on pisin ihmisen luu?",
      options: ["Reisiluu", "Sääriluu", "Olkaluu", "Selkäranka"],
      answer: "Reisiluu",
    },
    {
      question: "Mikä on Rooman kuuluisin amfiteatteri?",
      options: ["Circus Maximus", "Pantheon", "Colosseum", "Forum Romanum"],
      answer: "Colosseum",
    },
    {
      question: "Mikä maa tunnetaan Saharasta?",
      options: ["Marokko", "Algeria", "Sudan", "Libya"],
      answer: "Algeria",
    },
    {
      question: "Missä sijaitsee Taj Mahal?",
      options: ["Pakistan", "Intia", "Nepal", "Bangladesh"],
      answer: "Intia",
    },
    {
      question: "Mikä on Euroopan korkein vuori?",
      options: ["Mont Blanc", "Elbrus", "Matterhorn", "Zugspitze"],
      answer: "Elbrus",
    },
    {
      question: "Mikä on Suomen suurin järvi?",
      options: ["Inarijärvi", "Päijänne", "Oulujärvi", "Saimaa"],
      answer: "Saimaa",
    },
    {
      question: "Mikä on maailman nopein maaeläin?",
      options: ["Leijona", "Tiikeri", "Gepardi", "Susi"],
      answer: "Gepardi",
    },
    {
      question: "Mikä on Afrikan suurin eläin?",
      options: ["Leijona", "Sarvikuono", "Virtahepo", "Afrikannorsu"],
      answer: "Afrikannorsu",
    },
    {
      question: "Mikä on Euroopan pisin joki?",
      options: ["Tonava", "Volga", "Rein", "Seine"],
      answer: "Volga",
    },
    {
      question: "Mikä maa on tunnettu Eiffel-tornista?",
      options: ["Italia", "Ranska", "Saksa", "Espanja"],
      answer: "Ranska",
    },
    {
      question:
        "Missä kaupungissa järjestettiin ensimmäiset modernit olympialaiset vuonna 1896?",
      options: ["Lontoo", "Pariisi", "Ateena", "Rooma"],
      answer: "Ateena",
    },
    {
      question: "Mikä on suurin planeetta aurinkokunnassamme?",
      options: ["Saturnus", "Jupiter", "Uranus", "Neptunus"],
      answer: "Jupiter",
    },
    {
      question: "Kuka oli ensimmäinen ihminen, joka astui kuun pinnalle?",
      options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "John Glenn"],
      answer: "Neil Armstrong",
    },
    {
      question: "Mikä maa tunnetaan kenguruista?",
      options: ["Uusi-Seelanti", "Etelä-Afrikka", "Australia", "Brasilia"],
      answer: "Australia",
    },
    {
      question: "Missä kaupungissa sijaitsee kuuluisa Vatikaanivaltio?",
      options: ["Pariisi", "Ateena", "Rooma", "Lissabon"],
      answer: "Rooma",
    },
    {
      question: "Mikä on kemiallinen merkki vedylle?",
      options: ["O", "H", "He", "N"],
      answer: "H",
    },
    {
      question: "Mikä on maailman tiheimmin asuttu kaupunki?",
      options: ["Tokio", "New York", "Shanghai", "Mumbai"],
      answer: "Tokio",
    },
    {
      question:
        "Kuka oli Englannin kuningatar, joka hallitsi vuodesta 1952 vuoteen 2022?",
      options: [
        "Kuningatar Viktoria",
        "Kuningatar Elisabet I",
        "Kuningatar Elisabet II",
        "Kuningatar Anne",
      ],
      answer: "Kuningatar Elisabet II",
    },
    {
      question: "Mikä merkitsee auringonpimennystä?",
      options: [
        "Kuu kulkee Auringon ohi",
        "Maa peittää Auringon",
        "Venus peittää Auringon",
        "Saturnuksen renkaat peittävät Auringon",
      ],
      answer: "Kuu kulkee Auringon ohi",
    },
    {
      question: "Mikä on maapallon vanhin sademetsä?",
      options: ["Amazon", "Daintree", "Congo", "Taman Negara"],
      answer: "Daintree",
    },
    {
      question: "Mikä maa tunnetaan mausteistaan?",
      options: ["Kiina", "Intia", "Thaimaa", "Meksiko"],
      answer: "Intia",
    },
    {
      question: "Mikä on maailman vanhin tunnettu sivilisaatio?",
      options: [
        "Rooman valtakunta",
        "Egyptiläiset",
        "Mesopotamia",
        "Kreikkalaiset",
      ],
      answer: "Mesopotamia",
    },
    {
      question: "Mikä on korkein vuori Pohjois-Amerikassa?",
      options: [
        "Mount Whitney",
        "Mount McKinley (Denali)",
        "Mount Logan",
        "Mount Elbert",
      ],
      answer: "Mount McKinley (Denali)",
    },
    {
      question: "Mikä on ihmisen suurin elin?",
      options: ["Maksa", "Iho", "Aivot", "Keuhkot"],
      answer: "Iho",
    },
    {
      question: "Mikä on maailman vanhin yhä käytössä oleva yliopisto?",
      options: ["Oxford", "Bologna", "Cambridge", "Al-Qarawiyyin"],
      answer: "Al-Qarawiyyin",
    },
    {
      question: "Mikä on suolaisin vesistö maapallolla?",
      options: ["Kuollutmeri", "Punainenmeri", "Välimeri", "Kaspianmeri"],
      answer: "Kuollutmeri",
    },
    {
      question: "Mikä maa on sekä Euroopassa että Aasiassa?",
      options: ["Venäjä", "Turkki", "Kazakhstan", "Georgia"],
      answer: "Turkki",
    },
    {
      question:
        "Mikä vuosi oli ensimmäinen modernien olympialaisten järjestämisvuosi?",
      options: ["1896", "1900", "1912", "1920"],
      answer: "1896",
    },
    {
      question: "Mikä oli Napoleon Bonaparten kotimaa?",
      options: ["Espanja", "Italia", "Ranska", "Korsika"],
      answer: "Korsika",
    },
    {
      question: "Mikä on maailman syvin merialue?",
      options: [
        "Atlantin keskiselänne",
        "Mariaanien hauta",
        "Karibianmeri",
        "Filippiinien hauta",
      ],
      answer: "Mariaanien hauta",
    },
    {
      question:
        "Kuka oli antiikin Kreikan viisauden ja sodankäynnin jumalatar?",
      options: ["Athene", "Hera", "Afrodite", "Artemis"],
      answer: "Athene",
    },
    {
      question: "Mikä eläin tunnetaan nimellä 'aavikon kettu'?",
      options: ["Kettu", "Dingo", "Fennekki", "Kojootti"],
      answer: "Fennekki",
    },
    {
      question:
        "Mikä oli ensimmäinen mantere, joka löydettiin tutkimusmatkojen aikana?",
      options: ["Amerikka", "Australia", "Afrikka", "Antarktis"],
      answer: "Amerikka",
    },
    {
      question: "Missä maassa on maailman suurin muslimiväestö?",
      options: ["Saudi-Arabia", "Intia", "Indonesia", "Pakistan"],
      answer: "Indonesia",
    },
    {
      question: "Mikä oli ensimmäinen maa, joka käytti paperirahaa?",
      options: ["Intia", "Kiina", "Persia", "Rooma"],
      answer: "Kiina",
    },
    {
      question: "Mikä on maailman suurin metsä?",
      options: [
        "Amazonin sademetsä",
        "Taiga",
        "Kongon sademetsä",
        "Sundarbans",
      ],
      answer: "Taiga",
    },
    {
      question: "Mikä valtio tunnetaan nimellä 'alppien maa'?",
      options: ["Itävalta", "Sveitsi", "Ranska", "Italia"],
      answer: "Sveitsi",
    },
    {
      question: "Mikä meri sijaitsee Turkin ja Kreikan välillä?",
      options: ["Mustameri", "Egeanmeri", "Adrianmeri", "Välimeri"],
      answer: "Egeanmeri",
    },
    {
      question: "Mikä Euroopan maa on tunnettu tulppaaniviljelmistään?",
      options: ["Saksa", "Belgia", "Hollanti", "Tanska"],
      answer: "Hollanti",
    },
    {
      question: "Mikä on maailman pisin vuoristo?",
      options: ["Kalliovuoret", "Andit", "Alpit", "Himalaja"],
      answer: "Andit",
    },
    {
      question: "Mikä maa on suurin kahvintuottaja?",
      options: ["Kolumbia", "Vietnam", "Brasilia", "Etiopia"],
      answer: "Brasilia",
    },
    {
      question:
        "Missä maassa järjestettiin maailman ensimmäinen jalkapallon MM-kilpailu?",
      options: ["Brasilia", "Italia", "Ranska", "Uruguay"],
      answer: "Uruguay",
    },
    {
      question: "Mikä eläin on Etelämantereen tunnusomainen laji?",
      options: ["Jääkarhu", "Pingviini", "Narvali", "Hylje"],
      answer: "Pingviini",
    },
  ];
  // Muuttujat nykyisen kysymyksen ja pisteiden seuraamiseen
  let currentQuestionIndex = Math.floor(questions.length * Math.random()); // Seuraa nykyistä kysymystä
  let laskuri = 0;
  let score = 0; // Seuraa käyttäjän pistemäärää
  // Valitaan DOM-elementit käsittelyä varten
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const nextButton = document.getElementById("next-button");
  const resultElement = document.getElementById("result");
  const resetButton = document.getElementById("reset-button"); // Valitaan nollauspainike
  // Funktio, joka lataa ja näyttää nykyisen kysymyksen ja sen vastausvaihtoehdot
  function loadQuestion() {
    // Haetaan nykyinen kysymys questions-taulukosta
    const currentQuestion = questions[currentQuestionIndex];
    // Asetetaan kysymysteksti DOM:iin
    questionElement.textContent = currentQuestion.question;
    // Tyhjennetään aiemmat vastausvaihtoehdot
    optionsElement.innerHTML = "";
    // Käydään läpi jokainen vaihtoehto ja luodaan dynaamisesti listaelementit
    currentQuestion.options.forEach((option) => {
      const li = document.createElement("li");
      li.textContent = option;
      li.addEventListener("click", () =>
        selectOption(li, currentQuestion.answer)
      ); // Liitetään tapahtumankuuntelija vaihtoehdon valinnalle
      optionsElement.appendChild(li); // Lisätään vaihtoehto DOM:iin
    });
    // Piilotetaan "Seuraava"-painike, kunnes vaihtoehto valitaan
    nextButton.classList.add("hidden");
    resetButton.classList.add("hidden"); // Piilotetaan nollauspainike aluksi
  }
  // Funktio, joka käsittelee käyttäjän valitseman vaihtoehdon
  function selectOption(selectedOption, correctAnswer) {
    // Estetään lisävalinnat estämällä klikkaukset
    const options = optionsElement.querySelectorAll("li");
    options.forEach((option) => {
      option.style.pointerEvents = "none"; // Estää lisäinteraktiot
      // Korostetaan oikea vastaus vihreällä
      if (option.textContent === correctAnswer) {
        option.classList.add("correct");
        option.style.backgroundColor = "green";
      } else {
        // Korostetaan väärät vastaukset punaisella
        option.classList.add("incorrect");
        option.style.backgroundColor = "red";
      }
    });
    // Jos valittu vastaus on oikein, päivitetään pistemäärä
    if (selectedOption.textContent === correctAnswer) {
      score++; // Kasvatetaan pistemäärää oikeista vastauksista
    }
    // Näytetään "Seuraava"-painike siirtymistä varten seuraavaan kysymykseen
    nextButton.classList.remove("hidden");
  }
  // Tapahtumankuuntelija "Seuraava"-painikkeelle, joka lataa seuraavan kysymyksen tai näyttää tuloksen
  nextButton.addEventListener("click", () => {
    currentQuestionIndex = Math.floor(questions.length * Math.random()); // Siirrytään seuraavaan kysymykseen
    laskuri++;
    // Jos kysymyksiä on jäljellä, ladataan seuraava; muuten näytetään lopputulos
    if (laskuri < 10) {
      loadQuestion();
    } else {
      showResult();
    }
  });
  // Funktio käyttäjän lopullisen pistemäärän näyttämiseksi, kun visailu on ohi
  function showResult() {
    // Näytetään käyttäjän lopullinen pistemäärä
    resultElement.textContent = `Sait ${score} pistettä 10:sta!`;
    resultElement.classList.remove("hidden"); // Näytetään tulos
    nextButton.classList.add("hidden"); // Piilotetaan "Seuraava"-painike osoittamaan visailun loppu
    resetButton.classList.remove("hidden"); // Näytetään nollauspainike
  }
  // Tapahtumankuuntelija nollauspainikkeelle visailun uudelleenkäynnistämiseksi
  resetButton.addEventListener("click", () => {
    currentQuestionIndex = Math.floor(questions.length * Math.random()); // Nollataan kysymysindeksi
    score = 0; // Nollataan pistemäärä
    laskuri = 0;
    resultElement.classList.add("hidden"); // Piilotetaan tulos
    loadQuestion(); // Ladataan ensimmäinen kysymys uudelleen
  });
  // Alustava funktiokutsu ensimmäisen kysymyksen lataamiseksi, kun sivu on ladattu
  loadQuestion();
});
