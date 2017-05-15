payrollApp.controller('requestLeaveController', function ($http, $window, $location, $scope) {
    $scope.empId = localStorage.getItem("empId");
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
    $scope.requestLeave = function () {

        if ($scope.date && $scope.reason && $scope.hours && $scope.empId){
            var leaveRequest = {
                "date": formatDate($scope.date),
                "reason": $scope.reason,
                "hours": $scope.hours,
                "empID": $scope.empId
            }
            console.log("Leave Request:", leaveRequest);

            $http.post('/api/user/insert/leave', leaveRequest).then(function (response) {
                   console.log("REsponse from leaveRequest", response);
                if (response.status === 201) {
                    
                    $http.post('/api/user/update/leave', leaveRequest).then(function (response) {
                        if (response.status === 201) {
                            $location.path('/dashboard')
                        }
                    })
                    
                }
            }).catch(function (error) {
                console.log(error);
            });
        }

    }


});