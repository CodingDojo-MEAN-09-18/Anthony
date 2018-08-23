const mongoose = require('mongoose');
var User = mongoose.model('User');
var quotes = require('../controllers/quotes');// Very important!
module.exports = function(app){
  app.get('/', function(req, res){
    quotes.index(req,res);
  });
  app.post('/quotes', function(req,res){
    quotes.create(req, res);
    // var user = new User({name: req.body.name, quote: req.body.quote});
    // user.save(function(err) {
    //   if(err) {
    //     console.log('something went wrong');
    //   } else {
    //     console.log('successfully added a user!');
    //     res.redirect('/quotes');
    //   }
    // })
  });

  app.get('/quotes', function(req, res) {
    quotes.dbLookup(req, res);
    // User.find({}, function(err, quotes) {
    //   if (err) { console.log(err); }
    //   res.render('quotes', { info: quotes });
    // });
  });

}
