'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', ['$scope', '$http', '$mdSidenav', function ($scope, $http, $mdSidenav) {

    $scope.toggleSidenav = function(menuId) {
      $mdSidenav(menuId).toggle();
    }
  }]);
    // $http({
    //   method: 'GET',
    //   url: '/api/name'
    // }).
    // success(function (data, status, headers, config) {
    //   $scope.name = data.name;
    // }).
    // error(function (data, status, headers, config) {
    //   $scope.name = 'Error!';
    // });


  // controller('MyCtrl1', function ($scope) {
  //   // write Ctrl here
  //   $scope.name = 'Billy';

  // }).
  // controller('MyCtrl2', function ($scope) {
  //   // write Ctrl here
  //   $scope.name = 'Sally';

  // });
