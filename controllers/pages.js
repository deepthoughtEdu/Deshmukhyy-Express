const pagesController = module.exports;

pagesController.deshmukhiExpress = require('./deshmukhi-express');


pagesController.getHomePage = async (req, res) => {
    const title = 'Deepthought';
    const pageData = {
        title,
        headers: title.split(' '),
    };

    res.render('index', pageData);
}

pagesController.login = async (req, res) => {
    const pageData = {
        title: 'Login',
        headers: ['Deepthought']
    };

    res.render('login', pageData);
}




