const url = require('url');

// console.log(url.parse("https://pan.baidu.com/play/video#/video?path=%2F%E6%88%91%E7%9A%84%E8%B5%84%E6%BA%90%2F%E6%9C%AA%E6%94%B6%E5%BD%95%2Fnode-mongodb%2Fday01%2Fnode%20%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97.mov&t=-1"));

const querystring = require('querystring');

console.log(querystring.stringify({
	'name': 'zhangsan',
	'age': 12
}));