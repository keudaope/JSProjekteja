// Odotetaan, että DOM on täysin ladattu ennen kuin suoritetaan skripti
document.addEventListener('DOMContentLoaded', () => {
    // WebSocket-yhteys palvelimeen
    const ws = new WebSocket('ws://localhost:8080');
    // Haetaan viitteet DOM-elementteihin
    const messagesDiv = document.getElementById('messages');
    const messageForm = document.getElementById('message-form');
    const messageInput = document.getElementById('message-input');
    
    /**
    * Käsitellään saapuvat WebSocket-viestit
    * Tämä funktio lisää uudet viestit viestin näyttöalueelle
    */
    ws.onmessage = (event) => {
    // Luodaan uusi div-elementti jokaiselle saapuvalle viestille
    const message = document.createElement('div');
    message.textContent = event.data; // Näytetään viestin sisältö
    messagesDiv.appendChild(message); // Lisätään viesti viestikonttiin
    // Vieritetään viestikontti alas, jotta uusin viesti on näkyvissä
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
    };
    
    /**
    * Lomakkeen lähetyksen käsittely
    * Tämä funktio lähettää käyttäjän viestin WebSocketin kautta ja tyhjentää syötekentän
    */
    messageForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Estetään sivun uudelleenlataus lomakkeen lähettämisen yhteydessä
    // Tarkistetaan, että syötekentässä on arvo ennen lähettämistä
    if (messageInput.value.trim()) {
    ws.send(messageInput.value); // Lähetetään viesti WebSocketin kautta
    messageInput.value = ''; // Tyhjennetään syötekenttä lähettämisen jälkeen
    }
    });
});
