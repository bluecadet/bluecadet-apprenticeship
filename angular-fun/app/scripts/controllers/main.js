'use strict';

/**
 * @ngdoc function
 * @name angularFunApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularFunApp
 */
angular.module('angularFunApp')
  .controller('MainCtrl', function ($scope, $http, $rootScope) {
  	
    function parseData() {
    }
    if ($rootScope.postData) {
    	parseData();
    } else {
	    $http.get('/data/data.json').
		  success(function(data, status, headers, config) {
		  	console.log(data);
		  	$rootScope.postData = data;
		  	parseData();
		    // this callback will be called asynchronously
		    // when the response is available
	  	})
    }
  }); 
