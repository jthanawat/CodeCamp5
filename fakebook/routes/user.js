const express = require('express');
const userController = require('../controller/userController')
const router = express.Router();

router.get('/:id', userController.addFiveFromId)

module.exports = router;