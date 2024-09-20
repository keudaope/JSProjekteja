document.addEventListener("DOMContentLoaded", () => {
  const ws = new WebSocket("ws://localhost:8080"); // WebSocket connection
  const messagesDiv = document.getElementById("messages");
  const messageForm = document.getElementById("message-form");
  const messageInput = document.getElementById("message-input");

  // Handle incoming WebSocket messages
  ws.onmessage = (event) => {
    let messageText;

    // Check if the message is a Blob and convert it to text if necessary
    if (event.data instanceof Blob) {
      // If it's a Blob, read the content as text
      const reader = new FileReader();
      reader.onload = function () {
        messageText = reader.result;
        appendMessage(messageText);
      };
      reader.readAsText(event.data);
    } else {
      // Otherwise, treat it as a string message
      messageText = event.data;
      appendMessage(messageText);
    }
  };

  // Helper function to append the message to the chat
  function appendMessage(messageText) {
    const message = document.createElement("div");
    message.classList.add("message");
    message.textContent = messageText;
    messagesDiv.appendChild(message);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }

  // Handle form submission
  messageForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent page reload

    if (messageInput.value.trim()) {
      ws.send(String(messageInput.value)); // Send the message as a string via WebSocket
      messageInput.value = ""; // Clear the input field after sending
    }
  });
});
