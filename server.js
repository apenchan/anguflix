var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
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

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port);
console.log("======================");
console.log("Listening on angularflix " + port);
console.log("======================");