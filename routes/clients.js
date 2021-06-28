const express = require('express');
const router = express.Router();
const controller = require('../controllers/clients');

router.get('/v1/clients', controller.getClients);
router.post('/v1/clients', controller.addClients);

module.exports = router;
