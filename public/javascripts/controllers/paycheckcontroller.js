payrollApp.controller('paycheckController', function ($scope, $http, $location, $rootScope, $window) {
    $scope.page = "paycheck";
    $scope.date = "";
     $scope.success = false;
    $scope.update = function () {
        console.log("Clicked", $scope.date);

        var paydate = {
            "date": $scope.date
        };
        console.log("Salary Date", paydate);
        $http.post('/api/admin/insert/paycheck', paydate).then(function (response) {
            console.log("REsponse from Paycheck Insert", response);
            if (response.status === 201) {
                $scope.success = true;
                $scope.successText = "Successfully Released Paychecks";

            }
        }).catch(function (error) {
            console.log(error);
        });

    }
});