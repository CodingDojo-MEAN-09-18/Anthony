const Dog = require('mongoose').model('Dog');

module.exports = {
  index(req, res){
    Dog.find({}, function(err, results){
      if (err) { console.log(err); }
      res.render('index', { dogs: results });
    })
  },
  create(req, res){
    // Create a new dog!
    Dog.create(req.body, function(err, result){
      if (err) { console.log(err); }
      else{
        console.log(result,"From create");
        console.log("this is the response", res);
      }
      res.redirect('/')
    });
  },
  show(req,res){
    Dog.find({ _id: req.params.id }, function(err, response) {
      if (err) { console.log(err); }
      res.render('show', { dog: response[0] });
    });
  },
  newDog(req, res){
    res.render('new');
  },
  edit(req, res){
    Dog.find({ _id: req.params.id }, function(err, response) {
      if (err) { console.log(err); }
      res.render('edit', { dog: response[0] });
    })
  },
  remove(req, res){
    Dog.remove({ _id: req.params.id }, function(err, result){
      if (err) { console.log(err); }
      res.redirect('/');
    });
  }
};
