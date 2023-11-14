const movieSync = module.exports;

movieSync.home = async (req, res) => {
    const title = 'Movie Sync';
	const pageData = {
        title,
        headers: title.split(' '),
    };

    res.render('movie-sync/index', pageData);
}