const helpers = require('../../helpers');
const apiHandlers = require('../../api');

const notesController = module.exports;

notesController.create = async (req, res) => {
	helpers.formatApiResponse(200, res, await apiHandlers.notes.create(req));
};
