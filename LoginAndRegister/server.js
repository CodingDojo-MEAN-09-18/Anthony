var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
// Had to change 'bcrypt-as-promised' to just 'bcrypt' b/c of issues with installation
mongoose.connect('mongodb://localhost/secret');
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
mongoose.Promise = global.Promise;
const flash = require('express-flash');
app.use(flash());
const session = require('express-session');
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
const ValidateSchema = new mongoose.Schema({
  password: {type: String, required: [true, "Password is needed before submitting!"]},

  email:{
        type: String,
        required:[true,"Must have a valid email"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']}
}, {timestamps: true})

const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "A first name is required"]},

  last_name: {
    type: String, required: [true, "Message needed"],
    minlength: [2, "Message must have at least 3 characters"]},

  email:{
    type: String,
    required:[true,"Must have a valid email"],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']},

  password: {
    type: String,
    required: [true, "Password required"]},

  birthday: {
    day:{type: Number,required:[true,"A birth day is required for registration"],min:1,max:31},
    month:{type: Number, required:[true,"A birth month is required for registration"],min:1,max:12},
    year:{type: Number, required:[true,"A birth year is required for registration"],min:1900,max:2018}
  }
}, {timestamps: true})
var User = mongoose.model('User', UserSchema);
var Val = mongoose.model('Val', ValidateSchema);
app.get('/', function(req,res){
  res.render('index');
})
app.post('/registar', function(req,res){
  var user =  new User({first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email, password: req.body.password, birthday:{day:req.body.day, month: req.body.month, year: req.body.year}});
  bcrypt.hash(user.password,10)
  .then(hashed_password =>{
    user.password = hashed_password;
    user.save(function(err){
      if(err) {
        console.log("Error saving", err);
        for(var key in err.errors){
          req.flash('registration', err.errors[key].message);
        }
        res.redirect('/');
      }
      else{
        console.log("Succesfully added new User!!");
        res.redirect('/');
      }
    });
  })
  .catch(error => {
    console.log("Issue hashing password");
    res.redirect('/');
  })
});
app.get('/dashboard',function(req,res){
  res.render('dashboard');
})
app.post('/login', function (request, response) {
  // destructure email and password from request body
  const { email, password } = request.body;

  // find a user by email
  User.findOne({ email })
    // use promises rather than callbacks
    .then(user => {
      // compare form password to hashed user password
      // note that we don't check to see if a user is found,
      // if it is undefined it will throw an error and catch will handle it
      return bcrypt.compare(password, user.password)
        // the result from comparing, we did find a user
        .then(result => {
          // but if the password did not match we throw an error, catch will handle it becuase we returned the promise
          if (!result) { throw new Error(); }

          // success, redirect to dashboard
          response.redirect('/dashboard');
        });
    })
    // handle all error cases, render page and send a single error message
    .catch(error => {
      response.render('index', { error: 'user/password combo not found' });
    });
});

app.listen(8000, function() {
    console.log("listening on port 8000");
})
