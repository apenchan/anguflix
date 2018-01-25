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

	//add to myMovieCollection array
	$scope.addToMyMovies = [];

	//this works for movies in db.
	$scope.addToMyMovies = function (movie) {
		console.log($scope.userMovies)		
		allMovies.addMovie($scope.userId, movie, $scope.movieId)
			.then(function (data) {
				$scope.userMovies = data.savedMovies
			})
			.catch(function (err) {
				console.log(err)
			});
	}

	$scope.years = allMovies.getDates();

	$scope.trashClicked = false;

	$scope.showRemoveOption = function (index) {
		$scope.trashClicked = !$scope.trashClicked;
	}

	$scope.removeFilm = function (index) {
		// var self = this;
		allMovies.removeFilm($scope.userId, this.movie._id)
			.then(function(data){
				$scope.userMovies.splice(index, 1) = data.savedMovies
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
		allMovies.addMovie($scope.userId, $scope.apiMovies)
		.then(function(data){
			$scope.userMovies.apiMovies = data.savedMovies;
		})
	}

});
