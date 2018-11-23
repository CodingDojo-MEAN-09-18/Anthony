const express = require('express'),
    cookieParser = require('cookie-parser')
    path = require('path'),
    bodyParser = require('body-parser'),
    app = express(),
    session = require('express-session');

const sessionConfig = {
    saveUninitialized: true,
    secret: 'sessionsecret',
    resave: false,
    name: 'session',
    rolling: true,
    cookie: {
        secure: false,
        httpOnly: false,
        maxAge: 3600000
    }
};
app.use(express.static(__dirname + '/public/dist/public'));
app.use(express.static(path.join(__dirname, './client/static')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// cookieParser is used to decode the cookie
app.use(cookieParser('sdfasdfasdfasdfasdf'));
app.use(session(sessionConfig));
require('./server/config/database');
require('./server/config/routes')(app);

app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

// this route will be triggered if any of the routes above did not match
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(8000, function() {
    console.log("Running in localhost at port 8000");
});
