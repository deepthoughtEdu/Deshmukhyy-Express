const helpers = require('../../helpers');
const apiHandlers = require('../../business-logic');

const appController = module.exports;

appController.create = async (req, res) => {
	helpers.formatApiResponse(200, res, await apiHandlers.app.create.logic(req));
};