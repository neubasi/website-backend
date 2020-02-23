console.log('Node App startet...')

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: false
}));
app.use(express.static(path.join(__dirname, 'website')));
app.use('/', express.static(path.join(__dirname, 'website')));


// Point static path to dist
//app.use(express.static(path.join(__dirname, 'website')));
//app.use('/static', express.static(__dirname + '/website'));


app.get('*', function (req, res) {
  res.sendFile('/website/index.html', { root: __dirname });
  });


// error handler
app.use(function (err, req, res, next) {
 console.error(err.message); // Log error message in our server's console
 if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
 res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
});


// Server 
app.listen(80, function () {
    console.log('Example app listening on port 80!');
});

