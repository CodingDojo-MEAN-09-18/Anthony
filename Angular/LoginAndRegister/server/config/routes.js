const user = require('../controllers/user');

module.exports = function(app) {
    app.post('/login', function(req, res) {
        user.login(req, res);
    });

    app.post('/register', function(req, res) {
        user.register(req, res);
    });

    app.delete('/logout', function(req, res) {
        user.logout(req, res);
    });
}