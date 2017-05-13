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
});
