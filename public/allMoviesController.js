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
