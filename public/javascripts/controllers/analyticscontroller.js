payrollApp.controller('analyticsController', function ($scope, $http, $location, $rootScope, $window) {
    $scope.page = "analytics";
    $scope.depts = [
        { name: 'Devops 1' },
        { name: 'Engineering' },
        {name: 'Devops 2'}, 
        { name: 'Human Resources' }
    ];


    function monthName(dStr) {
        var d = new Date(dStr);
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        return monthNames[d.getMonth()];
    }
    $scope.update = function () {
        console.log("Dept name",$scope.deptName.name);

        $http.get('/api/admin/analytics/totalSalary/' + $scope.deptName.name).then(function (response) {
            console.log("REsponse from Total Salary Analytics", response);
            if (response.status === 200) {

                $scope.totalSalary = response.data;
                console.log("Total Salary", $scope.totalSalary);
                Highcharts.chart('lastPaychecks', {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Last Month Salary'
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
                            [monthName($scope.totalSalary["0"].date), Number($scope.totalSalary["0"].TotalSalary)]
                        ]
                    }]
                });

            }
        }).catch(function (error) {
            console.log(error);
        });
    }

});