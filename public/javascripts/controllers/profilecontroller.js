payrollApp.controller('profileController', function ($http, $window, $location, $scope) {

	$scope.empId = localStorage.getItem("empId") || 'e1';

	$http.get('/api/user/profile/' + $scope.empId).then(function (response) {
		$scope.profile = response.data["0"];
        console.log("201 profile Response", $scope.profile);
	});


});