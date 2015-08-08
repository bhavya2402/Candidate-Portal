
var app = angular.module('myApp', []);
app.controller('MainContrller', ['$scope', '$http', function($scope, $http){
	$scope.isMainPage = true;
	$scope.isAddPage = false;
	$scope.isDetailPage = false;
	$scope.orderCandidateList = "id"
	   
	$scope.candidateDetailList = [
       //  {   'id': 'bhavya1',
       //  	'email': "bhavyasinha1@gmail.com",
       //  	'mobile': 9740511768,
       //      'firstName': 'Bhavya',
       //      'lastName': "Sinha"
       //  },

       //  {   'id': 'ojas',
       //  	'email': "shrishojas2@gmail.com",
       //  	'mobile': 123456789,
       //      'firstName': "Shrish",
       //      'lastName': "Ojas"},
            
       //  {   'id': 'goldi',
       //  	'email': "goldisingh3@gmail.com",
       //  	'mobile': 9000000000,
       //      'firstName': 'Goldi',
       //      'lastName': "Singh"},

       //  {   'id': 'rinnet',
       //  	'email': "rinnetfrancis4@gmail.com",
       //  	'mobile': 911111111,
       //      'firstName': 'Rinnet',
       //      'lastName': "Francis"}, 

       // {   'id': 'rahul',
       //  	'email': "rahulkumar5@gmail.com",
       //  	'mobile': 922332233,
       //      'firstName': 'Rahul',
       //      'lastName': "Kumar"},

       // {   'id': 'shloka',
       //  	'email': "shlokasinha6@gmail.com",
       //  	'mobile': 9876567898,
       //      'firstName': 'Shloka',
       //      'lastName': "Sinha"}      	
        ];

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

	$scope.showFormPage= function() {
		$scope.isMainPage = false;
		$scope.isAddPage = true;
		$scope.isDetailPage = false;
	}

	$scope.submitForm = function(candidateData) {
		// console.log($scope.candidateData);
        $http({
            method: 'POST',
            url: 'http://localhost:8080/addCandidate',
            data: candidateData,
            headers: {'Content-Type': 'application/json'}

        })
        .success(function() {
            console.log('frontend');
        })
        .error(function(err) {
            console.log(err);
        });

        $scope.candidateData = {};

	}
}])