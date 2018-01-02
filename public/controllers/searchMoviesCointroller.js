app.controller('topSearchBarCtrl', function($scope, $rootScope, allMovies){

  $scope.findDbMovies = function(name){
    allMovies.allMoviesDB(name)
    .then(function(response){
      $scope.dbMovieName = response.Title;
      $scope.dbMovieImg = response.Poster;
      $scope.movie = response;
    })
  }

})