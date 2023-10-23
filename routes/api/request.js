const express = require('express');
const router = express.Router();
const {setupApiRoute} = require('../../helpers');
const controllers = require('../../controllers');
const middlewares = require('../../middlewares');

setupApiRoute(router, 'post', '/', [middlewares.user.authenticateUser], controllers.api.request.create)
setupApiRoute(router, 'get', '/', [middlewares.user.authenticateUser], controllers.api.request.get)

module.exports = router;