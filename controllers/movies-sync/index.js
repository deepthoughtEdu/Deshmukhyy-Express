const moviesSync = module.exports;

moviesSync.home = async (req, res) => {
    const title = 'Movies Sync';
	const pageData = {
        title,
        headers: title.split(' '),
    };

    res.render('movies-sync/index', pageData);
}