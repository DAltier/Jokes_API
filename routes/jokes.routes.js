const JokesController = require('../controllers/jokes.controller');

module.exports = (app) => {
  app.get("/api/jokes", JokesController.getAll);
  app.get("/api/jokes/random/:id", JokesController.getOne);
  app.post("/api/jokes/new", JokesController.create);
  app.delete("/api/jokes/delete/:id", JokesController.delete);
  app.put("/api/jokes/update/:id", JokesController.update);
}