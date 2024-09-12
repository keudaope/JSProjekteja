// Wait until the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // WebSocket connection to the server
    const ws = new WebSocket('ws://localhost:8080');
    // Get references to DOM elements
    const messagesDiv = document.getElementById('messages');
    const messageForm = document.getElementById('message-form');
    const messageInput = document.getElementById('message-input');
    /**
    * Handle incoming WebSocket messages
    * This function appends new messages to the message display area
    */
    ws.onmessage = (event) => {
    // Create a new div element for each incoming message
    const message = document.createElement('div');
    message.textContent = event.data; // Display the message data
    messagesDiv.appendChild(message); // Add the message to the messages container
    // Scroll the messages container to the bottom so the latest message is visible
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
    };
    /**
    * Handle form submission
    * This function sends the user's message via WebSocket and clears the input
   field
    */
   messageForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from reloading the page
    // Check if the input field has a value before sending
    if (messageInput.value.trim()) {
    ws.send(messageInput.value); // Send the message via WebSocket
    messageInput.value = ''; // Clear the input field after sending
    }
    });
   });
   