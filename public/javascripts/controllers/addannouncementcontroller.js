payrollApp.controller('addannouncementController', function ($scope,$http,$location,$rootScope,$window) {
    console.log("In add announcement controller");
      this.announcement = {};
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
    this.announcement.aDate = formatDate($scope.date);
      this.addAnnouncement = function (){
         $http.post('/api/admin/insert/announcement', this.announcement).then(function (response) {
                console.log("Status from Signup api %d", response.status);

                if (response.status === 201) {
                    
                     $location.path('/allAnnouncements');
                }
            }).catch(function (error) {
                console.log(error);
            });
      };   
});