const express = require('express')
const router = express.Router()

router.get('/first', function(req, res) {
    res.send('first on item')
})

router.get('/second', function(req, res) {
    res.send('second on item')
})

module.exports = router