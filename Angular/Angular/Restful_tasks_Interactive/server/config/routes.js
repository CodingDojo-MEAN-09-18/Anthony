const tasks = require('../controllers/task.js')

module.exports = function(app){
    app.get('/tasks', function(req, res) {
        tasks.show(req, res);
    });

    app.post('/showATask', function(req, res) {
        tasks.show_one(req, res);
    });

    app.post('/', function(req, res) {
        tasks.add(req, res);
    });
    app.put('/:id',function(req, res){
        tasks.update(req,res);
    });
    app.delete('/:id', function(req, res) {
        tasks.remove(req, res);
    });

}
