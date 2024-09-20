// Odota, kunnes DOM on täysin ladattu, ennen kuin suoritat skriptin
document.addEventListener("DOMContentLoaded", () => {
  // Valitse DOM-elementit
  const questionElement = document.getElementById("question");
  const answersElement = document.getElementById("answers");
  const feedbackElement = document.getElementById("feedback");
  const correctCountElement = document.getElementById("correct-count");
  const incorrectCountElement = document.getElementById("incorrect-count");
  let correctCount = 0; // Alusta oikeiden vastausten määrä
  let incorrectCount = 0; // Alusta väärien vastausten määrä
  // Funktio uuden tietovisakysymyksen hakemiseen
  function fetchQuestion() {
    fetch("https://opentdb.com/api.php?amount=1&type=multiple")
      .then((response) => response.json()) // Jäsennä vastaus JSON-muotoon
      .then((data) => {
        displayQuestion(data.results[0]); // Välitä kysymyksen tiedot näyttöfunktiolle
      })
      .catch((error) => {
        console.error("Virhe kysymyksen haussa:", error);
        questionElement.textContent =
          "Kysymyksen lataus epäonnistui. Yritä uudelleen.";
      });
  }
  // Funktio kysymyksen ja vastausten näyttämiseen
  function displayQuestion(questionData) {
    // Purkaa mahdolliset HTML-entiteetit kysymyksestä
    questionElement.textContent = decodeHTML(questionData.question);
    // Oikea vastaus ja sekoitetut vastaukset
    const correctAnswer = decodeHTML(questionData.correct_answer);
    const answers = [
      ...questionData.incorrect_answers.map(decodeHTML),
      correctAnswer,
    ];
    shuffleArray(answers); // Sekoita vastaukset satunnaisuuden vuoksi

    // Tyhjennä olemassa olevat vastaukset ja palaute
    answersElement.innerHTML = "";
    feedbackElement.textContent = "";
    // Luo painike jokaiselle vastaukselle
    answers.forEach((answer) => {
      const button = document.createElement("button");
      button.textContent = answer;
      button.addEventListener("click", () =>
        checkAnswer(answer, correctAnswer)
      );
      button.setAttribute("aria-label", `Vastaus: ${answer}`);
      answersElement.appendChild(button); // Lisää painike vastausalueeseen
    });
  }
  // Funktio tarkistamaan, onko valittu vastaus oikea
  function checkAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
      correctCount++; // Lisää oikeiden vastausten määrää, jos vastaus on oikein
      feedbackElement.textContent = "Oikein! ";
      feedbackElement.classList.add("correct");
      feedbackElement.classList.remove("incorrect");
    } else {
      incorrectCount++; // Lisää väärien vastausten määrää, jos vastaus on väärin
      feedbackElement.textContent = "Väärin! ";
      feedbackElement.classList.add("incorrect");
      feedbackElement.classList.remove("correct");
    }
    // Päivitä määrät DOM:iin
    correctCountElement.textContent = correctCount;
    incorrectCountElement.textContent = incorrectCount;
    // Hae uusi kysymys lyhyen viiveen jälkeen
    setTimeout(fetchQuestion, 1000);
  }
  // Apuohjelma HTML-entiteettien purkamiseksi kysymyksistä ja vastauksista
  function decodeHTML(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }
  // Apuohjelma vastauslistan sekoittamiseen satunnaisuuden vuoksi
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  // Hae ensimmäinen tietovisakysymys, kun sivu ladataan
  fetchQuestion();
});
