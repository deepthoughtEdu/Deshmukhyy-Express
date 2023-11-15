const helpers = require('../../../helpers');
const apiHandlers = require('../../../api');

const notesNestController = module.exports;

notesNestController.create = async (__, __) => {
	helpers.formatApiResponse(____, ___, await apiHandlers.______.core.create(___));
};
