var express = require("express");
var path = require("path");
const bodyParser = require("body-parser");
var session = require("express-session");
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/static'));
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.use(session({
  secret: 'keyboardkittyen',
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge :60000}
}))
app.get('/', function (req, res){
  res.sendFile('index.html',{root : path.join(__dirname,'./static')});
})
app.post('/results', function(req,res){
  var user =
    {
    name: req.body.name,
    lang: req.body.language,
    local: req.body.location,
    comments: req.body.words };
  res.render('result', {info:user});
})
app.listen(8000, function() {
  console.log("Listen for 8000");
})
