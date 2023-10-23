const pagesController = module.exports;

pagesController.getHomePage = async (req, res) => {
    res.render('index', { title: 'Dashboard' });
}

pagesController.login = async (req, res) => {
    res.render('login', { title: 'Login' });
}

pagesController.request = async (req, res) => {
    res.render('deshmukhyyexpress/request', { title: 'Request' });
}

pagesController.userdashboard = async (req, res) => {
    res.render('deshmukhyyexpress/userdashboard', { title: 'User Dashboard' });
}


