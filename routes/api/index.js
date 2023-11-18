/* This file acts as the entry point for API routes within the Deshmukky Express project. 
 It's like the front door to the system, handling requests and directing them to the right places. */

// Import the 'express' library and create a router instance 
var express = require('express');
var router = express.Router();

// Import route files for different functionalities
const authenticationRoutes = require('./authentication');
const userRoutes = require('./user');
const deshmukhiExpressRoutes = require('./deshmukhi-express');

router.use('/auth', authenticationRoutes);
router.use('/user', userRoutes);
router.use('/request', deshmukhiExpressRoutes);

module.exports = router;
