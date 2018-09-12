// promiseDemo() {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			console.log('promise');
// 			resolve();
// 		}, 2000);
// 	})
// }

var p = new Promise((resolve, reject) => {
		setTimeout(() => resolve(), 2000)
	})
	.then(() => setTimeout(null, 2000), (err) => {
		console.log(err);
	})
	.then(() => setTimeout(function() {
		console.log(11)
	}, 2000), (err) => {
		console.log(err);
	});


// promiseDemo()