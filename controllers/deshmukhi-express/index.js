const deshmukhiExpress = module.exports;

deshmukhiExpress.home = async (req, res) => {
	const pageData = {
        title: 'Deshmukhi Express',
        headers: ['Deshmukhi', 'Express'],
    };
    res.render('deshmukhi-express/index', pageData);
}