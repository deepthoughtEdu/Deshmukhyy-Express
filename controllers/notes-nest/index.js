const notesNest = module.exports;

notesNest.home = async (req, res) => {
	const pageData = {
        title: 'Notes Nest',
        headers: ['Notes', 'Nest'],
    };
    res.render('notes-nest/index', pageData);
}

notesNest.dashboard = async (req, res) => {
	const pageData = {
        title: 'Dashboard',
        headers: ['Notes', 'Nest']
    };

    res.render('notes-nest/dashboard', pageData);
}

notesNest.create = async (req, res) => {
	const pageData = {
        title: 'New note',
        headers: ['Notes', 'Nest'],
    };
    res.render('notes-nest/create', pageData);
}