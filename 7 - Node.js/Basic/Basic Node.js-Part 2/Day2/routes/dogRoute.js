const express = require('express');
const router = express.Router();

router.post('/walk', function(req, res) {
  req.send('dog walk');
})

router.post('/play', function(req, res) {
  req.send('dog play');
})

module.exports = router;