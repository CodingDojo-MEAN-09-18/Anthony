const Task = require("../models/task.js");
module.exports = {
    show: (req, res) => {
        Task.find({})
        .then( tasks => {
            res.json(tasks);
        })
        .catch( error => {
            console.log("Get All Error: ", error);
            res.json(error);
        });
    },

    show_one: (req, res) => {
        // console.log(req.body.data);
        Task.findOne({ _id: req.body.data })
        .then( task => {
          res.json(task);
          console.log("This is getting one task",task);
        })
        .catch( error => res.json(error));
    },

    add: (req, res) => {
        // console.log(req.body.data)
        Task.create(req.body.data)
        .then( task =>res.json(task))
        .catch( error => res.json(error));
    },
    update: (req, res) =>{
        console.log('This is from tasks.js update function', req.body.data)
        Task.findById({_id:req.body.data._id}, function(err, user){
            user.title = req.body.data.title;
            user.description = req.body.data.description;
            user.save(function(err) {
                console.log('succussfully updated db');
            })
        })
    },
    remove: (req, res) => {
        Task.deleteOne({ _id:req.body.data })
        .then( task => res.json(task))
        .catch( error => {
            console.log("Remove One Error: ", error);
            res.json(error);
        });
    },

}
