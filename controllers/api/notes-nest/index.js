const helpers = require('../../../helpers');
const apiHandlers = require('../../../api');

const notesNestController = module.exports;

notesNestController.create = async (req, res) => {
	helpers.formatApiResponse(200, res, await apiHandlers.notesNest.core.create(req));
};

notesNestController.get = async (req, res) => {
	helpers.formatApiResponse(200, res, await apiHandlers.notesNest.core.get(req));
};

notesNestController.update = async (req, res) => {
	helpers.formatApiResponse(200, res, await apiHandlers.notesNest.core.update(req));
};