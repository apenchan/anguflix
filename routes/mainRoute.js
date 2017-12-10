var express = require("express");
var Movie = require("../models/movieModel");
var User = require('../models/userModel');
var router = express();

router.get("/", function(req, res){
  Movie.find(function(err, movie){
    if(err){
      console.log(err);
    } else {
      res.send(movie)
    }
  })
})

// router.get('/profile', function(req, res){
//   User.findById(req.user.id).then(function(user){
//     console.log("hellllllllllooooo")
//     console.log(user);
//     res.send(user);
//   })
// });

// router.put('/profile', function(req, res){
//   User.findById(req.user_id).then(function(user){
//     console.log("=============")
//     console.log(req.user_id);
//     var movie = new Movie(req.body);
//     user.savedMovies.push(movie)
//     console.log("This is a saved movie" + movie);
//     user.save(function(err){
//       if(err){
//         console.log(err);
//       } else {
//         res.send(user);
//       }
//     })
//   })
// });

module.exports = router