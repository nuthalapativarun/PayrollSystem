payrollApp.controller('holidaycalendarController', function ($http, $window, $location, $scope) {

    $scope.holidays=[
        {
            date: "2017-04-31",
            name: "Halloween"
        },
        {
            date: "2017-05-29",
            name: "Memorial Day"
        },
        {
            date: "2017-12-25",
            name: "Christmas"
        },
    ];
});