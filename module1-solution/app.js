(function () {
'use strict';
angular.module('LunchCheck', []).controller('LunchCheckController', function ($scope) {
  $scope.list = "";
  $scope.totalMeal = "";

  $scope.if2Much = function () {
    var totaldishes = checkIf2Much($scope.list);
    $scope.totalMeal = totaldishes;
  };
  function checkIf2Much(string) {
    var totalCountMeals = "";
    var stringtoArray = [];
    stringtoArray = string.split(",");
    console.log(stringtoArray);
    if ($scope.list === "") {
      totalCountMeals = "Please enter data first";
    } else {
      if (stringtoArray.length <= 3) {
        totalCountMeals = "Enjoy"
      } else {
        totalCountMeals = "Too much!"
      }
    }
    return totalCountMeals;
  };
});
})();
