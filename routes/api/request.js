const express = require('express');
const router = express.Router();
const {setupApiRoute} = require('../../helpers');
const controllers = require('../../controllers');
const middlewares = require('../../middlewares');

setupApiRoute(router, 'post', '/create', [middlewares.user.authenticateUser], controllers.api.request.createRequest)
setupApiRoute(router, 'get', '/get', [middlewares.user.authenticateUser], controllers.api.request.getRequests)
setupApiRoute(router, 'post', '/accept', [middlewares.user.authenticateUser], controllers.api.request.acceptRequests)
setupApiRoute(router, 'post', '/rate', [middlewares.user.authenticateUser], controllers.api.request.addRating)

module.exports = router;