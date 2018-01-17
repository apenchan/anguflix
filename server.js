var express = require("express");
var app = express();
var mongoose = require("mongoose");
var passport = require('./models/passport');
var bodyParser = require('body-parser');
var mainRoute = require('./routes/mainRoute');
var authRoute = require('./routes/authRoute');
var User = require('./models/userModel.js');
var port = process.env.PORT || 3000;

var db = process.env.MONGODB_URI || "mongodb://localhost/angulix";
mongoose.connect(db);

var Movie = require('./models/movieModel');

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.use('/movies', mainRoute);
app.use('/auth', authRoute);

app.get('/movie/:id/movie', function (req, res) {
  console.log('user id: ' + req.params.id);
  User.findById(req.params.id, function (err, user) {
    if (err) {
      console.log('err', err)
    } else {
      res.send(user);
      console.log(user)
    }
  })
})

app.put('/movie/:id/movie', function (req, res) {
  var movie = new Movie(req.body)
  User.findById(req.params.id, function (err, user) {
    user.savedMovies.push(movie)
    user.save(function (err, user) {
      if (err) {
        console.log(err)
      } else {
        res.send(user)
      }
    })
  })
})

app.delete('/movie/:id/movie/:movieId', function(req, res){
  User.findByIdAndUpdate(req.params.id, {$pull: {"savedMovies":{_id: req.params.movieId}}}, function(err, user){
    if(err){
      console.log(err)
    } else {
      res.send(user)
    }
  })
})

// app.delete('/movie/:id/movie/:movieId', function (req, res) {
//   User.findById(req.params.id, function (err, user) {
//     if (err) {
//       return next(err)
//     } else if (!user) {
//       return res.send("This is not a proper user")
//     } else {
//       var movieToDelete = user.savedMovies.id(req.params.movieId)
//       if (movieToDelete) {
//         movieToDelete.remove()
//         user.save(function (err, user) {
//           if (err) {
//             return next(err)
//           } else {
//             res.send(user)
//           }
//         });
//       } else {
//         return res.send("Error with removing the movie from the saved array")
//       }
//     }
//   });
// });

// app.all('*', function(req, res) {
//   res.sendFile(__dirname + "/public/index.html")
// });

app.all('[^.]+', function (req, res, next) {
  res.sendFile(__dirname + "/public/index.html")
});

app.listen(port);
console.log("======================");
console.log("Listening on angularflix " + port);
console.log("======================");