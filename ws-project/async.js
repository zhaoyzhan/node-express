var async = require('async');

function Async() {};

Object.assign(Async.prototype, {
	//同步无关联函数执行
	series() {
		async.series([(callback) => {
			setTimeout(() => {
				console.log('1111');
				// show() {
				// 	console.log('44444')
				// }
				callback(null, 1);
			}, 2000);
		}, (callback) => {
			setTimeout(() => {
				console.log('2222');
				callback('404', 2);
			}, 3000);
		}], (err, res) => {
			console.log('3333')
			console.log(res)
			console.log(err)
		});
	},
	//异步无关联函数
	parallel() {
		async.parallel([(callback) => {
			setTimeout(() => {
				console.log('1111');
				// show() {
				// 	console.log('44444')
				// }
				callback(null, 1);
			}, 4000);
		}, (callback) => {
			setTimeout(() => {
				console.log('2222');
				callback('404', 2);
			}, 3000);
		}], (err, res) => {
			console.log('3333')
			console.log(res)
			console.log(err)
		});
	},
	//同步有关联函数
	waterfall() {
		async.waterfall([(callback) => {
			setTimeout(() => {
				console.log('1111');
				// show() {
				// 	console.log('44444')
				// }
				callback(null, 1);
			}, 4000);
		}, (one, callback) => {
			setTimeout(() => {
				console.log('2222');
				callback('404', one, 2);
			}, 3000);
		}], (err, one, two) => {
			// console.log('3333')
			console.log(one, two);
			console.log(err);
		});
	}
});

var instance = new Async();

// instance.series();
// instance.parallel();
instance.waterfall();