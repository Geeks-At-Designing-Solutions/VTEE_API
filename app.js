var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var db = require('./database');


var adminRouter = require('./routes/admin');
var usersRouter = require('./routes/users');

var app = express();
var PORT = process.env.PORT || 6000;
app.listen(PORT,()=>{
    console.log("api is listening at port", PORT)
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', usersRouter);
app.use('/admin', adminRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use((err, req, res, next)=>{
  // set locals, only providing error in development
  res.locals.message = err.message;
  var erMsg = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // console.log(error.status);
  // console.log(error.stack);
  res.status(err.status || 500);
  res.json(erMsg);
});

module.exports = app;
