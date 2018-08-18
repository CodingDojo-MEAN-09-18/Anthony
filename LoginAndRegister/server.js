var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
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
// const SecretSchema = new mongoose.Schema({
//   secret: {type: String, required: [true, "Secret is needed before submitting!"]}
// }, {timestamps: true})

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
    type: String, required: [true, "Password required"], minlength: 8},

  birthday: {
    day:{type: Number,required:[true,"A birth day is required for registration"],min:1,max:31},
    month:{type: Number, required:[true,"A birth month is required for registration"],min:1,max:12},
    year:{type: Number, required:[true,"A birth year is required for registration"],min:1900,max:2018}
  }
}, {timestamps: true})
var User = mongoose.model('User', UserSchema);
app.get('/', function(req,res){
  res.render('index');
})
app.post('/registar', function(req,res){
  new User({first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email, birthday:{day:req.body.day, month: req.body.month, year: req.body.year},password: req.body.password}).validate()
  .then((user)=>{
           bcrypt.hash(user.password,10)
                .then((hashed_pass)=>{
                    user.password = hashed_pass;
                })
                .catch((error)=>{
                    for(var key in error.errors){
                        req.flash('registration', error.errors[key].message);
                    }
                    response.redirect('/')
                })
            user.save()
                .then((user)=>{
                  req.flash('success', message)
                  res.redirect('/')
                })
                .catch((error)=>{
                    for(var key in error.errors){
                        req.flash('registration', error.errors[key].message);
                    }
                    res.redirect('/')
                })
        })
        .catch((error)=>{
            for(var key in error.errors){
                req.flash('registration', error.errors[key].message);
            }
            // redirect the user to an appropriate route
            res.redirect('/')
})
})
app.post('/login',function(req,res){
  User({email:req.body.email,password:req.body.password}).validate()
        .then((user)=>{
            bcrypt.hash(req.body.password,10)
        .then((hashed_pass)=>{
            User.find({email:req.body.email,password: hashed_pass})
                .then((user)=>{
                    req.session = {first_name:user.first_name,last_name:user.last_name,email:user.email,birthday:user.birthday};
                    res.redirect('/dashboard')
                })
                .catch((error)=>{
                    for(var key in error.errors){
                        req.flash('login', error.errors[key].message);
                    }
                    // redirect the user to an appropriate route
                    res.redirect('/')
                })
        })
        .catch((error)=>{
            for(var key in error.errors){
                request.flash('login', error.errors[key].message);
            }
            // redirect the user to an appropriate route
            response.redirect('/')
        })
})
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})
