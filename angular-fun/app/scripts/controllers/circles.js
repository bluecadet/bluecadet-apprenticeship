'use strict';

/**
 * @ngdoc function
 * @name angularFunApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularFunApp
 */
angular.module('angularFunApp')
  .controller('CirclesCtrl', function ($scope, $http, $routeParams, $rootScope, $filter) {
    $scope.filterId = 'cats';
    $scope.filterArray = [];
    $scope.pageData;

    function parseButtons() {
    	$scope.pageData = $filter('filter')($rootScope.postData.projects, {topic: "sort-experiment"})[0];
    	console.log ($scope.pageData);
    	if (!$routeParams.id) {
    		$scope.projectData = $scope.pageData.project[0];

    	} else {
    		$scope.projectData =  $filter('filter')($scope.pageData.project, {id: $routeParams.id})[0];
    	}


    	angular.forEach ($scope.projectData.items, function(obj, i){
    		console.log (obj);
    		var hasId = false;

    		angular.forEach($scope.filterArray, function(id, j){
    			if (id == obj.id) {
    				hasId = true;
    			}
    		})
    		console.log($scope.filterArray);
    		if (!hasId) {
    			$scope.filterArray.push(obj.id);
    		}

    	});
    	console.log($scope.filterArray);
    	$scope.filterId = $scope.filterArray[0];
    }
  console.log($routeParams);
  if ($rootScope.postData) {
    	parseButtons();
    } else {
	    $http.get('/data/data.json').
		  success(function(data, status, headers, config) {
		  	console.log(data);
		  	$rootScope.postData = data;
		  	parseButtons();
		    // this callback will be called asynchronously
		    // when the response is available
	  	})
    }


  });