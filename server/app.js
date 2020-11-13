/**
 * File: app.js
 * Desc: Express server setup
 * */

// Module dependencies
const express = require('express');
const path = require('path');

const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// Routing File
const index = require('./routes/indexRoute');

// Create the App
const app = express();

// view engine setup (required)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade'); // JADE to make html files // TODO: update to Pug

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Serve static files via Express
app.use(express.static('client/src')); // change to 'client/dist' when you have a build process

// Associate Routes
app.use('/', index);

// Catch 404 Error and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app; // make the whole express 'app' available to other modules
