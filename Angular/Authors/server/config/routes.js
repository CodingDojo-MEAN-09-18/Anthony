const author = require('../controllers/author.js')

module.exports = function(app){
    app.get('/authors', function(req, res) {
        author.show(req, res);
    });

    app.post('/showAuthor', function(req, res) {
        author.show_one(req, res);
    });

    app.post('/addAuthor', function(req, res) {
        console.log('route');
        author.add(req, res);
    });
    app.put('/editaAuthor',function(req, res){
        console.log('editRoute');
        author.update(req,res);
    });
    app.delete('/remove/:id', function(req, res) {
        console.log('This is from routes remove');
        author.remove(req, res);
    });

}