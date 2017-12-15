var app = angular.module("anguFlix", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  // var cors = new EnableCorsAttribute("*", "*", "*");
  // config.EnableCors(cors);
  $locationProvider.html5Mode(true);
  $stateProvider
  .state('user', {
    url:'/home',
    controller: 'allMoviesCtrl',
    templateUrl: '/templates/home.html'
  })
  .state('auth', {
    url: '/authorization?token&name&id',
    controller: function($rootScope, $stateParams, $state, $http) {
      if ($stateParams.token) {
        var user = {
          name: $stateParams.name,
          id: $stateParams.id
          // token: $stateParams.token
        }
        localStorage.setItem("user", JSON.stringify(user));
        $rootScope.currentUser = user.name;
        // $rootScope.savedMoviesArr = user.savedMovies
        $http.defaults.headers.common.Authorization = 'Bearer ' + user.token;
        $state.go('user');
      }
    }
  })
  // .state('user.movie',{
  //   url: '/movie/:id/movie',
  //   controller: 'allMoviesCtrl',
  //   params: { user_id: user.id }
  // })
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

app.run(function($rootScope) {
  var user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    $rootScope.userId = user.id;
    $rootScope.currentUser = user.name;
  }
});

// app.config(function($stateProvider, $urlRouteProvider, $locationProvider){
//   $locationProvider.html5Mode(true);
//   $stateProvider
//   .state('home', {
//     url:'/home',
//     controller: 'mainCtrl',
//     templateUrl: '/templates/home.html'
//   })
// })