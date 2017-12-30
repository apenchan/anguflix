app.controller('AuthCtrl', function($scope, $rootScope, $http, allMovies, $stateParams, $state, $window) {
  // $scope.login = function(){
  //   localStorage.addItem("user")
  //   $rootScope.currentUser = user.name;
  // }

  // allMovies.getUserMovies($scope.userId)
  // .then(function (response) {
  //   $scope.userMovies = response.savedMovies;
  // })
  // .catch(function (err) {
  //   console.log(err)
  // })

  $scope.login = function(){
    if ($stateParams.token) {
      var user = {
        name: $stateParams.name,
        id: $stateParams.id,
        token: $stateParams.token
      }
      $window.localStorage.setItem("user", JSON.stringify(user));
      $rootScope.currentUser = user.name;
      $rootScope.token = user.token;
      // $rootScope.savedMoviesArr = user.savedMovies
      $http.defaults.headers.common.Authorization = 'Bearer ' + user.token;
      $state.go('home');
    }
  }

  $scope.logout = function() {
    // console.log(user)
    localStorage.removeItem("user");
    $rootScope.currentUser = null;
    delete $http.defaults.headers.common.Authorization;
  }
});