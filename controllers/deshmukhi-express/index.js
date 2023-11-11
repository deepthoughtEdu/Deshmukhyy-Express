const deshmukhiExpress = module.exports;

deshmukhiExpress.home = async (req, res) => {
    const title = 'Deshmukhi Express';
	const pageData = {
        title,
        headers: title.split(' '),
    };
    res.render('deshmukhi-express/index', pageData);
}