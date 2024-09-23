<<<<<<< HEAD
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
=======
document.addEventListener("DOMContentLoaded", () => {
  const ws = new WebSocket("ws://localhost:8080"); // WebSocket-yhteys
  const messagesDiv = document.getElementById("messages");
  const messageForm = document.getElementById("message-form");
  const messageInput = document.getElementById("message-input");

  // Käsittele saapuvat WebSocket-viestit
  ws.onmessage = (event) => {
    let messageText;

    // Tarkista, onko viesti Blob ja muuta se tekstiksi tarvittaessa
    if (event.data instanceof Blob) {
      // Jos viesti on Blob, lue sisältö tekstinä
      const reader = new FileReader();
      reader.onload = function () {
        messageText = reader.result;
        appendMessage(messageText);
      };
      reader.readAsText(event.data);
    } else {
      // Muussa tapauksessa käsittele viesti merkkijonona
      messageText = event.data;
      appendMessage(messageText);
    }
  };

  // Apufunktio viestin lisäämiseksi chattiin
  function appendMessage(messageText) {
    const message = document.createElement("div");
    message.classList.add("message");
    message.textContent = messageText;
    messagesDiv.appendChild(message);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }

  // Lomakkeen lähetyksen käsittely
  messageForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Estä sivun uudelleenlataus

    if (messageInput.value.trim()) {
      ws.send(String(messageInput.value)); // Lähetä viesti merkkijonona WebSocketin kautta
      messageInput.value = ""; // Tyhjennä syötekenttä viestin lähettämisen jälkeen
    }
  });
>>>>>>> 475e911a3c77800f46bc3691df0ebc465854a671
});
