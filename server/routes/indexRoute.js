/**
 * File: routes/indexRoute.js
 **/

// Imports
// node core
const path = require('path');

// node libs
const express = require('express');

// Surface a Router
const router = express.Router();

// Provide a GET for the index route / , direct to index.html
router.get('/', (req, res, next) => {
  res.sendFile(
    path.join(__dirname, '../../client/src/templates', 'index.html')
  );
});

module.exports = router;
