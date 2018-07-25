var express = require("express");
var app = express();
var path = require("path");
// This gives access the files in the static folder,gives access to any file from an htlm file
app.use(express.static('static'));
// The code below serves the html for the route
app.get("/cats", function (request, response){
    response.sendFile('cats.html', {root: path.join(__dirname, './static')});
})
app.get("/cars", function (request, response){
    response.sendFile('cars.html', {root: path.join(__dirname, './static')});
})
app.get("/", function (request, response){
    response.sendFile('index.html', {root: path.join(__dirname, './static')});
})
app.get("/cars/new", function (request, response){
    response.sendFile('form.html', {root: path.join(__dirname, './static')});
})
// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})
