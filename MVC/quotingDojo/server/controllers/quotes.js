const mongoose = require('mongoose');
var User = mongoose.model('User', UserSchema)
// All necessary requires, such as the Quote model.
module.exports = {
    index: function(req, res){
      res.render('index');
    }
    dbLookup: function(req, res) {
      User.find({}, function(err, quotes) {
        if (err) { console.log(err); }
        res.render('quotes', { info: quotes });
      });
    },
    create: function(req, res) {
      var user = new User({name: req.body.name, quote: req.body.quote});
      user.save(function(err) {
        if(err) {
          console.log('something went wrong');
        } else {
          console.log('successfully added a user!');
          res.redirect('/quotes');
        }
      })
    }
};
