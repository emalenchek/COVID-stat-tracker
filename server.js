const express = require('express');
const path = require('path');

const app = express();

if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '.', 'build', 'index.html'));
    });
  }
