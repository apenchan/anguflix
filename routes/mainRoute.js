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

router.get('/:id', function(req, res){
  User.findById(req.params.id, function(err, user){
    if(err){
      console.log("This may not be a good route", err)
    } else {
      res.send(user)
    }
  })
})


module.exports = router