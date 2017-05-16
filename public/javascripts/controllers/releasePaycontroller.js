payrollApp.controller('releasePayController', function ($scope, $http, $location, $rootScope, $window) {

    $scope.success = false;
    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        this.date = [year, month, day].join('-');
        return this.date;
    }

    $scope.submitPay = function () {
        console.log("clicked",$scope.releasedate);

            var paydate = {
                "date": formatDate($scope.date)
            }
            console.log("Salary Date", paydate );
            // $http.post('/api/admin/insert/paycheck', paydate).then(function (response) {
            //     console.log("REsponse from Paycheck Insert", response);
            //     if (response.status === 201) {
            //         $scope.success = true;
            //         $scope.successText = "Successfully Released Paychecks";

            //     }
            // }).catch(function (error) {
            //     console.log(error);
            // });
        }
});