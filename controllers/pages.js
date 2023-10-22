const pagesController = module.exports;

pagesController.getHomePage = async (req, res) => {
    res.render('index', { title: 'Express' });
}

pagesController.login = async (req, res) => {
    res.render('login', { title: 'Login' });
}