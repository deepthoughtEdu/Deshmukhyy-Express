const helpers = require('../../../helpers');
const apiHandlers = require('../../../api');

const deshmukhiExpressController = module.exports;

deshmukhiExpressController.create = async (req, res) => {
	helpers.formatApiResponse(200, res, await apiHandlers.deshmukhiExpress.core.create(req));
};

deshmukhiExpressController.get = async (req, res) => {
	helpers.formatApiResponse(200, res, await apiHandlers.deshmukhiExpress.core.get(req));
};

deshmukhiExpressController.updateStatus = async (req, res) => {
	helpers.formatApiResponse(200, res, await apiHandlers.deshmukhiExpress.core.updateStatus(req));
};

deshmukhiExpressController.rate = async (req, res) => {
	helpers.formatApiResponse(200, res, await apiHandlers.deshmukhiExpress.core.rate(req));
};