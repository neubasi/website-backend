console.log('Node App startet...')

const express = require('express');
const app = express();
const path = require('path');
const createError = require('http-errors');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
app.use(express.urlencoded({ extended: false }));
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Point static path to dist
app.use(express.static(path.join(__dirname, 'website')));

app.get('*', function (req, res) {
  res.sendFile('website/index.html', { root: __dirname });
  });

// Server 
app.listen(80, function () {
    console.log('Example app listening on port 80!');
});