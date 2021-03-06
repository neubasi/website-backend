console.log('Node App startet...')

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'website')));
app.use(express.static(path.join(__dirname, 'stationscockpit')));

app.get('/stationscockpit', function (req, res) {
  res.sendFile('/stationscockpit/index.html', { root: __dirname });
});

app.get('*', function (req, res) {
  res.sendFile('/website/index.html', { root: __dirname });
});


// Server 
app.listen(80, function () {
  console.log('Example app listening on port 80!');
});

