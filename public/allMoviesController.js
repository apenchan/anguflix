var test;

app.controller('allMoviesCtrl', function ($scope, allMovies) {

	// $scope.getMovieAPI = []
	//all movies array
	$scope.movies = allMovies.movies;

	//myMovieCollection array
	$scope.myMovies = allMovies.savedMovies;

	//add to myMovieCollection array
	// $scope.addToMyMovies = ;
	$scope.addToMyMovies = function(movie){
		$scope.amount = allMovies.addMovie(movie);
	}

	// $scope.years = allMovies.years;

	$scope.years = allMovies.getDates();
	
	$scope.trashClicked = false;

	$scope.showRemoveOption = function(){
		$scope.trashClicked = !$scope.trashClicked;
	}

	$scope.removeFilm = function(movie){
		allMovies.removeFilm(movie);
	}

	$scope.amount = allMovies.getBudget();

	$scope.movieBudget = allMovies.savedMovies;

	$scope.searchMoviesAPI = function(name){
		allMovies.searchMoviesAPI(name)
		.then(function(response){
			console.log("I got here")
			console.log(response)
			// $scope.getMovieAPI = response;
			$scope.moviePoster = response.Poster;
			$scope.movieTitle = response.Title;
			$scope.movieYear = response.Year;

	})
}
// $scope.searchMoviesAPI(name);

	// $scope.movieBudget = function(amount){
	// 	return amount - allMovies.savedMovies.moviePrice; 
	// }

});


// app.factory('allMovies', function () {

// 	var movies = [
// 		{ movieTitle: "Titanic", movieDate: "1997", moviePrice: 3, movieImg: "https://upload.wikimedia.org/wikipedia/en/2/22/Titanic_poster.jpg", movieDescriptin: "Titanic is a 1997 American epic romantic disaster movie. It was directed, written, and co-produced by James Cameron. The movie is about the 1912 sinking of the RMS Titanic. It stars Kate Winslet and Leonardo DiCaprio." },
// 		{ movieTitle: "Beauty and The Beast", movieDate: "2017", moviePrice: 4, movieImg: "https://image.tmdb.org/t/p/w300_and_h450_bestv2/tWqifoYuwLETmmasnGHO7xBjEtt.jpg", movieDescriptin: "Disney's animated classic takes on a new form, with a widened mythology and an all-star cast. A young prince, imprisoned in the form of a beast, can be freed only by true love. What may be his only opportunity arrives when he meets Belle, the only human girl to ever visit the castle since it was enchanted." },
// 		{ movieTitle: "10 Things I Hate About You", movieDate: "1999", moviePrice: 4, movieImg: "https://www.thefashionisto.com/wp-content/uploads/2015/04/10-Things-I-Hate-About-You-Movie-Poster-800x1200.jpg", movieDescriptin: " Kat Stratford (Julia Stiles) is beautiful, smart and quite abrasive to most of her fellow teens, meaning that she doesn't attract many boys. Unfortunately for her younger sister, Bianca (Larisa Oleynik), house rules say that she can't date until Kat has a boyfriend, so strings are pulled to set the dour damsel up for a romance. Soon Kat crosses paths with handsome new arrival Patrick Verona (Heath Ledger). Will Kat let her guard down enough to fall for the effortlessly charming Patrick?" }
// 	]
// 	var savedMovies = [];
// 	var budget = 9;
 
// 	var getBudget = function(){// ~Return initial state
// 		return budget;
// 	}

// 	var addMovie = function (movie) {
// 		savedMovies.push(movie);
// 		console.log(savedMovies);
// 		budget = budget-movie.moviePrice;
// 		return budget;
// 	}

// 	var years = [];
// 	var getDates = function () {
// 		var currentTime = new Date();
// 		var currentYear = currentTime.getFullYear();
// 		for (var i = currentYear; i > currentYear - 30; i--) {
// 			years.push(i);
// 		}
// 		return years;
// 	}

// 	var removeFilm = function(index) {
// 		savedMovies.splice(index, 1)
// 		console.log("I was clicked");
// 	}

// 	return {
// 		movies: movies,
// 		savedMovies: savedMovies,
// 		addMovie: addMovie,
// 		years: years,
// 		getDates: getDates,
// 		removeFilm: removeFilm,
// 		budget: budget,
// 		getBudget:getBudget


// 	}
// })





// app.factory('myMovieCollection', function () {

//     var savedMovies = [];

//     var addMovie = function (movie) {
//         savedMovies.push(movie);
//         console.log(savedMovies)
//     }

//     var releaseDates = function(){

//     }

//     return {
//         savedMovies: savedMovies,
//         addMovie: addMovie
//     }
// })


// app.controller('myCollectionCtrl', function ($scope, movieInfo) {
//     $scope.movies = movieInfo.movies
// })