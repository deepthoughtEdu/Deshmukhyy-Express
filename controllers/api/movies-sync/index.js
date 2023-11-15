const helpers = require('../../../helpers');
const apiHandlers = require('../../../api');

const movieSyncController = module.exports;

movieSyncController.create = async (req, res) => {
	helpers.formatApiResponse(200, res, await apiHandlers.movieSync.core.create(req));
};

movieSyncController.get = async (req, res) => {
	helpers.formatApiResponse(200, res, await apiHandlers.movieSync.core.get(req));
};

movieSyncController.update = async (req, res) => {
	helpers.formatApiResponse(200, res, await apiHandlers.movieSync.core.update(req));
}