var app = angular.module("anguFlix", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  // $http.defaults.headers.common.Authorization = 'Bearer ' + user.token;
  $locationProvider.html5Mode(true);
  $stateProvider
  .state('home', {
    url:'/home',
    controller: 'allMoviesCtrl',
    templateUrl: '/templates/home.html'
  })
  .state('auth', {
    url: '/authorization?token&name&id',
    controller: function($rootScope, $stateParams, $state, $window, $http) {
      if ($stateParams.token) {
        var user = {
          name: $stateParams.name,
          id: $stateParams.id,
          token: $stateParams.token
        }
        window.localStorage.setItem("user", JSON.stringify(user));
        $rootScope.currentUser = user.name;
        $rootScope.token = user.token;
        $rootScope.userId = user.id;
        // $rootScope.savedMoviesArr = user.savedMovies
        $http.defaults.headers.common.Authorization = 'Bearer ' + user.token;
        $state.go('home');
      }
    }
  })
  .state('profile', {
    url: '/profile/:id',
    controller: 'profileCtrl',
    templateUrl: '/templates/profile.html',
    params: {
      profileParam: null,
      // name: $stateParams.name,
    }
  })
});

app.run(['$rootScope',function($rootScope) {
  var user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    $rootScope.userId = user.id;
    $rootScope.currentUser = user.name;
    $rootScope.token = user.token;
  }
  return this.currentUser;
}]);