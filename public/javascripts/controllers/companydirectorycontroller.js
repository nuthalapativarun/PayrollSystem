payrollApp.controller('companyDirectoryController', function ($http, $window, $location, $scope) {

$http.get('/api/user/all/employees').then(function (response) {
		$scope.employees = response.data;
		console.log("201 Employees Response", $scope.employees);
	});
});
