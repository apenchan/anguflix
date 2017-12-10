app.controller('profileCtrl', function($scope, $stateParams, allMovies){
  if(!stateParams.profileParam){
    allMovies.getUserInfo($stateParams.id)
    .then(function(profile){
      $scope.profile = profile;
    })
  } else {
    $scope.profile = $stateParams.profileParam;
  }
})