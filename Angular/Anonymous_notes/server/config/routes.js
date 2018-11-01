const note = require('../controllers/note.js')

module.exports = function(app){
    app.get('/notes', function(req, res) {
        console.log('this is from config route get');
        note.show(req, res);
    });

    app.post('/addNotes', function(req, res) {
        console.log('this is from the addNote route');
        note.add(req, res);
    });
    
}