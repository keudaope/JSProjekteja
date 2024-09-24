// Odotetaan, että DOM on täysin ladattu ennen skriptin suorittamista
document.addEventListener("DOMContentLoaded", () => {
  // WebSocket-yhteys palvelimelle
  const ws = new WebSocket("ws://localhost:8080");

  // Haetaan viittaukset DOM-elementteihin
  const messagesDiv = document.getElementById("messages");
  const messageForm = document.getElementById("message-form");
  const messageInput = document.getElementById("message-input");

  /**
   * Käsitellään saapuvat WebSocket-viestit
   * Tämä funktio lisää uudet viestit viestien näyttöalueelle
   */
  ws.onmessage = (event) => {
    const reader = new FileReader();

    // Kun FileReader on lukenut blobin, näytetään se tekstinä
    reader.onload = () => {
      const message = document.createElement("div");
      message.textContent = reader.result; // Asetetaan viesti tekstiksi
      messagesDiv.appendChild(message);
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    };

    // Luetaan vastaanotettu Blob
    reader.readAsText(event.data);
  };

  /**
   * Käsitellään lomakkeen lähetys
   * Tämä funktio lähettää käyttäjän viestin WebSocketin kautta ja tyhjentää syötekentän
   */
  messageForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Estetään lomakkeen uudelleenlataaminen
    // Tarkistetaan, onko syötekentässä arvoa ennen lähettämistä
    if (messageInput.value.trim()) {
      ws.send(messageInput.value); // Lähetetään viesti WebSocketin kautta
      messageInput.value = ""; // Tyhjennetään syötekenttä lähetyksen jälkeen
    }
  });
});
