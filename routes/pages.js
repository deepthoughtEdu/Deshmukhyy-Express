var express = require('express');
var router = express.Router();
var helpers = require('../helpers');
var controllers = require('../controllers');
var middlewares = require('../middlewares');

/* GET home page. */
helpers.setupPageRoute(router, '/', [middlewares.user.requireLogin], controllers.pages.getHomePage)
helpers.setupPageRoute(router, '/login', [], controllers.pages.login)

helpers.setupPageRoute(router, '/deshmukhi-express', [], controllers.pages.deshmukhiExpress.home);
<<<<<<< HEAD
helpers.setupPageRoute(router, '/deshmukhi-express/dashboard', [], controllers.pages.deshmukhiExpress.dashboard);
helpers.setupPageRoute(router, '/deshmukhi-express/create', [], controllers.pages.deshmukhiExpress.create);

helpers.setupPageRoute(router, '/movies-sync', [], controllers.pages.movieSync.home);
helpers.setupPageRoute(router, '/movies-sync/create', [], controllers.pages.movieSync.create);

=======
helpers.setupPageRoute(router, '/movies-sync', [], controllers.pages.movieSync.home);
>>>>>>> dataDrivenProblemDiagnosis
helpers.setupPageRoute(router, '/notes-nest', [], controllers.pages.notesNest.home);
helpers.setupPageRoute(router, '/notes-nest/create', [], controllers.pages.notesNest.create);

module.exports = router;
