const moviesSync = module.exports;

moviesSync.home = async (req, res) => {
	const pageData = {
        title: 'Movies Sync',
        headers: ['Movies', 'Sync']
    };

    res.render('movies-sync/index', pageData);
}

moviesSync.dashboard = async (req, res) => {
	const pageData = {
        title: 'Dashboard',
        headers: ['Movies', 'Sync']
    };

    res.render('movies-sync/dashboard', pageData);
}

moviesSync.create = async (req, res) => {
	const pageData = {
        title: 'Add new movie',
        headers: ['Movies', 'Sync']
    };

    res.render('movies-sync/create', pageData);
}