const author = require('../controllers/author.js')

module.exports = function(app){
    app.get('/authors', function(req, res) {
        author.show(req, res);
    });

    app.post('/showAuthor', function(req, res) {
        author.show_one(req, res);
    });

    app.post('/addAuthor', function(req, res) {
        author.add(req, res);
    });
    app.put('/:id',function(req, res){
        author.update(req,res);
    });
    app.delete('/:id', function(req, res) {
        author.remove(req, res);
    });

}