app.factory('allMovies', function ($http) {


  var allMoviesDB = function(){
    return $http.get('/movies')
    .then(function(response){
      return response.data
    }, function(err){
      console.log(err);
    })
  }
  //this returns the "hello", but also a bunch of random js.
  var getUserInfo = function(id){
    return $http.get('/profile/' + id)
    console.log(id)
    .then(function(response){
      return response.data
    }, function(err){
      console.log(err);
    })
  }
  
    var savedMovies = [];

    var getSavedMovies = function(id){
      return $http.get('/profile/' + id + '/movie')
      .then(function(response){
        console.log(response.data)
        return response.data
      }, function(err){
        console.log(err)
      })
    }
  
    var addMovie = function (id, movie) {
      // console.log(user)
      savedMovies.push(movie);
      console.log(savedMovies);
      return $http.put('/profile/' + id + '/movie', movie)
      .then(function(response){
        console.log(response.data)
        return response.data;
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
  
    var removeFilm = function(index) {
      savedMovies.splice(index, 1)
      console.log("I was clicked");
    }

    var searchMoviesAPI = function(name){
      console.log("clicked to get movies API");
      console.log(name)
      return $http.get("https://www.omdbapi.com/?t="+name+"&apikey=47060fc8")
    .then(function(response){
      console.log(response.data)
      return response.data;
    })
  }
  
    return {
      allMoviesDB: allMoviesDB,
      getUserInfo: getUserInfo,
      getSavedMovies: getSavedMovies,
      // movies: movies,
      // saveMovieToDB: saveMovieToDB,
      savedMovies: savedMovies,
      addMovie: addMovie,
      years: years,
      getDates: getDates,
      removeFilm: removeFilm,
      searchMoviesAPI: searchMoviesAPI
  
  
    }
  })