app.controller('allMoviesCtrl', function ($scope, $rootScope, $stateParams, allMovies) {

	// $scope.savedMovies =[];

	//all Movies from DB:
	allMovies.allMoviesDB()
		.then(function (response) {
			$scope.movies = response;
		})

	//SEE MOVIEFACTORY FOR THIS
	// allMovies.getUserInfo().then(function(response){
	// 	$scope.userInfo = response.data;
	// })

	// allMovies.getUser().then(function(response){
	// 	$scope.movies.savedMovies = response;
	// })

	allMovies.getUserMovies($rootScope.userId)
		.then(function (response) {
			$scope.userMovies = response.savedMovies;
		})
		.catch(function (err) {
			console.log(err)
		})

	// profileFactory.getDBSavedMovies().then(function(){
	// 	$scope.user = response;
	// })

	//myMovieCollection array
	$scope.myMovies = allMovies.savedMovies;

	//add to myMovieCollection array
	$scope.addToMyMovies = [];

	//this work.
	$scope.addToMyMovies = function (movie) {
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

	$scope.showRemoveOption = function () {
		$scope.trashClicked = !$scope.trashClicked;
	}

	// $scope.removeFilm = function(movie){
	// 	allMovies.removeFilm(movie);
	// }


	$scope.removeFilm = function (movie) {
		// var self = this;
		console.log($scope.userMovies)
		// console.log(savedMovies)
		allMovies.removeFilm($scope.userId, movie)
			.then(function (response) {
				$scope.userMovies.splice(this.movie, 1) = savedMovies
			})
			.catch(function (err) {
				console.log(err)
			})
	}

	// $scope.removeFilm = function(movieId){
	// 	allMovies.removeFilm($scope.userId, movieId)
	// 	.then(function(data){
	// 		$scope.userMovies.splice(movie, 1)
	// 	})
	// }

	$scope.searchMoviesAPI = function (name) {
		allMovies.searchMoviesAPI(name)
			.then(function (response) {
				// $scope.getMovieAPI = response;
				$scope.moviePoster = response.Poster;
				$scope.movieTitle = response.Title;
				$scope.movieYear = response.Year;

			})
	}

});
