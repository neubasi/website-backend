console.log('Node App startet...')

const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const https = require('https');
const http = require('http');


// Certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/hy1dra.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/hy1dra.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/hy1dra.com/chain.pem', 'utf8');


app.use(express.static(path.join(__dirname, 'website')));
app.use(express.static(path.join(__dirname, 'stationscockpit')));




const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

// set up a route to redirect http to https
app.get('*', function(req, res) {  
    res.redirect('https://' + req.headers.host + req.url);
});

/*
app.get('/stationscockpit', function (req, res) {
	res.sendFile('/stationscockpit/index.html', { root: __dirname });
  });
  
  app.get('*', function (req, res) {
	res.sendFile('/website/index.html', { root: __dirname });
  });*/


httpServer.listen(80, () => {
	console.log('HTTP Server running on port 80, Simon Neubauer');
});



httpsServer.listen(443, () => {
	console.log('HTTPS Server running on port 443, Simon Neubauer');
});
