const restful_task = require('../controllers/task');

module.exports = function(app) {
  app.get('/', restful_task.index);
  app.get('/show/:id', restful_task.show);
  app.post('/create/:title/:desc', restful_task.create);
  app.put('/update/:id', restful_task.update);
  app.delete('/destroy/:id', restful_task.destroy);
};
