'use strict';


// angular.module('myApp', ['ui.router'])
//   .controller('AppCtrl', function($scope) {
//     $scope.message = 'Hello World!';
//   });

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'ui.router',
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.
    state('view1', {
      // url: '/view1',
      templateUrl: 'partials/partial1',
      controller: 'MyCtrl1'
    }).
    state('view2', {
      // url: '/view2',
      templateUrl: 'partials/partial2',
      controller: 'MyCtrl2'
    })
    // .
    // otherwise({
    //   redirectTo: '/view1'
    // })
    ;

  // $locationProvider.html5Mode(true);
});
