var express = require('express');
var router = express.Router();
var helpers = require('../helpers');
var controllers = require('../controllers');

/* GET home page. */
helpers.setupPageRoute(router, '/', [], controllers.pages.getHomePage)
helpers.setupPageRoute(router, '/login', [], controllers.pages.login)
helpers.setupPageRoute(router, '/request', [], controllers.pages.request)

module.exports = router;
