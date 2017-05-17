var payrollApp = angular.module('payrollApp', ['ngRoute', 'angularRoutes', 'ngCookies', 'xeditable']);

payrollApp.controller('payrollController', function ($rootScope, $scope, $location) {
    $rootScope.isLoggedIn = localStorage.getItem("isLoggedIn");
    $scope.fullname = localStorage.getItem("fullName");
    $scope.signout = function () {
        localStorage.clear();
        localStorage.setItem("isLoggedIn", false);
        localStorage.setItem("isAdminLoggedIn", false);
        $rootScope.isLoggedIn = localStorage.getItem("isLoggedIn");
        $rootScope.isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn");
        $location.path("/login");
    }
});