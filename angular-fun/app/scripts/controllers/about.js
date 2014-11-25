'use strict';

/**
 * @ngdoc function
 * @name angularFunApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularFunApp
 */
angular.module('angularFunApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
