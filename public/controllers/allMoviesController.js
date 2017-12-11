app.controller('allMoviesCtrl', function ($scope, $rootScope, $stateParams, allMovies, profileFactory) {



	//all Movies from DB:
	allMovies.allMoviesDB().then(function(response){
		$scope.movies = response;
	})

	// allMovies.getSavedMovies().then(function(response){
	// 	$scope.userInfo = response;
	// })

	//SEE MOVIEFACTORY FOR THIS
	allMovies.getUserInfo().then(function(response){
		$scope.userInfo = response.data;
	})

	profileFactory.getDBSavedMovies().then(function(){
		$scope.user = response;
	})

	//myMovieCollection array
	$scope.myMovies = allMovies.savedMovies;

	//add to myMovieCollection array
	// $scope.addToMyMovies = ;

	$scope.addToMyMovies = function(movie){
		alert("I was kinda clicked")
		console.log($scope.userId)
		$scope.addMovie = allMovies.addMovie($scope.userId, movie);
	}

	// $scope.addToMyMovies = function(userId, movie){
	// 	alert("I was kinda clicked")
	// 	console.log($scope.userId)
	// 	// allMovies.addToMyMovies($scope.userId, movie)
	// 	// .then(function(userSavedMovies){
	// 		$scope.amount = allMovies.addMovie($scope.userId, movie);
	// 	// })
	// 	// $scope.amount = allMovies.addMovie($scope.userId, movie);
	// }

	$scope.years = allMovies.getDates();
	
	$scope.trashClicked = false;

	$scope.showRemoveOption = function(){
		$scope.trashClicked = !$scope.trashClicked;
	}

	$scope.removeFilm = function(movie){
		allMovies.removeFilm(movie);
	}

	$scope.movieBudget = allMovies.savedMovies;

	$scope.searchMoviesAPI = function(name){
		allMovies.searchMoviesAPI(name)
		.then(function(response){
			console.log(response)
			// $scope.getMovieAPI = response;
			$scope.moviePoster = response.Poster;
			$scope.movieTitle = response.Title;
			$scope.movieYear = response.Year;

	})
}

	$scope.getSavedMovies  = function(userId){
		allMovies.getUserInfo(userId)
		.then(function(data){
			console.log("getting user info")
			console.log(data)
			$scope.userInfo = data;
		})
	}

});
