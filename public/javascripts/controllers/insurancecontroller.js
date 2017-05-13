payrollApp.controller('insuranceController', function ($http, $window, $location, $scope) {
    $scope.insurance= {
        insCompanyName: "Aetna",
        monthlyPayment: "300"
    };
    $scope.empName = "Daniel Craig"; 

    $scope.dependents = [
        {
        name: "Sarah",
        relation: "Wife"
    }
    ];
});
