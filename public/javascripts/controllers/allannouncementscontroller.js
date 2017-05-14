payrollApp.controller('allAnnouncementsController', function ($http, $window, $location, $scope) {
    $http.get('/api/user/all/announcements').then(function(response){
		$scope.announcements = response.data;
		console.log("Response", $scope.announcements);
	});

});