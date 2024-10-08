let questions = [];
let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let startTime;

document.addEventListener("DOMContentLoaded", function() {
    // Tarkistetaan, onko käyttäjä kirjautunut sisään ja että currentUser ei ole null
    const loggedIn = localStorage.getItem('loggedIn');
    const currentUser = localStorage.getItem('currentUser');

    if (!loggedIn || !currentUser) {
        // Jos ei ole kirjautunut tai käyttäjänimi puuttuu, ohjataan kirjautumissivulle
        window.location.href = 'index.html';
        return;
    }

    // Aloitetaan peli
    startGame();
});

// Käynnistetään peli
function startGame() {
    currentQuestionIndex = 0;  // Nollataan kysymysindeksi
    score = 0;  // Nollataan pisteet
    document.getElementById('result-container').classList.add('hide');  // Piilotetaan tulokset
    document.getElementById('quiz-container').classList.remove('hide');  // Näytetään peli
    loadQuestions();  // Ladataan kysymykset
    startTime = Date.now();  // Aloitetaan aika
}

// Kysymysten lataaminen JSON-tiedostosta
function loadQuestions() {
    fetch('kysymykset.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
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

// Näytetään kysymys
function showQuestion() {
    const questionContainer = document.getElementById('question');
    const optionsContainer = document.getElementById('options');
    const nextButton = document.getElementById('next-btn');

    optionsContainer.innerHTML = '';  // Tyhjennetään vanhat vaihtoehdot

    if (currentQuestionIndex < selectedQuestions.length) {
        let currentQuestion = selectedQuestions[currentQuestionIndex];
        questionContainer.innerText = currentQuestion.question;

        currentQuestion.options.forEach(option => {
            const optionButton = document.createElement('button');
            optionButton.classList.add('option-btn');
            optionButton.innerText = option;
            optionButton.addEventListener('click', () => selectAnswer(option, currentQuestion.answer));
            optionsContainer.appendChild(optionButton);
        });

        nextButton.classList.add('hide');  // Piilotetaan seuraava-nappi
    } else {
        showResults();  // Jos kaikki kysymykset käyty läpi, näytetään tulokset
    }
}

// Käsitellään vastaus
function selectAnswer(selectedOption, correctAnswer) {
    const options = document.querySelectorAll('.option-btn');
    options.forEach(option => {
        if (option.innerText === correctAnswer) {
            option.classList.add('correct');
        } else {
            option.classList.add('incorrect');
        }
        option.disabled = true;  // Estetään valinnat
    });

    if (selectedOption === correctAnswer) {
        score++;  // Lisätään piste, jos vastaus oikein
    }

    document.getElementById('next-btn').classList.remove('hide');  // Näytetään seuraava-nappi
}

// Siirrytään seuraavaan kysymykseen
document.getElementById('next-btn').addEventListener('click', () => {
    currentQuestionIndex++;
    showQuestion();
});

// Näytetään tulokset pelin lopussa
function showResults() {
    const endTime = Date.now();
    const timeSpent = Math.floor((endTime - startTime) / 1000);

    document.getElementById('quiz-container').classList.add('hide');  // Piilotetaan peli
    document.getElementById('result-container').classList.remove('hide');  // Näytetään tulossivu
    document.getElementById('score').innerText = score;  // Näytetään pisteet

    const currentUser = localStorage.getItem('currentUser');
    saveScore(currentUser, score, timeSpent);  // Tallennetaan tulokset
}

// Tallennetaan tulokset Local Storageen
function saveScore(username, score, timeSpent) {
    const existingScores = JSON.parse(localStorage.getItem('scores')) || [];

    const newScore = { username, score, timeSpent };
    existingScores.push(newScore);

    existingScores.sort((a, b) => b.score - a.score || a.timeSpent - b.timeSpent);

    localStorage.setItem('scores', JSON.stringify(existingScores));
}

// Satunnaistetaan kysymykset
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// "Katso tulokset" -painikkeen toiminnallisuus
document.getElementById('view-results-btn').addEventListener('click', () => {
    window.location.href = 'results.html';  // Ohjataan tulossivulle
});

// "Aloita uudelleen" -painikkeen toiminnallisuus
document.getElementById('restart-btn').addEventListener('click', () => {
    startGame();  // Käynnistetään peli uudelleen
});

// "Kirjaudu ulos" -painikkeen toiminnallisuus
document.getElementById('logout-btn').addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('loggedIn');
    window.location.href = 'index.html';  // Ohjataan kirjautumissivulle
});
