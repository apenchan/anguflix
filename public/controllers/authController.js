app.controller('AuthCtrl', function($scope, $rootScope, $http, allMovies) {
  $scope.logout = function() {
    // console.log(user)
    localStorage.removeItem("user");
    $rootScope.currentUser = null;
    delete $http.defaults.headers.common.Authorization;
  }
});