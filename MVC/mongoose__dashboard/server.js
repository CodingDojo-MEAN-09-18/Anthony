const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var path = require('path');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

require('./server/config/database');
require('./server/config/routes')(app);

app.listen(8000, function(){
  console.log("Running on port 8000");
});
