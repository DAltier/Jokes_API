const Joke = require("../models/jokes.model");

module.exports = {

  getAll(req, res) {
    console.log("Get all jokes")
    Joke.find()
    .then((joke) => { res.json(joke) })
    .catch((err) => { res.json(err) })
  },

  getOne(req, res) {
    console.log("Get one joke")
    Joke.findById(req.params.id)
    .then((joke) => { res.json(joke) })
    .catch((err) => { res.json(err) })
  },

  create: function(req, res) {
    console.log('Create a joke')
    Joke.create(req.body)
    .then((joke) => { res.json(joke) })
    .catch((err) => { res.json(err) })
  },

  update(req, res) {
    Joke.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    })
    .then((joke) => { res.json(joke) })
    .catch((err) => { res.json(err) })
  },

  delete(req, res) {
    Joke.findByIdAndDelete(req.params.id)
    .then((joke) => { res.json(joke) })
    .catch((err) => { res.json(err) })
  }
}