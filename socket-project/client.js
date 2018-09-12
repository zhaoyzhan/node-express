const net = require('net');
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const client = new net.Socket();

// client.write('hello 0000 nihddddd大啊ao world');

client.connect(3000, '127.0.0.1', () => {
	client.setEncoding('utf8');
	client.on('data', (data) => {
		console.log(data);
	})
	rl.on('line', (input) => {
		if (input !== 'quit') {
			client.write(input);
		} else {
			client.destroy();
			rl.close();
		}
	});
});