payrollApp.controller('dashboardController', function ($http, $window, $location, $scope) {

	var vm = this;
	var todayDate = new Date();
	var dateFormat = formatDate(todayDate);
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

	function formatDay(date) {
		var d = new Date(date),
			month = '' + (d.getMonth() + 1),
			day = '' + d.getDate(),
			year = d.getFullYear();

		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;
		this.date = [year, Number(month), day - 7]
		return this.date;
	}

	var dayFormat = formatDay(todayDate);

	 	function dayName(dStr) {
		var d = new Date(dStr);
		var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

		return days[d.getDay()];
	}

	$scope.nextHoliday = "2017-05-29";
	$scope.timeOffDetails=[
		{
			date: "2017-04-28",
			reason: "Sick",
			hours: "8hr"

		}
	];
	$scope.announcements = [
		{
			aHeading: "Celebration of Sanketh's Birthday",
			aDate: "2017-08-31",
			aText: "We hope a Great Party"

		},
		{
			aHeading: "Server Maintanance",
			aDate: "2017-05-19",
			aText: "Our system will not be accessible because they'll be in maintanance on May 19th"

		}

	];

	$scope.projects=[
		{
			projName: "Android App",
			teamLead: "Sanketh Doddapaneni",
			client: "Full-stack RAT"

		},
		{
			projName: "Web App",
			teamLead: "Srinadh Krothapalli",
			client: "CareX"

		}

	];
	
});//end of dashboardController