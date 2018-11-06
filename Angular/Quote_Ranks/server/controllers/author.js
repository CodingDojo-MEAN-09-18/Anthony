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
            {$set: {'name': req.body.data.name}}, { runValidators: true },function (err){
                if (err){
                    console.log('There was an error:',err);
                    res.json(err);
                }
            })        
    },
    makeQuote: (req, res) =>{
        console.log('this is from the controller', req.body);
        console.log('The id:',req.body.id, 'The qoute:', req.body.quote);
        Author.findOneAndUpdate({'_id': req.body.id},
            {$push: {'quote': req.body.quote}}, { runValidators: true },function (err){
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
    removeQuote: (req, res) => {
        // Have to use JSON.parse to parse through an object that is a string
        data = (JSON.parse(req.params.quote));
        console.log('This controllers removeQuote',data.word, data.Aid);
        Author.findOneAndUpdate({_id: data.Aid}, {$pull: {quote: {quote: data.word}}}, function(err, data){
            if(err) {
              return res.status(500).json({'error' : 'error in deleting the quote'});
            }
            else{
                res.json(data);
                console.log("sucess");
            }
            
    
          });
    },
    modVote: (req, res) => {
        console.log('controllers', req.body.data);
        var quoteOb = req.body.data.words;
        Author.findOne({_id: req.body.data.id}, function (err, author) {
            for ( var word of author.quote) {
                console.log("This is from the for loop", word);
                if (word == req.body.data.words) {
                    word.vote.inc = req.body.data.aVote;
                    author.save(function(err, data) {
                        if (err) {
                            return res.json("Issue with modifing Vote");
                        }
                        else{
                            res.json(data);
                            console.log("The vote was changed/modified")
                        }
                    })
                    console.log("Success")
                }
            }

        })
    }
}