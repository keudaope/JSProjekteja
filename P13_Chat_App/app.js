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
});
