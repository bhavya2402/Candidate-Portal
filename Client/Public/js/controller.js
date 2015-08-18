var app = angular.module('myApp', []);
app.controller('MainContrller', ['$scope', '$http', function($scope, $http){
	$scope.isMainPage = true;
	$scope.isAddPage = false;
	$scope.isDetailPage = false;
	$scope.orderCandidateList = "id";
	$scope.candidateDetailList = [];
	$scope.userDetail = {};
	$scope.isUpdate = false;
	   
	$scope.showAddForm = function() {
		$scope.isMainPage = false;
		$scope.isAddPage = true;
		$scope.isDetailPage = false;
	}

	$scope.showDetails = function(candidate) {
		$scope.isMainPage = false;
		$scope.isAddPage = false;
		$scope.isDetailPage = true;

		$scope.userDetail = candidate;

	}

	$scope.goMainPage = function() {
		$scope.isMainPage = true;
		$scope.isAddPage = false;
		$scope.isDetailPage = false;
	}

	$scope.showFormPage= function(candidate) {
		$scope.isMainPage = false;
		$scope.isAddPage = true;
		$scope.isDetailPage = false;
		$scope.isUpdate = true;
		$scope.candidateData = $scope.userDetail;
	}

	$scope.updateForm = function(candidateData) {
        $http({
            method: 'PUT',
            url: '/updateCandidate/' + candidateData._id,
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
	};
 
 	$scope.deleteCandidate = function(candidate) {
		$http({
            method: 'DELETE',
            url: '/deleteCandidate/' + candidate._id,
            data: candidate,
            headers: {'Content-Type': 'application/json'}

        })
        .success(function(res) {
            console.log(res);
            window.location.reload(true);
        })
        .error(function(err) {
            console.log(err);
        });
	}
     
	$scope.submitForm = function(candidateData) {
        $http({
            method: 'POST',
            url: '/addCandidate',
            data: candidateData,
            headers: {'Content-Type': 'application/json'}

        })
        .success(function(res) {
            window.alert("Your Details are successfully Submitted");
            window.location.reload(true);
        })
        .error(function(err) {
            console.log(err);
        });
       
        $scope.candidateData = {};
	};

	$scope.fetchDetails = function(){
		 $http.get('/getData')
	    .success(function(response) {
	         console.log(response);
	        $scope.candidateDetailList = response;	         
	     })
	    .error(function(response) {
	        console.log(response);
	     });
	};

	$scope.fetchDetails();
  
}]);