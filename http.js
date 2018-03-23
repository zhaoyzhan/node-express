const http = require('http');
const fs = require('fs');
const cheerio = require('cheerio');

http.get('http://www.easyvoa.com', res => {
	// console.log(res.statusCode);
	if (res.statusCode === 200) {
		let html = '';
		res.on('data', data => {
			html += data;
		})

		res.on('end', () => {
			const $ = cheerio.load(html)
				// console.log(html);
			const list = $('.title_a');
			let str = '';
			for (var i = 0; i < list.length; i++) {
				const title = list.eq(i).attr('title');
				if (title) {
					str += (title + '\n');
				}
			}

			fs.writeFileSync('data.txt', str)

			console.log(list.length);
		})
	}
})