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

	var bar = new ProgressBar.Circle(donut, {
		color: '#00FF7F',
		// This has to be the same size as the maximum width to
		// prevent clipping
		strokeWidth: 4,
		trailWidth: 1,
		easing: 'easeInOut',
		duration: 1400,
		text: {
			autoStyleContainer: false
		},
		from: { color: '#00FF7F', width: 4 },
		to: { color: '#00FF7F', width: 4 },
		// Set default step function for all animate calls
		step: function (state, circle) {
			circle.path.setAttribute('stroke', state.color);
			circle.path.setAttribute('stroke-width', state.width);

			var value = Math.round(circle.value() * 100);
			if (value === 0) {
				circle.setText('');
			} else {
				circle.setText(value + "%");
			}

		}
	});
	bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
	bar.text.style.fontSize = '2rem';

	bar.animate(0.3);

	$scope.nextHoliday = "2017-05-29";
	$scope.timeOffDetails = [
		{
			date: "2017-04-28",
			reason: "Sick",
			hours: "8hr"

		}
	];
	$scope.announcements = [
		{
			aHeading: "Server Maintanance",
			aDate: "2017-05-19",
			aText: "Our system will not be accessible because they'll be in maintanance on May 19th",
			imgUrl: '../../images/icons/maintainance.png'
		},
		{
			aHeading: "Celebration of Varun's Birthday",
			aDate: "2017-03-18",
			aText: "Let's make it count",
			imgUrl: '../../images/icons/birthday.png'

		},
		{
			aHeading: "Celebration of Sanketh's Birthday",
			aDate: "2017-08-31",
			aText: "We hope a Great Party",
			imgUrl: '../../images/icons/birthday.png'

		},
		{
			aHeading: "WebApp Release",
			aDate: "2017-09-19",
			aText: "Deadline for WebApp release",
			imgUrl: '../../images/icons/release.png'

		}
		

	];

	$scope.projects = [
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