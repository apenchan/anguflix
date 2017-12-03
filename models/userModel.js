var mongoose = require('mongoose');
var movieSchema = require("./movieModel.js").schema;


var UserSchema = new mongoose.Schema({
  name: String,
  socialId: String,
  provider: String,
  email: String,
  profile: String,
  loginCount: Number,
  savedMovies: [movieSchema]
});

var User = mongoose.model("User", UserSchema);

module.exports = User;