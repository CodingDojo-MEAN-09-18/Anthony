const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    app = express();

app.use(express.static(__dirname + '/weather/dist/weather'));
app.use(express.static(path.join(__dirname, './client/static')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.set('views', path.join(__dirname, './client/views'));
// app.set('view engine', 'ejs');

app.listen(8000, function() {
    console.log("Running in localhost at port 8000");
});
