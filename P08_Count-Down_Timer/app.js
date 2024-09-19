document.addEventListener('DOMContentLoaded', () => {
    // Valitaan lomake, syöttökentät ja ajastimen näyttöelementit
    const timerForm = document.getElementById('timer-form');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');
    const timerDisplay = document.getElementById('timer');

    // Muuttuja, joka tallentaa intervallin viitteen (ajastimen laskemiseen)
    let countdownInterval;

    // Lomakkeen lähetystapahtuman kuuntelija, joka käynnistää ajastimen
    timerForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Estetään sivun uudelleenlataus lomakkeen lähetyksessä

        // Poistetaan mahdollinen olemassa oleva ajastin, jotta vältytään päällekkäisyyksiltä
        clearInterval(countdownInterval);

        // Haetaan käyttäjän syöttämät minuutit ja sekunnit
        const minutes = parseInt(minutesInput.value) || 0; // Muutetaan minuutit numeroiksi
        const seconds = parseInt(secondsInput.value) || 0; // Muutetaan sekunnit numeroiksi
        let totalSeconds = (minutes * 60) + seconds; // Lasketaan kokonaisaika sekunneissa

        // Jos aikaa ei ole annettu tai se on nolla, lopetetaan toiminto
        if (totalSeconds <= 0) return;

        // Käynnistetään ajastin setInterval-komennolla, joka päivittyy 1000 ms välein (1 sekunti)
        countdownInterval = setInterval(() => {
            // Lopetetaan ajastin, kun se saavuttaa nollan
            if (totalSeconds <= 0) {
                clearInterval(countdownInterval); // Pysäytetään ajastin
                timerDisplay.style.color = 'red'; // Vaihdetaan ajastimen väri punaiseksi, kun aika loppuu
                return;
            }

            // Vähennetään sekunneista 1 jokaisella päivityksellä
            totalSeconds--;

            // Lasketaan näytettävät minuutit ja sekunnit
            const displayMinutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
            const displaySeconds = (totalSeconds % 60).toString().padStart(2, '0');

            // Päivitetään ajastimen näyttö muotoillulla ajalla (MM:SS)
            timerDisplay.textContent = `${displayMinutes}:${displaySeconds}`;

            // Vaihdetaan ajastimen väriä dynaamisesti laskennan edetessä
            if (totalSeconds < 10) {
                timerDisplay.style.color = 'red'; // Punainen väri, kun aikaa on jäljellä alle 10 sekuntia
            } else if (totalSeconds < 30) {
                timerDisplay.style.color = 'orange'; // Oranssi väri, kun aikaa on alle 30 sekuntia
            } else {
                timerDisplay.style.color = '#333'; // Oletusväri normaalissa ajassa
            }
        }, 1000); // Asetetaan päivitys tapahtumaan 1000 millisekunnin välein (1 sekunti)
    });
});
