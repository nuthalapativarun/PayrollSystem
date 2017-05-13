var payrollApp = angular.module('payrollApp', ['ngRoute', 'angularRoutes', 'ngCookies', 'xeditable']);

payrollApp.controller('getfitController', function ($rootScope, $scope, $location) {
    $rootScope.isLoggedIn = localStorage.getItem("isLoggedIn");
    $scope.signout = function () {
        if ($rootScope.isLoggedIn) {
            localStorage.clear();
            localStorage.setItem("isLoggedIn", false);
            $rootScope.isLoggedIn = localStorage.getItem("isLoggedIn");
            $location.path("/login");
        }
        if ($rootScope.isDoctorLoggedIn) {
            localStorage.clear();
            localStorage.setItem("isDoctorLoggedIn", false);
            $rootScope.isDoctorLoggedIn = localStorage.getItem("isDoctorLoggedIn");
            $location.path("/doctorLogin");
        }
    };
});