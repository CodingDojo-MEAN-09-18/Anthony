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
        Author.findOneAndUpdate({'_id': req.body.data.id},
            {$set: {'name': req.body.data.name}},function (err){
                if (err){
                    console.log('There was an error:',err);
                    res.json(err);
                }
            })        
    },
    remove: (req, res) => {
        console.log('This is from the controllers remove', req.params.id);
        Author.deleteOne({_id: req.params.id})
        .then( author => res.json(author))
        .catch( error => {
            console.log("Remove One Error: ", error);
            res.json(error);
        });
    },

}
