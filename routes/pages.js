var express = require('express');
var router = express.Router();
var helpers = require('../helpers');
var controllers = require('../controllers');
var middlewares = require('../middlewares');

/* GET home page. */
helpers.setupPageRoute(router, '/', [middlewares.user.requireLogin], controllers.pages.getHomePage)
helpers.setupPageRoute(router, '/login', [], controllers.pages.login)

helpers.setupPageRoute(router, '/deshmukhi-express', [], controllers.pages.deshmukhiExpress.home);
helpers.setupPageRoute(router, '/deshmukhi-express/delivery-partner', [], controllers.pages.deshmukhiExpress.dashboard);
helpers.setupPageRoute(router, '/deshmukhi-express/user', [], controllers.pages.deshmukhiExpress.create);

module.exports = router;
