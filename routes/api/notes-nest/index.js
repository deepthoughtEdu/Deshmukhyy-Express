const express = require('express');
const router = express.Router();
const {setupApiRoute} = require('../../../helpers');
const controllers = require('../../../controllers');
const middlewares = require('../../../middlewares');

setupApiRoute(router, 'get', '/', [middlewares.user.authenticateUser], controllers.api.notesNest.get)
setupApiRoute(router, 'post', '/', [middlewares.user.authenticateUser], controllers.api.notesNest.create)
setupApiRoute(router, 'put', '/:id', [middlewares.user.authenticateUser], controllers.api.notesNest.update)

module.exports = router;