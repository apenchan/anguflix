// app.factory('profileFactory', function ($http, $stateParams){

//   var profileFactory = {};

//   var user={
//   token: $stateParams.token
//   }

//   profileFactory.getDBSavedMovies = function(id){
//     return $http.get('/movies/' + id)
//     // ,{
//     //   headers: {
//     //     'Bearer ':  user.token
//     //   }
//     // })
//     .then(function(response){
//       console.log(user);
//       console.log(response.data)
//       return response.data
//     })
//   }

//   return profileFactory;

// });