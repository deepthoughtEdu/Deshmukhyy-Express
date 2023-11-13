const helpers = require('../../../helpers');
const apiHandlers = require('../../../api');

const deshmukhiExpressController = module.exports;

deshmukhiExpressController.create = async (req, res) => {
	helpers.formatApiResponse(200, res, await apiHandlers.deshmukhiExpress.core.create(req));
};