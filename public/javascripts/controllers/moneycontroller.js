payrollApp.controller('moneyController', function ($http, $window, $location, $scope) {
    $scope.lastPaycheck = {
        preTax: "1000",
        postTax: "700",
        taxDeducted: "300"
    };

    $scope.paychecks = [
        {
            date: "2017-03-15",
            amount:"1000"
        },
        {
            date: "2017-03-31",
            amount:"1000"
        },
        {
            date: "2017-04-15",
            amount:"1000"
        },
        {
            date: "2017-04-31",
            amount:"1000"
        },
        {
            date: "2017-05-15",
            amount:"1000"
        },
        {
            date: "2017-05-31",
            amount:"1000"
        },
    ];
});