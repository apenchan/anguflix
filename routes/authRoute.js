var express = require('express');
var router = express.Router();
var passport = require('../models/passport');
var User = require('../models/userModel');
var Movie = require("../models/movieModel");

router.get('/facebook', passport.authenticate('facebook', { scope: 'email' })
);

router.get('/facebook/callback',
passport.authenticate('facebook', { 
failureRedirect: '/login' }),function(req, res) {
  console.log(req.user);
    res.redirect('/authorization?token=' + req.user.token + "&name=" + req.user.name + '&id=' + req.user.id);
});

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

module.exports = router;