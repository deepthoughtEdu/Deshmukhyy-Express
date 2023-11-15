const express = require('express');
const router = express.Router();
const {setupApiRoute} = require('../../../helpers');
const controllers = require('../../../controllers');
const middlewares = require('../../../middlewares');

//Write your code here
setupApiRoute();

module.exports = router;