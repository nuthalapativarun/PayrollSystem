angular.module('angularRoutes', ['ngRoute']).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider
        .when('/login', {
            templateUrl: '../views/login.html',
            controller: 'loginController',
            controllerAs: 'ctrl'
        })
        .when('/dashboard', {
            templateUrl: '../views/dashboard.html',
            controller: 'dashboardController'
        })
        .when('/money', {
            templateUrl: '../views/money.html',
            controller: 'moneyController'
        })
        .when('/insurance', {
            templateUrl: '../views/insurance.html',
            controller: 'insuranceController'
        })
        .when('/holidayCalendar', {
            templateUrl: '../views/holidayCalendar.html',
            controller: 'holidaycalendarController'
        })
        .when('/companyDirectory', {
            templateUrl: '../views/companyDirectory.html',
            controller: 'companyDirectoryController'
        })
        .when('/contacUs', {
            templateUrl: '../views/contactus.html',
            controller: 'contactusController'
        })
        .when('/allAnnouncements', {
            templateUrl: '../views/allAnnouncements.html',
            controller: 'allAnnouncementsController'
        })
        .when('/profile', {
            templateUrl: '../views/profile.html',
            controller: 'profileController'
        })
         .when('/requestLeave', {
            templateUrl: '../views/requestLeave.html',
            controller: 'requestLeaveController'
        })

        .otherwise({
            redirectTo: '/dashboard'
        });
    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);
}]);