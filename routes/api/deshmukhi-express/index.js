const express = require('express');
const router = express.Router();
const {setupApiRoute} = require('../../../helpers');
const controllers = require('../../../controllers');
const middlewares = require('../../../middlewares');

setupApiRoute(router, 'get', '/', [middlewares.user.authenticateUser], controllers.api.deshmukhiExpress.get);
setupApiRoute(router, 'post', '/', [middlewares.user.authenticateUser], controllers.api.deshmukhiExpress.create);

module.exports = router;