let questions = [];
let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let startTime;

// Ladataan pelitiedot, kun sivu latautuu
document.addEventListener("DOMContentLoaded", function() {
    loadQuestions();  // Ladataan kysymykset
    startTime = Date.now();  // Tallennetaan aloitusaika
});

// Kysymysten lataaminen JSON-tiedostosta
function loadQuestions() {
    fetch('kysymykset.json')
        .then(response => response.json())
        .then(data => {
            questions = data;
            selectedQuestions = shuffle(questions).slice(0, 10);  // Arvotaan 10 kysymystä
            showQuestion();  // Näytetään ensimmäinen kysymys
        })
        .catch(error => {
            console.error("Virhe kysymysten lataamisessa:", error);
            alert("Kysymysten lataamisessa tapahtui virhe. Tarkista JSON-tiedosto.");
        });
}

// Näytetään seuraava kysymys
function showQuestion() {
    const questionContainer = document.getElementById('question');
    const optionsContainer = document.getElementById('options');
    const nextButton = document.getElementById('next-btn');

    // Tyhjennetään aiemmat vaihtoehdot
    optionsContainer.innerHTML = '';

    if (currentQuestionIndex < selectedQuestions.length) {
        let currentQuestion = selectedQuestions[currentQuestionIndex];
        questionContainer.innerText = currentQuestion.question;

        // Näytetään vastausvaihtoehdot painikkeina
        currentQuestion.options.forEach(option => {
            const optionButton = document.createElement('button');
            optionButton.classList.add('option-btn');
            optionButton.innerText = option;
            optionButton.addEventListener('click', () => selectAnswer(option, currentQuestion.answer));
            optionsContainer.appendChild(optionButton);
        });

        nextButton.classList.add('hide');  // Piilotetaan seuraava-painike, kunnes käyttäjä valitsee vastauksen
    } else {
        showResults();  // Kaikki kysymykset käyty läpi, näytetään tulokset
    }
}

// Käsitellään vastaus
function selectAnswer(selectedOption, correctAnswer) {
    const options = document.querySelectorAll('.option-btn');
    options.forEach(option => {
        if (option.innerText === correctAnswer) {
            option.classList.add('correct');  // Vihreä tausta oikealle vastaukselle
        } else {
            option.classList.add('incorrect');  // Punainen tausta väärille vastauksille
        }
        option.disabled = true;  // Estetään lisää klikkauksia
    });

    if (selectedOption === correctAnswer) {
        score++;  // Lisätään piste, jos vastaus on oikein
    }

    document.getElementById('next-btn').classList.remove('hide');  // Näytetään seuraava-painike
}

// Siirrytään seuraavaan kysymykseen
document.getElementById('next-btn').addEventListener('click', () => {
    currentQuestionIndex++;
    showQuestion();
});

// Näytetään tulokset pelin lopussa
function showResults() {
    const endTime = Date.now();
    const timeSpent = Math.floor((endTime - startTime) / 1000);  // Lasketaan käytetty aika sekunneissa

    document.getElementById('quiz-container').classList.add('hide');  // Piilotetaan kysymykset
    document.getElementById('result-container').classList.remove('hide');  // Näytetään tulossivu
    document.getElementById('score').innerText = score;

    const currentUser = localStorage.getItem('currentUser');  // Hae kirjautunut käyttäjä
    saveScore(currentUser, score, timeSpent);  // Tallennetaan käyttäjän tulos Local Storageen
}

// Tallennetaan käyttäjän tulos Local Storageen
function saveScore(username, score, timeSpent) {
    const existingScores = JSON.parse(localStorage.getItem('scores')) || [];

    const newScore = { username, score, timeSpent };
    existingScores.push(newScore);

    // Järjestetään tulokset siten, että ensin korkeimmat pisteet ja sitten nopein aika
    existingScores.sort((a, b) => b.score - a.score || a.timeSpent - b.timeSpent);

    // Tallennetaan päivitetty tuloslista
    localStorage.setItem('scores', JSON.stringify(existingScores));

    console.log('Tulokset tallennettu Local Storageen.');
}

// Satunnaistetaan kysymykset
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Siirrytään tulossivulle
document.getElementById('view-results-btn').addEventListener('click', () => {
    window.location.href = 'results.html';
});
