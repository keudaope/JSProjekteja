let questions = [];
let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", function () {
  loadQuestions();
});

function loadQuestions() {
  fetch("kysymykset.json")
    .then((response) => response.json())
    .then((data) => {
      questions = data;
      // Arvotaan 10 kysymystä
      selectedQuestions = shuffle(questions).slice(0, 10);
      showQuestion();
    });
}

function showQuestion() {
  const questionContainer = document.getElementById("question");
  const optionsContainer = document.getElementById("options");
  const nextButton = document.getElementById("next-btn");

  // Tyhjennä vanhat vastausvaihtoehdot
  optionsContainer.innerHTML = "";

  if (currentQuestionIndex < selectedQuestions.length) {
    let currentQuestion = selectedQuestions[currentQuestionIndex];
    questionContainer.innerText = currentQuestion.question;

    currentQuestion.options.forEach((option) => {
      const optionElement = document.createElement("div");
      optionElement.classList.add("option");
      optionElement.innerText = option;
      optionElement.addEventListener("click", () =>
        selectAnswer(option, currentQuestion.answer)
      );
      optionsContainer.appendChild(optionElement);
    });

    nextButton.classList.add("hide");
  } else {
    showResults();
  }
}

function selectAnswer(selectedOption, correctAnswer) {
  const options = document.querySelectorAll(".option");
  options.forEach((option) => {
    if (option.innerText === correctAnswer) {
      option.classList.add("correct");
    } else {
      option.classList.add("incorrect");
    }
    option.style.pointerEvents = "none";
  });

  if (selectedOption === correctAnswer) {
    score++;
  }

  document.getElementById("next-btn").classList.remove("hide");
}

document.getElementById("next-btn").addEventListener("click", () => {
  currentQuestionIndex++;
  showQuestion();
});

function showResults() {
  document.getElementById("quiz-container").classList.add("hide");
  document.getElementById("result-container").classList.remove("hide");
  document.getElementById("score").innerText = score;
}

document.getElementById("restart-btn").addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  selectedQuestions = shuffle(questions).slice(0, 10); // Arvotaan uudet 10 kysymystä
  document.getElementById("result-container").classList.add("hide");
  document.getElementById("quiz-container").classList.remove("hide");
  showQuestion();
});

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
