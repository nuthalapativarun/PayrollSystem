payrollApp.controller('adminloginController', function ($scope,$http,$location,$rootScope,$window) {
    console.log("In admin login controller");
    $rootScope.isLoggedIn = false;
    this.login = function () {
        console.log("Login function");
        if (this.email && this.password) {
            var user = {
                username: this.email,
                password: this.password
            };

            $http.get('/api/admin/login/' + this.email + '/' + this.password).then(function (response) {
                console.log('Got status from Login Api', response.status);
                console.log("response in login",response.data[0]);
                if (response.status === 200) {
                    localStorage.setItem("isAdminLoggedIn", true);
                    $rootScope.isLoggedIn = localStorage.getItem("isAdminLoggedIn");
                    $location.path('/adminDashboard');
                }
                else if (response.status === 204) {
                    $scope.error = "Please enter correct details";
                }
            });
        }
       
    };
});