const Koa = require('koa');
const app = new Koa();

// app.use(async ctx => {
// 	console.log(ctx.res);
// 	ctx.body = 'hello Wwwworld';
// });

// x-response-time

app.use(async(ctx, next) => {
	// 记录请求进入的时间戳
	const start = Date.now();
	await next();
	const ms = Date.now() - start;
	ctx.set('X-Response-Time', `${ms}ms`);
});

// logger

app.use(async(ctx, next) => {
	// 再次纪录一个时间戳
	const start = Date.now();
	await next();
	//获取了response请求返回开始, 到返回结束的时间
	const ms = Date.now() - start;
	console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

// response

app.use(async ctx => {
	ctx.body = 'Hello World';
});

app.listen(5000);