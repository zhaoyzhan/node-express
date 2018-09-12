var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	//render 1: 结合模板和数据生成最终的字符串
	//        2:调用res.end()把字符串传给客户
	res.render('index', {
		title: '<h1>Express11</h1>',
		flag: false,
		num: 10
	});
});

// router.get('/hello', function(req, res, next) {
// 	res.send('hello!!!');
// });

// //返回json字符串
// router.get('/product', function(req, res, next) {
// 	res.json({
// 		"ret": true,
// 		"data": {
// 			'name': 'zhangsan',
// 			'age': 12
// 		}
// 	});
// });

// router.get('/showUser', function(req, res, next) {
// 	// console.log(typeof req.params);
// 	// let FARR = req.params.split('?');
// 	// console.log(FARR);
// 	res.send(req.query.username + req.query.password);
// });

module.exports = router;