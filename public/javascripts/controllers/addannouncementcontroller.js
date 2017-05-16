payrollApp.controller('addannouncementController', function ($scope,$http,$location,$rootScope,$window) {
    console.log("In add announcement controller");
      this.announcement = {};
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