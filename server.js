const express = require('express');
const path = require('path');
const request = require('request');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/summary', (req, res) => {
  request(
    { url: 'https://api.covid19api.com/summary' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 5000);