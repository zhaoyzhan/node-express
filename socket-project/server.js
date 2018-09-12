const net = require('net');

// const server = net.createServer((c) => {
// 	server.on('connection');
// });

const server = net.createServer();

// 存储所有链接到服务器上的用户
const clients = [];

server.on('connection', (client) => {
	client.id = clients.length;
	clients.push(client);

	// console.log('new user connected');
	client.setEncoding('utf8');
	client.on('data', (data) => {
		// console.log(data);
		clients.forEach((client) => {
			client && client.write(data);
		});
	})
	client.on('close', () => {
		clients[client.id] = null;
	})
	client.on('error', () => {
		clients[client.id] = null;
	})
})

server.listen(3000);