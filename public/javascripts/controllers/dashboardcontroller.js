payrollApp.controller('dashboardController', function ($http, $window, $location, $scope) {
	$scope.empId = localStorage.getItem("empId") || 'e1';
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
		this.date = [year, Number(month), Number(day) + 3]
		return this.date;
	}

	var dayFormat = formatDay(todayDate);

	function dayName(dStr) {
		var d = new Date(dStr);
		var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

		return days[d.getDay()];
	}

	function monthName(dStr) {
		var d = new Date(dStr);
		var monthNames = ["January", "February", "March", "April", "May", "June",
			"July", "August", "September", "October", "November", "December"
		];
		return monthNames[d.getMonth()];
	}

    function dayDate(dStr) {
        var d = new Date(dStr);
        return d.getDate() + 1;
    }


	$http.get('/api/user/announcement').then(function (response) {
		$scope.announcements = response.data;
		console.log("201 Announcements Response", $scope.announcements);
	});


	$http.get('/api/user/viewProjects/' + $scope.empId).then(function (response) {
		$scope.projects = response.data;
		console.log("201 Projects Response", $scope.projects);
	});


	$http.get('/api/user/holiday').then(function (response) {
		$scope.holiday = response.data["0"];
		console.log("201 Holidays Response", $scope.holiday);
		$scope.date = $scope.holiday.hDate;
		$scope.monthName = monthName($scope.date);
		var dat = formatDay($scope.date);
		$scope.holidayDay = dayDate($scope.date);
		var oneDay = 24 * 60 * 60 * 1000;
		var firstDate = new Date();
		var secondDate = new Date(dat[0], dat[1] - 1, dat[2]);

		$scope.diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
		console.log("DIff", $scope.diffDays);
	});


	$http.get('/api/user/all/leaveDetails/' + $scope.empId).then(function (response) {
		$scope.leaveDetails = response.data;
		console.log("201 Leave Response", $scope.leaveDetails);
	});

	$http.get('/api/user/profile/' + $scope.empId).then(function (response) {
		$scope.profile = response.data["0"];
		console.log("201 profile Response", $scope.profile);
		$scope.leavesPercentageLeft = Number($scope.profile.leavesLeft) / Number($scope.profile.paidLeaves);
		console.log("Per left", $scope.leavesPercentageLeft);

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

		bar.animate($scope.leavesPercentageLeft);
	});

});//end of dashboardController