const movieSync = module.exports;

movieSync.home = async (req, res) => {
	const pageData = {
        title: 'Movie Sync',
        headers: ['Movie', 'Sync']
    };

    res.render('movie-sync/index', pageData);
}

movieSync.create = async (req, res) => {
	const pageData = {
        title: 'Add new movie',
        headers: ['Movie', 'Sync']
    };

    res.render('movie-sync/create', pageData);
}