const express = require('express');
const router = express.Router();
const controller = require('../controllers/tokens');
const OAuthServer = require('express-oauth-server');

router.oauth = new OAuthServer({
    model: controller
});

router.post('/v1/register', controller.register);
router.post('/v1/login', router.oauth.token());

module.exports = router;
