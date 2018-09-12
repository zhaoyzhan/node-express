//测试
const math = require('../mocha.js');
const assert = require('assert');

describe('测试math模块', () => {
	// describe('测试add方法', () => {
	// 	it('判断1+1', () => {
	// 		assert.equal(math.add(1, 1), 2);
	// 	})
	// });
	it('测试异步方法', (done) => {
		setTimeout(() => {
			assert.equal(1 + 1, 3);
			done();
		}, 1000)
	});
	// describe('测试异步方法', () => {
	// 	it('判断1+1', () => {
	// 		assert.equal(math.add(1, 1), 2);
	// 	})
	// })
});