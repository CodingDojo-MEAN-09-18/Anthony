const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    app = express();


// this route will be triggered if any of the routes above did not match
app.use(express.static(__dirname + '/public/dist/public'));
app.use(express.static(path.join(__dirname, './client/static')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./weather/dist/weather/index.html"))
});

app.listen(8000, function() {
    console.log("Running in localhost at port 8000");
});
