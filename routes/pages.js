var express = require('express');
var router = express.Router();
var helpers = require('../helpers');
var controllers = require('../controllers');
var middlewares = require('../middlewares');

/* GET home page. */
helpers.setupPageRoute(router, '/', [middlewares.user.requireLogin], controllers.pages.getHomePage)
helpers.setupPageRoute(router, '/login', [], controllers.pages.login)

helpers.setupPageRoute(router, '/deshmukhi-express', [], controllers.pages.deshmukhiExpress.home);
helpers.setupPageRoute(router, '/deshmukhi-express/dashboard', [], controllers.pages.deshmukhiExpress.dashboard);
helpers.setupPageRoute(router, '/deshmukhi-express/create', [], controllers.pages.deshmukhiExpress.create);

// helpers.setupPageRoute(router, '/movies-sync', [], controllers.pages.moviesSync.home);
// helpers.setupPageRoute(router, '/movies-sync/dashboard', [], controllers.pages.moviesSync.dashboard);
// helpers.setupPageRoute(router, '/movies-sync/create', [], controllers.pages.moviesSync.create);

// helpers.setupPageRoute(router, '/notes-nest', [], controllers.pages.notesNest.home);
// helpers.setupPageRoute(router, '/notes-nest/dashboard', [], controllers.pages.notesNest.dashboard);
// helpers.setupPageRoute(router, '/notes-nest/create', [], controllers.pages.notesNest.create);

module.exports = router;
