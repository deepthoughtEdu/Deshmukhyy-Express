const express = require('express');
const router = express.Router();
const {setupApiRoute} = require('../../../helpers');
const controllers = require('../../../controllers');
const middlewares = require('../../../middlewares');

setupApiRoute(router, 'get', '/', [middlewares.user.authenticateUser], controllers.api.deshmukhiExpress.get);
setupApiRoute(router, 'post', '/', [middlewares.user.authenticateUser], controllers.api.deshmukhiExpress.create);
setupApiRoute(router, 'put', '/status/:id', [middlewares.user.authenticateUser], controllers.api.deshmukhiExpress.updateStatus);
setupApiRoute(router, 'put', '/rating/:id', [middlewares.user.authenticateUser], controllers.api.deshmukhiExpress.rate);

module.exports = router;