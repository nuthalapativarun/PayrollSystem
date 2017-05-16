payrollApp.controller('admindashboardController', function ($scope, $http, $location, $rootScope, $window) {

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


$http.get('/api/admin/lastmonth/emp').then(function (response) {
        $scope.employees = response.data;
        $scope.empLength = $scope.employees.length;
        console.log("201 Last 6 Employees Response", $scope.employees);
    });


    $http.get('/api/user/announcement').then(function (response) {
        $scope.announcements = response.data;
        console.log("201 Announcements Response", $scope.announcements);
    });

    $http.get('/api/user/holiday').then(function (response) {
        $scope.holiday = response.data["0"];
        console.log("201 Holidays Response", $scope.holiday);
        $scope.date = $scope.holiday.hDate;
        $scope.monthName = monthName($scope.date);
        var dat = formatDay($scope.date);
        $scope.holidayDay = dayDate($scope.date);
        $scope.dayName = dayName($scope.date);
        var oneDay = 24 * 60 * 60 * 1000;
        var firstDate = new Date();
        var secondDate = new Date(dat[0], dat[1] - 1, dat[2]);

        $scope.diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
        console.log("DIff", $scope.diffDays);
    });

    $http.get('/api/user/nextPay/' + $scope.empId).then(function (response) {
        // $scope.nextPayDay = response.data["0"];
        // console.log("201 Next Paycheck Day Response", $scope.nextPayDay, response);
        $scope.Nextpaycheckdate = "2017-05-31";
        $scope.NextmonthName = monthName($scope.Nextpaycheckdate);
        $scope.Nextpaydate = dayDate($scope.Nextpaycheckdate);
        $scope.NextdayName = dayName($scope.Nextpaycheckdate);
        console.log("Next paychecks Dates,", $scope.NextmonthName)
        var dat = formatDay($scope.Nextpaycheckdate);
        console.log("NExt pay Date", dat);
        var oneDay = 24 * 60 * 60 * 1000;
        var firstDate = new Date();
        var secondDate = new Date(dat[0], dat[1] - 1, dat[2]);

        $scope.nextdiffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
        console.log("Next DIff", $scope.nextdiffDays);
    });

    $http.get('/api/admin/lastPayDate').then(function (response) {
        $scope.LastPayDay = response.data["0"];
        console.log("201 Last Paycheck Day Response", $scope.LastPayDay);
        $scope.Lastpaycheckdate = $scope.LastPayDay.date;
        $scope.LastmonthName = monthName($scope.Lastpaycheckdate);
        $scope.Lastpaydate = dayDate($scope.Lastpaycheckdate);
        $scope.LastdayName = dayName($scope.Lastpaycheckdate);
        console.log("Last paychecks Dates,", $scope.LastmonthName)
        var dat = formatDay($scope.Lastpaycheckdate);
        console.log("Last pay Date", dat);
        var oneDay = 24 * 60 * 60 * 1000;
        var firstDate = new Date();
        var secondDate = new Date(dat[0], dat[1] - 1, dat[2]);

        $scope.LastdiffDays = Math.round(Math.abs((secondDate.getTime() - firstDate.getTime()) / (oneDay)));
        console.log("DIff", $scope.LastdiffDays);
    });

});