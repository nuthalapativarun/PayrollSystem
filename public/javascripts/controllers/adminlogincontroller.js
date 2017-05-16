payrollApp.controller('adminloginController', function ($scope, $http, $location, $rootScope, $window) {
    console.log("In admin login controller");
    $rootScope.isAdminLoggedIn = false;
    this.login = function () {
        console.log("Login function");
        if (this.email == "varun@gmail.com" && this.password == "Varun") {
            localStorage.setItem("isAdminLoggedIn", true);
            $rootScope.isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn");
            $location.path('/adminDashboard');
        }
        else {
            $scope.error = "Please enter correct details";
        }

    };
});