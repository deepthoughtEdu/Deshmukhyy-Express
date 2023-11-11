const express = require('express');
const router = express.Router();
const {setupApiRoute} = require('../../../helpers');
const controllers = require('../../../controllers');
const middlewares = require('../../../middlewares');

setupApiRoute(router, 'post', '/', [middlewares.user.authenticateUser, middlewares.checkRequired.bind(null, ['releaseYear', 'title', 'genre', 'rating', 'director'])], controllers.api.moviesSync.create);

module.exports = router;