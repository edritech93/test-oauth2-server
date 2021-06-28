const express = require('express');
const router = express.Router();
const controller = require('../controllers/tokens');

router.post('/v1/register', controller.register);
router.post('/v1/login', controller.login);

module.exports = router;
