'use strict';

/**
 * @ngdoc overview
 * @name angularFunApp
 * @description
 * # angularFunApp
 *
 * Main module of the application.
 */
angular
  .module('angularFunApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/circles', {
        templateUrl: 'views/circles.html',
        controller: 'CirclesCtrl'
      })
      .when('/sort-experiment', {
        templateUrl: 'views/circles.html',
        controller: 'CirclesCtrl'
      })
      .when('/sort-experiment/:id', {
        templateUrl: 'views/circles.html',
        controller: 'CirclesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
