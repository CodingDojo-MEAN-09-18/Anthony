const User = require('mongoose').model('User');

module.exports = {
    login(req, res) {
        console.log("this is from login controller", req.body);
        User.findOne({email})
            .then(user => {
                try {
                    return User.validatePassword(password, user.password)
                    .then(valid => {
                        if (!valid) throw new error();
                    })
                }
                catch (e) {
                    throw new Error;
                }
            })
            .catch(() => {
                res.json("Email/Password combo not valid.");
            })
    },
    logout(req, res) {
        req.session.destroy();
        res.json(true);
    },
    register() {
        User.create(req.body)
        .then(user => {
            return res.json("Succesfuly Registered!");
        })
        .catch(error => {
            res.json(error);
        })
    }
};
function completelogin(req, res, user) {
    // toObject is used incase someone tries to get to session data
    // it will be deleted upon getting to it
    req.session.user = user.toObject();    
    delete req.session.user.password;
    res.cookie('userID', user._id.toString());
    res.cookie('expiration', Date.now() + 86400 * 1000);
    res.json(user);
}