const deshmukhiExpress = module.exports;

deshmukhiExpress.home = async (req, res) => {
    const pageData = {
        title: 'Deshmukhi Express',
        headers: ['Deshmukhi', 'Express'],
    };

    res.render('deshmukhi-express/index', pageData);
}

deshmukhiExpress.create = async (req, res) => {
    const pageData = {
        headers: ['Deshmukhi', 'Express'],
        title: 'New request',
    };

    res.render('deshmukhi-express/user', pageData);
}

deshmukhiExpress.dashboard = async (req, res) => {
    const pageData = {
        headers: ['Deshmukhi', 'Express'],
        title: 'Dashboard',
        user: req.user
    };

    res.render('deshmukhi-express/delivery-partner', pageData);
}