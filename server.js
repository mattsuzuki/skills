var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override');

var indexRouter = require('./routes/index');
var skillsRouter = require('./routes/skills');

var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');




app.use(function(req, res, next) {
  res.locals.time = new Date();
  next();
});

app.use(function(req, res, next) {
  console.log(res.locals.time);
  next();
}, function(req, res, next) {
  console.log('2nd Middleware')
  next();
});


app.use(logger('dev'));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));


app.use(methodOverride('_method'));


app.use('/', indexRouter);

app.use('/skills', skillsRouter);


app.use(function(req, res, next) {
  next(createError(404));
});


app.use(function(err, req, res, next) {

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
