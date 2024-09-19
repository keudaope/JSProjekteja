const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });
server.on('connection', (ws) => {
 // Kun uusi viesti vastaanotetaan, lähetä se kaikille yhteydessä oleville asiakkaille
 ws.on('message', (message) => {
 server.clients.forEach((client) => {
 if (client.readyState === WebSocket.OPEN) {
 client.send(message); // Lähetä viesti kaikille yhteydessä oleville asiakkaille
 }
 });
 });
});
console.log('WebSocket-palvelin toimii osoitteessa ws://localhost:8080');
