var payrollApp = angular.module('payrollApp', ['ngRoute', 'angularRoutes', 'ngCookies', 'xeditable']);

payrollApp.controller('payrollController', function ($rootScope, $scope, $location) {
    $rootScope.isLoggedIn = localStorage.getItem("isLoggedIn");
    $scope.fullname = localStorage.getItem("fullName");
    $scope.signout = function () {
        localStorage.clear();
        localStorage.setItem("isLoggedIn", false);
        $rootScope.isLoggedIn = localStorage.getItem("isLoggedIn");
        $location.path("/login");
    }
});