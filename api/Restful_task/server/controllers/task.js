const Task = require('mongoose').model('Task');

module.exports = {
  index(request, response) {
    Task.find(request.body)
      .then(tasks => response.json(tasks))
      .catch(error => response.json(error));
  },
  show(request, response) {
    Task.findById(request.params.id)
      .then(task => response.json(task))
      .catch(error => response.json(error));
  },
  create(request, response) {
    Task.create({title: request.params.title, description: request.params.desc})
      .then(task => response.json(task))
      .catch(error => response.json(error));
  },
  update(request, response){
    Task.findByIdAndUpdate(request.params.id, request.body,{new: true})//true (bool)  true to return
    //the modified document rather than the original. defaults to false
    .then(task => response.json(task))
    .catch(error => response.json(error));
  },
  destroy(request, response) {
    Task.findByIdAndRemove(request.params.id)
      .then(result => response.json(result))
      .catch(error => response.json(error));
  },
};
