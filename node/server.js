const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
	// res.end('<div style="text-align: center; color: red;">12345</div>' +
	// 	'<h1>titlw</h1>' + '<script>alert("12345");</script>'
	// );
	if (req.url === '/favicon.ico') {
		return false;
	}

	const {
		pathname,
		query
	} = url.parse(req.url, true);

	if (pathname === '/home') {
		fs.readFile('./src/index.html', 'utf-8', (err, data) => {
			res.writeHead(200, {
				'Content-Type': 'text/html'
			});
			res.end(data.replace(/{{name}}/, query.name));
		})
	} else if (pathname === '/car') {
		res.end('car page ! ' + query.name);
	} else if (pathname === '/node.gif') {
		const image = fs.readFileSync('./node.gif', 'binary');
		res.writeHead(200, {
			'Content-Type': 'image/gif'
		});
		res.end(image, 'binary')
	} else {
		res.end('404');
	}

	// console.log(pathname, query);
	// console.log(url.parse(req.url, true));
	// res.end('<div style="text-align: center; color: red;">12345</div>' +
	// 	'<h1>titlw33</h1>'
	// );
});
//http://127.0.0.1:4000/
server.listen(4000);