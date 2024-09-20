const WebSocket = require("ws");

// Luo uusi WebSocket-palvelin, joka kuuntelee porttia 8080
const server = new WebSocket.Server({ port: 8080 });

server.on("connection", (ws) => {
  // Kun uusi viesti vastaanotetaan asiakkaalta, lähetä se kaikille yhdistetyille asiakkaille
  ws.on("message", (message) => {
    server.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message); // Lähetä viesti kaikille yhdistetyille asiakkaille
      }
    });
  });
});

console.log("WebSocket-palvelin toimii osoitteessa ws://localhost:8080");
