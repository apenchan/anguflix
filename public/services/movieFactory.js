app.factory('allMovies', function ($http, $window, $rootScope) {


  var allMoviesDB = function () {
    return $http.get('/movies')
      .then(function (response) {
        return response.data
      }, function (err) {
        console.log(err);
      })
  }

  var savedMovies = [];

  var addMovie = function (id, movie) {
    return $http.put('/movie/' + id + '/movie', movie)
      .then(function (response) {
        console.log(response.data)
        return response.data;
      })
  }

  var getUserMovies = function (id) {
    console.log($rootScope.userId)
    return $http.get('/movie/' + id + '/movie')
      .then(function (response) {
        return response.data
      })
  }

  var years = [];
  var getDates = function () {
    var currentTime = new Date();
    var currentYear = currentTime.getFullYear();
    for (var i = currentYear; i > currentYear - 30; i--) {
      years.push(i);
    }
    return years;
  }

  var removeFilm = function (id, movieId) {
    // var movieId = this.userMovies
    return $http.delete('/movie/' + id + "/movie/" + movieId)
      .then(function (response) {
        console.log(response.data)
        return response.data
      }, function (err) {
        console.log(err)
      })
  }

  //this is for search. will do this after
  //   var searchMoviesAPI = function(movie){
  //     return $http.get("https://www.omdbapi.com/?s="+movie+"&apikey=47060fc8")
  //   .then(function(response){
  //     console.log(response)
  //     return response.data;
  //   })
  // }

  var searchMoviesAPI = function (movie) {
    return $http.get("https://www.omdbapi.com/?t=" + movie + "&apikey=47060fc8")
      .then(function (response) {
        console.log(response)
        return response.data;
      })
  }

  var saveMovie = function(id, newMovie){
    return $http.post('/movie/' + id + '/movie', newMovie)
    .then(function(response){
      console.log(response.data)
      return response.data
    })
  }

  return {
    getUserMovies: getUserMovies,
    allMoviesDB: allMoviesDB,
    // getUserInfo: getUserInfo,
    savedMovies: savedMovies,
    addMovie: addMovie,
    years: years,
    getDates: getDates,
    removeFilm: removeFilm,
    searchMoviesAPI: searchMoviesAPI,
    saveMovie: saveMovie
    // saveApiMovie: saveApiMovie


  }
})