var createError = require('http-errors');
var express = require('express');
// node路径解析的核心模块
var path = require('path');
// 解析cookie的中间件
var cookieParser = require('cookie-parser');
//记录日志的工具
var logger = require('morgan');

// 引入路由配置
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
// __dirname全局变量, 当前文件所在地址的绝对路径
// path.join  结合
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
//格式化请求
app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));
app.use(cookieParser());
//当用户访问静态文件时执行
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;