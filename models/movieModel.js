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



//This totally won't work. I'll have to change the front end. Bummer :/
// var mongoose = require('mongoose');

// var movieSchema = new mongoose.Schema({
//   movieTitle: String,
//   movieDate: String,
//   movieDate: String,
//   movieDescription: String,
//   Genre: String
// })

// var Movie = mongoose.model("Movie", movieSchema);

// module.exports = Movie;