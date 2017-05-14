payrollApp.controller('contactusController', function ($http, $window, $location, $scope) {
    $scope.contacts = [
        {
        cDeptName: "Human Resources",
        cName: "Martha Palm",
        cEmail: "martha.palm@hrservices.com",
        cPhone: "5106797998"
    },
    {
        cDeptName: "Payroll Services",
        cName: "Sarah Russel",
        cEmail: "sarah.russel@hrservices.com",
        cPhone: "3106797998"
    }
    ];

    $http.get('/api/user/contactus').then(function (response) {
		$scope.contacts = response.data;
		console.log("201 Holidays Response", $scope.contacts);
	});
});
