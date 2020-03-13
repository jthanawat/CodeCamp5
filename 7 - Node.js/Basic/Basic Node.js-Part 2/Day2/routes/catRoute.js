const express = require('express');
const router = express.Router();

router.post('/eat', function(req, res) {
  res.send('cat eat');
})

router.post('/sleep', function(req, res) {
  res.send('cat sleep')
})

module.exports = router; // export router variable so that it can be imported and used in other files.