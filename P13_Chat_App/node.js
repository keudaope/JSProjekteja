const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });
server.on('connection', (ws) => {
 // When a new message is received, broadcast it to all connected clients
 ws.on('message', (message) => {
 server.clients.forEach((client) => {
 if (client.readyState === WebSocket.OPEN) {
 client.send(message); // Send the message to all connected
clients
 }
 });
 });
});
console.log('WebSocket server is running on ws://localhost:8080');
