const tasks = require('../controllers/task.js')

module.exports = function(app){
    app.get('/tasks', function(req, res) {
        tasks.show(req, res);
    });

    app.post('/showATask', function(req, res) {
        tasks.show_one(req, res);
    });

    app.post('/AddaTask', function(req, res) {
        tasks.add(req, res);
    });
    app.post('/editaTask',function(req, res){
        tasks.update(req,res);
    });
    app.post('/remove', function(req, res) {
        tasks.remove(req, res);
    });

}
