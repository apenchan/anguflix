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

// var movie1 = new Movie({
//   Title: "Titanic", Year: "1997", Poster: "https://upload.wikimedia.org/wikipedia/en/2/22/Titanic_poster.jpg", Plot: "Titanic is a 1997 American epic romantic disaster movie. It was directed, written, and co-produced by James Cameron. The movie is about the 1912 sinking of the RMS Titanic. It stars Kate Winslet and Leonardo DiCaprio.", Genre: "Drama"
// })
// var movie2 = new Movie({
//   Title: "10 Things I Hate About You", Year: "1999", Poster: "https://www.thefashionisto.com/wp-content/uploads/2015/04/10-Things-I-Hate-About-You-Movie-Poster-800x1200.jpg", Plot: " Kat Stratford (Julia Stiles) is beautiful, smart and quite abrasive to most of her fellow teens, meaning that she doesn't attract many boys. Unfortunately for her younger sister, Bianca (Larisa Oleynik), house rules say that she can't date until Kat has a boyfriend, so strings are pulled to set the dour damsel up for a romance. Soon Kat crosses paths with handsome new arrival Patrick Verona (Heath Ledger). Will Kat let her guard down enough to fall for the effortlessly charming Patrick?" 
// })

// movie1.save(function(err, data){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })
// movie2.save(function(err, data){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })

// var movie3 = new Movie({
//   Title: "Beauty and The Beast", Year: "2017", Poster: "https://image.tmdb.org/t/p/w300_and_h450_bestv2/tWqifoYuwLETmmasnGHO7xBjEtt.jpg", Plot: "Disney's animated classic takes on a new form, with a widened mythology and an all-star cast. A young prince, imprisoned in the form of a beast, can be freed only by true love. What may be his only opportunity arrives when he meets Belle, the only human girl to ever visit the castle since it was enchanted.", Genre: "Family"
// })
// var movie4 = new Movie({
//   Title: "There Will Be Blood", Year: "2008", Poster: "http://is5.mzstatic.com/image/thumb/Video2/v4/62/dc/23/62dc2390-4974-d377-1552-abd981427cbb/source/1200x630bb.jpg", Plot: "A story of family, religion, hatred, oil and madness, focusing on a turn-of-the-century prospector in the early days of the business.", Genre: "Drama"
// })

// movie3.save(function(err, data){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })
// movie4.save(function(err, data){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })


app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.use('/movies', mainRoute);
app.use('/auth', authRoute);

app.get('/movie/:id/movie', function(req, res){
  User.findById(req.params.id, function(err, user){
    if(err){
      console.log("This may not be a good route", err)
    } else {
      res.send(user)
    }
  })
})

app.get('/movie/:id/movie', function(req, res){
  console.log('user id: ' + req.params.id);
  User.findById(req.params.id, function(err, user){
    if(err){
      console.log('err', err)
    } else {
      res.send(user);
      console.log(user)
    }
  })
})

app.put('/movie/:id/movie', function(req, res){
  var movie = new Movie(req.body)
  User.findById(req.params.id, function(err, user){
    user.savedMovies.push(movie)
    user.save(function(err, user){
      if(err){
        console.log(err)
      } else{
        res.send(user)
      }
    })
  })
})

// app.delete('/:userId/:movieId', function(req, res){
//   User.findById(req.params.id, funtion(err, foundUser){

//   })
// })

// app.all('*', function(req, res) {
//   res.sendFile(__dirname + "/public/index.html")
// });

app.all('[^.]+', function(req, res, next) {
  res.sendFile(__dirname + "/public/index.html")
});

app.listen(port);
console.log("======================");
console.log("Listening on angularflix " + port);
console.log("======================");