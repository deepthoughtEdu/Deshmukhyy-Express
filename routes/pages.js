var express = require('express');
var router = express.Router();
var helpers = require('../helpers');
var controllers = require('../controllers');
var middlewares = require('../middlewares');

/* GET home page. */
helpers.setupPageRoute(router, '/', [middlewares.user.requireLogin], controllers.pages.getHomePage)
helpers.setupPageRoute(router, '/login', [], controllers.pages.login)
helpers.setupPageRoute(router, '/app/request', [middlewares.user.requireLogin], controllers.pages.request)
helpers.setupPageRoute(router, '/app/user/dashboard', [middlewares.user.requireLogin], controllers.pages.userdashboard)

module.exports = router;
