const WebSocket = require('ws');

const server = new WebSocket.Server({
	port: 9000
});

server.on('connection', (client) => {
	client.on('message', (message) => {
		server.clients.forEach((client) => {
			if (client.readyState === WebSocket.OPEN) {
				client.send(message);
			}
		});
	});
});