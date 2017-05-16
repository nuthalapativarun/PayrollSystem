payrollApp.controller('addemployeeController', function ($scope,$http,$location,$rootScope,$window) {
    console.log("In admin dashboard controller");

   this.user = {};
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
    this.user.dob = formatDate($scope.dob);
    this.user.serviceDate = formatDate($scope.joiningDate);
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

    this.addEmployee = function(){
        console.log(this.user);
    }
};
});