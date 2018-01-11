var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
  Title: String,
  Year: String,
  Poster: String,
  Plot: String,
  Genre: String
})

var Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
