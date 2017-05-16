payrollApp.controller('holidaycalendarController', function ($http, $window, $location, $scope) {
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

  $http.get('/api/user/all/holidays').then(function (response) {
    $scope.holidays = response.data;
    console.log("201 Holidays Response", $scope.holidays);
  });


});