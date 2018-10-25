const Author = require("../models/author.js");
module.exports = {
    show: (req, res) => {
        Author.find({})
        .then( author => {
            res.json(author);
        })
        .catch( error => {
            console.log("Get All Error: ", error);
            res.json(error);
        });
    },

    show_one: (req, res) => {
        console.log(req.body.data);
        Author.findOne({_id: req.body.data})
        .then( author => {
          res.json(author);
          console.log("This is author ",author);
        })
        .catch( error => { 
            res.json(error)
            console.log('This is the error', error)
        })
    },

    add: (req, res) => {
        Author.create(req.body.data)
        .then( author =>res.json(author))
        .catch( error => res.json(error));
        console.log('this is form add in controllers', req.body.data);
    },
    update: (req, res) =>{
        console.log('this is from the controller');
        console.log('The id:',req.body.data.id, 'The name:', req.body.data.name);
        Author.findOne({_id:req.body.data.id}), function (err, author) {
            if (err) {
                console.log('User Search Error:', err);
                res.json(err);
            } 
            else {
                author.name = req.body.data.name;
                author.save(function(error, updated_Author) {
                    if (err){
                        console.log('unable to save', error);
                        res.json(error)
                    }
                    else{
                        console.log('successfully saved edited document');
                        res.json(updated_Author);
                    }
                })
            }
        }
    },
    remove: (req, res) => {
        Author.deleteOne({ _id:req.params.id })
        .then( author => res.json(author))
        .catch( error => {
            console.log("Remove One Error: ", error);
            res.json(error);
        });
    },

}
