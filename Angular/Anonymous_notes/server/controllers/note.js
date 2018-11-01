const Note = require("../models/note.js");
module.exports = {
    show: (req, res) => {
        console.log('this is form the controller');
        Note.find({})
        .then( author => {
            res.json(author);
        })
        .catch( error => {
            console.log("Get All Error: ", error);
            res.json(error);
        });
    },
    add: (req, res) => {
        console.log('this is for add from controller');
        Note.create(req.body.data)
        .then( author =>res.json(author))
        .catch( error => res.json(error));
        console.log('this is form add in controllers', req.body.data);
    }
}
