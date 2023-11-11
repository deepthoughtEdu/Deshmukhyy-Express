const moviesSync = module.exports;

moviesSync.home = async (req, res) => {
	const pageData = {
        title: 'Movies Sync',
        headers: ['Movies', 'Sync']
    };

    res.render('movies-sync/index', pageData);
}