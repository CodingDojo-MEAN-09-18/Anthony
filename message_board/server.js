var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/message_board');
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
mongoose.Promise = global.Promise;
const CommentSchema = new mongoose.Schema({
  cname : {type: String, required: [true, "Must have a name!"]},
  comment: {type: String, required: [true, "Comment needed before submitting!"]}
}, {timestamps: true})

const UserSchema = new mongoose.Schema({
  name: {type: String, required: [true, "A first name is required"]},
  message: {type: String, required: [true, "Message needed have a title"], minlength: [2, "Message must have at least 3 characters"]},
  comment : [CommentSchema]
}, {timestamps: true})

var User = mongoose.model('User', UserSchema)
var Com = mongoose.model("Com", CommentSchema)
app.get('/', function(req, res) {
  User.find({}, function(err, results){
    if (err) { console.log(err); }
  res.render("index", {info:results});
  })
})
app.post('/process', function(req,res){
  var user = new User({name: req.body.name, message: req.body.upost});
  user.save(function(err) {
    if(err) {
      console.log('something went wrong');
    } else {
      console.log('successfully added a user!');
      res.redirect('/');
    }
  })
})
app.post('/create_comment', function(req,res){
  Com.create(req.body.comment, function(err, data){
     if(err){
          console.log("Error unable to proccess comment!")
     }
     else {
          User.findOneAndUpdate({_id: req.params.id}, {$push: {comment: data}}, function(err, data){
               if(err){
                    console.log("Error unable to process push!")
               }
               else {
                    // it worked! How shall we celebrate?
                    res.redirect('/')
               }
          })
      }
})
})




app.listen(8000, function() {
    console.log("listening on port 8000");
})
