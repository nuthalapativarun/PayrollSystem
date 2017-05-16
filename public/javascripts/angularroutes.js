angular.module('angularRoutes', ['ngRoute']).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider
        .when('/login', {
            templateUrl: '../views/login.html',
            controller: 'loginController',
            controllerAs: 'ctrl'
        })

        .when('/signup', {
            templateUrl: '../views/signup.html',
            controller: 'signupController',
            controllerAs: 'ctrl'
        })
        .when('/adminLogin', {
            templateUrl: '../views/adminLogin.html',
            controller: 'adminloginController',
            controllerAs: 'ctrl'
        })
        .when('/addEmployee', {
            templateUrl: '../views/addEmployee.html',
            controller: 'addemployeeController',
            controllerAs: 'ctrl'
        })
        .when('/addAnnouncement', {
            templateUrl: '../views/addAnnouncement.html',
            controller: 'addannouncementController',
            controllerAs: 'ctrl'
        })
        .when('/adminDashboard', {
            templateUrl: '../views/adminDashboard.html',
            controller: 'admindashboardController',
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
        .when('/releasePay', {
            templateUrl: '../views/releasepay.html',
            controller: 'releasePayController'
        })
        .when('/analytics', {
            templateUrl: '../views/analytics.html',
            controller: 'analyticsController'
        })

        .otherwise({
            redirectTo: '/dashboard'
        });
    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);
}]);