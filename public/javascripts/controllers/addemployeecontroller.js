payrollApp.controller('addemployeeController', function ($scope,$http,$location,$rootScope,$window) {
    console.log("In admin dashboard controller");
   this.user = {};
    this.addEmployee = function(){
         
        this.user.paidLeaves = 160;
        this.user.leavesLeft = 160;
        console.log(this.user);
        $http.post('/api/admin/insert/emp', this.user).then(function (response) {
                console.log("Status from Signup api %d", response.status);

                if (response.status === 201) {
                    
                     $location.path('/companyDirectory');
                }
            }).catch(function (error) {
                console.log(error);
            });
    }
});