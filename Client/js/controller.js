
var app = angular.module('myApp', []);
app.controller('MainContrller', ['$scope', function($scope){
	$scope.isMainPage = true;
	$scope.isAddPage = false;
	$scope.isDetailPage = false;
	$scope.candidateData = {};

	$scope.showAddForm = function() {
		$scope.isMainPage = false;
		$scope.isAddPage = true;
		$scope.isDetailPage = false;
	}

	$scope.showDetails = function() {
		$scope.isMainPage = false;
		$scope.isAddPage = false;
		$scope.isDetailPage = true;
	}

	$scope.goMainPage = function() {
		$scope.isMainPage = true;
		$scope.isAddPage = false;
		$scope.isDetailPage = false;
	}

	$scope.submitForm = function() {
		console.log($scope.candidateData);
	}
}])