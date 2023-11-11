const notesNest = module.exports;

notesNest.home = async (req, res) => {
	const pageData = {
        title: 'Notes Nest',
        headers: ['Notes', 'Nest'],
    };
    res.render('notes-nest/index', pageData);
}