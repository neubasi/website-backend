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

// Point static path to dist
app.use(express.static(path.join(__dirname, 'website')));

app.get('*', function (req, res) {
  res.sendFile('website/index.html', { root: __dirname });
  });

// Server 
app.listen(80, function () {
    console.log('Example app listening on port 80!');
});