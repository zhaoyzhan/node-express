var express = require('express');
const MongoClient = require('mongodb').MongoClient;
var router = express.Router();

var url = "mongodb://localhost:27017/";

/* GET home page. */
router.get('/', function(req, res, next) {
	res.send({
		code: 200,
		message: 'ok',
		result: {
			title: 'express',
			year: '2018',
			month: '3',
			day: '27',
		}
	});
});

router.get('/home', function(req, res, next) {
	res.send({
		code: 200,
		message: 'ok',
		result: {
			title: 'home',
			year: '2018',
			month: '3',
			day: '27',
		}
	});
});

router.post('/postData', function(req, res, next) {
	// console.log(req.body, '-------------');
	// var name = '';
	// if (req.body.name) {
	// 	name = req.body.name
	// } else {
	// 	for (obj in req.body) {
	// 		console.log(typeof obj);
	// 	}
	// }
	// console.log(name, '333');
	// if(req.body.name === 'zhangsan') {
	//数据库查询
	MongoClient.connect(url, (err, db) => {
		if (err) throw err;
		var dbo = db.db("userInfo");
		var myobj = {
			name: req.body.name,
		};
		var collection = dbo.collection("user");
		//查询
		collection.find(myobj).toArray((err, result) => {
			console.log(result);
			if (result.length > 0) {
				res.send({
					code: 200,
					message: 'ok',
					result: result[0],
					dddd: {
						name: 'sss'
					}
				});
				db.close();
			} else {
				res.send({
					code: 200,
					message: 'ok',
					result: {}
				});
				db.close();
			}
		});
		// console.log(collection);
		// dbo.collection("user").insertOne(myobj, function(err, res) {
		// 	if (err) throw err;
		// 	console.log("文档插入成功");
		// 	db.close();
		// });
	});

	// }
	// switch (req.body.name) {
	// 	case 'zhangsan':
	// 		res.send({
	// 			code: 200,
	// 			message: 'ok',
	// 			result: {
	// 				name: 'zhangsan',
	// 				age: 14,
	// 				tel: '1234567890'
	// 			}
	// 		});
	// 		break;
	// 	case 'lisi':
	// 		res.send({
	// 			code: 200,
	// 			message: 'ok',
	// 			result: {
	// 				name: 'lisi',
	// 				age: 13,
	// 				tel: '123456789000'
	// 			}
	// 		});
	// 	default:
	// 		res.send({
	// 			code: 200,
	// 			message: 'ok',
	// 			result: {}
	// 		});
	// 		break;
	// }
	// res.send({
	// 	code: 200,
	// 	message: 'ok',
	// 	result: {
	// 		title: 'home',
	// 		year: '2018',
	// 		month: '3',
	// 		day: '27',
	// 	}
	// });
});

router.post('/setData', function(req, res, next) {
	console.log(req.body);
	//添加到数据库
	MongoClient.connect(url, (err, db) => {
		if (err) throw err;
		var dbo = db.db("userInfo");
		var myobj = {
			name: req.body.name,
			age: req.body.age,
			tel: req.body.tel
		};
		var collection = dbo.collection("user");
		//查询
		// collection.find({}).toArray((err, result) => {
		// 	console.log(result);
		// });
		// console.log(collection);
		collection.insertOne(myobj, function(err, result) {
			if (err) throw err;
			// console.log("文档插入成功");
			res.send({
				code: 200,
				message: 'ok',
				result: {}
			});
			db.close();
		});
	});
});
//删除信息
router.post('/deleteData', function(req, res, next) {
	console.log(req.body);
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db("userInfo");
		var whereStr = {
			name: req.body.name
		}; // 查询条件
		dbo.collection("user").find(whereStr).toArray((err, result) => {
			if (err) throw err;
			if (result.length > 0) {
				dbo.collection("user").deleteOne(whereStr, function(err, obj) {
					if (err) throw err;
					console.log("文档删除成功");
					res.send({
						code: 200,
						message: '删除成功',
						result: {}
					});
					db.close();
				});
			} else {
				res.send({
					code: 200,
					message: '未查询到数据',
					result: {}
				});
				db.close();
			}
		});
	});
});

//添加日记
router.post('/keepnode', (req, res, next) => {
	console.log(req);
});

module.exports = router;