payrollApp.controller('loginController', function ($scope,$http,$location,$rootScope,$window) {
    console.log("In login controller");
    $rootScope.isLoggedIn = false;
    this.login = function () {
        console.log("Login function");
        if (this.email && this.password) {
            var user = {
                username: this.email,
                password: this.password
            };

            $http.get('/api/user/login/' + this.email + '/' + this.password).then(function (response) {
                console.log('Got status from Login Api', response.status);
                console.log("response in login",response.data[0]);
                if (response.status === 200) {
                    localStorage.setItem("isLoggedIn", true);
                    $rootScope.isLoggedIn = localStorage.getItem("isLoggedIn");
                    localStorage.setItem("empId", response.data[0].empID);
                    localStorage.setItem("fullName", response.data[0].fullname);
                    $location.path('/dashboard');
                }
                else if (response.status === 204) {
                    $scope.error = "Please enter correct details";
                }
            });
        }
       
    };
});