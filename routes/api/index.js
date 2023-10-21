
var express = require('express');
var router = express.Router();

const authenticationRoutes = require('./authentication');
const userRoutes = require('./user');
const requestRoutes = require('./request');

router.use('/auth', authenticationRoutes);
router.use('/user', userRoutes);
router.use('/request', requestRoutes);

module.exports = router;
