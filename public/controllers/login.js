angular.module('ysApp')
.controller("ysLoginController", function ($scope,$http){

$scope.login = function(){
  var data = { username: $scope.username };
  $http({
    method: "POST",
    url: "/signin",
    data:data
    
  }).then(function(result){
    console.log(data);
    console.log(result);
    // $scope.loggedIn === true;
    $scope.username = result.data.username;
  });
};

});

