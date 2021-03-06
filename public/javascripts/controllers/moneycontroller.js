payrollApp.controller('moneyController', function ($http, $window, $location, $scope) {
    $scope.empId = localStorage.getItem("empId") || 'e1';

    function formatDay(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        this.date = [year, Number(month), Number(day) + 2]
        return this.date;
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

    function dayName(dStr) {
        var d = new Date(dStr);
        var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

        return days[d.getDay()];
    }


     $http.get('/api/user/lastPay/' + $scope.empId).then(function (response) {
        $scope.lastPaycheck = response.data["0"];
        console.log("201 lastPaycheck Response", $scope.lastPaycheck);
        $scope.tax = Number($scope.lastPaycheck.federalTax)+ Number($scope.lastPaycheck.stateTax) + Number($scope.lastPaycheck.localTax);
        $scope.taxDeducted = (Number($scope.lastPaycheck.amountPaid) * Number($scope.tax))/100;
        console.log("Tax deducted", $scope.taxDeducted);
        $scope.postTax = $scope.lastPaycheck.amountPaid - $scope.taxDeducted;

        Morris.Donut({
        element: 'paycheck',
        data: [

            { label: "Tax amount", value: $scope.taxDeducted },
            { label: "Paycheck amount", value: $scope.postTax }
        ],
        colors: ['#FF3232', '#33FF77'],
        resize: true
    });
     });

    $http.get('/api/user/nextPay/' + $scope.empId).then(function (response) {
        // $scope.nextPayDay = response.data["0"];
        // console.log("201 Next Paycheck Day Response", $scope.nextPayDay);
        $scope.paycheckdate = "2017-05-31";
        $scope.monthName = monthName($scope.paycheckdate);
        $scope.paydate = dayDate($scope.paycheckdate);
        $scope.dayName = dayName($scope.paycheckdate);
        console.log("Dates,", $scope.monthName)
        var dat = formatDay($scope.paycheckdate);
        console.log("Date", dat);
        var oneDay = 24 * 60 * 60 * 1000;
        var firstDate = new Date();
        var secondDate = new Date(dat[0], dat[1] - 1, dat[2]);

        $scope.diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
        console.log("DIff", $scope.diffDays);
    });

    $http.get('/api/user/all/previousPay/' + $scope.empId).then(function (response) {
        $scope.paychecks = response.data;
        console.log("201 Last paychecks Response", $scope.paychecks);

        Highcharts.chart('lastPaychecks', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Last 4 Paychecks'
            },
            subtitle: {
                text: 'Monthly Data'
            },
            xAxis: {
                type: 'category',
                labels: {
                    rotation: -45,
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Amount'
                }
            },
            legend: {
                enabled: true
            },
            series: [{
                name: 'Months',
                data: [
                    [monthName($scope.paychecks[0].date), Number($scope.paychecks[0].amountPaid)],
                    [monthName($scope.paychecks[1].date), Number($scope.paychecks[1].amountPaid)],
                    [monthName($scope.paychecks[2].date), Number($scope.paychecks[2].amountPaid)],
                    [monthName($scope.paychecks[3].date), Number($scope.paychecks[3].amountPaid)]
                ]
            }]
        });
    });



});