// Odottaa, että DOM latautuu kokonaan ennen kuin skripti suoritetaan, jotta elementtejä voidaan käsitellä
document.addEventListener("DOMContentLoaded", () => {
  // Visailukysymykset tallennetaan taulukkoon, joka sisältää objekteja
  const questions = [
    {
      question: "Mikä on Ranskan pääkaupunki?",
      options: ["Berliini", "Madrid", "Pariisi", "Lissabon"],
      answer: "Pariisi",
    },
    {
      question: "Kuka kirjoitti 'Kuin surmaisi satakielen'?",
      options: [
        "Harper Lee",
        "Mark Twain",
        "Ernest Hemingway",
        "F. Scott Fitzgerald",
      ],
      answer: "Harper Lee",
    },
    {
      question: "Mikä on aurinkokuntamme suurin planeetta?",
      options: ["Maa", "Jupiter", "Saturnus", "Mars"],
      answer: "Jupiter",
    },
  ];
  // Muuttujat nykyisen kysymyksen ja pisteiden seuraamiseen
  let currentQuestionIndex = 0; // Seuraa nykyistä kysymystä
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
      } else {
        // Korostetaan väärät vastaukset punaisella
        option.classList.add("incorrect");
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
    currentQuestionIndex++; // Siirrytään seuraavaan kysymykseen
    // Jos kysymyksiä on jäljellä, ladataan seuraava; muuten näytetään lopputulos
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  });
  // Funktio käyttäjän lopullisen pistemäärän näyttämiseksi, kun visailu on ohi
  function showResult() {
    // Näytetään käyttäjän lopullinen pistemäärä
    resultElement.textContent = `Sait ${score} pistettä ${questions.length}:sta!`;
    resultElement.classList.remove("hidden"); // Näytetään tulos
    nextButton.classList.add("hidden"); // Piilotetaan "Seuraava"-painike osoittamaan visailun loppu
    resetButton.classList.remove("hidden"); // Näytetään nollauspainike
  }
  // Tapahtumankuuntelija nollauspainikkeelle visailun uudelleenkäynnistämiseksi
  resetButton.addEventListener("click", () => {
    currentQuestionIndex = 0; // Nollataan kysymysindeksi
    score = 0; // Nollataan pistemäärä
    resultElement.classList.add("hidden"); // Piilotetaan tulos
    loadQuestion(); // Ladataan ensimmäinen kysymys uudelleen
  });
  // Alustava funktiokutsu ensimmäisen kysymyksen lataamiseksi, kun sivu on ladattu
  loadQuestion();
});
