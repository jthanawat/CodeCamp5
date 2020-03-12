const express = require('express');
const router = express.Router();

router.get('/*', function(req, res) {
  res.status(404).send('Not Founded')
})

module.exports = router;