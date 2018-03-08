app.controller('allMoviesCtrl', function ($scope, $rootScope, $stateParams, allMovies) {

	//all Movies from DB:
	allMovies.allMoviesDB()
		.then(function (response) {
			$scope.movies = response;
		})


	allMovies.getUserMovies($rootScope.userId)
		.then(function (data) {
			$scope.userMovies = data.savedMovies;
		})
		.catch(function (err) {
			console.log(err)
		})

	// profileFactory.getDBSavedMovies().then(function(){
	// 	$scope.user = response;
	// })

	//myMovieCollection array
	// $scope.myMovies = allMovies.savedMovies;

	$scope.apiMovies = [];

	//this will show the plot on hover
	$scope.hoverImg = function(plot){
		$scope.plot = movie.Plot
	}

	//add to myMovieCollection array
	$scope.addToMyMovies = [];

	//this works for movies in db.
	$scope.addToMyMovies = function (movie) {
		console.log($scope.userMovies)		
		allMovies.addMovie($scope.userId, movie)
			.then(function (data) {
				$scope.userMovies = data.savedMovies
			})
			.catch(function (err) {
				console.log(err)
			});
	}

	$scope.years = allMovies.getDates();

	$scope.trashClicked = false;

	// $scope.hoverIn = function(){

	// }

	$scope.showRemoveOption = function () {
		$scope.trashClicked = !$scope.trashClicked;
	}

	$scope.removeFilm = function (movie) {
		// var self = this;
		allMovies.removeFilm($scope.userId, this.movie._id)
			.then(function(data){
				// var index = this.movie._id
				console.log(movie);
				$scope.userMovies.splice($scope.userMovies.indexOf(movie), 1) == data.savedMovies
			})
			.catch(function (err) {
				console.log(err)
			})
	}

	$scope.searchMoviesAPI = function (movie) {
		allMovies.searchMoviesAPI(movie)
			.then(function (response) {
				$scope.apiMovies.push(response);
				// $scope.moviesAPI = response;
				// $scope.movie = response.data
				$scope.Poster = response.Poster;
				$scope.movieTitle = response.Title;
				$scope.movieYear = response.Year;
				$scope.movieId = response.imdbID;				
			})
	}

	$scope.saveMovie = function(movie){
		allMovies.saveMovie($scope.userId, $scope.apiMovies, $scope.Poster)
		.then(function(movie){
			console.log('-----------------------------')
			console.log(movie)
			console.log('-----------------------------')

			$scope.userMovies.push(movie)
			
		})
	}

});
