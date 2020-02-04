console.log('Node App startet...')

const express = require('express');
const app = express();
const path = require('path');

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Server 
app.listen(80, function () {
    console.log('Example app listening on port 80!');
});