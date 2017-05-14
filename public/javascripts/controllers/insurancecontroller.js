payrollApp.controller('insuranceController', function ($http, $window, $location, $scope) {

    $scope.empId = localStorage.getItem("empId") || 'e1';
    $http.get('/api/user/insurance/' + $scope.empId).then(function (response) {
        $scope.insurance = response.data;
        console.log("201 Insurance Response", $scope.insurance);
    });
    
    $http.get('/api/user/dependent/' + $scope.empId).then(function (response) {
        $scope.dependents = response.data;
        console.log("201 Dependents Response", $scope.dependents);
    });

    $scope.insurance = {
        insCompanyName: "Aetna",
        monthlyPayment: "300"
    };
    $scope.empName = "Daniel Craig";

});
