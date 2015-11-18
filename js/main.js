var theApp = angular.module('theApp', ['ngRoute']);
theApp.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider){

	$routeProvider.when('/',{
		templateUrl: 'index.html',
		controller: 'theAppController'
	}).
	when('/findBus', {
		templateUrl: 'Find_Bus.html',
		controller: 'theAppController'
	});

}]);

theApp.controller('theAppController', ['$scope', '$routeParams',
 function($scope, $routeParams) {
   $scope.phoneId = $routeParams.phoneId;
   console.log("hellooo");
 }]);