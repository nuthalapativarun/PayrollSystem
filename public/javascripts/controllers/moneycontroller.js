payrollApp.controller('moneyController', function ($http, $window, $location, $scope) {
    $scope.lastPaycheck = {
        preTax: "1000",
        postTax: "700",
        taxDeducted: "300"
    };

    $scope.paychecks = [
        {
            date: "2017-03-15",
            amount: "1000"
        },
        {
            date: "2017-03-31",
            amount: "1000"
        },
        {
            date: "2017-04-15",
            amount: "1000"
        }
    ];
    console.log($scope.paychecks);
    Highcharts.chart('calories', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Last 3 Paychecks'
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
                [0, Number($scope.paychecks[0].amount)],
                [2, Number($scope.paychecks[1].amount)],
                [4, Number($scope.paychecks[0].amount)]
            ]
        }]
    });
    
    Morris.Donut({
        element: 'paycheck',
        data: [

            { label: "Tax amount", value: $scope.lastPaycheck.taxDeducted },
            { label: "Paycheck amount", value: $scope.lastPaycheck.postTax }
        ],
        colors: ['#FF3232', '#76C2AF'],
        resize: true
    });
});