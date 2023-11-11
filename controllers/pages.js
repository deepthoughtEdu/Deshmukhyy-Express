const pagesController = module.exports;

pagesController.deshmukhiExpress = require('./deshmukhi-express');
pagesController.moviesSync = require('./movies-sync');
pagesController.notesNest = require('./notes-nest')

pagesController.getHomePage = async (req, res) => {
    const pageData = {
        title: 'Dashboard',
        headers: ['Deepthought']
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




