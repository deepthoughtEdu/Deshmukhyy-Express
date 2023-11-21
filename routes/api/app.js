const express = require('express');
const router = express.Router();
const {setupApiRoute} = require('../../helpers');
const controllers = require('../../controllers');
const middlewares = require('../../middlewares');

setupApiRoute(router, 'post', '/', [middlewares.user.authenticateUser], controllers.api.app.create)
setupApiRoute(router, 'get', '/', [middlewares.user.authenticateUser], controllers.api.app.read)
setupApiRoute(router, 'put', '/:id', [middlewares.user.authenticateUser], controllers.api.app.update)
setupApiRoute(router, 'put', '/status/:id', [middlewares.user.authenticateUser], controllers.api.app.status);
setupApiRoute(router, 'put', '/rating/:id', [middlewares.user.authenticateUser], controllers.api.app.rate);

module.exports = router;