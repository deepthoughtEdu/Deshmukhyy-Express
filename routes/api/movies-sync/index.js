const express = require('express');
const router = express.Router();
const {setupApiRoute} = require('../../../helpers');
const controllers = require('../../../controllers');
const middlewares = require('../../../middlewares');

setupApiRoute(router, 'get', '/', [middlewares.user.authenticateUser], controllers.api.moviesSync.get);
setupApiRoute(router, 'post', '/', [middlewares.user.authenticateUser, middlewares.checkRequired.bind(null, ['releaseYear', 'title', 'fare', 'rating', 'showTime'])], controllers.api.moviesSync.create);
setupApiRoute(router, 'put', '/:id', [middlewares.user.authenticateUser], controllers.api.moviesSync.update);

module.exports = router;