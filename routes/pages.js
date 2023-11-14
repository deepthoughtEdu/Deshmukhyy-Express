var express = require('express');
var router = express.Router();
var helpers = require('../helpers');
var controllers = require('../controllers');
var middlewares = require('../middlewares');

/* GET home page. */
helpers.setupPageRoute(router, '/', [middlewares.user.requireLogin], controllers.pages.getHomePage)
helpers.setupPageRoute(router, '/login', [], controllers.pages.login)

helpers.setupPageRoute(router, '/deshmukhi-express', [], controllers.pages.deshmukhiExpress.home);
helpers.setupPageRoute(router, '/movies-sync', [], controllers.pages.movieSync.home);
helpers.setupPageRoute(router, '/notes-nest', [], controllers.pages.notesNest.home);

module.exports = router;
