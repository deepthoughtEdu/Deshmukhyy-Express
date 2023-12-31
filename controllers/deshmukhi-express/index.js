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

    res.render('deshmukhi-express/create', pageData);
}

deshmukhiExpress.dashboard = async (req, res) => {
    const pageData = {
        headers: ['Deshmukhi', 'Express'],
        title: 'Dashboard',
    };

    res.render('deshmukhi-express/dashboard', pageData);
}