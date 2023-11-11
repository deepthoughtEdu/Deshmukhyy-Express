const notesNest = module.exports;

notesNest.home = async (req, res) => {
    const title = 'Notes Nest';
	const pageData = {
        title,
        headers: title.split(' '),
    };
    res.render('notes-nest/index', pageData);
}