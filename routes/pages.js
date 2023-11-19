var express = require('express');
var router = express.Router();
var helpers = require('../helpers');
var controllers = require('../controllers');
var middlewares = require('../middlewares');

/* GET home page. */
helpers.setupPageRoute(router, '/', [middlewares.user.requireLogin], controllers.pages.getHomePage)
helpers.setupPageRoute(router, '/login', [], controllers.pages.login)

helpers.setupPageRoute(router, '/app/user', [middlewares.user.requireLogin], controllers.pages.user)

helpers.setupPageRoute(router, '/app/delivery', [middlewares.user.requireLogin], controllers.pages.delivery)

module.exports = router;
