angular.module('ysApp')
.controller("ysSignUpController", function ($scope,$http){
    $scope.signup = function(){
      var data = {
      username: $scope.username,
      password: $scope.password
      };
  console.log(data);
  $http({
    method: "POST",
    url: "/signup",
    data:data
  }).then(function(result){
        console.log(result);
    });
  };
});

