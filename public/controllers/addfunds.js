angular.module('ysApp')
.controller("ysAddFundsController", function ($scope,$http){


$scope.addFunds = function(){
  var data = {money: $scope.money};
  http({
    method: "POST",
    url: "/addMoney",
    data: data

  }).then(function(result){
    console.log(result);
  });
};

// $scope.addItem  = function(){

// }

});
