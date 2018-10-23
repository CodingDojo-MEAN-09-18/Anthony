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
        Author.findOne({ _id: req.body.data })
        .then( author => {
          res.json(author);
          console.log("This is author ",author);
        })
        .catch( error => res.json(error));
    },

    add: (req, res) => {
        console.log('this is form add in controllers', req);
        // Author.create(req.body.data)
        // .then( author =>res.json(author))
        // .catch( error => res.json(error));
    },
    update: (req, res) =>{
      Author.update({_id:req.params.id})
        .then(author => res.json(author))
        .catch(err => res.json(err));
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
