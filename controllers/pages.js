const pagesController = module.exports;

pagesController.getHomePage = async (req, res) => {
    res.render('index', { title: 'Dashboard' });
}

pagesController.login = async (req, res) => {
    res.render('login', { title: 'Login' });
}

pagesController.user = async (req, res) => {
    res.render('app/user/index', { title: 'User' });
}

pagesController.delivery = async (req, res) => {
    res.render('app/delivery/index', { title: 'Delivery' });
}


