const beast = require('../controllers/dog');

module.exports = function(app) {
  app.get('/', beast.index);
  app.post('/', beast.create);
  app.get('/new', beast.newdog);
  app.get('/:id', beast.show);
  app.get('/:id/edit/', beast.edit);
  app.post('/:id', beast.update);
  app.post('/:id/delete', beast.remove);
};
